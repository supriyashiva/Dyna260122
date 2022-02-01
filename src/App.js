import Signin from "./pages/singin/Signin";
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { auth } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      {user ? <Home /> : <Signin />}
    </div>
  );
}

export default App;

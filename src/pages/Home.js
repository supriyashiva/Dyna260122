import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard1 from "./dashboard/Dashboard1";
import Devices from "./Devices";
import User from "./Users";
import Entity from "./Entity";
import Reports from "./Reports";

import CreateEntityForm from "./CreateEntityForm";
import CreateDeviceForm from "./CreateDeviceForm";
import CreateUserForm from "./CreateUserForm";
import Layout from "../components/Layout";

import CreateReportform from "./CreateReportform";

import DialogApp from "../components/DialogApp";

function Home() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Dashboard1 />
          </Route>
          <Route path="/devices">
            <Devices />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/entity">
            <Entity />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/cdf">
            <CreateDeviceForm />
          </Route>

          <Route path="/CreateUserForm">
            <CreateUserForm />
          </Route>
          <Route path="/CreateEntityForm">
            <CreateEntityForm />
          </Route>
          <Route path="/CreateReportform">
            <CreateReportform />
          </Route>
          <Route path="/dialog">
            <DialogApp />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default Home;

import React, { Component, useState, useEffect } from "react";
//import "./App.css";
import MUIDataTable from "mui-datatables";
import db from "../../firebase";
import closestIndexTo from "date-fns/closestIndexTo";

// class App extends Component {

//   render() {
function App() {
  const columns = [
    "ClientId",
    "ClientName",
    "Clientcontact",
    "DateOfBirth",
    "Emailid",
    "Fathername",
    "HusbandName",
    "PermanentAdd",
    "PresentAdd",
    "brieffacts",
  ];
  const [info, setInfo] = useState([]);
  var a1 = [];
  var a2 = [];
  useEffect(() => {
    var results=[];
    db.collection("ClientMaster")
      .get()
      .then((Snapshot) => {
        //
        Snapshot.docs.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          //results = JSON.parse(data).map((d) => d[1]); //Object.keys(data).map((key) => data[key]);
          const results1 = Object.entries(data); // => [data[keys]]);

          results1.forEach(([key, value]) => {
            switch (key) {
              case "ClientId":
                results[0] = value;
                break;
              case "ClientName":
                results[1] = value;
                break;
              case "Clientcontact":
                results[2] = value;
                break;
              case "DateOfBirth":
                results[3] = value;
                break;
              case "Emailid":
                results[4] = value;
                break;
              case "Fathername":
                results[5] = value;
                break;
              case "HusbandName":
                results[6] = value;
                break;
              case "PermanentAdd":
                results[7] = value;
                break;
              case "PresentAdd":
                results[8] = value;
                break;
              case "brieffacts":
                results[9] = value;
                break;
            }
            // console.log(key); // 'one'
            // console.log(value); // 1
          });
          a1 = Array.from(results); //slice();
          a2.push(a1);
          console.log(results);
          // // const merged = Array.prototype.concat.apply([], data);
          // // console.log(merged);
          console.log(a2);
          // setInfo(a2);
        });
        setInfo(a2);
      });
  }, []);
  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
    rowsPerPage: [3],
    rowsPerPageOptions: [1, 3, 5, 6],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF",
      },
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };

  // const options = {
  //   filterType: "checkbox",
  // };

  return (
    <div className="App wrapper">
      {/* <h4>React MUI Datatable - FreakyJolly.com</h4> */}

      <MUIDataTable
        title={"Client List"}
        data={info}
        columns={columns}
        options={options}
      />
    </div>
  );
}
// }
export default App;

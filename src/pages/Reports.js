import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import db from "../firebase";
//import EntityCard from "../components/EntityCard";
function Reports() {
  const history = useHistory();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    db.collection("report")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  }, []);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this record")) {
      alert(id);
      db.collection("report")
        .where("iName", "==", id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        });
    }
    const newEntity = info.filter((note) => note.iName !== id);
    setInfo(newEntity);
  };

  return (
    <>
      <Container maxWidth="lg">
        <h1>Payment Page</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              onClick={() => history.push("/CreateReportform")}
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Create Payment
            </Button>
          </Grid>
          {/* {info.map(item => (
                        <Grid item xs={12} md={6} lg={4} key={info.iName}>
                            <EntityCard data={item} handleDelete={handleDelete}/>
                        </Grid>
                    ))} */}
        </Grid>
      </Container>
    </>
  );
}
export default Reports;

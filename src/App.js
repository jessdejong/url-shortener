import React, { useState, useEffect, useRef } from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function App() {
  const [currentTime, setTime] = useState("");
  const [currentTimes, setTimes] = useState(null);
  // Ensures that data fetching only happens once.
  const dataFetchedRef = useRef(false);

  const fetchData = () => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setTime(data.time);
        setTimes(data.times);
      });
  };

  // Retrieve time data from the Flask API.
  useEffect(() => {
    if (dataFetchedRef.current) return;
    fetchData();
    dataFetchedRef.current = true;
  }, []);

  // Display the times using Material UI components.
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h3">My simple web application.</Typography>
      </Grid>
      <Grid item xs={12}>
        {currentTimes ? (
          <Card variant="outlined">
            <List>
              {currentTimes.map((element) => {
                return (
                  <ListItem>
                    <Typography>{element.timestamp}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Card>
        ) : null}
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5">
          The current day of the week is{" "}
          {convertDateTimeToDayOfWeek(currentTime)}.
        </Typography>
      </Grid>
    </Grid>
  );
}

function convertDateTimeToDayOfWeek(time) {
  let dayAbbreviation = time.split(",")[0];
  return dayAbbreviation;
}

export default App;

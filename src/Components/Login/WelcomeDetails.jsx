import { Divider, Grid, Typography } from "@mui/material";

import React from "react";

const WelcomeDetails = ({ seatMode, ppsNo }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3" color={"white"}>
          {"Welcome to "}
        </Typography>
        <Typography variant="h1" sx={{ color: "white", fontWeight: 500 }}>
          <p>
            GreyMatter <br></br> Operator <br></br> Interface <br></br>
          </p>
        </Typography>
        <Divider orientation="horizontal" sx={{ border: "1px solid #fff", marginTop: "1em" }} />
      </Grid>
      <Grid container xs={12} marginTop="1em">
        <Grid item xs={6}>
          <Typography variant="h1" color={"white"}>
            {seatMode}
          </Typography>
        </Grid>
        <Grid container xs={6}>
          <Grid item xs={12}>
            <Typography variant="h3" color={"white"}>
              {"PPS No."}
            </Typography>
          </Grid>
          <Grid item xs={12} marginLeft="4em">
            <Typography color={"white"} sx={{ fontSize: "14em", fontWeight: 600, lineHeight: 0.7 }}>
              {ppsNo}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default WelcomeDetails;

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Layout from "./layout";

// const title = {
//   fontSize: "1em",
//   marginBottom: "6px",
//   whiteSpace: "pre-wrap",
//   wordWrap: "break-word",
// };

export default function Project(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        //img src={Icon} // change to wherever we're getting images
        img
        src={props.image}
        alt="img"
        style={{ height: "140" }}
      />
      <CardActions>
        <Button size="small">{props.title}</Button>
      </CardActions>
    </Card>
  );
}

// Card component to hold the people information

import React from "react";

const card = {
  background: "rgba(0, 0, 0, 0)",
  borderRadius: "1%",
  padding: "1%",
  width: "75%",
  height: "15%",
  margin: "1%",
  float: "left",
};


const role = {
  fontFamily: "Roboto",
  fontWeight: "100",
  fontSize: "1.2vw",
  color: "#fff",
  margin: 1,
};

const pfp = {
  height: "100%",
  width: "100%",
  paddingBottom: "1%"
}

function PeopleCard(props) {
  return (
    <div style={card}>
      <img style={ pfp } src={props.img} alt={props.alt}></img>
      <h3 style={role}> {props.name} </h3>
      <h3 style={role}> {props.role} </h3>
    </div>
  );
}

PeopleCard.defaultProps = {
  name: "Default name",
  img: "https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  alt: "No alt has been added to this image",
};

export default PeopleCard;

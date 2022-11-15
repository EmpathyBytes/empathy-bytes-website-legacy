// Card component to hold the people information

import React from "react";

const cardContainer = {
    display: "block",
}

const card = {
    background: "#fff",
    borderRadius: "1%",
    boxShadow: "0 2px 5px #ccc",
    padding: "1%",
    width: "15vw",
    height: "7.5vw",
    margin: "1%",
    float: "left",
}

const name = {
    fontFamily: "Roboto",
    fontSize: "1.7vw",
    marginBottom: "1%"
}

const role = {
    fontFamily: "Roboto",
    fontSize: "0.9vw",
    marginBottom: "1%",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
}

function PeopleCard(props) {

    return (
        <div style= { card }>
            <h1 style= {name}> { props.name } </h1>
            <img src= { props.img }></img>
            <h3 style={ role }> { props.role } </h3>
        </div>
    )
}

export default PeopleCard;
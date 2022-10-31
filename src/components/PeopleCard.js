// Card component to hold the people information

import React from "react";

const cardContainer = {
    display: "block",
}

const card = {
    background: "#fff",
    borderRadius: "7px",
    boxShadow: "0 2px 5px #ccc",
    padding: "10px",
    width: "240px",
    margin: "16px",
    float: "left",
}

const name = {
    fontFamily: "Montserrat",
    fontSize: "2em",
    marginBottom: "6px"
}

const role = {
    fontSize: "1em",
    marginBottom: "6px",
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
import * as React from "react";
import { Link } from "gatsby";
import heroImage from "../images/empathy-bytes-2.jpeg";

const mastHeadStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    width: "100vw",
    height: "100vh",
};

const headingStyle = {
    paddingTop: 150,
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const roundedBorder = {
    border: '2px solid #B3A369',
    backgroundColor: '#B3A369',
    borderRadius: '8px',
    fontWeight: 'bold',
    padding: '8px',
}

const Hero = () => {
    return (
        <div style={mastHeadStyle}>
            <h1 style={headingStyle}>Empathy Bytes</h1>
            <h2>Employing immersive tech to enable people to understand new perspectives</h2>
            <button style={roundedBorder}>Learn More</button>
        </div>
    )
}

export default Hero;
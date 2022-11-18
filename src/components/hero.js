import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const mastHeadStyle = {
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
};

const headingStyle = {
  fontSize: 48,
  fontWeight: "bold",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const roundedBorder = {
  border: "2px solid #B3A369",
  backgroundColor: "#B3A369",
  borderRadius: "8px",
  fontWeight: "bold",
  padding: "8px",
  color: "white",
};

const container = {
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

const textblock = {
  position: "absolute",
  top: "60vh",
  color: "white",
  paddingLeft: "40px",
  paddingRight: "40px",
  paddingBottom: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const Hero = () => {
  return (
    <div style={container}>
      <StaticImage
        src="../images/banner.jpeg"
        alt="Empathy Bytes landing image"
        objectFit="cover"
        style={mastHeadStyle}
      />
      <div style={textblock}>
        <h1 style={headingStyle}>Empathy Bytes</h1>
        <h2>We create immersive technology & media centered around empathy.</h2>
        <button style={roundedBorder}>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;

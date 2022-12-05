import * as React from "react";
import "../styles.css";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const IndexPage = () => {
  return (
    <Layout transparent>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

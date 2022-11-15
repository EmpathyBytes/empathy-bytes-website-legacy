import * as React from "react";
import '../styles.css';
import NavBar from "../components/navbar";

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

const aboutPage = () => {
   return(
       <div>
       <NavBar/>
       <main style={pageStyles}>
           <h1 style={headingStyles}>
               <span style={headingAccentStyles}>People</span>
           </h1>
           </main>
       </div>
   );
};

export default aboutPage;
import * as React from "react";
import '../styles.css';
import NavBar from "../components/navbar";

// how do i put fields in?
const contactBox = {

};

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

const contactPage = () => {
   return(
       <div>
       <NavBar/>
       <main style={pageStyles}>
           <h1 style={headingStyles}>
               Test
               <br />
               <span style={headingAccentStyles}>
           Contact Us
       </span>
           </h1>
           </main>
       </div>
   );
};

export default contactPage;
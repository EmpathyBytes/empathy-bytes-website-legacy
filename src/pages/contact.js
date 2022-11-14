import React, { useContext, useEffect } from "react";
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
           <div>
           <form method="post" action="#">
             <label>
               Name <br/>
               <input type="text" name="name" id="name" />
             </label>
             <br/>
             <label>
               Email <br/>
               <input type="email" name="email" id="email" />
             </label>
             <br/>
             <label>
               Subject <br/>
               <input type="text" name="subject" id="subject" />
             </label>
             <br/>
             <label>
               Message <br/>
               <textarea name="message" id="message" rows="5" />
             </label>
             <br/>
             <button type="submit">Send</button>
             <input type="reset" value="Clear" />
           </form>
           </div>
           </main>
       </div>
   );
};

export default contactPage;
//export default contactBox;
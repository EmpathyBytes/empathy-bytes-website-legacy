import React, { useContext, useEffect } from "react";
//import { FormCtx } from "./Form";
import '../styles.css';
import NavBar from "../components/navbar";

//// how do i put fields in?
//const contactBox = props => {
//    const {id} = props;
//    const {setFields, addField} = useContext(FormCtx);
//    const {
//        value,
//        classes,
//        validate,
//        placeholder,
//        label = "",
//        event = {}
//    } = field;
//
//    const {onChange, ...restEvents} = events;
//    const {contClass, fieldClass, errorClass} = classes;
//
//    const handleChange = event => {
//        setFields(event, field);
//
//        if (typeof onChange === "function") {
//            onChange({
//                ...field,
//                value: event.target.value
//            });
//        }
//    };
//
//    useEffect(() => {
//        addField({
//        field: props,
//        value
//        });
//        }, []);
//    return (
//    <div classname = {contClass}>
//    {label}
//    <input
//            {...restEvents}
//            id = {id}
//            type="text"
//            value={value}
//            class={fieldClass}
//            validate={validate}
//            onChange = {handleChange}
//            placeholder={placeholder}
//          />
//          <p className = {errorClass}></p>
//    </div>
//    );
//};

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
import * as React from "react";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar transparent={!!props.transparent}/>
      {props.children}
    </div>
  );
}

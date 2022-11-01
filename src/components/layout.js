import * as React from "react";
import NavBar from "./navbar";

export default function Layout(props) {
    return (
        <div>
            <NavBar/>
            {props.children}
        </div>
    )
}
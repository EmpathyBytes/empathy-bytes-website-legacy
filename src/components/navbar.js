import * as React from "react";
import { Link } from "gatsby";
import Icon from '../images/icon.png'


export default function NavBar() {
    return (
        <header>
            <Link to="/">Go home</Link>
            <Link to="/people">Go People</Link>
        </header>
    )
}
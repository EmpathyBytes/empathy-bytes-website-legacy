import * as React from "react";
import { Link } from "gatsby";
import Icon from '../images/icon.png'
import {useEffect, useState} from "react";


export default function NavBar() {
    const breakpoint = 80
    const [outerClass, setOuterClass] = useState("navbar-outer navbar-top")

    const topLvlPath = () => window.location.pathname.split('/')[1]

    const onScroll = () => {
        const scroll = window.scrollY
        if (scroll > breakpoint) setOuterClass("navbar-outer navbar-scrolled")
        else setOuterClass("navbar-outer navbar-top")
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => {window.removeEventListener('scroll', onScroll)}
    }, [])

    return (
        <header className={outerClass}>
                <div className="navbar-content">
                        {/* `Icon` is the image file for the site logo */}
                        <Link className={`navbar-link ${topLvlPath()===''?'navbar-selected':''}`} to='/'>
                            <img src={Icon} alt="Logo" style={{height: '3rem'}}/>
                        </Link>
                        {/* Links to other pages goes here! */}
                        <Link className={`navbar-link ${topLvlPath()==='projects'?'navbar-selected':''}`}
                              to='/projects'>Projects</Link>
                        <Link className={`navbar-link ${topLvlPath()==='about'?'navbar-selected':''}`}
                              to='/about'>About</Link>
                        <Link className={`navbar-link ${topLvlPath()==='contact'?'navbar-selected':''}`}
                              to='/contact'>Contact</Link>
                </div>
        </header>
    )
}
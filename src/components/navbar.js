import * as React from "react";
import { Link } from "gatsby";
import Icon from '../images/icon.png'

// The style for the <header> elem
// This fixes the header to the top of the page and makes it span the full width
const headerStyle = {
    position: 'fixed',
    zIndex: 10,
    width: '100%',
    backgroundColor: '#00000022', // Change this to change the color of the bg
    backdropFilter: 'blur(4px)',  // This is the blur behind the header
}

// This style splits the header into 2 halves
// This uses CSS Grid to create a left and right portion
const split = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    padding: 16, // the header padding must be done here, idk why
}

// This sets the contents of the tag to be on the left half of the grid
const left = {
    gridColumn: 0
}

// This sets the contents of the tag to be on the right half of the grid
// It also makes the elem a flexbox aligned to the right
const right = {
    gridColumn: '1 1',
    justifySelf: 'end',
    display: 'flex',
    gap: '1rem',
}

// This tag disables anchor underlines and color
const link = {
    textDecoration: 'none',
    color: 'grey', // Change this later depending on whatever we choose for the colors on the navbar
}

export default function NavBar() {
    return (
        <header style={headerStyle}>
                <div style={split}>
                    <div style={left}>
                        {/* `Icon` is the image file for the site logo */}
                        <img src={Icon} alt="Logo" style={{height: '3rem'}}/>
                    </div>
                    <div style={right}>
                        {/* Links to other pages goes here! */}
                        <Link style={link} to='/'>Home</Link>
                        <Link style={link} to='/projects'>Projects</Link>
                        <Link style={link} to='/people'>People</Link>
                        <Link style={link} to='/contact'>Contact</Link>

                        {/* This div adds space to the right of the
                            link that is furthest to the right */}
                        <div style={{marginRight: 16}}></div>
                    </div>
                </div>
        </header>
    )
}
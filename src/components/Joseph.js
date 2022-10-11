import * as React from "react";
import { Link } from "gatsby";

const hflex = {
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem 0',
}

const roundBorder = {
    border: '2px solid #666a7c',
    backgroundColor: '#666a7c',
    borderRadius: '8px',
    fontWeight: 'bold',
    padding: '8px',
    "&:hover" : {
        transform: 'scale(1.1)'
    }
}

export default function Joseph() {

    const [hover, setHover] = React.useState(false);
    const tf = hover ? 'scale(108%)' : 'none'

    return (
        <div style={hflex}>
            <a style={{textDecoration: 'none', color: 'white', transition: '0.2s', transform: tf }} href='https://liusef.github.io/dance-goat-dance/'
            onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <div style={roundBorder}>
                    Hi I'm Joseph 👁️
                </div>
            </a>
        </div>
    )
}
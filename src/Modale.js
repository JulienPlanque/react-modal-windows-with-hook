import React from 'react'
import './App.css'

const Modale = ({ revele, cache }) => revele ? (
    <React.Fragment>
        <div className="overlay" />

        <div className="wrapper">
            <div className="modale">
                <button type="button" className="close" onClick={cache}>
                    <span>&times;</span>
                </button>
                <p>
                    Et voici la modale !
                </p>
            </div>
        </div>
    </React.Fragment>
) : null;

export default Modale;
import React from 'react';
import './Author.css';
import SRS from './img/SRS.jpg';


function Author(props) {
    return (
        <div>
            <div className="prime__details">
                <h4>{props.title} Page</h4>
                <img className="prime__img" src={SRS} />
                <p className="author">
                    Created by:
                     <strong>
                         SayedRahim Sadat
                    </strong>
                </p>
            </div>
        </div>
    );
}

export default Author;

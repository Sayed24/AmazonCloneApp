import React from 'react';
import { Link } from 'react-router-dom';

function Prime() {
    return (
        <div>
            <h5>
                Welcome to your Prime account Page. You Don't have a Prime account <br />
                <Link to="/login">
                    <button><b>Create Prime Account</b></button>
                </Link>
                <br />
                Created by
            </h5>
            <p>
                <strong>
                    SayedRahim Sadat
                </strong>
            </p>
        </div>
    )
}

export default Prime

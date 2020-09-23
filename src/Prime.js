import React from 'react';
import './Prime.css';
import { Link } from 'react-router-dom';
import Author from './Author';

function Prime() {
    return (
        <div>
            <h5>
                Welcome to your Prime account Page. You Don't have a Prime account 
            </h5>
            <Link to="/login">
                <button><b>Create Prime Account</b></button>
            </Link>
            <Author title="Your Prime Account" />
        </div>
    )
}

export default Prime

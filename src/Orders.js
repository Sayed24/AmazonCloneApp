import React from 'react';
import { Link } from 'react-router-dom';
import Author from './Author';

function Orders() {
    return (
        <div className="orders">
            <h5>
                Welcome to Returns & Orders Page. You Don't have any order to return <br />
                Click to following button to to go to orders and order
            </h5>
            <Link to="/">
                <button>
                    <b>Order From Here</b>
                </button>
            </Link>
            <Author title="Returns & Orders" />
        </div>
    );
}

export default Orders;

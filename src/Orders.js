import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
    return (
        <div className="orders">
            <h5>
                Welcome to Returns & Orders Page. You Don't have any order to return <br />
                Click to following button to to go to orders and order <br />
                <Link to="/">
                    <button>
                        <b>Order From Here</b>
                    </button>
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
    );
}

export default Orders;

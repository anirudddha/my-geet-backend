// src/components/OrderCard.jsx

import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order, onDelete }) => {
    return (
        <div className="order-card">
            <h2>{order.name}</h2>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Mood:</strong> {order.mood}</p>
            <p><strong>Language:</strong> {order.language}</p>
            <p><strong>Details:</strong> {order.details}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Package:</strong> {order.package}</p>
            <p><strong>Price:</strong> ₹{order.price}</p>

            <div className="delete-button my-3">
                <button onClick={() => onDelete(order.id)}>Delete</button>
            </div>
        </div>
    );
}

export default OrderCard;

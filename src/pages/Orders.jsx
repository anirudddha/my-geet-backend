// src/components/Orders.jsx

import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../Firebase';
import OrderCard from '../components/OrderCard';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersList);
    };
    
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      setOrders(orders.filter(order => order.id !== id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  return (
    <div className="orders-list">
      {orders.map(order => (
        <OrderCard key={order.id} order={order} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Orders;

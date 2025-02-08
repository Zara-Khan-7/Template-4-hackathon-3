"use client";
import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/order");

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        console.log("Fetched Orders:", data); // Debugging log
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Panel - Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order: any) => (
            <li key={order._id}>
              <p><strong>Customer:</strong> {order.customer.fullName}</p>
              <p><strong>Email:</strong> {order.customer.email}</p>
              <p><strong>Total Items:</strong> {order.items.length}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;

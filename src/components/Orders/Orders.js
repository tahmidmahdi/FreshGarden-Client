import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {email} = useParams();
    const [orders, setOrders] = useState([])
    useEffect(() =>{
        fetch(`https://cherry-crisp-87098.herokuapp.com/orders/`+email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[email])
    console.log(orders);

    return (
        <div className="container mt-5">
            <h3>Dear {email}, Your Order(s) Are:</h3>
            <br/>
            {
                orders.map(order => <li><strong>{order.productName} --------- {order.productPrice}-------- & Order Time: {order.orderTime}</strong></li>)
            }
        </div>
    );
};

export default Orders;
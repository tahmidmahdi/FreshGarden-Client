import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {email} = useParams();
    const [orders, setOrders] = useState([])
    useEffect(() =>{
        fetch(`https://cherry-crisp-87098.herokuapp.com/orders/`+email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders);

    return (
        <div className="container">
            <h3>Dear MR. {email}, Your Order(s) Is(Are):</h3>
            <br/>
            {
                orders.map(order => <li><strong>{order.productName}</strong></li>)
            }
        </div>
    );
};

export default Orders;
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

const Orders = () => {
    const {email} = useParams();
    const [orders, setOrders] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(() =>{
        fetch(`https://cherry-crisp-87098.herokuapp.com/orders/`+email)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            setSpinner(false) 
        })
    },[email])
    console.log(orders);

    return (
        <div className="container mt-5">
            <h3>Dear {email}, Your Order(s) Are:</h3>
            <br/>
            { (spinner) && 
               <div className="container mt-5" style={{textAlign: 'center'}}> <Spinner animation="border" /></div>
            }
            {
                orders.map(order => <li><strong>{order.productName} --------- {order.productPrice}-------- & Order Time: {order.orderTime}</strong></li>)
            }
        </div>
    );
};

export default Orders;
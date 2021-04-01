import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { emailContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();
    console.log(id);
    const [checkOut, setCheckOut] = useState([])
    useEffect(() => {
        fetch(`https://cherry-crisp-87098.herokuapp.com/checkOut/`+id)
            .then(res => res.json())
            .then(data => setCheckOut(data))
    }, [])
    console.log(checkOut.productName);

    const [email] = useContext(emailContext)
    const history = useHistory()
    const handleCheckOut = () => {
        const userOrder = {
            email: email,
            productName: checkOut.productName,
            productPrice: checkOut.productPrice,
            orderTime: new Date()

        }
        


        console.log(userOrder);
        fetch(`https://cherry-crisp-87098.herokuapp.com/orderData`,{
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(userOrder)
        })
        // .then(res => console.log('success')
        history.push('/orders/'+email)

    }


    return (
        <div className="container mt-5">
            <h1>CheckOut</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price(BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>{checkOut.productName}</td>
                       
                        <td>1</td>
                        <td>{checkOut.productPrice}</td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td></td>
                        <td>{checkOut.productPrice}</td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={handleCheckOut} className="btn btn-success"><strong>CheckOut</strong></button>
        </div>
    );
};

export default CheckOut;
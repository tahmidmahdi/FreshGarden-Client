import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ProductsData.css'

const ProductsData = (props) => {
    console.log(props.pd);
    const { productName, imgURL, productPrice, _id } = props.pd;
    const history = useHistory();
    const handleSubmit =(id) =>{
        
        history.push(`/checkout/${id}`)
    }
    return (
        <div className="productCart">
            <Card style={{ width: '18rem', height:'30rem' }}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <h4>৳ {productPrice}</h4>
                    <Button onClick={() => handleSubmit(_id)} variant="warning"><strong>Buy Now</strong></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductsData;
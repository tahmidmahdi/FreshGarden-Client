import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductsData from '../ProductsData/ProductsData';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(()=>{
        fetch(`https://cherry-crisp-87098.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setSpinner(false)    
        })
         
    },[])
    
    console.log('spinner',spinner);

    
    
    
    return (
       <div>
            { (spinner) && 
               <div className="container mt-5" style={{textAlign: 'center'}}> <Spinner animation="border" /></div>
            }
            { (!spinner) && 
                <div className="container home mt-5 "> 
              
                {
                    products.map(pd => <ProductsData pd={pd}></ProductsData>)
                }
                
                </div>
            }
       </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import ProductsData from '../ProductsData/ProductsData';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://cherry-crisp-87098.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products);
    return (
        <div className="container home mt-5 ">
            {
                products.map(pd => <ProductsData pd={pd}></ProductsData>)
            }
        </div>
    );
};

export default Home;
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import './EditProduct.css'

const EditProduct = (props) => {
    console.log(props.pd);
    const products = props.pd;
    
    const handleDelete = (e)=>{
        console.log(e);
        // const id ={
        //     id: e
        // }
        fetch(`https://cherry-crisp-87098.herokuapp.com/delete/`+e,{
            method: 'DELETE',
        })
    }
    return (
        <div  className="mt-5 ">
            {products.map(pd=> <p className="editProduct"><strong>{pd.productName} ---------- {pd.productPrice}-----------NET:{pd.productWeight}</strong>----------<button className="addProductBtns" onClick={()=>handleDelete(pd._id)}><FontAwesomeIcon icon={faTrash}/></button></p>)}
        </div>
    );
};

export default EditProduct;
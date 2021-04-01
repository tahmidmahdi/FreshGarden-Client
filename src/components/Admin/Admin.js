import { faPenSquare, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { emailContext } from '../../App';
import EditProduct from '../EditProduct/EditProduct';
import './Admin.css'

const Admin = () => {
    const [imgURL, setImgURL] = useState(null);
    const [email] = useContext(emailContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        const productDetails = {
            email: email,
            imgURL: imgURL,
            productName: data.productName,
            productWeight: data.weight,
            productPrice: data.addPrice,
            addedTime: new Date()
        }
        console.log(productDetails);
        const url = `https://cherry-crisp-87098.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productDetails)
        })
            .then(res => console.log('server side responded'))
    }





    //handle image upload
    const handleUpload = (event) => {
        console.log(event.target.files[0]);
        const imageDetails = new FormData();
        imageDetails.set('key', 'd5c178daff730a82d11eaf1d08f8994b');
        imageDetails.append('image', event.target.files[0])
        // console.log(imageDetails);


        axios.post('https://api.imgbb.com/1/upload', imageDetails)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }



    const [addProduct, setAddProduct] = useState(false);

    const handleChange = () => {
        setAddProduct(!addProduct)
        console.log('add product bool', addProduct);
        console.log('clicked');
    }


    const [productEdit, setProductEdit] = useState([]);
    const [manageClicked, setManageClicked] = useState(false);

    const handleEdit = () => {
        setManageClicked(!manageClicked);
    }

    useEffect(() => {

        fetch(`https://cherry-crisp-87098.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProductEdit(data))
    }, [])













    return (


        <div className='d-flex justify-content-start pannel-main container'>
            <div className='edit-pannel'>
                <h1 className='mt-5'><strong>Fresh Garden</strong></h1>
                <br /><br />
                <button className="addProductBtn" onClick={handleEdit}><h5><FontAwesomeIcon icon={faThLarge} />  Manage Product</h5></button>
                <br /><br />
                <button className='addProductBtn' onClick={handleChange}><h5><FontAwesomeIcon icon={faPlus} />  Add Product</h5></button>
                <br /><br />
                <h5><FontAwesomeIcon icon={faPenSquare} />  Edit Product</h5>
            </div>
            {(addProduct) && <div className='add-pannel'>

                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <label for='productName'><strong>Enter Product Name</strong></label>
                    <br />
                    <input name="productName" ref={register({ required: true })} placeholder="Enter Product Name" />
                    <br />
                    {errors.productName && <span>This field is required</span>}
                    <br /><br />


                    <label for='weight'><strong>Enter Product Weight</strong></label>
                    <br />
                    <input name="weight" ref={register({ required: true })} placeholder="Enter Product Weight" />
                    <br />
                    {errors.weight && <span>This field is required</span>}
                    <br /><br />


                    <label for='addPrice'><strong>Enter Product Price</strong></label>
                    <br />
                    <input name="addPrice" ref={register({ required: true })} placeholder="Enter Product Price" />
                    <br />
                    {errors.addPrice && <span>This field is required</span>}
                    <br /><br />


                    <label for='uploadImg'><strong>Upload Product Image</strong></label>
                    <br />
                    <input onChange={handleUpload} name="uploadImg" ref={register({ required: true })} type='file' placeholder="Enter Product Name" />
                    <br />
                    {errors.uploadImg && <span>This field is required</span>}
                    <br /><br />


                    {/* <input type="submit" /> */}
                    <button className='btn btn-warning form-btn'><strong>Add Product</strong></button>
                </form>
                <br />
                <br />

                <Link to="/home"><h4>Back To Home?</h4></Link>

            </div>}
            {(manageClicked && (!addProduct)) &&
            
                <EditProduct pd={productEdit}></EditProduct>
            }

        </div>
    );
};

export default Admin;
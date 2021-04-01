import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { emailContext } from '../../App';
import './Header.css'

const Header = () => {
    const [email] = useContext(emailContext);
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="/"><strong><h3>Fresh Garden</h3></strong></Navbar.Brand> */}
                <Link to="/home"><strong><h3 style={{color:'black'}}>Fresh Garden</h3></strong></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navv">
                        <Link to="/home" className="link"><strong>Home</strong></Link>
                        <Link to={`/orders/${email}`} className="link"><strong>Orders</strong></Link>
                        <Link to="/admin" className="link"><strong>Admin</strong></Link>
                        <Link to="/" className="link"><strong>Deals</strong></Link>
                        {(email) && <Link to="/login" className="link loggedInUser"><strong>{email}</strong></Link>}
                        {(!email) && <Link to="/login" className="link loggedInUser"><strong>Login</strong></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h2 style={{ textAlign: 'center' }} className="mt-3">QUALITY FOOD IS OUR PROMISE</h2>
            <Navbar className="bg-light justify-content-center">
                <Form inline>
                    <FormControl type="text" placeholder="Search By Food Name" className=" mr-sm-2" />
                    <Button className="btn btn-warning "type="submit"><strong>Search</strong></Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';

export const emailContext = createContext();

function App() {
  const [email, setEmail] = useState('')
  return (
    <emailContext.Provider value={[email, setEmail]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Header></Header>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/orders/:email">
            <Header></Header>
            <Orders></Orders>
          </PrivateRoute>
        </Switch>
      </Router>
    </emailContext.Provider>
  );
}

export default App;

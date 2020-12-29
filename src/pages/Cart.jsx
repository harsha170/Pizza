import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
//import{ pizzaSize, pizzaCrust } from "../resources/AppData"


const Cart = () => {
    const [ filteredItems, setFilteredItems ] = useState([]);
    
    useEffect(() => {
        let url = "https://pizza-backend-1.herokuapp.com/pizzas";
        Axios({
            method: 'GET',
            url: url
        })
        .then((result)=>{
            const results = result.data.data;
            const existingItems = localStorage.getItem('cartItems');
            const arrayItem = existingItems.split(',');
            let filteredItems = [];
            arrayItem && arrayItem.length > 0 && arrayItem.forEach(details => {
                 results.forEach(items => {
                    if (details === items['_id']) {
                        filteredItems.push(items);
                    }
                })
            });
            setFilteredItems(filteredItems);
            //console.log(filteredItems, 'filteredItems');
            //console.log( result, 'result');
           // setPizzaList(result.data.data);
        })
    },[]);

 
       return(
            <div className="container">
                    <div>
                        <img src={imageUrl} alt="test" width='257' height='280'/>
                    </div>
                    <div className="pizzaName">{name}</div>
            </div>
        )
    }



    export default Cart
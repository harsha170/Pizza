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
            const removeItems = localStorage.getItem('cartItems');
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

            const arrayItemdlt = removeItems.split(',');
            let dltdItems = [];
            arrayItemdlt && arrayItemdlt.length > 0 && arrayItemdlt.forEach(d => {
                results.forEach(items => {
                    if (d === items['_id']) {
                        dltdItems.push(items)
                    }
                })
            })
            //console.log(filteredItems, 'filteredItems');
            //console.log( result, 'result');
           // setPizzaList(result.data.data);
        })
    },[]);

    const handleDelete = (event,id) => {
        const removeItems = localStorage.getItem('cartItems');
        console.log(removeItems, "test");
    if (removeItems !== null) {
        localStorage.removeItem('cartItems', `${removeItems},${id}`);
    }else {
        localStorage.removeItem('cartItems', `${id}`);
    }
    }


    const renderCards = () => {
        return filteredItems && filteredItems.length > 0 && filteredItems.map( (item, index) => {
            const  {  imageUrl, name, BasePrice, toppings, newArrival, discount, _id  } = item;
            return (
                <Col  className="margin-vertical-sm">
                    <div>
                        <img src={imageUrl} alt="{name}" className="cartImg" width='150' height='170'/>
                    </div>
                    <div className="pizzaName">{name}</div>
                    <div className="priceDiscount">
                        <span className="base">${BasePrice}</span>
                        {discount > 0 ? <span className="discount">{discount}% Off</span> : ""}
                    </div>
                    <div className="toppings">Toppings: <span className="top">{toppings}</span></div>
                    <Button block variant="danger" type="delete" className="dltbtn" onClick={event => handleDelete( event )}>Delete</Button>
                    
                    

                </Col>
            )
        });
    }



    return (
        <div className="container">
            <Row  className="margin-vertical-sm">
                {renderCards()}
            </Row>
        </div>
    );
}




    export default Cart
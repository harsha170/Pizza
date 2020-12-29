import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import{ pizzaSize, pizzaCrust } from "../resources/AppData"

const UserDashboard = () => {
   console.log(pizzaSize, pizzaCrust);
   const [ pizza, setPizzaList ] = useState([]);
    
    useEffect(() => {
        let url = "https://pizza-backend-1.herokuapp.com/pizzas";
        Axios({
            method: 'GET',
            url: url
        })
        .then((result)=>{
           console.log( result, 'result');
           setPizzaList(result.data.data);
        })
    },[]);

    const renderSizes = () => {
            const renderOptions = pizzaSize && pizzaSize.length>0 && pizzaSize.map((details,index) =>{
                return (
                    <option value={details.value}>{details.label} - {details.cost}$</option>
                );
            });

            return (
                <select>
                    {renderOptions}
                </select>
            )
    }

    const renderCrust = () => {
        const renderCrustOptions = pizzaCrust && pizzaCrust.length>0 && pizzaCrust.map((details,index) =>{
            return (
                <option value={details.value}>{details.label} - {details.cost}$</option>
            );
        });

        return (
            <select>
                {renderCrustOptions}
            </select>
        )
}

const addToCart = (event,id) => {
    //console.log(id);
    const existingItems = localStorage.getItem('cartItems');
    if (existingItems !== null) {
        localStorage.setItem('cartItems', `${existingItems},${id}`);
    }else {
        localStorage.setItem('cartItems', `${id}`);
    }
    //console.log(existingItems, 'existingItems', typeof existingItems);
    

}


    const renderCards = () => {
        return pizza && pizza.length > 0 && pizza.map( (item, index) => {
            const  {  imageUrl, name, BasePrice, toppings, newArrival, discount, _id  } = item;
            return (
                <Col sm={3} className="margin-vertical-sm">
                    <div>
                        <img src={imageUrl} alt="test" width='257' height='280'/>
                    </div>
                    <div className="pizzaName">{name}</div>
                    <div className="priceDiscount">
                        <span className="base">${BasePrice}</span>
                        {discount > 0 ? <span className="discount">{discount}% Off</span> : ""}
                    </div>
                    <div className="toppings">Toppings: <span className="top">{toppings}</span></div>
                    {newArrival && <div className="new">New Arrival</div>}
                    
                        <div className="margin-vertical-sm">
                            {renderSizes()}
                        </div>

                        <div className="margin-vertical-sm">
                            {renderCrust()}
                        </div>
                    
                    <div>
                        <Button block variant="primary" type="login" onClick={event => addToCart( event, _id )}>
                            Add to cart
                        </Button>
                    </div>

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

export default UserDashboard;
import React from "react";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Reset = () => {
    const history = useHistory();
    const handlePassword = async event => {
        history.push('/');
        await axios({
            method : 'POST',
            url: 'https://pizza-backend-1.herokuapp.com/forgot-password'
        }).then(response => {
            if(response.data && response.data.message === "Change password"){
              history.push("/");
            }
          console.log(response,"response");
        }).catch(err => {
            alert("password not updated")
            console.log(err, 'err');
        })
    }
    
    return(
        <>

    <Form.Group as={Row} controlId="formBasicPassword"  className="text-right margin-vertical-sm login">
        <Form.Label column sm="3"> Enter New Password:</Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="Password" name="password" onClick={event => handlePassword( event )} />
            </Col>
    </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword"  className="text-right margin-vertical-sm login">
        <Form.Label column sm="3">Confirm Password:</Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="Password" name="password" onChange={event => handlePassword( event )} />
            </Col>
        </Form.Group>
        </>
    )
}

export default Reset
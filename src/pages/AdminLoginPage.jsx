import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Row, Col } from "react-bootstrap";




const Login = ()=>{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const handleChange = event =>{
        //console.log(event.target.name, event.target.value);
        if(event.target.name==="email"){
            setEmail(event.target.value)
        }else{
            setPassword(event.target.value)
        }
    }
    const handleLogin = event =>{
        // const resp = Axios.post('http:localhost:5000/login',{
        //     email:email,
        //     password:password
        // })

        const resp = Axios({
            method: 'post',
            url: '/admin-login',
            baseURL: 'http:localhost:5000',
            data: {
                email:email,
                password:password
            }
          }).then(response => {
            console.log(response,"response");
          })
      
        //console.log(email,password);
    }
    return(
    <div class="container">
        <Form>
            <h1 className="text-center">Admin Login</h1>
            <Form.Group as={Row} controlId="formBasicEmail" className="text-right margin-vertical-sm">
                <Form.Label column sm="3" >Email:</Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Enter email" name="email" onChange={event => handleChange( event )} />
                    </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword"  className="text-right margin-vertical-sm">
                <Form.Label column sm="3">Password:</Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Password" name="password" onChange={event => handleChange( event )} />
                    </Col>
            </Form.Group>
            <Row >
                <Col sm={{ span:4, offset:3}}>
                    <Button block variant="primary" type="login" onClick={event => handleLogin( event )}>
                        Login
                    </Button>
                </Col>
                <Col sm="4">
                    <Button block variant="success" type="register">
                        Register
                    </Button></Col>
            </Row>
        
        </Form>
    </div>
    )
}
export default Login;
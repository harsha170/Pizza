import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";



const AdminLoginPage = ()=>{
    const history = useHistory();
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
    const handleLogin = async event =>{
        await Axios({
            method: 'Post',
            url: 'https://pizza-backend-1.herokuapp.com/admin-login',
            //baseURL: 'http:localhost:5000',
            data: {
                email:email,
                password:password
            }
          }).then(response => {
              if(response.data && response.data.message === "Login Success"){
                history.push("/admin-login");
              }
            console.log(response,"response");
          }).catch(err => {
              alert("login unsuccessful")
              console.log(err, 'err');
          })
      
        //console.log(email,password);
    }
    return(
    <div class="container">
        <div>
            <h1 className="text-center">Admin Login</h1>
            <Form.Group as={Row} controlId="formBasicEmail" className="text-right margin-vertical-sm login">
                <Form.Label column sm="3" >Email:</Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Enter email" name="email" onChange={event => handleChange( event )} />
                    </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword"  className="text-right margin-vertical-sm login">
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
                
            </Row>
        
        </div>
    </div>
    )
}
export default AdminLoginPage;
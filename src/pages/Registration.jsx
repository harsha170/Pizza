import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Loader from "./Loader"
//import { Snackbar, Alert } from "material-ui";



const Registration = ()=>{
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [loader,setLoader]=useState(false);
    const handleChange = event =>{
        //console.log(event.target.name, event.target.value);
        if(event.target.name==="email"){
            setEmail(event.target.value)
        }else{
            setPassword(event.target.value)
        }
    }
    const handleRegister = async event =>{
        setLoader(true);
        // const resp = Axios.post('http:localhost:5000/login',{
        //     email:email,
        //     password:password
        // })
        //const url = "https"
        await Axios({
            method: 'Post',
            url: 'https://pizza-backend-1.herokuapp.com/register',
            //baseURL: 'http:localhost:5000',
            data: {
                email:email,
                password:password
            }
          }).then(response => {
              if(response.data && response.data.message === "User registered"){
                  alert("user registered")
                history.push("/");
              }
            console.log(response,"response");
          }).catch(err => {
              //alert("login unsuccessful")
              console.log(err, 'err');
          })
      
        //console.log(email,password);
    }
    return(
    <div class="container">
        <div>
            <h1 className="text-center">User Registration</h1>
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
                <Col sm={{ span:4, offset:0}}>
                    
                </Col>
                <Col sm="4">
                    <Button block variant="success" type="register" onClick={event => handleRegister( event )} >
                        Register
                    </Button>
                    {loader?<Loader/>:null}
                    </Col>
            </Row>
        
        </div>
    </div>
    )
}
export default Registration;
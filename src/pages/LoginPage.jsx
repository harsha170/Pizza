import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Row, Col, Spinner, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Loader from "./Loader"
//import { Snackbar, Alert } from "material-ui";



const Login = ()=>{
    const history = useHistory();
    const handleRegister = () => {
        history.push('/Registration');
    }
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [loader,setLoader]=useState(false);
    const [err,setErr]=useState();
    const handleChange = event =>{
        //console.log(event.target.name, event.target.value);
        if(event.target.name==="email"){
            setEmail(event.target.value)
        }else{
            setPassword(event.target.value)
        }
    }
    const handleLogin = async event =>{
        setLoader(true);
        // const resp = Axios.post('http:localhost:5000/login',{
        //     email:email,
        //     password:password
        // })
        //const url = "https"
        await Axios({
            method: 'Post',
            url: 'https://pizza-backend-1.herokuapp.com/login',
            //baseURL: 'http:localhost:5000',
            data: {
                email:email,
                password:password
            }
          }).then(response => {
              if(response.data && response.data.message === "Login Success"){
                history.push("/dashboard");
              }
              else{
                setLoader(false);
                  alert("check passowrd or mail")
              }
            console.log(response,"response");
          }).catch(err => {
              alert("login unsuccessful")
              console.log(err, 'err');
          })
      
        //console.log(email,password);
    }

    const handlePassword = async event => {
        await Axios({
            method: 'Post',
            url: 'https://pizza-backend-1.herokuapp.com/forgot-password',
            //baseURL: 'http:localhost:5000',
            data: {
                email:email
            }
          }).then(response => {
            // console.log(response.data)
              if(response.data){
                  
                history.push("/dashboard");
              }
            console.log(response,"response");
          }).catch(err => {
            //   alert("login unsuccessful")
              console.log(err, 'err');
          })
      
        //console.log(email,password);
    }

    

    return(
    <div class="container">
        <div>
            <h1 className="text-center">User Login</h1>
            <Form.Group as={Row} controlId="formBasicEmail" className="text-right margin-vertical-sm login">
                <Form.Label column sm="3" >Email:</Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" placeholder="Enter email" name="email" onChange={event => handleChange( event )} />
                    </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword"  className="text-right margin-vertical-sm login">
                <Form.Label column sm="3">Password:</Form.Label>
                    <Col sm="6">
                        <Form.Control type="password" placeholder="Password" name="password" onChange={event => handleChange( event )} />
                    </Col>
            </Form.Group>
            <Row >
                <Col sm={{ span:2, offset:3}}>
                    <Button block variant="primary" type="login" onClick={event => handleLogin( event )}>
                    {/* <Spinner animation="grow" variant="success" /> */}
                    Login
                    </Button>
                    {loader?<Loader/>:null}
                    {err && <Alert message={err} variant='danger' />}
                </Col>
                
                <Col sm="2">
                    <Button block variant="success" type="register" onClick={event => handleRegister( event )}>
                        Register
                    </Button></Col>
                <Col sm="2">
                    <Button block variant="danger" type="forgot-password" onClick={event => handlePassword( event )}>Forgot password</Button>
                </Col>
            </Row>
        
        </div>
    </div>
    )
}
export default Login;
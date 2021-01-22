import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPizzaSlice } from '@fortawesome/fontawesome-free';
import { useHistory } from "react-router-dom";


const Header = ()=>{

    const history = useHistory();
    const handleCart = () => {
        history.push('/cart');
    }
    const handleAdmin = () => {
        history.push('/admin-login')
    }
    const handleHome = () => {
        history.push('/dashboard')
    }
    
    return(
        <div class="header">
            {/* <div>Admin Login</div> */}
            {/* <i class="fas fa-pizza-slice"></i> */}
            {/* <FontAwesomeIcon icon={faPizzaSlice} /> */}
            {/* <i class="fas fa-pizza-slice"></i> */}
            <div class="dominos" onClick={event => handleHome(event)}>Dominos</div>
            <div class="dominos" onClick={event => handleCart(event)}>Cart</div>
            <div class="dominos" onClick={event => handleAdmin(event)}>Admin Login</div>
        </div>
    )
}
export default Header;
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPizzaSlice } from '@fortawesome/fontawesome-free';
import { useHistory } from "react-router-dom";


const Header = ()=>{

    const history = useHistory();
    const handleCart = () => {
        history.push('/cart');
    }
    
    return(
        <div class="header">
            {/* <i class="fas fa-pizza-slice"></i>
            <FontAwesomeIcon icon={faPizzaSlice} />
            <i class="fas fa-pizza-slice"></i> */}
            <div class="dominos">Dominos</div>
            <div class="dominos" onClick={event => handleCart(event)}>My Orders</div>
        </div>
    )
}
export default Header;
import React, { useContext } from 'react';
import {Link} from "react-router-dom"

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shoppingIcon from "../../assets/icon/shopping-cart-alt.svg"

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="cart"><img src={shoppingIcon} alt='shop' style={{width:"20px"}}/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
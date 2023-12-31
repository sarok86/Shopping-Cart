import React, { useContext } from 'react';
import {Link} from "react-router-dom"

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shoppingIcon from "../../assets/icon/shopping-cart-alt.svg";

// Style
import styles from "./Navbar.module.css"

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="cart"><img src={shoppingIcon} alt='shop'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
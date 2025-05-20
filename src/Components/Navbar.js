import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCableCar, faCartShopping, faCross, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useLocation } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import '../css/Navbar.css';

const Navbar = ({ onCartclick }) => {
    const [show, SetShow] = useState(true)
    const [cart, setCart] = useState(0)
    const [openpage, setOpenpage] = useState(false)

    useEffect(() => {
        const loacalData = JSON.parse(localStorage.getItem("cartData")) || [];
        const cartNumbar = loacalData.reduce((sum, item) => sum + (item.quantity || 0), 0);
        setCart(cartNumbar)
    }, [])

    const location = useLocation();
    const pageOpen = ["/about", "/testimonial", "/devloperpage"].some(path =>
        location.pathname.toLowerCase().startsWith(path)
    );

    return (
        <>
            <nav>
                <img src="images/logo.png" alt="" />
                <h3 onClick={onCartclick} className='addcart'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p className="cart-count">{cart}</p>
                </h3>
                <h3 className='hembargar'>{(!openpage) ? <FontAwesomeIcon icon={faBars} onClick={() =>
                    setOpenpage(true)} /> : <FontAwesomeIcon icon={faX} onClick={() =>
                        setOpenpage(false)} />}</h3>
                <div className="navItem">
                    <ul className={(openpage) ? "visibale" : ""}>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li
                            onClick={() => SetShow(!show)}
                            className={pageOpen ? "show-pages" : ""}
                        >
                            PAGES <FontAwesomeIcon icon={faChevronDown} />
                            <ul style={{ display: show ? 'none' : 'block' }}>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/testimonial">Testimonial</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/devloperPage">DevloperPage</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/products" className={({ isActive }) => isActive ? "active" : undefined}>
                                PRODUCTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>
                                CONTACT
                            </NavLink>
                        </li>
                        <li className="cart-icon" onClick={onCartclick}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p className="cart-count">{cart}</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

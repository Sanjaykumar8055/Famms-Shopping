import React, { useEffect, useState } from 'react'
import '../css/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ onClose }) => {
    const [localdata, setLocaldata] = useState([])
    
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
        setLocaldata(cartData)
    }, [])

    const remove = (removeindex) => {
      const removeItem = localdata.filter((item,index)=>{
        return index !== removeindex
      })
      setLocaldata(removeItem)
      localStorage.setItem("cartData",JSON.stringify(removeItem))
    }

    const tatal = localdata.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)


    return (
        <>
            <div className="cart">
                <div className="container">
                    <FontAwesomeIcon icon={faX} onClick={onClose} cursor={"pointer"} fontSize={"25px"} />
                    {localdata.map((item, index) => {
                        return (
                            <div className="product-row" key={index}>
                                <img src={`images/${item.image}`} alt="" width={'50px'} />
                                <h4>{item.name}</h4>
                                <p>{item.quantity}</p>
                                <p>{item.price}</p>
                                <FontAwesomeIcon
                                    icon={faX}
                                    cursor="pointer"
                                    title="Remove item"
                                    onClick={() => remove(index)}
                                    style={{ color: 'red', marginLeft: '10px' }}
                                />
                            </div>
                        )
                    })}
                    <div className="subtotal"><span>Subtotal:</span>                                                     <span> ₹{tatal}</span></div>
                </div>
            </div>
        </>
    )
}

export default Cart
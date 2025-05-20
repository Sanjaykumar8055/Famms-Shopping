import React, { useEffect, useState } from 'react'
import '../css/product.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'


const addtoCart = (item) => {
  const localData = JSON.parse(localStorage.getItem("cartData")) || [];

  const items = localData.find((i) => {
    return i.id == item.id
  })

  if (items) {
    items.quantity += 1
  } else {
    localData.push({
      ...item,
      quantity: 1,
    })
  }
  localStorage.setItem("cartData", JSON.stringify(localData))
}

const Products = () => {
  const [menpro, setMenpro] = useState([])
  const [womenpro, setWomenpro] = useState([])
  const [childpro, setChildpro] = useState([])
  const [addcart, setAddcart] = useState(null)
  useEffect(() => {
    const getadata = async () => {
      try {
        const mendata = await getDocs(collection(db, "men"))
        const fatchdata = mendata.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }))
        setMenpro(fatchdata);

        const womendata = await getDocs(collection(db, "women"))
        const womenfatch = womendata.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }))
        setWomenpro(womenfatch)
        const childdata = await getDocs(collection(db, "child"))
        const childfatch = childdata.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }))
        setChildpro(childfatch)
      } catch (error) {
          console.error("Data not Show")
      }
    }
    getadata();
  }, [])
  return (
    <div>
      <div className="introproduct">
        <h2>Our Products</h2>
      </div>
      <div className="products women">
        <h2>Men's Product</h2>
        <div className="product-contain">
          {menpro.map((item, index) => {
            return (
              <div
                key={index}
                className="products-items"
                onMouseEnter={() => setAddcart(index)}>
                <div>
                  <img
                    src={`images/${item.image}`}
                    alt={item.name} width="130"
                    className="products-image" />
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: '15px',
                    padding: '0px 10px'
                  }}>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div
                  className={`add-to-carts ${addcart === index ? 'show' : 'hide'}`} onMouseLeave={() => setAddcart(null)}>
                  <button
                    style={{
                      border: 'none',
                      width: '100px',
                      height: "30px",
                      backgroundColor: 'red',
                      borderRadius: '15px',
                      cursor: 'pointer'
                    }} onClick={() => addtoCart(item)}>add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="products men">
        <h2>Women's Product</h2>
        <div className="product-contain">
          {womenpro.map((item, index) => {
            return (
              <div
                key={index}
                className="products-items"
                onMouseEnter={() => setAddcart(index)}>
                <div>
                  <img
                    src={`images/${item.image}`}
                    alt={item.name} width="130"
                    className="products-image" />
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: '15px',
                    padding: '0px 10px'
                  }}>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div
                  className={`add-to-carts ${addcart === index ? 'show' : 'hide'}`} onMouseLeave={() => setAddcart(null)}>
                  <button
                    style={{
                      border: 'none',
                      width: '100px',
                      height: "30px",
                      backgroundColor: 'red',
                      borderRadius: '15px',
                      cursor: 'pointer'
                    }} onClick={() => addtoCart(item)}>add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="products men">
        <h2>Children's Product</h2>
        <div className="product-contain">
          {childpro.map((item, index) => {
            return (
              <div
                key={index}
                className="products-items"
                onMouseEnter={() => setAddcart(index)}>
                <div>
                  <img
                    src={`images/${item.image}`}
                    alt={item.name} width="130"
                    className="products-image" />
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: '15px',
                    padding: '0px 10px'
                  }}>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div
                  className={`add-to-carts ${addcart === index ? 'show' : 'hide'}`} onMouseLeave={() => setAddcart(null)}>
                  <button
                    style={{
                      border: 'none',
                      width: '100px',
                      height: "30px",
                      backgroundColor: 'red',
                      borderRadius: '15px',
                      cursor: 'pointer'
                    }} onClick={() => addtoCart(item)}>add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
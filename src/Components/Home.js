import React, { useEffect, useState } from "react";
import '../css/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase"


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
const Home = () => {
    const [product, setProduct] = useState([])
    const [addcart, setAddcart] = useState(null)
    useEffect(() => {
        const getdata = async () => {
            try {
                const fetchData = await getDocs(collection(db, "homedeta"))
                const homedata = fetchData.docs.map((i) => ({
                    id: i.id,
                    ...i.data()
                }))
                setProduct(homedata)

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        getdata();
    }, [])
    return (
        <>
            <div className="home">
                <div className="intro">
                    <img src="images/slider-bg.jpg" alt="" />
                    <div className="introDetail">
                        <h1><span>Sale 20% Off</span> <br />On Everything</h1>
                        <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                    </div>
                </div>
                <div className="info">
                    <h2>
                        Why Sh<span>op  </span>With Us</h2>
                    <div className="infoContain">
                        <div className="infocontent">
                            <FontAwesomeIcon icon={faTruck} fontSize={"50px"} />
                            <h5>Fast Delivery</h5>
                            <p>variations of passages of Lorem Ipsum available</p>
                        </div>
                        <div className="infocontent">
                            <FontAwesomeIcon icon={faFreeCodeCamp} fontSize={"50px"} />
                            <h5>Free Shiping</h5>
                            <p>variations of passages of Lorem Ipsum available</p>
                        </div>
                        <div className="infocontent">
                            <FontAwesomeIcon icon={faMedal} fontSize={"50px"} />
                            <h5>Best Quality</h5>
                            <p>variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
                <div className="introsecond">
                    <div className="intoimg">
                        <img src="images/arrival-bg.jpg" alt="" />
                    </div>
                    <div className="introsec-detail">
                        <h1>
                            #NewArrivals
                        </h1>
                        <p>Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                        </p>
                    </div>
                </div>
                <div className="product">
                    <h2>Our <span style={{ color: '#f7444e' }}><span style={{ borderBottom: '5px solid #f7444e' }}>Pro</span>ducts</span></h2>
                    <div className="product-show">
                        {product.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="product-item"
                                    onMouseEnter={() => setAddcart(index)}>
                                    <div>
                                        <img
                                            src={`images/${item.image}`}
                                            alt={item.name} width="130"
                                            className="product-image" />
                                    </div>
                                    <div className="homeproductinfo"
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexWrap: "wrap",
                                            justifyContent: 'space-between',
                                            position: 'absolute',
                                            bottom: '15px',
                                            padding: '0px 10px'
                                        }}>
                                        <h3 className="product-name">{item.name}</h3>
                                        <p className="product-price">Price: ₹{item.price}</p>
                                        <div className="respo-addtocart">
                                            <button onClick={() => addtoCart(item)}>Add To Cart</button>
                                        </div>
                                    </div>
                                    <div
                                        className={`add-to-cart ${addcart === index ? 'show' : 'hide'}`} onMouseLeave={() => setAddcart(null)}>
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
        </>
    )
}
export default Home;
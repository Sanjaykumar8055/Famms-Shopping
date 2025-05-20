import React, { useState } from 'react'
import "../css/contact.css"

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    messag: '',
  })
  const handalchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const saveData = (e) => {
    e.preventDefault();
    alert("Data submited")
    console.log(data);
    setData({
      name: '',
      email: '',
      subject: '',
      messag: '',
    })

  }
  return (
    <div className='main'>
      <div className="introcontect  ">
        <h2>Contact Us</h2>
      </div>
      <form onSubmit={saveData}>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          name='name' value={data.name}
          onChange={handalchange}
          className='inpText' required />

        <input
          type="email"
          placeholder="Enter Your Email Address"
          name='email' value={data.email}
          onChange={handalchange}
          className='inpEmail' required />

        <input
          type="text"
          placeholder="Enter Subject"
          name='subject' value={data.subject}
          onChange={handalchange}
          className='inpText' required />

        <textarea
          placeholder="Enter Your Message"
          name='messag' value={data.messag}
          onChange={handalchange}
          className='inptextarea'></textarea>
        <input type="submit" name="" id="" className='submit' />

      </form>
    </div>
  )
}

export default Contact
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
const Login = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    console.log(name , email)
    e.preventDefault()
    if (!name || !email) return
    props.setUser({name: name, email: email})
    navigate('/dashboard')
  }
  return (
    <section>
    <form className='form' onSubmit={handleSubmit}>
    <h5>Login</h5>
    <div className="form-row">
    <label htmlFor="name" className='form-label'>Name</label>
    <input type="text" className='form-input' id='name' value={name} 
    onChange={ e => setName(e.target.value)}/></div>
    <div className="form-row">
    <label htmlFor="email" className='form-label'>Email</label>
    <input type="email" className='form-input' id='email' value={email} 
    onChange={ e => setEmail(e.target.value)}/></div>
    <button className="btn">Submit</button></form></section>
  )
}

export default Login
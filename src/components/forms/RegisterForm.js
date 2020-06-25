import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const RegisterForm = props => {
    const [ user, setUser ] = useState(props.registerForm)
    useEffect(
      () => {
        setUser(props.registerForm)
      },
      [ props ]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  
    const handleInputChange = event => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
    }

    const titlePage = {
      fontWeight: 'bolder',
      fontSize: '20px',
      textAlign: 'center'
    };

  return (
    <div>
      <div style={titlePage}>ĐĂNG KÝ</div>
      <div>
      <form>
        <label>Email</label>
        <input type="text" name="email" value={user.email} onChange={handleInputChange}/>
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={handleInputChange}/>
        <Button variant="danger" onClick={()=> props.register(user) }>Đăng ký</Button>
      </form>
      </div>
    </div>
  )
}

export default RegisterForm

import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const LoginForm = props => {
    const [ user, setUser ] = useState(props.loginForm)
    useEffect(
      () => {
        setUser(props.loginForm)
      },
      [ props ]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  
    const handleInputChange = event => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
    }
  return (
    <form>
      <label>Email</label>
      <input type="text" name="email" value={user.email} onChange={handleInputChange}/>
      <label>Password</label>
      <input type="password" name="password" value={user.password} onChange={handleInputChange}/>
      <Button variant="primary" onClick={()=> props.login(user) }>Đăng nhập</Button>
    </form>
  )
}

export default LoginForm

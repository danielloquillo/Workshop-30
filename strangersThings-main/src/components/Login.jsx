import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosIntance } from '../services/apiClient'
import {CgLogIn} from 'react-icons/cg'
import useLogin from '../hooks/useLogin'
import '../styling/Login.css'
 

function Login({ setAuth, setPageUser }) {
  const [user, setUser] = useState({username: '', password: ''})
  const { error, response, handleLogin } = useLogin(user)
  const navigate = useNavigate()

  useEffect(() => { 
    if (response?.success) {
      axiosIntance.defaults.headers.common = {'Authorization': `Bearer ${response.data.token}`}
      setAuth(true)
      setPageUser(user.username)
    }
  }, [response])

  if (response.success) {  
    return ( 
    <div className='login-main-container'>
      <h2>Login Successful!</h2>
      {setTimeout(() => navigate('/profile'), 500)}
    </div>  
    )
  }

  return (
    <div className='login-main-container'>
      <div className="login-page-title-container">
        <h1 className="login-page-title">Welcome Back!</h1> 
        {error && <p>{error}</p>} 
      </div>   
      <form onSubmit={handleLogin}>
        <div className="login-components">
          <div className="username-container">
            <label htmlFor="" className="username-label"> Username: </label>
              <input onChange={(e) => setUser({...user, username: e.target.value})} type="text" className="username-input" />
          </div>
            <div className="password-container">
              <label htmlFor="" className="password-label"> Password: </label>
                <input onChange={(e) => setUser({...user, password: e.target.value})} type="password" className="password-input" />
            </div>
          </div>
        <button type='submit' className="login-btn">Login <CgLogIn id='login-btn-logo'/></button>
      </form>
    </div>
  )
}

export default Login
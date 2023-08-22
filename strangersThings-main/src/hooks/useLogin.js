import { useState } from 'react'
import { ApiClient } from '../services/apiClient'

function useLogin({username, password}) {
  const [error, setError] = useState('')
  const [response, setResponse] = useState({})

  const handleLogin = async (e) => {
        e.preventDefault()
        try {
          const res = await ApiClient.loginUser(username, password)
          setResponse(res.data)
        } catch(err) {
          setError(err.response.data.error.message)
        }
      }

  return { error, response, handleLogin }
}

export default useLogin
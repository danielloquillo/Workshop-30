import { useEffect, useState } from "react"
import { ApiClient } from "../services/apiClient"


function useRegister({username, password}) {
  const [response, setResponse] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
  }, [username])

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await ApiClient.registerUser(username, password)
  
      setResponse(res)
    } catch(err) {
      console.log(err)
      setError(err.response.data.error.message)
    }
  }

  return { response, error, handleRegister }
}

export default useRegister
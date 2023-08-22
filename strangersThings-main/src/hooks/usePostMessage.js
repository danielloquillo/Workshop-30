import { useState } from 'react'
import { ApiClient } from '../services/apiClient'

function usePostMessage(message, postId) {
  const [result, setResult] = useState({})

  const handlePostMessage = async (e) => {
    e.preventDefault()
    try {
      const res = await ApiClient.postMessage(message, postId)
      setResult(res.data)
    } catch(err) {
      console.log(err)
    }
  }
  
  return {handlePostMessage, result}
}

export default usePostMessage
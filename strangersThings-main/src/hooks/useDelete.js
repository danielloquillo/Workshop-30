import { useState } from 'react'
import { ApiClient } from '../services/apiClient'

function useDelete(postId) {
  const [response, setResponse] = useState({})

  const handleDelete = async () => {
        try {
        const res = await ApiClient.deletePost(postId)
        setResponse(res.data)
      } catch(err) {
        console.log(err)
      }
  } 

  return { handleDelete, response }
}

export default useDelete
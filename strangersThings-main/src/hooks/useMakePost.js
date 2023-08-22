import { useState } from 'react'
import { ApiClient } from '../services/apiClient'

function useMakePost(postBody, id) {
  const [response, setResponse] = useState({})

  const handleSubmit = async (e) => {
      e.preventDefault() 
      try {
        if (!id) {
          const res = await ApiClient.makePost(postBody)
          setResponse(res.data)
        } else {
          const res = await ApiClient.updatePost(postBody, id)
          setResponse(res.data)
        }
      } catch(err) {
        console.log(err)
      }
    }

  return { handleSubmit, response }
}

export default useMakePost
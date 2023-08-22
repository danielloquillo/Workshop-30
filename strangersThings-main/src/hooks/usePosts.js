import { useEffect, useState } from 'react'
import { ApiClient } from '../services/apiClient'

function usePosts(loggedIn, rData) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect( () => {
    const posts = async () => {
      try {
        const res = await ApiClient.getAllPosts()
        setData(res.data.data.posts)
      } catch(err) {
        setError(err)
      }
    }
    
    posts()
  }, [loggedIn, rData.length])

  return [ data, error ]
} 

export default usePosts
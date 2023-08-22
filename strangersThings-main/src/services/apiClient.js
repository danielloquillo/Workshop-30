import axios from "axios";

const cohortName = '2302-acc-et-web-pt-e'
const URL = `https://strangers-things.herokuapp.com/api/${cohortName}`

export const axiosIntance = axios.create({
    baseURL: `${URL}/`,
})

class APIClient {
    headers = { headers: {"Content-Type": "application/json"} }

    registerUser = async (username, password) => {
        const res = await axiosIntance.post(`${URL}/users/register`, {
            user: {
              username: username,
              password: password
            }
          }, this.headers)
        
        return res
    }

    getAllPosts = async () => {
        const res = await axiosIntance.get(`${URL}/posts`)
        return res
    }

    postMessage = async (message, postId) => {
        const res = await axiosIntance.post(`${URL}/posts/${postId}/messages`, {
            message: {
              content: message
            }
          }, this.headers)
        
        return res
    }

    loginUser = async (username, password) => {
        const res = await axiosIntance.post(`${URL}/users/login`, {
            user: {
                    username: username, 
                    password: password
                  }
            }, this.headers)

        return res
    }

    makePost = async ({title, description, price, willDeliver, location}) => {
        const res = await axiosIntance.post(`${URL}/posts`, {
            post: {
                  title: title,
                  description: description,
                  location: location, 
                  price: price, 
                  willDeliver: willDeliver
                }
            }, this.headers)
            return res
    }

    updatePost = async ({title, description, price, willDeliver, location}, id) => {
        const res = await axiosIntance.patch(`${URL}/posts/${id}`, {
            post: {
                  title: title,
                  description: description,
                  location: location,
                  price: price, 
                  willDeliver: willDeliver
                }
            }, this.headers)
            return res
    }

    deletePost = async (postId) => {
        const res = await axiosIntance.delete(`${URL}/posts/${postId}`) 

        return res
    }
}

export const ApiClient = new APIClient()
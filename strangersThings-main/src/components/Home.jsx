import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styling/Home.css'

function Home({ data }) {
  const [latestPosts, setLatestPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (data.length > 10) {
    setLatestPosts(data.slice(-10))
    } else {setLatestPosts(data)}
  }, [data])

  return (
      <div className="home-main-container">
        <div className="home-page-title">
          <h1 id='home-main-title'>Strangers Things</h1>
        </div>
        <div className="home-body">
          <div className='home-description'>
            <p className='home-description-text'>Welcome to Stranger's Things! Where their stuff can become your stuff! </p>
            <p className='home-description-text'>Feel free to look around. Below are some of the latest posts</p>
          </div>
            <ul className='home-posts-title-list'>
              {latestPosts.map((p) => (
                <li onClick={() => navigate(`posts/${p._id}`)} key={p._id} className='home-post-list-item'>
                 {p.title} <i className='home-post-owner'>by: {p.author.username}</i>
                </li>
              ))}
            </ul>
        </div>
      </div>
  )
}

export default Home
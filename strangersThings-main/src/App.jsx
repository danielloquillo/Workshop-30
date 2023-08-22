import { useState } from 'react'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [pageUser, setPageUser] = useState(null) 

  return (
    <>
      <Navbar pageUser={pageUser}/> 
      <div className='main-container'>
        <MainPage pageUser={pageUser} setPageUser={setPageUser}/>
      </div>
      <Footer />
    </>
  )
}

export default App

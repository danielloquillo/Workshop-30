import React from 'react'
import '../styling/Footer.css'

function Footer() {   
  return (
    <>
      <footer className='footer'>
          <div className='footer-contact-section'>
            <div id='footer-contact-info'>
              <p className='footer-text'>Contact us: </p>
              <p className='footer-text'>Email: strangersthings.support@st.com</p>
              <p className='footer-text'>Phone Number: +1 (123) 456-7890</p>
            </div>
            <p id='footer-about'>About: Page created for users to search and possibility acquire items they need or are seeking. </p>
          </div>
      </footer>
    </>
  )
}

export default Footer
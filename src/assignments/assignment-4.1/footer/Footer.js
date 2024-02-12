import React from 'react'
import './Footer.css'
function Footer() {
  return (
      <div className='footer d-flex justify-content-around bg-dark p-5 text-white'>
          <div className='address'>
              <p>Fashion Mart</p>
              <p>Miyapur</p>
              <p>Hyderabad</p>
              <p>Telangana</p>
              <p>PINCODE-99999</p>
          </div>
          <div className="contact">
              <p>fashionmart@mail.com</p>
              <p>99999999</p>
          </div>
      </div>
  )
}

export default Footer

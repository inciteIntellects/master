import React from 'react'
import myImage from '../assets/inciteLogo.png'

function Home() {
  return (
    <div>
      <div>
        <img
        src={myImage}
        alt="My Image"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '200px', // Set the width and height as per your requirement
        }}
        />
        </div>
        <div className='heading-content'>
          <h1>InciteIntellects</h1>
        </div>
    </div>
  )
}

export default Home
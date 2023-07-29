import React from 'react'
import Navbar from './NavBar'
import myImage from '../assets/inciteLogo.png'

const Landing = () => {
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
            <Navbar />
        </div>
    )
}

export default Landing
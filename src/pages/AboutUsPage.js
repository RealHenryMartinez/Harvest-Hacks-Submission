

import React from 'react'
import restaurantIcon from '../assets/restaurantIcon.png'
import '../styles/Image.css'
import '../styles/Text.css'

const AboutUsPage = () => {
  return (
    <div>
        <h1 id="about-us-header">About Us</h1>

        
        <div >
            
            

            <img id="front-image-icon" style={{ float: "right"}} src={restaurantIcon} alt="front-image" />
            <p>
            <p className="about-me">Hello, my name is henry and this website is for you to have a recipe available for any last minute meal preparations. (Especially in Parties) As the holidays are approaching, hope this random recipe generator will find you the recipe you desire.</p>
            </p>
            <div style={{ clear: "right" }} />
        </div>
    </div>
  )
}

export default AboutUsPage
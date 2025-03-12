import React from 'react'
import "./Hero.css"


const Hero = ({isDirectionLeft, heading, description, image, country}) => {
  console.log("props", country )
  return (
    <div className='hero_container' style={{flexDirection: isDirectionLeft ? 'row-reverse' : 'row'}}
    >
        <div className='content_container'>
          <h1>
           {heading}
          </h1>

          <p>{description}</p>
          

          <button>Shop now !</button>
        </div>


        <div className='image_container'>
            <img src={image}/>
        </div>
 
    </div>
  )
}

export default Hero
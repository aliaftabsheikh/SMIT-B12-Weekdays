import React from 'react'
import "./Hero.css"
const Hero = (props) => {
  return (
    <div className='hero_container' style={{flexDirection: props.isDirectionLeft ? 'row-reverse' : 'row'}}
    >
        <div className='content_container'>
          <h1>
           {props.heading}
          </h1>

          <p>{props.description}</p>


          <button>Shop now !</button>
        </div>


        <div className='image_container'>
            <img src={props.image}/>
        </div>
    </div>
  )
}

export default Hero
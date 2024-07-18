/* eslint-disable no-unused-vars */
import React from 'react'

function ImageCard() {
   let imageStyle = {
       border: "2px solid black",
       borderRadius: "5px",
       
      }

  return (
    <>
    <div style={imageStyle} >
      
    <img src="https://placehold.co/300x200" alt="features_Image"/>
    </div>
   

    </>
  )
}

export default ImageCard
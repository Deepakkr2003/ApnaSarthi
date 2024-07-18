/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ImageCard from './ImageCard'

function Card({title, desc}) {
   let cardStyle = {
    border: "3px solid #6b7280",
    borderRadius: "0.5rem",
    boxShadow:" 1px 2px #888888",
    display: "flex",
    flexDirection: "column",
     justifyContent: "spaceBetween",
    alignItems:"center",
    width:'300px',
    marginRight: "3rem",
     marginTop:"1.2rem",
    textAlign:"center",
    color:"#e2e8f0",
    fontFamily: "Times, Times New Roman",
     postion: "relative"   

    }

    let btnStyle =  {
        border: "0.2rem solid red",
        borderRadius: '2rem',
        display: "flext",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem 2rem",
        marginBottom:"0.5rem",
        marginLeft: "9rem",
        cursor: "pointer",
        marginTop: "1rem",
        fontFamily:"",
        postion:"absolute",
       
         }


    let titleStyle = {
        fontSize: "1.25rem",
        border: "2px solid #6b7280",
        borderRadius: "2rem",
        backgroundColor: "cbd5e1",
        color: "9ca3af",
        margin: "1rem",
        fontFamily: " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        padding: "0.25rem",
    }

    let descStyle = {
        fontSize: "1.2rem",
        margin:"2rem 1rem 2rem 1rem"
    }

   return (
    <>
    <div className='card' style={cardStyle}>
    <ImageCard/>
    <div className='card-buttom'>
         <h2 className='title' style={titleStyle}>{title}</h2>
         <p className='description' style={descStyle}>{desc}</p>
      </div>

      <button className='card-btn' style={btnStyle}>Click me</button>
   
     </div>
   
     </>
  )
}

export default Card
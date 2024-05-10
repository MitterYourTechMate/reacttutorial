import React, { useState, useEffect } from 'react'

const FirstLandingText = ({data, setData}) => {

  // let data = 0
  
  
  console.log(data)

  useEffect(() => {

    let elements = document.getElementsByClassName("topbar")
      for (var i = 0; i < elements.length; i++) {
        elements[i].style = `background-color:${data}`
      }
    
  }, [data])


  const handleMouseOver = () => {
    // console.log("Mouse is over Hello")
    
    let elements = document.getElementsByClassName("landingtext")
    for (var i = 0; i < elements.length; i++) {
      elements[i].style = "color:blue;font-size:80px"
    }

  }

    const handleMouseLeave = () => {
      // console.log("Mouse is over Hello")
      
      let elements = document.getElementsByClassName("landingtext")
      for (var i = 0; i < elements.length; i++) {
        elements[i].style = "color:black;font-size:50px"
      }
  
  }

  const handleClick = () => {
    // alert("Button has been clicked")
    if(data === "red"){
      setData("blue")
    } else {
      setData("red")
    }
    
    console.log(data)
  }

  

  return (
    <div draggable id="hello" className="landingtext" onDrag={handleMouseOver}>
      <div>
      Hello({data})
      </div>
      <div>
      <button onClick={handleClick}>CLICK</button>
      </div>
      </div>
  )

}

export default FirstLandingText
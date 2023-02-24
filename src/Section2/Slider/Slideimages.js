import React from 'react'

const Slideimages = (props) => {
  return (
    <div id={props.index} className={props.visible} ><img src={props.image} /></div>
  )
}

export default Slideimages

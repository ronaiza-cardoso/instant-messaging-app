import React from 'react'

const addChannel = () => {
  const handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      console.log(evt.target.value)
      evt.target.value = ''
    }
  }
  
  return (
    <input type="text" placeholder="New Channel" onKeyUp={handleKeyUp} />
  )
}

export default addChannel
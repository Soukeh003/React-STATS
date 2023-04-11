import React from 'react'
import profilepic from "../Components/img/profilepic.webp"

const ChildrenComp = () => {
  const styleImage= {width: 350}

  return (
    <div>
        <h1>My Profile PIC</h1>
        <img style={styleImage} src={profilepic} alt='' />
    </div>
  )
}

export default ChildrenComp
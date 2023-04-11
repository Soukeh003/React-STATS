import React from 'react'


const Profile = ({FullName, Bio, Profession, children}) => {
  return (
    <div>
        <h1>FullName: {FullName}</h1>
        <h1>Bio: {Bio}</h1>
        <h1>Profession: {Profession}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Profile;
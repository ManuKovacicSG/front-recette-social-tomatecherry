import React from 'react'
import PrimaryNavbar from '../../components/PrimaryNavbar'
import Login from '../Login/Login'


const Profile = () => {
  return (
    <>
    <div className='text-white'>This is the profile. Boom!</div>
    <Login handleSubmit={function (event: React.FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.')
      } } />
    <PrimaryNavbar/>
    </>
  )
}

export default Profile
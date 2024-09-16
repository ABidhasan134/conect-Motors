import React from 'react'

const Dashbord = () => {
  // console.log(name)
  return (
    <div>
      <h1>This layout for Dashbord </h1>
      <ul className='flex gap-5'>
        <li>Manage user</li>
        <li>Request</li>
        <li>List</li>
        {/* <li>{name}</li> */}
      </ul>
    </div>
  )
}

export default Dashbord

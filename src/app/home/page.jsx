import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

const Home =async () => {
  const session=await getServerSession(authOptions);
  // console.log("server session is here",session)
  return (
    <div>
      Home is here
    </div>
  )
}

export default Home

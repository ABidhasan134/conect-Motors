'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Logout = () => {
    const sessoin=useSession()
  return (
    <div className="flex items-center">
      <button className="btn" onClick={()=>signOut()}>Log out</button>
      <Image width={200} height={200} alt={sessoin?.data?.user?.image} src={sessoin?.data?.user?.image}></Image>
    </div>
  )
}

export default Logout

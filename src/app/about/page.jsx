import Link from 'next/link'
import React from 'react'
// import Historypage from './history/page'

const aboutpage = () => {
  return (
    <div className='grid'>
      About page is here
      <Link href={`/about/history`}>History</Link>
      <Link href={`/about/misson`}>Misson</Link>
    </div>
  )
}

export default aboutpage

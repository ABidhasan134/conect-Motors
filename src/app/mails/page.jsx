
import MailsFood from '@/components/mails/mailsFood'
import React from 'react'

// matadata do what helmets did and also discription for seo
export const metadata={
    title: "Food | ",
    discription: "Meals for everyone"
}

const mails = () => {
   
  return (
    <div className='p-6 m-6 gap-2'>
        <h1>Food for Your</h1>
        <p>choose your food</p>
        <MailsFood></MailsFood>
    </div>
  )
}

export default mails

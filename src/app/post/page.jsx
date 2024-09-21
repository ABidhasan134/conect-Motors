import Link from 'next/link'
import React from 'react'

export const getpost= async()=>{
  // process.env.API_KEY_URL will work on node environments but not in the other if we went to 
  // work on different environments we should add in .env file like NEXT_PUBLIC_API_KEY_URL
const res=await fetch(`${process.env.API_KEY_URL}/posts`)
const data=res.json()
return data
}

const postPage = async() => {
    const postdata=await getpost()
    // console.log("This is from the env file",process.env.API_KEY_URL)
  return (
    <div className='grid grid-cols-4 gap-6'>
      { postdata.map((post)=>{
        return(<div className="card glass w-96" key={post.id}>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <div className="card-actions justify-end">
            <Link href={`/post/${post.id}`}><button className="btn btn-primary">post Details!</button></Link>
          </div>
        </div>
      </div>)
      })
      }
    </div>
  )
}

export default postPage

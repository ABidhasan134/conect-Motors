import Link from 'next/link'
import React from 'react'

export const getpost= async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/posts')
const data=res.json()
return data
}

const postPage = async() => {
    const postdata=await getpost()
    // console.log(postdata)
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

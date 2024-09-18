import React from 'react'
import { getpost } from '../page'
const getPostData= async(id)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=res.json()
    return data
    }
const postDiteils = async({params}) => {
    const Diteils=await getPostData(params.id)
    console.log(Diteils)
  return (
    <div className='border-2 p-6 m-6'>
        {params.id}
        <h1>{Diteils.title}</h1>
        <p>{Diteils.body}</p>
    </div>
  )
}

export default postDiteils

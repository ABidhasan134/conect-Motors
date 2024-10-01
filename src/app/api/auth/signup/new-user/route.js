 
import coneectDB from '@/lib/coneectDB'
import React from 'react'
export const POST = async() => {
  try{
    const db= await coneectDB(request);
    const userCollections=db.collection('user')
    const newUser= await request.json();
    const res= await userCollections.insertOne(newUser);
    return Response.json({massge:"new user added"})
  }
  catch(err){
    return Response.json({massge:"somthing is wrong"});
  }
}



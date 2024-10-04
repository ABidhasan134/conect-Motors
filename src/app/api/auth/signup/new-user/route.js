 
import coneectDB from '@/lib/coneectDB'

export const POST = async(request) => {
  try{
    const db= await coneectDB();

    const userCollections=db.collection('user')
    const newUser= await request.json();
    console.log(newUser);
    const res= await userCollections.insertOne(newUser);
    return Response.json({massge:"new user added"})
  }
  catch(err){
    return Response.json({massge:"somthing is wrong"});
  }
}



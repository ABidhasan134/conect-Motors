// chaching 
// contorl the caching behavior of next.js
// export const dynamic="force-dynamic"
export async function GET(){
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}
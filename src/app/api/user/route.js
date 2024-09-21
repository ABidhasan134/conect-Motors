export async function GET() {
    return Response.json({
        comments
    })
} 

export async function POST(req) {
const newComment= await req.json()
comments.push({
    id: comments.length+1,
    text: newComment.text
})
return Response.json({
    message: 'new comment added successfully',
    comments
})
}

const comments=[
    {
        id: 1,
        comment: "comment 1"
    },
    {
        id: 2,
        comment: "comment 2"
    },
    {
        id: 3,
        comment: "comment 3"
    }
]
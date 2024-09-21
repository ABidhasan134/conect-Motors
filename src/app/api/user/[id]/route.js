const comments = [
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
  ];
  
  export async function PATCH(request, { params }) {
    const body = await request.json();
    
    // Find the index of the comment with the matching id
    const index = comments.findIndex((current) => current.id === parseInt(params.id));
    
    if (index === -1) {
      return new Response(JSON.stringify({
        message: `Comment with id ${params.id} not found`
      }), { status: 404 });
    }
  
    // Update the comment at the found index
    comments[index] = {
      ...comments[index],
      comment: body.comment, // Assuming 'comment' is the correct field to update
    };
  
    return new Response(JSON.stringify({
      message: `Dynamically updated comment with id ${params.id}`,
      comments
    }), { status: 200 });
  }

  export async function DELETE(request, { params }) {
    // Filter out the comment with the matching id
    const newComments = comments.filter((item) => item.id !== parseInt(params.id));
  
    if (newComments.length === comments.length) {
      return new Response(JSON.stringify({
        message: `Comment with id ${params.id} not found`
      }), { status: 404 });
    }
  
    return new Response(JSON.stringify({
      message: `Comment with id ${params.id} deleted`,
      comments: newComments
    }), { status: 200 });
  }
  
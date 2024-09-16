import React from 'react'
import vlogs from '../../date.json'
import Link from 'next/link'
const Blogs = () => {
  const vloges = [
    {
      "id": 1,
      "title": "A Day in the Life of a Web Developer",
      "author": "Jane Doe",
      "publishedDate": "2024-09-15",
      "duration": "15:30",
      "views": 10234,
      "likes": 1245,
      "category": "Tech",
      "tags": ["web development", "developer life", "coding"],
      "description": "Follow a web developer through a typical day of coding, meetings, and coffee breaks.",
      "url": "https://example.com/vlog1"
    },
    {
      "id": 2,
      "title": "Exploring React 18 New Features",
      "author": "John Smith",
      "publishedDate": "2024-08-20",
      "duration": "12:45",
      "views": 8547,
      "likes": 987,
      "category": "Programming",
      "tags": ["React", "JavaScript", "frontend"],
      "description": "An in-depth look at the new features and improvements in React 18.",
      "url": "https://example.com/vlog2"
    },
    {
      "id": 3,
      "title": "Travel Vlog: Exploring the Alps",
      "author": "Sarah Lee",
      "publishedDate": "2024-09-10",
      "duration": "20:00",
      "views": 15783,
      "likes": 2300,
      "category": "Travel",
      "tags": ["travel", "Alps", "adventure"],
      "description": "Join me on an adventure through the breathtaking landscapes of the Alps.",
      "url": "https://example.com/vlog3"
    },
    {
      "id": 4,
      "title": "How to Start a YouTube Channel",
      "author": "Tom Parker",
      "publishedDate": "2024-07-25",
      "duration": "10:20",
      "views": 6700,
      "likes": 750,
      "category": "Business",
      "tags": ["YouTube", "content creation", "business"],
      "description": "A step-by-step guide to starting and growing your own YouTube channel.",
      "url": "https://example.com/vlog4"
    }
  ]
  return (
    <div className='flex flex-auto gap-5'>
      {
        vloges.map((vlog, index)=>{
          return <div className="card glass w-96"  key={vlog.id}>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{vlog.title}</h2>
            <p>{vlog.description}</p>
            <div className="card-actions justify-end">
              {/* dynamic routing for every vlog */}
              {/* we have to create folder inside the blogs folder */}
            <Link href={`/blogs/${vlog.id}`}> <button className="btn btn-primary">Book now!</button></Link>
            </div>
          </div>
        </div>
        })
      }
    </div>
  )
}

export default Blogs

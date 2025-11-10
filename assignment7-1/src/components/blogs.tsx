'use client'
import { useState, useEffect } from "react"


type Post = {
  id?: number,
  title: string,
  content: string,
}

export default function Blogs() {

  const [posts, setposts] = useState<Post[]>([])

  useEffect(() => {
    fetch("api/blog")
      .then(r => r.json())
      .then(data => setposts(data))
  }, [])

  function deletePost(id: number | undefined) {
    if (id) {
      fetch("/api/blog", {
        method: "DELETE",
        body: JSON.stringify({ id: id })
      })
    }
  }


  return (
    <div>
      {
        posts.map((post, i) => (
          <div key={i}>
            <h5>{post.title}</h5>
            <div>{post.content}</div>
            <button onClick={()=>deletePost(post.id)}>Delete</button>
            <hr/>
          </div>
        ))
      }
    </div>
  )
}
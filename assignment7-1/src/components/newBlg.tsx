'use client'
import { useState } from "react"

export default function NewBlog(){

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  function createPost(){
    fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({title: title, content: content})
    })
  }

  return (
    <div>
      <input type="text"
      value={title}
      placeholder="Title"
      onChange={(e)=>setTitle(e.target.value)}
      />
      <br/>
      <textarea
      value={content}
      placeholder="Content"
      rows={10}
      cols={30}
      onChange={(e)=>{setContent(e.target.value)}}
      />
      <br/>
      <button onClick={createPost}>Submit</button>

    </div>
  )
}
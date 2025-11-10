import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost, deletePost, updatePost, getPostById } from "@/lib/queries";

export async function GET(request: NextRequest){

  const id = request.nextUrl.searchParams.get("id")

  if (id){
    return NextResponse.json(getPostById(Number(id)) ?? {success: false})
  }
  else{
    return NextResponse.json(getAllPosts())
  }
  //returns contexnt of the post
  // const r = createPost("title", "some content")

  //returbns 1 if successfull or 0 if unsuccesfull
  // const r = deletePost(1)

  //returns 1 if successfull or 0 if unsuccesfull
  // const r = updatePost(1, "a new title", "something else again")

  //returns post if succesfull or undefined if not succesfull
  // const post = getPostById(1)

}

export async function POST(request: NextRequest){
  const body = await request.json()

  if (!body || !body.title || !body.content){
    return NextResponse.json({succcess: false})
  }
  
  return NextResponse.json(createPost(body.title, body.content))
}

export async function DELETE(request: NextRequest){
  const body = await request.json()

  if (!body || !body.id){
    return NextResponse.json({succcess: false})
  }
  
  return NextResponse.json(deletePost(body.id))
}
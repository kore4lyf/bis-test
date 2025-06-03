
import { fetchBlogData } from "@/util/fetchBlogData"
import { notFound } from "next/navigation"
import React from 'react'

const HomePage = async () => {
  
  const { posts, siteTitle, siteDescription } = await fetchBlogData()
  
  let blogData

  try {
    blogData = await fetchBlogData()
  } catch (err) {
    throw new Error("Error fetching blog posts")
  }

  if(!blogData) notFound()

  return (
    <main className="grid gap-5">
        <div>
          <h1 className="page_title">{siteTitle}</h1>
          <p>{siteDescription}</p>
        </div>

        <h2 className="post_title">Posts</h2>
        <ul className="post_list">
          {posts.map((post, idx) => (
            <li key={idx+`${post.title}`} className="relative pl-7 mb-2">{post.title}</li>
          ))}
        </ul>
    </main>
  )
}

export default HomePage
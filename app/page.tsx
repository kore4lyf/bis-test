
import Loading from "@/components/Loading"
import StoreCurrency from "@/components/StoreCurrency"
import { fetchBlogData } from "@/lib/fetchBlogData"
import { notFound } from "next/navigation"
import React, { Suspense } from 'react'

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
    <main className="grid gap-16">
      <section>
        <h1 className="page_title">{siteTitle}</h1>
        <p>{siteDescription}</p>
      </section>
      
      <section className="flex flex-col gap-4">
      <h2 className="post_title">Part 1: Connect Next.js to WordPress</h2>
        <ul className="post_list">
          {posts.map((post, idx) => (
            <li key={idx+`${post.title}`} className="relative pl-7 mb-2">{post.title}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="post_title">Part 3: REST API - Retrieve Plugin Variable</h2>
        <Suspense fallback={<Loading/>}>
          <StoreCurrency/>
        </Suspense>
      </section>
    </main>
  )
}

export default HomePage
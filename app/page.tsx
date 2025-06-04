
import Loading from "@/components/Loading"
import NameForm from "@/components/NameForm"
import StoreCurrency from "@/components/StoreCurrency"
import { fetchBlogData } from "@/lib/fetchBlogData"
import { notFound } from "next/navigation"
import React, { Suspense } from 'react'

const HomePage = async () => {
  
  
  let blogData
  

  try {
    blogData = await fetchBlogData()
  } catch (err) {
    throw new Error("Error fetching blog posts")
  }

  if(!blogData) notFound()
  
  const { posts, siteTitle, siteDescription } = blogData

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
      
      <section className="flex flex-col gap-4">
        <h2 className="post_title">Part 4: REST API - Custom Name Form</h2>
        <NameForm/>
      </section>
    </main>
  )
}

export default HomePage
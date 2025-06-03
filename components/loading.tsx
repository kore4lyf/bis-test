import React from 'react'

const loading = () => {
  return (
    <div className="flex gap-3">
      <p>Loading Blog Posts</p>
      <div className="spinner"></div>
    </div>
  )
}

export default loading
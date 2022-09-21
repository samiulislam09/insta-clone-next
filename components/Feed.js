import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

function Feed({ storyData }) {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
          <section className='col-span-2'>
        <Stories storyData={storyData}></Stories>
        <Posts></Posts>
          </section>
    </div>
  )
}

export default Feed
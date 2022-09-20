import React from 'react'
import Story from './Story'

function Stories({ storyData }) {
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {
        storyData?.map((story) => <Story key={story.id} story={story}></Story>)
          }
    </div>
  )
}

export default Stories



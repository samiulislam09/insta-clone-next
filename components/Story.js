import React from 'react'

function Story({story}) {
  return (
      <div className=''>
          <img src={story.picture} className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain object-cover transition transform duration-200 ease-out'></img>
          <p className='text-xs w-14 truncate text-center mt-1'>{ story.firstName }</p>
      </div>
  )
}

export default Story
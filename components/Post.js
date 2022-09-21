import { ChatIcon, DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import React from 'react'

function Post({post}) {
  return (
      <div className='bg-white mb-4 rounded-sm max-h-full my-2'>
          <div className='flex items-center p-5'>
              <img className='h-10 w-10 rounded-full' src={post.profileImg} alt="profile" />
              <p className='ml-4 flex-1'>{post.userName}</p>
              <DotsHorizontalIcon className='h-10 w-10 text-gray-500 cursor-pointer' />
          </div>
          <img className='object-cover' src={post.postImg} alt="post" />
          <div className='flex space-x-4 items-center'>
              <HeartIcon className='btn'></HeartIcon>
              <ChatIcon className='btn'></ChatIcon>  
              <PaperAirplaneIcon className='btn'></PaperAirplaneIcon>
          </div>
    </div>
  )
}

export default Post
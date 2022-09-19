import Image from 'next/image'
import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
    UserGroupIcon
} from '@heroicons/react/outline'

function Header() {
  return (
      <div className='shadow-sm sticky top-0 z-50 bg-white'>
          {/* left */}
          <div className='flex max-w-6xl justify-between mx-6 md:mx-auto'>
              <div className='relative hidden lg:inline-grid w-24'>
                  <Image src='https://links.papareact.com/ocw' alt='' layout='fill' objectFit='contain'></Image>
              </div>
              <div className='relative lg:hidden w-10 flex-shrink-0'>
                  <Image src='https://links.papareact.com/jjm' alt='' layout='fill' objectFit='contain'></Image>
              </div>

              {/* middle */}
              <div className='relative mt-1 p-3 rounded-md'>
                  <div className='absolute inset-y-0 pl-3 flex items-center py-4'>
                      <SearchIcon className='h-5 w-5 text-gray-400'></SearchIcon>
                  </div>
                  <input className='bg-gray-50 block w-full pl-10 text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type="text" placeholder='Search' />
              </div>

              {/* right */}
              <div className='flex items-center space-x-4'>
                  <HomeIcon className='navBtn'></HomeIcon>
                  <MenuIcon className='h-6 w-6 cursor-pointer md:hidden text-black '></MenuIcon>
                  <div className='relative navBtn'>
                      <PaperAirplaneIcon className='rotate-45'></PaperAirplaneIcon>
                      <p className='absolute -top-3 -right-2 text-white text-center bg-red-500 rounded-full text-xs w-5'>3</p>
                  </div>
                  <PlusCircleIcon className='navBtn'></PlusCircleIcon>
                  <UserGroupIcon className='navBtn'></UserGroupIcon>
                  <HeartIcon className='navBtn'></HeartIcon>
                  <img className='h-10 w-10 cursor-pointer rounded-full' src="https://scontent.fdac148-1.fna.fbcdn.net/v/t39.30808-6/289283873_2958488461108158_6945804398433313990_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFqiRl3ifIsAoJogMn5AT7chD5NDb_Pk6OEPk0Nv8-To8Ltj8tUA0sF_N3MZmuOzMtWkIPvZIZ63aMqgpQaaB8P&_nc_ohc=HK-D0ZeWIioAX-rBWrI&tn=6dbdz11tw1Stp6mH&_nc_ht=scontent.fdac148-1.fna&oh=00_AT8lUIp4xZ7_c5HXDU6ZHkfrGdcHvnQGsrn3fp34JrbOvg&oe=632E21E6" alt="" />
              </div>
          </div>
    </div>
  )
}

export default Header
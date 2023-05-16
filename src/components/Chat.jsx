// import React from 'react'
import {Avatar} from '../ui/Avatar'
import {Input} from '../ui/Input'

export const Chat = () => {
  return (
    <div className="flex flex-col w-full border-l border-gray-600 h-screen">
      <div className="bg-[#202c33] py-3 w-full flex items-center">
         <Avatar />
         <div>Имя</div>
      </div>
      <div className='flex flex-col h-full bg-[#111b21]'>
         <div className='flex-grow'>123</div>
         <div className='bg-[#343f46] flex'>
            <div className='basis-11/12'><Input placeholder="Сообщение..."/></div>
            <button className='mx-auto'>S</button>
         </div>
      </div>
    </div>
  )
}

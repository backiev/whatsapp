// import React from 'react'
import {Input} from '../ui/Input'

export const MessageInput = () => {
  return (
   <div className='bg-[#343f46] flex sticky bottom-0 w-full p-1'>
      <div className='basis-10/12'><Input placeholder="Сообщение..."/></div>
      <button className='mx-auto  rounded px-3 bg-gray-600'>Отправить</button>
   </div>
  )
}

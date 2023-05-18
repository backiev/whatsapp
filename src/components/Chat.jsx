// import React from 'react'
import {Avatar} from '../ui/Avatar'
// import {Input} from '../ui/Input'
import {Message} from './Message'
import {MessageInput} from './MessageInput'


export const Chat = () => {
  return (
    <div className="flex flex-col w-full border-l border-gray-600 h-screen">
      <div className="bg-[#202c33] py-3 w-full flex items-center">
         <Avatar />
         <div>Имя</div>
      </div>
      <div className='flex flex-col h-full overflow-auto bg-[#111b21] relative w-full'>
         <div className='flex-grow flex flex-col justify-end p-2'>
          <Message text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa ipsum provident neque iure recusandae quis ducimus libero error eos, quasi eaque nulla cupiditate? Nulla debitis neque at, velit quis dolorum harum molestias hic eius possimus doloribus quos eum nostrum architecto cumque quas incidunt illum ratione eligendi consectetur! Debitis assumenda nobis optio ratione ex expedita, aspernatur accusantium sed corrupti dolorum nihil hic doloremque facilis quasi nisi impedit beatae quas iste voluptas laudantium distinctio. Est porro possimus facilis nesciunt sit, veniam dolorum voluptatibus quidem amet distinctio accusamus veritatis aperiam quia atque unde aliquid dolor quibusdam omnis placeat voluptatum sequi hic ipsum tempore! Adipisci, est dicta. Illum nulla facilis autem eaque excepturi beatae laboriosam? Porro doloremque cum ipsa quam, sed cupiditate! Aliquam id consequatur nulla!'}/>
          <Message text={'Привет'} myMessage={true}/>
         </div>
         <MessageInput />
      </div>
    </div>
  )
}

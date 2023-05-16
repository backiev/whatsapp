import {Avatar} from '../ui/Avatar'

export const SidebarChat = () => {
  return (
   <div className='py-3 hover:bg-[#343f46] cursor-pointer flex items-center w-full border-b border-gray-600'>
      <Avatar />
      <div>
         <div className='font-bold'>Мои родные</div>
         <div className='text-sm'>Тетя эля: 1231231231231</div>
      </div>
   </div>
  )
}

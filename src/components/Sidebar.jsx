import {Avatar} from '../ui/Avatar'
import {Input} from '../ui/Input'
import {SidebarChat} from './SidebarChat'


export const Sidebar = () => {
  return (
    <div className="basis-2/5 flex flex-col h-full">
      <div className="bg-[#202c33] py-3">
         <Avatar />
      </div>
      <div className='bg-[#111b21] flex'>
         <Input placeholder="Search......"/>
      </div>
      <div className='flex bg-[#111b21] flex-col flex-grow'>
         <SidebarChat />
         <SidebarChat />
         <SidebarChat />
      </div>
    </div>
  )
}

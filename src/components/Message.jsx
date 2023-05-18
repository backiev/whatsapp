export const Message = ({text, myMessage}) => {
  return (
   <div className={`bg-[#202c33] ml-6 mr-6 mb-3  p-2 rounded max-w-lg text-sm ${myMessage ? 'self-end rounded-se-none' : 'self-start rounded-ss-none'}`}>
      {text}
   </div>
  )
}

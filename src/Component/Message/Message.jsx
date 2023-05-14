import React from 'react'
import { auth } from '../../firebase'

const style = {
    sent : `bg-[#395dff] text-whit flex-row-reverse text-end float-right rounded-bl-full`,
    received : `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}
export default function Message({message}) {
    const messageClass =
    message.uid === auth.currentUser.uid
    ? `${style.sent}`: `${style.received}` 

  return (
    <>
        <div className={`${style.message} ${messageClass}`}>
            <p className='fixed mt-[-4rem] text-gray-600 text-xs'>{message.name}</p>
            <p>{message.text}</p>
        </div>
    </>
  )
}

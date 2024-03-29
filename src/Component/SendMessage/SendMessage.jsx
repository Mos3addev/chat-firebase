import React,{useState} from 'react'
import {db} from '../../firebase'
import { addDoc,collection, serverTimestamp } from 'firebase/firestore'
import { useAuthContext } from '../../context/AuthContext';


export default function SendMessage({scroll}) {
  const [input, setInput] = useState('');
  const { user } = useAuthContext();
  const sendMessage = async (e)=>{
    e.preventDefault()
    if(input === ''){
      alert('Please enter a valid message')
      return
    }

    const { nameid: uid,  FirstName, LastName} = user;
    await addDoc(collection(db, 'messages'), {
      text:input,
      name : `${FirstName} ${LastName}`,
      uid,
      timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
    <form onSubmit={sendMessage} className='h-14 w-full max-w-[728px] flex text-xl absolute bottom-0'>
      <input type="text" placeholder='Message' value={input} onChange={(e)=> setInput(e.target.value)} className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none' />
      <button className='w-[20%] bg-green-500' type='submit'>Send</button>
    </form>
    </>
  )
}

import React from 'react'
import { auth } from './../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from '../SignIn/SignIn';
import LogOut from '../LogOut/LogOut';

const style ={
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4 mb-5`,
    heading: `text-white text-3xl`
  }
export default function Navbar() {
  const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {!user ? <SignIn /> : <LogOut />}
    </div> 
  )
}

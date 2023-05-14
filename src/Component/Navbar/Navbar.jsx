import React from 'react'
import { auth } from './../../firebase';
import SignIn from '../SignIn/SignIn';
import LogOut from '../LogOut/LogOut';
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const style ={
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4 mb-5`,
    heading: `text-white text-3xl`
  }
export default function Navbar() {
  const { user } = useAuthContext();
  return (
    <div className={style.nav}>
        <Link to="/"><h1 className={style.heading}>Chat App</h1></Link>
        {!user ? <SignIn /> : <LogOut />}
    </div> 
  )
}

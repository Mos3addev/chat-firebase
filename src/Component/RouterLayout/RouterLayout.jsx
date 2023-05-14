import React  from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { auth } from './../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
const style ={
        appContainer: `max-w[728px] mx-auto text-center`,
        sectionContainer: `fkex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

export default function RouterLayout() {
  const [user] = useAuthState(auth)
return<>
<div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar/>
        {user ? <Outlet></Outlet> : null}
      </section>
    </div>
</>
}

import RouterLayout from "./Component/RouterLayout/RouterLayout";

import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Chat from './Component/Chat/Chat';
export default function App(){
  
  const routers = createBrowserRouter([
    {
        path: '/' , element : <RouterLayout/> ,
        children : [
         {index:true , element: <Chat/>} 
        ]
    }
  ])
  return <RouterProvider router={routers}/>
}
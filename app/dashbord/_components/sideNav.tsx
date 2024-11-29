
"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, {useEffect} from 'react'


function sideNav() {

  const MenuList = [
     {
       name:"Home",
       icon:Home,
       path:'/dashbord'
     },
     {
      name:"History",
      icon:FileClock,
      path:'/dashbord/history'
    },
    {
      name:"Billing",
      icon:WalletCards,
      path:'/dashbord/billing'
    },
    {
      name:"Setting",
      icon:Settings,
      path:'/dashbord/setting'
    }
  ]
 
const path = usePathname();
useEffect(()=>{
  console.log(path)
},[])


  return (
  
      <div className='h-screen p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src= {'/logo.svg'} alt='logo' width={58} height={58}/>
            </div>
            <hr className='my-6 border'/>
            <div className='mt-3'>
                {MenuList.map((menu,index)=>(
                  <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                    ${path==menu.path&&'bg-primary text-white'}
                  `}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                  </div>
                ))}
            </div>
      </div>
   
  )
}

export default sideNav
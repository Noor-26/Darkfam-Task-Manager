"use client"
import { useGlobalState } from '@/providers/globalProvider'
import React, { useState } from 'react'
import { RiHomeWifiFill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
  const {selectedTheme} = useGlobalState()
  const pathName = usePathname()
  const router = useRouter()
 
  const [active, setActive] = useState(false)
  const navigationItems = [
    { name: "All tasks", link: "", icon: <RiHomeWifiFill/> },
    { name: "Important", link: "important-tasks", icon: <FaChartSimple />},
    { name: "Completed", link: "completed-tasks", icon: <IoMdDoneAll /> },
  ];
  
  console.log("the theme is",pathName);
  return (
    <div className='p-2 flex justify-between flex-col  bg-black/50 m-4 rounded-lg'>
       <div className='flex items-center gap-4 hover:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer'  >

<img 
//  src={data.user?.image}
src="https://ui-avatars.com/api/?name=ChatGPT"
 alt="Profile picture" className='h-10 w-10 rounded-full' />
<p >
 {/* {data.user?.name} */}
 User
 </p>
</div>

<ul>
  
{navigationItems.map(item =>{
  return (
    <Link href={`/${item.link}`}  key={item.name} className={`flex  mb-2 ${pathName === `/${item.link}` ? 'border-r-2 border-green-400 bg-gray-900/50' : ''} px-4 py-2 items-center gap-2 cursor-pointer hover:bg-gray-900/50 ' `}>{item.icon} {item.name}</Link>
  )
})
     
} 
</ul>
   
   
    <div className='flex items-center gap-4 hover:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer'  >

<img 
//  src={data.user?.image}
src="https://ui-avatars.com/api/?name=ChatGPT"
 alt="Profile picture" className='h-10 w-10 rounded-full' />
<p >
 {/* {data.user?.name} */}
 Sign out
 </p>
</div>
      
    </div>
  )
}

export default Sidebar

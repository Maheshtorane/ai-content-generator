import React from 'react'
import { TEMPLATE } from './TemplateList'
import Image from 'next/image'
import Link from 'next/link'

function templateCard(item:TEMPLATE) {
  return (
   <Link href={'/dashbord/content/'+item?.slug}>
        <div className='p-2 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt='icon' width={50} height={50}/>
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
       </div>
    </Link>
  )
}

export default templateCard

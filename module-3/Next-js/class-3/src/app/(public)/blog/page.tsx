import { demiData } from '@/data/DemiDeta'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex gap-7 justify-center mt-10'>
        {
            demiData.map((item) => (
                <Link href={`/blog/${item.id}`} key={item.id} className='w-96'>
                <div  className='border p-4 my-2 flex flex-col gap-8 rounded-lg bg-slate-800 text-white shadow-lg'>

                    <h2 className='text-2xl font-bold'>{item.title}</h2>
                    <p className='text-gray-300'>{item.content}</p>
                   <p className='text-sm text-gray-500'>Author: {item.author}</p>
                </div>
        </Link>
            ))
        }
    </div>
  )
}

export default Blog
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-slate-800 text-shadow-white'>
        <div>LOGO</div>

        <div className='flex gap-8 '>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
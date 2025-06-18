import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div>
        <h2 className='text-3xl font-bold'>Dashboard</h2>

      <div className='mt-12'>
<ul>
  <li className='py-2'><Link href="/invoices">Invoices</Link></li>
  <li className='py-2'><Link href="/settings">Settings</Link></li>
  <li className='py-2'><Link href="/profile">Profile</Link></li>
  <li className='py-2'><Link href="/logout">Logout</Link></li>
</ul>
      </div>
    </div>
  )
}

export default SideBar
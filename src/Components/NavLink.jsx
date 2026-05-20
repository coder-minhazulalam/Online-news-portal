'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={isActive ? 'text-blue-600 border-b-2 border-solid border-blue-600 font-bold' : 'text-gray-500'}
    >
      {children}
    </Link>
  )
}

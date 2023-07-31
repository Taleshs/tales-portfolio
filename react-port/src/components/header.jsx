import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const activeClassName = "relative before:content-['*'] before:-top-4 before:left-1/2 before:-ml-1 before:absolute before:text-amber-400"

function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-[240px_1fr_240px]
     border-black border-2 bg-white'>

      <Link to='/' className='flex py-4 align-middle justify-center border-black border-r-2'>
        <h1 className='text-2xl font-bold uppercase leading-6'>Tales<br/>Henrique</h1>
      </Link>

      <Link to='/contato' className='md:col-start-3 border-black md:border-l-2 
      flex gap-2 items-center justify-center text-lg
      bg-yellow-300 hover:bg-yellow-500 ease-in-out duration-75
      '>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Contato
      </Link>

      <nav className='col-span-2 md:row-start-1 md:col-start-2
      md:col-end-3 border-t-2 border-black md:border-t-0 flex items-center
      justify-center'>
        
        <ul className='flex gap-6 max-w-sm overflow-auto
          snap-always p-4 text-lg
        '>
          <li>
            <NavLink to='/'
              className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
              Sobre mim
            </NavLink>
          </li>
          <li>
            <NavLink to='/contato' className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
              Contato
            </NavLink>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header
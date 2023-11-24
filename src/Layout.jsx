import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div >
        <h1>Accounts</h1>
        <nav >
            <ul>
                <li>
                    <Link to='/Hame'>Hame</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
                <li>
                    <Link to='/Proteced'>proteced</Link>
                </li>
            </ul>
        </nav>
        
         
       
        <Outlet/>

    </div>
  )
}

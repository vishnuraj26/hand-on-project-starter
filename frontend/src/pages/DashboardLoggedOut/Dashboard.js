import React from 'react';
import cuv_logo from './Logo/logo.png'
import lady from './Logo/lady.png'
import  './Dashboard.css'
export default function Dashboard() {
  return (
      <main role='main'>
          <nav className='na'>
            <img src={cuv_logo} alt='opps'/>
            <button className='login_button'><p>Login/Signup</p></button>
          </nav>

          <div className='poster'>
            <img src={lady} alt='straw hat' />
            <section></section>
            <span>Background IMAGE Remove</span>
            <p>100% automatic and free</p>
            <button className='view_app'><p>View App</p></button>
          </div>

        </main>

  )
}



import React from 'react';
import Link from 'next/link'

const Header = () => (
  <>
    <header>
      <div className='header_container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link href='/'>
            <a className='navbar-brand'>EDITOR Application</a>
          </Link>
          <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
              <Link href='/'>
                <a className='nav-item nav-link'>Home</a>
              </Link>
              <Link href='/editor'>
                <a className='nav-item nav-link'>Write</a>
              </Link>
              <Link href='/about'>
                <a className='nav-item nav-link'>About</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </>
)

export default Header
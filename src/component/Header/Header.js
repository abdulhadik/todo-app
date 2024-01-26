import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
     <header>
     <Link to='/'>HOME</Link>
     <Link to='/about'>ABOUT</Link>
     <Link to='/login'>LOGIN</Link>
     </header>
    </div>
  )
}
export default  Header;
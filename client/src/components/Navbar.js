import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <li>
            <Link to="/">About</Link>
        </li>
    </div>
  )
}

export default Navbar;
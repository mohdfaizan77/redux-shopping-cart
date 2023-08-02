import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const items = useSelector((state) => state.cart);

  if (location.pathname === '/') {
    // Show login button
    return (
        <div>

        </div>
    //   <nav className="">
    //     <ul className="text-right">
    //       <li>
    //         <a href="http://localhost:3000/">Login</a>
    //       </li>
    //     </ul>
    //   </nav>
    );
  } else {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="logo">REDUX STORE</span>
        <div>
        <span className="cartCount">Cart items: {items.length}</span>

          <Link className="navLink" to="/home">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <Link className="navLink" to="/">
            Logout
          </Link>
          
        </div>
      </div>
    );
  }
};

export default Navbar;

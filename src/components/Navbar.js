import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearState } from "../store/userSlice";

const Navbar = () => {
  const location = useLocation();
  const items = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear the user info from the store
    dispatch(clearState());
    // You can also perform any other logout-related actions here if needed
  };

  if (location.pathname === "/register" || location.pathname === "/login" || location.pathname === "/") {
    // Show login button
    return <div></div>;
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">REDUX STORE</span>
        <div>
          <span className="userName">{userInfo?.user.name}</span>
          <span className="cartCount">Cart items: {items.length}</span>

          <Link className="navLink" to="/home">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <Link className="navLink" to="/" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;

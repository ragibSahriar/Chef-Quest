import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <Link to="/register">Register</Link>
        </div>

        {user?.email ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
       
      </div>
    </div>
  );
};

export default Header;

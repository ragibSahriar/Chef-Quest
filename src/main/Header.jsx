import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
// import { useHistory } from 'react-router';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
// const history = useHistory();


  const handleLogOut = () => {
    logOut()
    .then()
    .catch((err)=>{
        console.log(err);
        // history.push("/");
    });
  };
  return (
   
     <div>
       <div className="bg-sky-100 flex justify-around   mx-auto items-center">
        <div className="">
          <a className="btn btn-ghost normal-case text-xl">Chef's Quest</a>
        </div>
        <div>
            <NavLink className="btn btn-ghost normal-case text-xl">
            Home
            </NavLink>
            <NavLink className="btn btn-ghost normal-case text-xl">Blog</NavLink>
        </div>
        

        <div>
        {user? (
            <li className="btn btn-primary">
            <button onClick={handleLogOut}>Logout</button>
                {/* <li>{user?.email}</li> */}
          </li>
        ) : (
          <Link to="/login">
            <li className="btn btn-primary">Login</li>
          </Link>
          
          )}
        </div>
        <img className="w-12 rounded-3xl hover:{user?.name}" src={user?.photoURL}/>
        
      </div>
      
     </div>
    // </div>
  );
};
export default Header;

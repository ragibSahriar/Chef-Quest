import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import ActiveLink from "e:/react/react-hook/src/activelink";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
// const history = useHistory();


  const handleLogOut = () => {
    logOut()
    .then()
    .catch((err)=>{
        console.log(err);
    });
  };
  return (
   
     <nav className="mx-auto space-x-4">
       <nav className=" text-white bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r  flex justify-around mx-auto items-center ">
        <div className="">
          <a className="btn btn-ghost normal-case text-xl">Chef's Quest</a>
        </div>
        <div className=" flex items-center">
            <ActiveLink to="/" className="btn normal-casetext-xl">
            Home
            </ActiveLink>
            <ActiveLink to="blog" className="btn btn-ghost normal-case text-xl">Blog</ActiveLink>
        </div>
        

        <div>
        {user? (
            <li className="px-2 py-1 rounded bg-gray-500 font-bold list-none">
            <button onClick={handleLogOut}>Logout</button>
          </li>
        ) : (
          <Link to="/login">
            <li className="btn btn-primary">Login</li>
          </Link>
          
          )}
        </div>
        <img className="w-8 bg-white  rounded-3xl hover:{user?.name}" src={user?.photoURL}/>
        
      </nav>
      
     </nav>
  );
};
export default Header;

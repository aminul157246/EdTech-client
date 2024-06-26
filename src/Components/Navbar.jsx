import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import logo from '../../src/assets/ed-tech.png'


const Navbar = () => {




  const { user, logOut } = useContext(AuthContext)

  // data fetch 
  const [carts, setCart] = useState([])

  useEffect(() => {
    axios.get(`https://ed-tech-server-five.vercel.app/carts?email=${user?.email}`)
      .then(res => {
        setCart(res.data);
        // console.log(res.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [user?.email]);





  const navItems = <>

    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/"}>Home</NavLink>
    </li>

    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/product"}>My Products</NavLink>
      <div className=" font-bold text-blue-500 p-4  ml-20 -mt-[55px]">
        <button >+{carts?.length}</button>
      </div>
    </li>


    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/payment"}>Payment</NavLink>
    </li>

    

    <li>
      {
        user ?

          <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  " : ""}
            onClick={logOut}
            style={{ background: 'none' }}>Log Out</NavLink>
          :
          <NavLink onClick={logOut} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold " : ""}
            style={{ background: 'none' }} to={"/login"}>Login </NavLink>
      }
    </li>

  </>

  return (
    <div>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2  rounded-3xl w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="normal-case text-xl"><img className='w-24' src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                <li>
                  <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost"
                    onClick={logOut}
                  >Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to='/login'>
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
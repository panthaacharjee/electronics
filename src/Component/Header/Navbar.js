import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const clsSidebar=()=>{
    setSidebar(!sidebar);
  }
    return (
        <>
            <div className="navbar">
              <div className="logo">
                <span><i class="fas fa-bars" onClick={clsSidebar}></i></span>
                <Link to="/">Electronics</Link>
              </div>
              <div className="menu">
                  <li><Link to="/laptop">Laptop</Link></li>
                  <li><Link to="/mobile">Mobile</Link></li>
                  <li><Link to="/watch">Watch</Link></li>
                  <li><Link to="/shirt">Shirt</Link></li>
                  <li><Link to="/signin">Sign In</Link></li>

              </div>
            </div>
            <div className={sidebar?"sidebar-menu active" : "sidebar-menu"}>
                  <li><Link to="/laptop">Laptop</Link></li>
                  <li><Link to="/mobile">Mobile</Link></li>
                  <li><Link to="/watch">Watch</Link></li>
                  <li><Link to="/shirt">Shirt</Link></li>
                  <li><Link to="/signin">Sign In</Link></li>

              </div>
        </>
    )
}

export default Navbar

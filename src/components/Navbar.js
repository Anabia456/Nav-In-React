import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {sidebarData.map((item, index) =>  {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

                        {/* above map method can also be done as follows */}
                        {/* <li className="nav-text">
                            <Link to="/" className="">
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/services" className="">
                                <FaIcons.FaServicestack />
                                <span>Services</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/contact" className="">
                                <AiIcons.AiFillContacts />
                                <span>Contact</span>
                            </Link>
                        </li> */}
                      
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

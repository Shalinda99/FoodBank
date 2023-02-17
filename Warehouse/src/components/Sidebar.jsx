import React, { useState } from 'react';
import {
    FaBars,
    FaPlusCircle,
    FaFileAlt,
}from "react-icons/fa";
import {BsSpeedometer2,BsBoxArrowRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<BsSpeedometer2/>
        },
        {
            path:"/Add items",
            name:"Add items",
            icon:<FaPlusCircle/>
        },
        {
            path:"/Item Details",
            name:"Item Details",
            icon:<FaFileAlt/>
        },
        {
            path:"/Issue Items",
            name:"Issue Items",
            icon:<BsBoxArrowRight/>
        },
       
      
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
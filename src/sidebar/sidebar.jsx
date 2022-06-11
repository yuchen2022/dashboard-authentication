import React from "react";
import './sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className="container  ">
        <ul className="sidebar badge bg-primary">
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>LogOut</span>
          </li>
       
        </ul>

        <div className="content"></div>
      </div>
    </>
  );
};

export default Sidebar;
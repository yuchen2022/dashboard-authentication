import { Button } from "bootstrap";
import React from "react";
import './sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className="container  ">
        <ul className="sidebar ">
          <li>
            <button>Dashboard</button>
          </li>
          <li>
            <button>LogOut</button>
          </li>
       
        </ul>

        <div className="content"></div>
      </div>
    </>
  );
};

export default Sidebar;
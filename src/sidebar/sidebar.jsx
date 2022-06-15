import React from "react";
import "./sidebar.css";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container  ">
        <ul className="sidebar ">
          <li>
            <button>Dashboard</button>
          </li>
          <li>
            <hr id="border" />
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              LogOut
            </button>
          </li>
          <hr id="log" />
        </ul>

        <div className="content"></div>
      </div>
    </>
  );
};

export default Sidebar;

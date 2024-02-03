//layout.jsx, VRAJ GOSWAMI, 301402875, 02/02/2024
import React from "react";
import { Link } from "react-router-dom";
import football1 from "../src/assets/my-logo.png";
export default function Layout() {
  return (
    <>
      <div className="row d-flex justify-content-between">
        <div className="col-sm-6">
            <Link to="/">
          <img
            src={football1}
            alt="football"
            className="football"
            width="100px"
            height="100px"
          />
            </Link>
        </div>
        <div className="col-sm-6">
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/skills">Skills</Link> |{" "}
            <Link to="/project">Project</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
}

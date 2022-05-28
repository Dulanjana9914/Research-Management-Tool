import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllTypes() {
  return (
    <div>
      <div className="t-list-container">
        <div style={{ backgroundColor: "#0F0934" }}>
          <div>
            <img
              className="img-side"
              src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"
            ></img>
          </div>
        </div>
        <nav class="navbar bg-light mt-5">
          
          {/* <div
            className=""
            style={{
              backgroundColor: "white",
              marginLeft: "10%",
              marginTop: "20px",
            }}
          >
            <h2>Research Project</h2>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

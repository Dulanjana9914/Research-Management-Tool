import React, { useRef, useState } from "react";
import axios from "axios";

import { ClassNames } from "@emotion/react";
import "./CSS/st.css";

export default function SubmitTypes() {
  const [Submission_Type_Name, setSubmissiontType] = useState("");
  const [Description, setDescription] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newType = {
      Submission_Type_Name,
      Description,
    };

    axios
      .post("http://localhost:8070/docType/type", newType)
      .then(() => {
        alert("Added New Submit Type");
        e.target.reset(); // to clear input fiels after submission
      })
      .catch((err) => {
        alert("err");
      });
  }

  return (
    <div>
      <form onSubmit={sendData}>
        <div className="t-list-container">
          <div style={{ backgroundColor: "#0F0934" }}>
            <div>
              <img
                className="img-side"
                src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"
              ></img>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div className="t-list-head-container">
              <label className="h-text" style={{ color: "#FF5631" }}>
                {" "}
                CREATE
              </label>{" "}
              <br className="br1" />
              <label className="h-text">SUBMIT TYPES</label>


            </div>

            <div className="t-list-tb-container">
              <div className="mb-3">
                <label className="t-form-label">
                  <b>Submission Type Name:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  onChange={(e) => {
                    setSubmissiontType(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Submission Type Description:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px", height: "100px" }}
                  id="cName"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <br></br>
              <br></br>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0F0934",
                  width: "200px",
                  fontWeight: "bold",
                }}
              >
                CREATE
              </button>
            </div>

            <div className="bottom-t-container">
              <label className="bottom-t" style={{ color: "#FF5631" }}>
                {" "}
                SLIIT
              </label>{" "}
              <label className="bottom-t"> Research</label> <br />
              <label className="bottom-t"> Management Tool</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";

export default function SubmitDocs() {
  const [Group_ID, setGroupID] = useState("");
  const [Research_Field, setResearch_Field] = useState("");
  const [Document, setDocument] = useState("");
  const [Comment, setComment] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newDoc = {
      Group_ID,
      Research_Field,
      Document,
      Comment,
    };
    axios
      .post("http://localhost:8070/document/", newDoc)
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
                DOCUMENT
              </label>{" "}
              <br className="br1" />
              <label className="h-text">SUBMISSION</label>
            </div>

            <div className="t-list-tb-container mt-3">
              <div className="mb-3">
                <label className="t-form-label">
                  <b>Group ID :</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  onChange={(e) => {
                    setGroupID(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Research Field:</b>
                </label>

                <select
                  className="form-control"
                  name="Field"
                  id="Field"
                  style={{ width: "450px", border: "2px solid #ced4da" }}
                  onChange={(e) => {
                    setResearch_Field(e.target.value);
                  }}
                >
                  <option value="Default">Select one</option>
                  <option value="Artificial Interligance">
                    Artificial Interligance
                  </option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Games">Games</option>
                  <option value="Robotics">Robotics</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="t-form-label">
                  <b>Upload Template/Document</b>
                </label>
                <div className="col-sm-4">
                  <input
                    className="form-control"
                    style={{ width: "450px" }}
                    type="file"
                    accept="image/png, image/jpeg"
                    id="image"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Comments:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px", height: "100px" }}
                  id="cName"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0F0934",
                  width: "200px",
                  fontWeight: "bold",
                  marginLeft: "50%",
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

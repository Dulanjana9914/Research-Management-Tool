import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";
import "./CSS/stgrup.css";

export default function StudentGroup() {
  const [Group_Leader_Name, setGroupLeaderName] = useState("");
  const [Student_ID, setStudentID] = useState("");
  const [Group_Leader_Email, setGroupLeaderEmail] = useState("");
  const [Member2_Name, setMember2Name] = useState("");
  const [Member2_ID, setMember2ID] = useState("");
  const [Member2_Email, setMember2Email] = useState("");
  const [Member3_Name, setMember3Name] = useState("");
  const [Member3_ID, setMember3ID] = useState("");
  const [Member3_Email, setMember3Email] = useState("");
  const [Member4_Name, setMember4Name] = useState("");
  const [Member4_ID, setMember4ID] = useState("");
  const [Member4_Email, setMember4Email] = useState("");
  const [Feedback, setFeedback] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newGroup = {
      Group_Leader_Name,
      Student_ID,
      Group_Leader_Email,
      Member2_Name,
      Member2_ID,
      Member2_Email,
      Member3_Name,
      Member3_ID,
      Member3_Email,
      Member4_Name,
      Member4_ID,
      Member4_Email,
      Feedback,
    };

    axios
      .post("http://localhost:8070/stdGroup", newGroup)
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
              <label
                className="h-text"
                style={{ color: "#FF5631", marginBottom: "-2em" }}
              >
                {" "}
                CREATE
              </label>{" "}
              <br />
              <label className="h-text">Student Group</label>
            </div>

            {/*right side column */}
            <div className="right_container">
              <div className="criteria_box mb-5 fw-bold">
                <div className="mb-3">
                  <label className="t-form-label">Group Leader Name:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setGroupLeaderName(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">
                    Group Leader Student ID:
                  </label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setStudentID(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Group Leader Email:</label>
                  <input
                    type="email"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setGroupLeaderEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 2 Name:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setMember2Name(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 2 Student ID:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setMember2ID(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 2 Email:</label>
                  <input
                    type="email"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setMember2Email(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 3 Name:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setMember3Name(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 3 Student ID:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setMember3ID(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 3 Email:</label>
                  <input
                    type="email"
                    style={{ width: "450px" }}
                    id="cName"
                    required
                    onChange={(e) => {
                      setMember3Email(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 4 Name:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    onChange={(e) => {
                      setMember4Name(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 4 Student ID:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    id="cName"
                    onChange={(e) => {
                      setMember4ID(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="t-form-label">Member 4 Email:</label>
                  <input
                    type="email"
                    style={{ width: "450px" }}
                    id="cName"
                    onChange={(e) => {
                      setMember4Email(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="t-form-label">
                    Feedback: if you have any concerns, add here.
                  </label>
                  <input
                    type="text"
                    style={{ width: "450px", height: "100px" }}
                    id="cName"
                    onChange={(e) => {
                      setFeedback(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="t-list-tb-container ">
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  style={{
                    backgroundColor: "#0F0934",
                    width: "200px",
                    fontWeight: "bold",
                    marginLeft: "60%",
                  }}
                >
                  SUBMIT
                </button>
              </div>
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

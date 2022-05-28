import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";
import FileInput from "./FileInput";

export default function UploadTemplate() {
  //file upload
  const [data, setData] = useState({
    name: "upload",
    Template: "",
    AdminName: "",
    Title: "",
    Description: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    console.log("21 ", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL + "template";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                UPLOAD
              </label>{" "}
              <br className="br1" />
              <label className="h-text">Document/Presentation Template</label>
            </div>

            <div className="t-list-tb-container mt-2">
              <div className="mb-3">
                <label className="t-form-label">
                  <b>Admin Name:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  name="AdminName"
                  onChange={handleChange}
                  value={data.AdminName}
                />
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Document/Presentation Title:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  name="Title"
                  onChange={handleChange}
                  value={data.Title}
                />
              </div>
              <div className="mb-3"></div>

              <div className="mb-3">
                <label htmlFor="formFile" className="t-form-label">
                  <b>Upload Template/Document</b>
                </label>
                <div style={{ width: "470px" }}>
                  <FileInput
                    name="song"
                    label="Choose File"
                    handleInputState={handleInputState}
                    type="file"
                    value={data.song}
                  />
                </div>
                <div className="col-sm-4">
                  <br></br>
                </div>
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Description about the Template/Document:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px", height: "100px" }}
                  id="cName"
                  name="Description"
                  onChange={handleChange}
                  value={data.Description}
                />
              </div>
              <br></br>

              <button
                type="submit"
                className="btn btn-primary mb-5"
                style={{
                  backgroundColor: "#0F0934",
                  width: "200px",
                  fontWeight: "bold",
                  marginLeft: "50%",
                }}
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="bottom-t-container " style={{ marginBottom: "-6em" }}>
        <label className="bottom-t" style={{ color: "#FF5631" }}>
          {" "}
          SLIIT
        </label>{" "}
        <label className="bottom-t"> Research</label> <br />
        <label className="bottom-t"> Management Tool</label>
      </div>
    </div>
  );
}

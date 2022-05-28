import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function MarkingList() {
  const [request, setRequest] = useState([]);

  const [spec, setSpec] = useState("");
  const [type, setType] = useState("");

  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:8070/markingScheme")
      .then((res) => {
        setRequest(res.data.markingRouter);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  console.log(request);

  const setData = (data) => {
    let { _id, sid, specialization, schemeType, marks, criteria } = data;

    localStorage.setItem("ID", _id);
    localStorage.setItem("sid", sid);
    localStorage.setItem("specialization", specialization);
    localStorage.setItem("schemeType", schemeType);
    localStorage.setItem("marks", marks);
    localStorage.setItem("criteria", JSON.stringify(criteria));

    history.push("/EditMarking");
  };

  return (
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
            SUBMITTED
          </label>{" "}
          <br className="br1" />
          <label className="h-text">MARKING SCHEMES</label>
        </div>

        <div className="t-list-tb-container">
          <div
            className="l-filter-container"
            style={{
              backgroundColor: "#D3D3D3",
              paddingTop: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingBottom: "5px",
            }}
          >
            <div className="m-sub-container">
              <label> Specialization: </label>
              <select
                style={{ marginLeft: "20px", backgroundColor: "white" }}
                className="l-s-spec"
                name="Field"
                id="rField"
                onChange={(e) => setSpec(e.target.value)}
              >
                <option value="">All</option>
                <option value="Artificial Interligance">
                  Artificial Interligance
                </option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Games">Games</option>
                <option value="Robotics">Robotics</option>
              </select>

              <label style={{ marginLeft: "20px" }}> Scheme Type: </label>

              <select
                className="l-s-spec"
                style={{ marginLeft: "20px", backgroundColor: "white" }}
                name="Field"
                id="Field"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All</option>
                <option value="Document">Document</option>
                <option value="Persentation">Persentation</option>
              </select>
            </div>
          </div>

          <table className="t-table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Specialization</th>
                <th scope="col">Type</th>
                <th scope="col">Marks</th>
                <th scope="col" style={{ width: "100px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {request
                .filter((val) => {
                  if (spec === "" && type === "") {
                    return val;
                  } else if (
                    val.specialization
                      .toLowerCase()
                      .includes(spec.toLocaleLowerCase()) &&
                    val.schemeType
                      .toLowerCase()
                      .includes(type.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.specialization}</td>
                    <td>{data.schemeType}</td>
                    <td>{data.marks}</td>

                    <td>
                      <button
                        className="btn btn-success purpled"
                        style={{ backgroundColor: "#0F0934", color: "white" }}
                        onClick={() => setData(data)}
                      >
                        {" "}
                        View{" "}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div>
            <button className="t-nav-btn">Go to Questions</button>
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
  );
}

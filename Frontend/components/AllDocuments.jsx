import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useHistory } from "react-router";

export default function AllDocuments() {
  const [docList, setDocList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:8070/document/`)
      .then((res) => {
        setDocList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Can't get Document details: " + err.message);
      });
  }, []);

  const setData = (data) => {
    let { Group_ID, Research_Field } = data;
    localStorage.setItem("Group_ID", Group_ID);
    localStorage.setItem("Research_Field", Research_Field);
    history.push("/Doc");
  };

  return (
    <div className="allDoc_body_container">
      {/*left side column */}
      <div className="left_container"></div>

      {/*right side column */}
      <div className="allDoc_right_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            SUBMITTED
          </label>
          <br />
          <label className="h-text">RESEARCH DOCUMENTS</label>
        </div>
        <div className="allDoc_box mb-5 ">
          <table className="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Group ID</th>
                <th scope="col">Research Field</th>
                <th scope="col">Comment</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {docList.map((docList, index) => (
                <tr key={index} className="">
                  <td>{docList.Group_ID}</td>
                  <td>{docList.Research_Field}</td>
                  <td>{docList.Comment}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn allDoc_button "
                      onClick={() => setData(docList)}
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <div className="form-group row mb-4 criteria_row">
                <div className="col ">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <button
                    type="submit"
                    className="btn btn-success "
                    style={{ backgroundColor: "#0f0934" }}
                  >
                    Evaluate
                  </button>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}

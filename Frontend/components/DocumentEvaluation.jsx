import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/styles.css";
import Icon from "@mui/material/Icon";

export default function DocumentEvaluation() {
  const [groupID, setGroupID] = useState();
  const [markingCriteria, setMarkingCriteria] = useState([]);
  // const [inputValue, setInputValue] = useState({
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  //   10: 0,
  // });

  const [inputValue, setInputValue] = useState([
    { id: 1, mark: 0 },
    { id: 2, mark: 0 },
    { id: 3, mark: 0 },
    { id: 4, mark: "" },
    { id: 5, mark: "" },
    { id: 6, mark: "" },
    { id: 7, mark: "" },
    { id: 8, mark: "" },
    { id: 9, mark: "" },
    { id: 10, mark: "" },
    { id: 11, mark: "" },
    { id: 12, mark: "" },
  ]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setGroupID(localStorage.getItem("Group_ID"));

    axios
      .get(
        `http://localhost:8070/markingScheme/one/${localStorage.getItem(
          "Research_Field"
        )}/${"Document"}`
      )
      .then((res) => {
        console.log("res.data", res.data);
        let { _id, sid, specialization, schemeType, marks, criteria } =
          res.data;
        console.log(criteria);
        setMarkingCriteria(criteria);
        console.log(inputValue);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    console.log("21 ", data);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("click");
  };

  const handleMarks = (e, index) => {
    console.log(
      "inputValue[index].id " + inputValue[index].id,
      "index + 1 " + index + 1,
      "value " + e.target.value
    );

    if (inputValue[index].id == index + 1) {
      setInputValue(e.target.value);
      console.log("inputValue " + inputValue);
    }
  };

  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            DOCUMENT
          </label>
          <br />
          <label className="h-text" style={{ color: "#ffffff" }}>
            EVALUATION
          </label>
        </div>
        <form>
          <div className="form-group mb-3 mt-5">
            <label>Group ID</label>
            <input
              type="text"
              disabled
              className="form-control"
              id="groupID"
              value={groupID}
            />
          </div>

          <div className="form-group mb-3">
            <label>Research Topic</label>
            <input
              type="text"
              disabled
              className="form-control"
              id="researchTopic"
            />
          </div>
          <div className="form-group mb-5">
            <label>Group Members</label>
            <textarea
              className="form-control"
              disabled
              id="groupMembers"
              rows={4}
            />
          </div>
          <button type="submit" className="btn btn-success ">
            Download Document
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        <form>
          <ul className="list-group">
            <div className="criteria_box mb-4 fw-bold">
              <div className="form-group row mb-4 criteria_row">
                <table className="table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="col-2">
                        No
                      </th>
                      <th scope="col" className="col">
                        Criteria Name
                      </th>
                      <th scope="col" className="col">
                        Total Marks
                      </th>
                      <th scope="col" className="col-2">
                        Given Marks
                      </th>
                      <th scope="col" className="col-2"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {markingCriteria?.map((data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td> {data.des}</td>
                        <td className="ps-3">{data.mark}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            onChange={(e) => handleMarks(e, index)}
                          />
                        </td>
                        <td>
                          <div className="ps-5 ">
                            <button type="submit" className="form-control">
                              Add
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ul>
          {/* Total marks */}
          <div className="form-group row mb-4 criteria_row ps-5 fw-bold fs-4">
            <div className="col">
              <label>Total Marks </label>
            </div>
            <div className="col">
              <label></label>
            </div>
            <div className="col-3 ps-4">
              <label>100</label>
            </div>
          </div>
          <a
            type="submit"
            className="btn btn-success btn_submit mt-3"
            onClick={(e) => handleAdd}
          >
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

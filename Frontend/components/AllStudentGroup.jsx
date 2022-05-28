import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/st.css";
import "./CSS/stgrup.css";

//import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function AllStudentGroup() {
  const [group, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/create/group")
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  //   const setData = (data) => {
  //     let {
  //       Group_Leader_Name,
  //       Student_ID,
  //       Group_Leader_Email,
  //       Member2_Name,
  //       Member2_ID,
  //       Member2_Email,
  //       Member3_Name,
  //       Member3_ID,
  //       Member3_Email,
  //       Member4_Name,
  //       Member4_ID,
  //       Member4_Email,
  //       Feedback,
  //     } = data;
  //     localStorage.setItem("Group_Leader_Name", Group_Leader_Name);
  //     localStorage.setItem("Student_ID", Student_ID);
  //     localStorage.setItem("Group_Leader_Email", Group_Leader_Email);
  //     localStorage.setItem("Member2_Name", Member2_Name);
  //     localStorage.setItem("Member2_ID", Member2_ID);
  //     localStorage.setItem("Member2_Email", Member2_Email);
  //     localStorage.setItem("Member3_Name", Member3_Name);
  //     localStorage.setItem("Member3_ID", Member3_ID);
  //     localStorage.setItem("Member3_Email", Member3_Email);
  //     localStorage.setItem("Member4_Name", Member4_Name);
  //     localStorage.setItem("Member4_ID", Member4_ID);
  //     localStorage.setItem("Member4_Email", Member4_Email);
  //     localStorage.setItem("Feedback", Feedback);

  //     console.log(data);
  //   };

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
        <div style={{ backgroundColor: "white" }}>
          <div className="t-list-head-container">
            <label className="h-text" style={{ color: "#FF5631" }}>
              {" "}
              ALL STUDENT
            </label>{" "}
            <br className="br1" />
            <label className="h-text">GROUPS</label>
          </div>

          <section className="py-4 container">
            <div className="py-2 container">
              <table class="table border shadow" id="emp-table">
                <thead class="thread-dark">
                  <tr>
                    <th scope="col">Leader Name</th>
                    <th scope="col">Member 1</th>
                    <th scope="col">Member 2</th>
                    <th scope="col">Member 3</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(group)}
                  {group.map((data, index) => (
                    <tr key={index}>
                      <td className="py-5 ">{data.Student_ID}</td>
                      <td className="py-5 ">{data.Member2_ID}</td>
                      <td className="py-5 ">{data.Member3_ID}</td>
                      <td className="py-5 ">{data.Member4_ID}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <ReactHTMLTableToExcel
                className="btn btn-primary mb-3"
                table="emp-table"
                filename="Student Group file"
                sheet="Sheet"
                buttonText="Export to Excel"
                // backgroundColor="#0F0934"
                // width="200px"
                // fontWeight="bold"
                // marginLeft="80%"
              />

              <div className="bottom-t-container">
                <label className="bottom-t" style={{ color: "#FF5631" }}>
                  {" "}
                  SLIIT
                </label>{" "}
                <label className="bottom-t"> Research</label> <br />
                <label className="bottom-t"> Management Tool</label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function PresentationEvaluation() {
  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            PRESENTATION
          </label>
          <br />
          <label className="h-text" style={{ color: "#ffffff" }}>
            EVALUATION
          </label>
        </div>
        <form>
          <div className="form-group mb-3 mt-5">
            <label>Group ID</label>
            <input type="text" disabled className="form-control" id="groupID" />
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
            Download Presentation
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        <form>
          <ul className="list-group">
            <div className="criteria_box mb-4 fw-bold">
              <div className="form-group row mb-4 criteria_row">
                <div className="col ">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row ">
                <div className="col">
                  <label>Criteria Name Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
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
          <button type="submit" className="btn btn-success btn_submit mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

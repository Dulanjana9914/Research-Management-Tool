import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function RequestCoSupervisor() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            REQUEST
          </label>
          <br />
          <label className="h-text" style={{ color: "#ffffff" }}>
            CO-SUPERVISOR
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
          <div className=" mb-5 ">
            <label>Research Field</label>
            <FormControl
              sx={{ width: 300, height: 45 }}
              className="form-control me-5 "
            >
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Your Research Field</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Your Research Field</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <button type="submit" className="btn btn-success ">
            Find Co-Supervisor
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        <form>
          <ul className="list-group">
            <div className="criteria_box mb-5 fw-bold">
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
          <button type="submit" className="btn btn-success btn_submit mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

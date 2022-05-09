
import 'bootstrap/dist/css/bootstrap.css';
import '../college list/College';

import { Dialog, Button, DialogActions } from "@material-ui/core";
import { useState } from "react";

function CollegeTable(props) {
  const [dialogOpen, setOpen] = useState(false);
  const [college, setCollege] = useState({});

  return (
    <div>
      <table className="table table-light table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">SR No.</th>
            <th scope="col">College</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {props.collegeList.map((ele, index) => {
            return (
              <tr
                onClick={() => {
                  setCollege(ele);
                  setOpen(true);
                }}
                className="row-click"
                id={index + 1}
              >
                <th scope="row">{index + 1}</th>
                <td>{ele.name}</td>
                <td>{ele.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Dialog
        open={dialogOpen}
        onClose={() => {
          setOpen(false);
        }}
        disableBackdropClick
      >
        <div className="p-4" style={{ width: "500px" }}>
          <div>
            <h2>College Details</h2>
            <hr />
          </div>
          <div>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <h5 style={{ display: "inline-block", marginLeft: "10px" }}>
              {college.name}
            </h5>
          </div>
          <div>
            <i
              className="fa fa-map-marker"
              style={{ marginLeft: "6px" }}
              aria-hidden="true"
            ></i>
            <h5 style={{ display: "inline-block", marginLeft: "10px" }}>
              {college.country}
            </h5>
          </div>
        </div>

        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CollegeTable;

import reac from 'react';
import {useState, useEffect} from 'react';
import * as services from "../service/index";
import CollegeTable from './CollegeTable';
import { TextField } from "@material-ui/core";

function CollegeList(props) {
    const [collegeList, setCollegeList] = useState([]);
    const [searchText, setSearch] = useState("");
  
    const callSearchCollege = () => {
      if (searchText) {
        services
          .getCollegesAPI(searchText, "")
          .then((response) => {
            setCollegeList(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };
  
    return (
        <div className='container '>
        <div className='row'>
          <div className="col-md my-4 pt-4 max-auto ">
      <div className="p-4 text-start bg-color">
        <div className="clg-header" > <h1>College List</h1></div>
  
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
            <div style={{ marginBottom: "40px" }}>
              <TextField
                variant="standard"
                label="Search For College"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    callSearchCollege();
                  }
                }}
              />
            </div>
          </div>
          <div className="col-12">
            {collegeList.length ? (
              <CollegeTable collegeList={collegeList} />
            ) : (
              <h2>No colleges to display!!!</h2>
            )}
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default CollegeList;
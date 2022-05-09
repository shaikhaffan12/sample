import reac from 'react';
import { NavLink } from 'react-router-dom';
import '../user form/User.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import * as services from "../service/dropdown";
import { useNavigate } from "react-router-dom";

function DetailsForm(props) {
  const navigate = useNavigate();
  const [data_x, setData_x] = useState([]);

  let [name, setname] = useState("");
  let [date, setdate] = useState("");
  let [address, setaddress] = useState("");
  let [gender, setgender] = useState("");
  let [shortbio, setshortbio] = useState("");
  let [longbio, setlongbio] = useState("");
  let [selected, setSelected] = useState("");
  let [college, setCollege] = useState("");
  const [checked, setChecked] = useState(false);
  const [hobbies, setHobbies] = useState([]);
  const [extra, setExtra] = useState("");
  const [success_msg, setSuccessMsg] = useState("");

  let all_colleges = [];
  let options = null;
  let country_options = [];
  let country_list = null;

  // creating list of countries
  const listCountry = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        let result = response.data;
        result.map((res) => {
          country_options.push(res.name.common);
        });
        setData_x(country_options);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (data_x) {
    country_list = data_x.map((ele, index) => (
      <option key={index} value={ele}>
        {ele}
      </option>
    ));
  }

  useEffect(() => listCountry(), []);

  // For retrieving colleges based on country selected
  const changeSelectOptionHandler = (event) => {
    services
      .getCollegesDropdown(event.target.value, "")
      .then((response) => {
        let res = response.data;
        res.map((result) => {
          all_colleges.push(result.name);
        });
        setSelected(all_colleges);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (selected) {
    options = selected.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
  }

  const handleHobbies = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobbie) => hobbie !== value));
    }
  };

  // For handling input from "others" checkbox
  const handleInput = (e) => {
    const { value } = e.target;
    setExtra(value);
    setHobbies([...hobbies, extra]);
  };

  const setEmpty = () => {
    setname("");
    setdate("");
    setaddress("");
    setgender("");
    setshortbio("");
    setlongbio("");
    setSelected("");
    setCollege("");
    setHobbies([]);
  };

  const setLocalstorage = (ele) => {
    let data = JSON.parse(localStorage.getItem("data"));

    if (data) {
      data.push(ele);
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      localStorage.setItem("data", JSON.stringify([ele]));
    }
    setTimeout(function () {
      setSuccessMsg("Your registration was successful!");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
      name: name,
      date: date,
      address: address,
      gender: gender,
      shortbio: shortbio,
      longbio: longbio,
      college: college,
      hobbies: hobbies,
    };
    setEmpty();
    setLocalstorage(user);
    navigate("/userlist");
  };

  return (
    <div className='container main_cls mb-3' style={{ backgroundColor: "#00203fff " }}>
        <div className='row'>
          <div className="col-md my-4 pt-4 max-auto ">
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              {!!success_msg ? (
                <div className="alert alert-success p-2 mb-5" role="alert">
                  <h4 className="alert-heading mb-0">{success_msg}</h4>
                </div>
              ) : (
                ""
              )}
              <h3 className='text-center'  style={{ color: "#adefd1ff " }}>User Registration</h3>
              <p className='text-center'> <NavLink to={'/userlist'} className='navlink'>Back to user list</NavLink> </p>

              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="col-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    
                    required
                  />
                </div>

                <div className="col-12">
                  <div className="input-group date" id="datepicker">
                    <input
                      type="date"
                      className="form-control mt-3"
                      name="date"
                      style={{ color: "#000", fontWeight: "bold" }}
                      value={date}
                      onChange={(e) => setdate(e.target.value)}

                      
                      required
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <select
                    className="form-select mt-3"
                    style={{ color: "#000", fontWeight: "bold" }}
                    onChange={(e) => setgender(e.target.value)}
                    required
                  >
                    <option selected disabled value={""}>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-12 mt-3">
                  <select onChange={changeSelectOptionHandler} required>
                    <option selected disabled value={""}>
                      Choose a Country
                    </option>
                    {country_list}
                  </select>
                </div>

                <div className="col-12 mt-3">
                  <select onChange={(e) => setCollege(e.target.value)} required>
                    <option selected disabled value={""}>
                      Choose a College
                    </option>
                    {options}
                  </select>
                </div>

                <div className="col-12">
                  <h6 className="text-white mt-3" style={{ color: "#adefd1ff " }}>Hobbies</h6>
                  <div className="checkbox-group" required>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Reading"
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Reading
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Gaming"
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Gaming
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Travelling"
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Travelling
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Drawing"
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Drawing
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Gardening"
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Gardening
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Cycling"
                        onChange={handleHobbies}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Cycling
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="inlineCheckbox1"
                        value="Other"
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                      />
                      <label className="form-check-label" for="inlineCheckbox1" style={{ color: "#adefd1ff " }}>
                        Other
                      </label>

                      {checked ? (
                        <input
                          className="inputRequest formContentElement"
                          name="token"
                          type="text"
                          onChange={handleInput}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3"
                      rows="2"
                      placeholder="Write a short bio"
                      name="short_bio"
                      value={shortbio}
                      onChange={(e) => setshortbio(e.target.value)}

                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3"
                      rows="3"
                      placeholder="Write a long bio"
                      name="long_bio"
                      value={longbio}
                      onChange={(e) => setlongbio(e.target.value)}

                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-button mt-3 d-grid">
                  <button id="submit" type="submit" className="btn btn-outline-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default DetailsForm;
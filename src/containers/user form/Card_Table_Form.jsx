import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


function CardTabelForm(props) {
  let userList = JSON.parse(localStorage.getItem("data") || "[]");
  // Sorting data in descending order
  userList.sort(function (x, y) {
    return x == y ? 0 : x > y ? 1 : -1;
  });

  const navigate = useNavigate();

  // Switch Button
  const [toggle, setToggle] = useState(false);

  // For storing and displaying modal information
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rowSelect = (index) => {
    setModalInfo(userList[index]);
    toogleTrueFalse();
  };

  const toogleTrueFalse = () => {
    setShowModal(handleShow);
  };

  // Methods for handling toggle switch
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  // Method for handling and displaying Modal Content
  const ModalContent = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalInfo.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>User Details</h5>
          <p className="mb-2">
            <i className="fa fa-location-arrow"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.address}</span>
          </p>
          <p className="mb-2">
            <i className="fa fa-birthday-cake"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.date}</span>
          </p>
          <p className="mb-2">
            <i className="fa fa-user-circle-o"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.gender}</span>
          </p>
          {modalInfo.hobbies.length > 1 ? (
            <p className="mb-2">
              <i className="fa fa-cc"></i>
              <span style={{ marginLeft: "10px" }}>
                {modalInfo.hobbies.join(", ")}
              </span>
            </p>
          ) : (
            <p className="mb-2">
              <i className="fa fa-cc"></i>
              <span style={{ marginLeft: "10px" }}>{modalInfo.hobbies}</span>
            </p>
          )}

          <hr />
          <h5>Other Details</h5>
          <p className="mb-2">
            <i className="fa fa-graduation-cap"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.college}</span>
          </p>
          <p className="mb-2">
            <i className="fa fa-id-card-o"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.shortbio}</span>
          </p>
          <p className="mb-2">
            <i className="fa fa-address-card"></i>
            <span style={{ marginLeft: "10px" }}>{modalInfo.longbio}</span>
          </p>
        </Modal.Body>
      </Modal>
    );
  };

  // Method for deleting particular user from localStorage
  const itemSelect = (index) => {
    userList.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(userList));
    navigate("/userlist");
  };

  // Method for deleting all users in localStorage
  const handleOnClear = () => {
    localStorage.setItem("data", JSON.stringify([]));
    navigate("/userlist");
  };

  const style = {
    marginLeft: "10px",
  };

  return (
    <div>
      {userList.length == 0 ? (
        <h1 className="text-white msg-space p-5">
          No users registered as of now!
        </h1>
      ) : (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={toggler}
          />
          <span className="text-white fw-bold">Switch to Table Layout!</span>
        </div>
      )}
      {toggle ? (
        // Table Layout UI
        <div
          className="row pt-3 pb-5"
          style={{ width: "100%", marginLeft: "0" }}
        >
          {userList.length != 0 ? (
            <h3 className="text-center text-white mb-4">
              <u>Table Layout</u>
            </h3>
          ) : (
            ""
          )}
          <div
            className="container table-responsive"
            style={{ paddingLeft: "0px" }}
          >
            <table className="table table-striped table-hover table-light">
              <thead className="">
                <tr className="text-start">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">College</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => {
                  return (
                    <tr
                      onClick={() => {
                        rowSelect(index);
                      }}
                      className="row-click text-start"
                      id={index + 1}
                      key={index + 1}
                    >
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.date}</td>
                      <td>{user.gender}</td>
                      <td>{user.address}</td>
                      <td>{user.college}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {show ? <ModalContent /> : null}

          {userList.length != 0 ? (
            <button
              type="button"
              className="clear_btn mt-3"
              onClick={() => {
                handleOnClear();
              }}
            >
              Clear Data
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        // Card Layout UI
        <div
          className="row pt-4 pb-5"
          style={{ width: "100%", marginLeft: "0" }}
        >
          {userList.length != 0 ? (
            <h3 className="text-center text-white">
              <u>Card Layout</u>
            </h3>
          ) : (
            ""
          )}
          {userList.map((user, index) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12-4 mt-4"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card"
                id={index}
                onClick={() => {
                  rowSelect(index);
                }}
                style={{ border: "none" }}
              >
                <div className="card-body text-start">
                  <h4 className="card-title mb-3">
                    <i className="fa fa-user"></i>
                    <span style={style}>{user.name}</span>
                  </h4>
                  <h6 className="card-subtitle mb-2">
                    <i className="fa fa-birthday-cake"></i>
                    <span style={style}>{user.date}</span>
                  </h6>
                  <h6 className="card-text mb-2">
                    <i className="fa fa-user-circle"></i>
                    <span style={style}>{user.gender}</span>
                  </h6>
                  <h6 className="card-text mb-2">
                    <i className="fa fa-address-card"></i>
                    <span style={style}>{user.address}</span>
                  </h6>
                  <h6 className="card-text mb-2">
                    <i className="fa fa-graduation-cap"></i>
                    <span style={style}>{user.college}</span>
                  </h6>
                  {user.hobbies.length > 1 ? (
                    <h6 className="card-text" style={{ lineHeight: "1.5rem" }}>
                      <i className="fa fa-cc"></i>
                      <span style={style}>{user.hobbies.join(",")}</span>
                    </h6>
                  ) : (
                    <h6 className="card-text" style={{ lineHeight: "1.5rem" }}>
                      <i className="fa fa-cc"></i>
                      <span style={style}>{user.hobbies}</span>
                    </h6>
                  )}
                </div>
              </div>
              <h6
                className="text-start mb-3 text-white mt-2"
                onClick={() => {
                  itemSelect(index);
                }}
              >
                <i className="fa fa-trash"></i>
                <span style={style}>Delete Item?</span>
              </h6>
            </div>
          ))}
          {show ? <ModalContent /> : null}

          {userList.length != 0 ? (
            <button
              type="button"
              className="clear_btn mt-5"
              onClick={() => {
                handleOnClear();
              }}
            >
              Clear Data
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default CardTabelForm;


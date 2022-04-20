import "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">MindBowser</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page"  to={'/userlist'}>User List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to={'/userform'}>User Form</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link "  to = {'/colleges'}>Colleges</NavLink>
                            </li>


                        </ul>


                    </div>
                </div>
            </nav>


        </>
    );
};

export default Header;
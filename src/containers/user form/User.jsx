import reac from 'react';
import { NavLink } from 'react-router-dom';
import '../user form/User.css'

const User = () => {
  return (
    <>
      <h1 className='text-center'>User Detail Form</h1>

      <h4 className='text-center'><NavLink to={'/userlist'} className='navlink'>Back to user list</NavLink></h4>

      <div className='container '>
        <div className='row'>
          <div className="col-md my-4 pt-4 max-auto">
            <form>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
                <input type="phone" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Bio</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div className='mb-3'>
                <label htmlFor="" className='form-label'>Country</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              </div>

              <button type="submit" class="btn btn-outline-primary">Submit</button>
            </form>


          </div>
        </div>

      </div>
    </>
  );
};

export default User;
import React from 'react';
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
const NavBar = () => {
  return (

    <div className="headnav">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a className="navbar-brand mx-lg-5" href="https://www.simplilearn.com"><img src="https://www.simplilearn.com/ice9/new_logo.svgz" width="100" height="31" alt="Simpli" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-black"></span>
          </button>
          <div class="collapse navbar-collapse jsf" id="navbarSupportedContent">
            <button type="button" class="btn btn-primary ">All Courses</button>
            <form className="d-flex justify-content-space-around">
              <div className="form-group has-search">
                <span className=" form-control-feedback text-primary"><SearchIcon /></span>
                <input type="text" className="form-control text-primary" placeholder="What do you want to learn ?" />
              </div>
            </form>
            <button type="button" class="btn btn-outline-secondary mx-5">Login</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;
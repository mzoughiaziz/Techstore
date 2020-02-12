import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"> Techstore </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Computers
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">HP</a>
                  <a className="dropdown-item" href="#">DELL</a>                  
                  <a className="dropdown-item" href="#">ASUS</a>
                  <a className="dropdown-item" href="#">LENOVO</a>
                </div> 
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Smartphones
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Samsung</a>
                  <a className="dropdown-item" href="#">Iphone</a>
                  <a className="dropdown-item" href="#">OPPO</a>
                  <a className="dropdown-item" href="#">Huawei</a>
                </div> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Repair </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <button type="button" class="btn btn-light">Sign In</button>
            <button type="button" class="btn btn-light">Sign Up</button>
          </div>
          
        </nav>
        </div>
    );
  }
}

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.Title}</Link>
        {/* <a className="navbar-brand" href="#">{props.Title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              {/* <a className="nav-link" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>

  )
}
Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  About: PropTypes.string
}
Navbar.defaultProps = {
  Title: 'Set title here',
  About: 'About Text'
}
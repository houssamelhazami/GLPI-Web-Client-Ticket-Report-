import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  render() {
    return (
      <div className="sidebar-wrapper">
        <nav className="nav flex-column">
    
          <Link className="nav-link " to="/dashboard/status">
          Diag circulaire par status
          </Link>

          <Link className="nav-link " to="/dashboard/urgence">
          Diag circulaire par urgence
          </Link>

          <Link className="nav-link " to="/dashboard/type">
          Diag circulaire par type
          </Link>

          <Link className="nav-link " to="/dashboard/impact">
          Diag circulaire par impact
          </Link>

          <Link className="nav-link " to="/dashboard/priority">
          Diag circulaire par priorite
          </Link>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <button
            onClick={this.handleLogout}
            className="nav-link active btn btn-link"
            to="/">
            Se déconnecter
          </button>
        </nav>
      </div>
    );
  }
}

export default SideBar;

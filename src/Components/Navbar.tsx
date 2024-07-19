import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand">Save Money for Travel!</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mw-30">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Expenses and Income
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mw-30">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  My Budget
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

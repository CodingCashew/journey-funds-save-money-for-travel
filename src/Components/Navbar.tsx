import { initialValues, useAccountContext } from "../context/AccountContext";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn, updateUser } = useAccountContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    updateUser(initialValues);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <a href="/" className="text-decoration-none">
            <h2 className="navbar-brand">JourneyFunds - Save Money for Travel!</h2>
          </a>
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
          <div
            className="collapse navbar-collapse d-flex-md justify-content-md-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 mw-30">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/expenses"
                >
                  Expenses and Income
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 mw-30">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/budget"
                >
                  Budget
                </a>
              </li>
            </ul>
            {!isLoggedIn && (
              <a className="nav-link active" aria-current="page" href="/login">
                <button className="btn btn-primary mx-2">Log in</button>
              </a>
            )}
            {isLoggedIn && (
              <button className="btn btn-primary mx-2" onClick={handleLogout}>
                Log out
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

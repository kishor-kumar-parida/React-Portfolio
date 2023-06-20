import mainLogo from "../images/main-logo.png";
function Header(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-2 px-4">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="./"
          style={{ textDecoration: "none" }}
        >
          <img
            className="d-inline-block align-text-top"
            src={mainLogo}
            alt="Unable To Load"
            style={{ width: "40px" }}
          />
          <div className="display-6 textgr4 d-inline-block align-text-top px-4">{props.dName}</div>
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
          <i class="fa-solid fa-bars-staggered"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end ms-auto">
            {/* <li className="nav-item px-4" style={{ maxWidth: "170px" }}>
              <a className="nav-link fs-3 textgr4" href="#about">
                About
              </a>
            </li> */}
            <li className="nav-item px-4" style={{ maxWidth: "170px" }}>
              <a className="nav-link fs-3 textgr4" href="./#/projects">
                Projects
              </a>
            </li>
            {/* <li className="nav-item px-4" style={{ maxWidth: "170px" }}>
              <a className="nav-link fs-3 textgr4" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

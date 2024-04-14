import React from "react";

const Navbar = () => {
  return (
    <div>
      <header id="header" className="header sticked">
        <div className="navbars">
          <div>

          
          <div className="logo-container">
            <a href="#" className="logo">
              <h1>
                Zra<span>.</span>
              </h1>
            </a>
          </div>
          </div>
          <div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Menu</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#recent-posts">News</a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

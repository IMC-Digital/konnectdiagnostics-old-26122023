import React from "react";
import { NavLink } from "react-router-dom";
// import DynamicImage from "../components/requiredPages/DynamicImage";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper className="footer">
        <div className="footer-head">
          <div className="fh container d-flex justify-content-between">
            <div className="fh-content d-flex ">
              <p className="fh-p">Follow Konnect Diagnostics on Social Media</p>
              <NavLink
                to="https://www.facebook.com/konnectdiagnostic/"
                target="blank"
              >
                <i
                  className="fa-brands fa-square-facebook fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </NavLink>
              <NavLink to="https://twitter.com/KonnectDiagnos2" target="blank">
                <i
                  className="fa-brands fa-square-twitter fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </NavLink>
              <NavLink
                to="https://www.instagram.com/konnectdiagnosticcenters/"
                target="blank"
              >
                <i
                  className="fa-brands fa-square-instagram fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </NavLink>
              <NavLink
                to="https://www.youtube.com/channel/UC2y2Nq4LXo36lU3kkZvx9xA"
                target="blank"
              >
                <i
                  className="fa-brands fa-linkedin fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </NavLink>
              <NavLink
                to="https://www.youtube.com/channel/UC2y2Nq4LXo36lU3kkZvx9xA"
                target="blank"
              >
                <i
                  className="fa-brands fa-square-youtube fa-xl"
                  style={{ color: "#ffffff" }}
                ></i>
              </NavLink>
            </div>
            {/* <div className="fh-content d-flex"></div> */}
          </div>
        </div>
        <div className="footer-container container d-flex">
          <div className="ftrMiddle d-flex border-bottom pb-5">
            <div className="fb-left">
              <img
                className="img-fluid"
                src="/images/konnect-logo.png"
                alt="logofooter"
              />
              <p className="">
                <i>
                  Konnect Diagnostics offers precise diagnostics with certified
                  radiologists, pathologists, doctors, and technicians.
                </i>
              </p>
            </div>
            <div className="fb-right d-flex">
              <div className="footer-box1 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/" className="nav-list">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="nav-list">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/packages" className="nav-list">
                      Packages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tests" className="nav-list">
                      Tests
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-box2 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/tests" className="nav-list">
                      Book a Test
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/locate-clinic" className="nav-list">
                      Nearest Center
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="nav-list">
                      Download Report
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-box3 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/health-conditions" className="nav-list">
                      Health Conditions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/radiology-services" className="nav-list">
                      Radiology Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/fetal-medicine-unit" className="nav-list">
                      Fetal Medicine Unit
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-box4 w-25">
                <ul className="navbar-nav footer-navbar-lists  d-flex">
                  <li>
                    <NavLink to="/partner-with-us" className="nav-list">
                      Partner with us
                    </NavLink>
                  </li>

                  {/* <li>
                <NavLink to="/contact-us" className="nav-list">
                  Contact Us
                </NavLink>
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fb-b footer-bottom container content-box">
          <p className="styled">
            © 2023 Konnect Diagnostics All rights reserved
          </p>
          <p className="styled">|</p>
          <NavLink to={"/"} className="styled tc">
            Terms and Conditions
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.section`
  .fh-content img {
    width: 22px;
    transition: 0.2s;
    &:hover {
      scale: 1.2;
    }
  }
  ${"" /* background-color: ${({ theme }) => theme.colors.primary}; */}
  background-color: rgba(0,0,0,0.05);
  .footer-head {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .fh-content {
    align-items: center;
    padding: 0;
    gap: 20px;
  }
  .fh {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};

    .fh-nl {
      gap: 15px;
      align-items: center;
      justify-content: space-evenly;
      .fh-nl-p {
        margin: 0;
        color: #fff;
      }
    }
    .fh-content p {
      padding: 15px 0;
      font-weight: 700;
      color: #fff;
      margin: 0;
      .fh-content img {
        width: 25px;
      }
    }
  }
  .footer-container {
    padding: 50px 0 25px 0;
    justify-content: center;
  }

  .footer-navbar-lists {
    font-size: 1rem;
    gap: 15px;
  }
  .nav-list {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 600;
  }
  .footer-bottom {
    padding: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    .styled {
      font-size: 14px;
      font-weight: 300;
      display: inline-block;
      margin-bottom: 10px;
      ${"" /* color: #fff; */}
    }
    .tc {
      text-decoration: none;
    }
  }
  .fb-left {
    width: 25%;
  }
  .fb-right {
    width: 75%;
    margin-left: 100px;
  }
  @media only screen and (max-width: 600px) {
    .ftrMiddle {
      flex-wrap: wrap;
      .fb-left {
        align-items: center;
        text-align: center;
        width: 100%;
        margin-right: 0;
      }
      .fb-right {
        margin: 20px;
        width: 100%;
        /* margin: 0; */
      }
      .nav-list {
        font-size: 14px;
        line-height: 1.5em;
        font-weight: 400;
      }
      .fb-b {
        border: 2px solid red;
      }
    }
  }
`;

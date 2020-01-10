import React from "react";
import Iframe from "react-iframe";
import profile_pic from "../../../backgrounds/login.jpg";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profile_pic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">801-427-7833</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">kredfox4@gmail.com</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Lehi, UT</div>
          </div>
          <div className="bullet-point-group">
            <a
              href="https://www.linkedin.com/in/kent-taylor-129282168/"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon="id-card" />
            </a>
            <a
              href="https://www.linkedin.com/in/kent-taylor-129282168/"
              target="_blank"
              className="text"
            >
              Linkedin
            </a>
          </div>
          <div className="bullet-point-group">
            <a
              href="https://www.linkedin.com/in/kent-taylor-129282168/"
              className="icon"
              target="_blank"
            >
              <FontAwesomeIcon icon="link" />
            </a>
            <a
              href="https://github.com/107124"
              className="text"
            >
              Github
            </a>
          </div>
        </div>
        {/* map */}
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14119.812765559083!2d-111.8930929074513!3d40.43006299647508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7fedd81a1b69%3A0xfd6fac81600d61c9!2sLehi%2C%20UT!5e0!3m2!1sen!2sus!4v1578175872438!5m2!1sen!2sus"
          width="1000"
          height="350"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          className="map"
        ></Iframe>
      </div>
    </div>
  );
}

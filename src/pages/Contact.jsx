import { faFacebook, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="text">
          <h1>
            Contact <span>Me</span>
          </h1>
          <div className="bg-text">
            <h1>contact</h1>
          </div>
        </div>
        <div className="info">
          <div className="item">
            <span>Education: <FontAwesomeIcon icon={faMailForward}/> <bdi>+Management Information Systems</bdi></span>
          </div>
          <div className="item">
            <span>Email: <FontAwesomeIcon icon={faMailForward}/> <bdi>omarmohamedali047@gmail.com</bdi></span>
          </div>
          <div className="item">
            <span>Phone: <FontAwesomeIcon icon={faMailForward}/> <bdi>+021008547013</bdi></span>
          </div>
        </div>
        <ul className="social">
          <li><a href="https://www.facebook.com/omarmohamed2518" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
          <li><a href="https://www.instagram.com/3mar_m7md225/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
          <li><a href="https://github.com/omarmohamedali225" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
        </ul>
      </div>
    </section>
  );
}

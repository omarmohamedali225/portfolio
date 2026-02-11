import { FaFacebook, FaGithub, FaInstagram, FaMailBulk } from "react-icons/fa";

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
            <span>
              Education: <bdi>Management Information Systems</bdi>
            </span>
          </div>
          <div className="item">
            <span>
              Email: <FaMailBulk /> <bdi>omarmohamedali047@gmail.com</bdi>
            </span>
          </div>
          <div className="item">
            <span>
              Phone: <bdi>+021008547013</bdi>
            </span>
          </div>
        </div>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/omarmohamed2518" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/3mar_m7md225/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/omarmohamedali225" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

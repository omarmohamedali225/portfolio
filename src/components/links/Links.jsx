import { Link, useLocation } from "react-router-dom";
import { FaBriefcase, FaEnvelope, FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
export default function Links() {
  const location = useLocation().pathname;
  return (
    <>
      <ul className="menu-links">
        <Link to="/" className={location == "/" ? "active" : ""}>
          <li>
            <FaHome />
          </li>
        </Link>
        <Link to="about" className={location == "/about" ? "active" : ""}>
          <li>
            <FaPerson />
          </li>
        </Link>
        <Link
          to="portfolio"
          className={location == "/portfolio" ? "active" : ""}
        >
          <li>
            <FaBriefcase />
          </li>
        </Link>
        <Link to="contact" className={location == "/contact" ? "active" : ""}>
          <li>
            <FaEnvelope />
          </li>
        </Link>
      </ul>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import me from "/me.jpg";
export default function Home() {
  return (
    <header className="home">
      <div className="container">
        <div className="left-header">
          <div className="img">
            <img src={me} alt={me} />
          </div>
          <div className="polygon"></div>
        </div>
        <div className="right-header">
          <h1>
            Hi, I'm <span>Omar Mohamed</span> FullStack Web Developer.
          </h1>
          <p>I'm a Web Developer, React Js , Node Js</p>
          <div className="save">
            <a href="#" target="_blank">
              Download Cv
            </a>
            <FontAwesomeIcon icon={faDownload} />
          </div>
        </div>
      </div>
    </header>
  );
}

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
            <a href="omar CV Resume v2.pdf" download={true} target="_blank">
              Download Cv
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

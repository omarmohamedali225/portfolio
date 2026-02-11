import { FaCode, FaEye } from "react-icons/fa";
import { data } from "../components/ProtfolioData";
export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="text">
          <h1>
            My <span>Portfolio</span>
          </h1>
          <h4>
            Here is some of my work that I've done in various programming
            languages.
          </h4>
          <div className="bg-text">
            <h1>mywork</h1>
          </div>
        </div>
        <div className="projects">
          {data.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.img} alt={item.img} />
                <div className="view">
                  <a href={item.code} target="_blank">
                    <FaCode />
                  </a>
                  {item.view && (
                    <a href={item.view} target="_blank">
                      <FaEye />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

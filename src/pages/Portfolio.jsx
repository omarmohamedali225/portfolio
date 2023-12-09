import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import {data} from "../components/ProtfolioData";
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
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  {item.view && <a href={item.view} target="_blank">
                    <FontAwesomeIcon icon={faEye} />
                  </a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

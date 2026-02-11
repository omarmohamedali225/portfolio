
import { FaLightbulb } from 'react-icons/fa';
export default function About() {
  return (
    <section className='about'>
      <div className="container">
        <div className="text">
          <h1>About <span>Me</span></h1>
          <h4>Information About Me</h4>
          <div className="bg-text">
            <h1>mystats</h1>
          </div>
          <p>A passionate frontend developer specializing in React.js. I have honed my skills in creating engaging and user-friendly web applications. I thrive in transforming ideas and designs into intuitive and interactive interfaces that provide seamless user experiences. My strong command over React.js allows me to build robust and scalable applications, leveraging its powerful component-based architecture and virtual DOM. I am well-versed in modern web technologies such as HTML5, CSS3, and JavaScript, and I stay up-to-date with the latest frontend trends and best practices. As a detail-oriented professional, I pay great attention to UI/UX design principles, ensuring that every pixel is in its rightful place. Collaborating with cross-functional teams and employing effective communication skills, I enjoy taking projects from concept to completion, consistently delivering high-quality code that meets both functional and aesthetic requirements. I am excited about creating innovative solutions and contributing to the ever-evolving field of frontend development using React.js."</p>
        </div>
        <div className="skills">
          <h1><FaLightbulb /> My Skills</h1>
          <ul>
            <li>Html5</li>
            <li>Css3</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Jquery</li>
            <li>Sass</li>
            <li>TypeScript</li>
            <li>Php</li>
            <li>Mysql</li>
            <li>NodeJs</li>
            <li>Github</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

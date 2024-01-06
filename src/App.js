import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

 import img from "./Rectangle 90.png";
// import img from "./Abhinav photo.jpg"
function App() {
  return (
    <div className="App">
      <img src={img} className="laura" />
      <div className="name">Laura Smith</div>
      <div className="desig">Frontend Developer</div>
      <div className="web">laurasmith.website</div>
        <div className="container2">
        <div className="email">
            <MdEmail size={3.3} className="logoml" />
            <span className="text">Email</span>
          </div>
          <div className="linkedin">
            <FaLinkedin size={3.3} color="white" className="logolin" />
            <span className="text">LinkedIn</span>
          </div>
        </div>
        <div className="about">
          <h1>About</h1>
          <p1>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p1>
        </div>
        <div className='interest'>
          <h2>Interests</h2>
          <p2>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p2>
        </div>
        <div className="handle">
        <FaTwitterSquare size={6} className="logoin" />
        <FaSquareFacebook size={6} className="logoin"  />
        <FaInstagramSquare size={6} className="logoin"/>

        <FaSquareGithub size={6} className="logoin"  />

        </div>
    </div>
  );
}

export default App;

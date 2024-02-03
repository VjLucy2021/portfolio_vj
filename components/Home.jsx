//Home.jsx, VRAJ GOSWAMI, 301402875, 02/02/2024
import BBG from '../src/assets/profile.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Vraj Goswami</span> 
          <img src={BBG} alt="profile" className="bbg" width="750" height="750" align="right" />
          <br/>Software developer</span>
          <p className="introPara">I am a skilled software developer with experience in creating visually appealing user friendly softwares.</p>
          <Link to="/about"><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    
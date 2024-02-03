//about.jsx, VRAJ GOSWAMI, 301402875, 02/02/2024
import java from '../src/assets/java.jpeg';
import wordpress from '../src/assets/wordpress.jpeg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">As a recruiter and Java developer, my expertise lies in identifying top talent in the field of Java development. I leverage my technical knowledge and understanding of industry trends to source, screen, and select candidates who possess the required skills and qualifications. With a keen eye for detail and excellent communication skills, I excel at conducting comprehensive interviews that assess both technical proficiency and cultural fit. By effectively matching candidates with the right opportunities, I contribute to the success of both individuals and companies in the ever-evolving world of Java development.</span> 
          <div className="skillBar">
               <img src={java} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Java Developer</h2>
               <p>A Java Developer is responsible for designing, implementing, and maintaining Java-based software and applications, contributing to all stages of the software development lifecycle.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={wordpress} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Wordpress developer</h2>
               <p>WordPress is a free, open source content management system (CMS) written primarily in PHP and JavaScript.</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    
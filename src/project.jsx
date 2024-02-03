//project.jsx, VRAJ GOSWAMI, 301402875, 02/02/2024
import project1 from '../src/assets/project1.png';
import project4 from '../src/assets/project4.jpg';
import project7 from '../src/assets/project7.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>

          <section id="works">
               <div className='container'>
                    <h2 className="worksTitle">My Projects</h2>
                    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/
                         I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
                    <div className="row p-2">
                         <div className='col-sm'>
                              <div className="card">
                                   <div>
                                        <img src={project1} className="card-img-top" alt="..." />
                                   </div>
                                   <div className="card-body">
                                        <h5 className="card-title">Talent Acquisition</h5>
                                        <p className="card-text">Talent Acquisition is a strategic project aimed at attracting, recruiting, and retaining the best talent for an organization to meet its current and future workforce needs.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='col-sm'>
                              <div className="card">
                                   <div>
                                        <img src={project4} className="card-img-top" alt="..." />
                                   </div>
                                   <div className="card-body">
                                        <h5 className="card-title">Hird Website</h5>
                                        <p className="card-text">The hird website project is focused on creating an interactive and user-friendly platform to showcase and promote a company's products or services. It involves designing a visually appealing layout, implementing intuitive navigation, and integrating features such as search functionality and online purchasing options.</p>
                                   </div>
                              </div>
                         </div>


                    </div>
               </div>

               {/* <button className="workBtn">See More</button> */}


          </section>


     </>
}
    
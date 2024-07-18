import './index.scss';
import LogoMcl from '../../assets/images/mapualogo.png';
import LogoPerp from '../../assets/images/uphsllogo.png';
import SCGProj from '../../assets/images/scg.png';
import CocoProj from '../../assets/images/cocoapp.png';
import DepEdProj from '../../assets/images/DepEdproj.png';
import PlatformProj from '../../assets/images/onepiece.png';
import PythonIcon from '../../assets/images/python_icon.png';
import ReactIcon from '../../assets/images/react_icon.png';
import JSIcon from '../../assets/images/javascript_icon.png';
import KotlinIcon from '../../assets/images/kotlin-icon.png';
import CSharpIcon from '../../assets/images/csharp_icon.png';
import SQLIcon from '../../assets/images/sql_icon.png';
import UnityIcon from '../../assets/images/unity_icon.png';
import HtmlCssIcon from '../../assets/images/htmlcss_icon.png';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <div className="top-line"></div>
                <h1 className="underline">About Me</h1>
                <div className="about-desc">
                    <p>
                        I am Emmanuel Ravi M. Lara, a 4th year Computer Science student at Mapúa Malayan Colleges of Laguna with a passion for web development.
                        <br /> I am committed to continuous learning and applying my knowledge to real-world projects, ensuring that I am well-prepared for the dynamic field of web development, and aiming to contribute meaningfully to the digital landscape.
                        <br />My areas of expertise include Python, C#, Javascript, React, Kotlin, SQL while I also have familiarity with Unity and HTML/CSS
                    </p>
                </div>

                <div className="skills-grid">
                    <div className="skills-icon">
                        <img src={PythonIcon} alt="PythonIcon" />
                        <p>Python</p>
                    </div>
                    <div className="skills-icon">
                        <img src={JSIcon} alt="JSIcon" />
                        <p>Javascript</p>
                    </div>
                    <div className="skills-icon">
                        <img src={CSharpIcon} alt="CSharpIcon" />
                        <p>C#</p>
                    </div>
                    <div className="skills-icon">
                        <img src={ReactIcon} alt="ReactIcon" />
                        <p>React</p>
                    </div>
                    <div className="skills-icon">
                        <img src={KotlinIcon} alt="KotlinIcon" />
                        <p>Kotlin</p>
                    </div>
                    <div className="skills-icon">
                        <img src={SQLIcon} alt="SQLIcon" />
                        <p>SQL</p>
                    </div>
                    <div className="skills-icon">
                        <img src={UnityIcon} alt="UnityIcon" />
                        <p>Unity</p>
                    </div>
                    <div className="skills-icon">
                        <img src={HtmlCssIcon} alt="HtmlCssIcon" />
                        <p>HTML/CSS</p>
                    </div>
                </div>

                <div className="top-line"></div>
                <h2 className="underline">My Education</h2>
                <div className="image-wrapper">
                    <div className="image-hover">
                        <img src={LogoPerp} alt="Perpetual" />
                        <div className="image-overlay">
                            <span className="overlay-text">University of Perpetual Help Laguna JONELTA <br />Senior High School <br />(2018-2020)</span>
                        </div>
                    </div>
                    <br />
                    <div className="image-hover">
                        <img src={LogoMcl} alt="Mcl" />
                        <div className="image-overlay">
                            <span className="overlay-text">Mapua Malayan Colleges of Laguna <br />Bachelor of Science in Computer Science <br />(2020-Present)</span>
                        </div>
                    </div>
                </div>

                <div className="top-line"></div>
                <h3 className="underline">My Projects</h3>
                <div className="projects-container">
                    <div className="project-card">
                        <div className="image-wrapper">
                            <img src={DepEdProj} alt="DepEd Project" />
                            <div className="image-overlay">
                                <span className="overlay-text">Performance Indicator website for the Department of Education, focused on enhancing the monitoring and analysis of school data in Sta. Rosa.<br></br><br></br>C#, ASP.NET Core MVC, SQL Server, HTML/CSS, Javascript</span>
                            </div>
                        </div>
                        <h4>DepEd Performance Indicator</h4>
                    </div>
                    <div className="project-card">
                        <div className="image-wrapper">
                            <img src={SCGProj} alt="SCG Project" />
                            <div className="image-overlay">
                                <span className="overlay-text">A booking website for South Country Gardens, enabling clients to effortlessly schedule events and view detailed information about the venue. </span>
                            </div>
                        </div>
                        <h4>South Country Garden</h4>
                        <p>
                            <a href="https://github.com/Joel0560/South-Country-Garden-Booking.git" target="_blank" rel="noopener noreferrer">
                                view project <FaGithub />
                            </a>
                        </p>
                    </div>
                    <div className="project-card">
                        <div className="image-wrapper">
                            <img src={CocoProj} alt="Coco Project" />
                            <div className="image-overlay">
                                <span className="overlay-text">An android application for predicting coconut maturity using real-time <br></br><br></br>Kotlin</span>
                            </div>
                        </div>
                        <h4>CocoScan Android Application</h4>
                        <p>
                            <a href="https://github.com/domort3/Thesis-CS202309.git" target="_blank" rel="noopener noreferrer">
                                view project <FaGithub />
                            </a>
                        </p>
                    </div>
                    <div className="project-card">
                        <div className="image-wrapper">
                            <img src={PlatformProj} alt="Platform Project" />
                            <div className="image-overlay">
                                <span className="overlay-text">A coin collecting platform game using One Piece assets <br></br><br></br> C#, Unity, SQL </span>
                            </div>
                        </div>
                        <h4>Demo Platform Game</h4>
                        <p>
                            <a href="https://github.com/domort3/Thesis-CS202309.git" target="_blank" rel="noopener noreferrer">
                                view project <FaGithub />
                            </a>
                        </p>
                    </div>
                </div>
                
                <div className="top-line"></div>
            </div>

            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className='face1'>
                        <img src={PythonIcon} alt="PythonIcon" />
                    </div>
                    <div className='face2'>
                        <img src={JSIcon} alt="JavascriptIcon" />
                    </div>
                    <div className='face3'>
                        <img src={ReactIcon} alt="ReactIcon" />
                    </div>
                    <div className='face4'>
                        <img src={CSharpIcon} alt="CSharpIcon" />
                    </div>
                    <div className='face5'>
                        <img src={KotlinIcon} alt="KotlinIcon" />
                    </div>
                    <div className='face6'>
                        <img src={SQLIcon} alt="SQLIcon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
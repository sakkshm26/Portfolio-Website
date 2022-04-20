import React from 'react';
import icons from "../assets/icons/x.svg";
import profile from "../assets/images/profile.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css3.svg";
import js from "../assets/icons/javascript.svg";
import bs from "../assets/icons/bootstrap.svg";
import rct from "../assets/icons/react.svg";
import git from "../assets/icons/git.svg";
import cpp from "../assets/icons/cpp.svg";
import python from "../assets/icons/python.svg";
import solidity from "../assets/icons/solidity.svg";
import django from "../assets/icons/django.svg";
import weather from "../assets/images/weather.png"
import form from "../assets/images/form.png"
import movie from "../assets/images/movie.png"
import trabify from "../assets/images/Trabify.png"
import dawnmerch from "../assets/images/Dawn-Merch.png"
import portfolio from "../assets/images/portfolio.png"
import TypewriterComponent from 'typewriter-effect';

function goToSection() {
    const toggle = document.querySelector('.toggle');
    const content = document.querySelector('.content');
    const toggleNav = document.querySelector('.toggle-navbar');
    content.classList.remove('hidden');
    toggleNav.classList.add('hidden');
    toggleNav.classList.remove('display-flex');
}

const handleClick = () => {
    const toggle = document.querySelector('.toggle');
    const content = document.querySelector('.content');
    const toggleNav = document.querySelector('.toggle-navbar');
    content.classList.add('hidden');
    toggleNav.classList.remove('hidden');
    toggleNav.classList.add('display-flex');
}

const Home = () => {
    return (
        <div>
            <div class="toggle-navbar hidden">
                <div onClick={() => goToSection()} class="cross">
                    <img src={icons} alt="" />
                </div>
                <nav class="navbar-new">
                    <ul class="nav-links">
                        <li class="list-item">
                            <a class="home-link" onClick={() => goToSection()} href="#home">Home</a>
                        </li>
                        <li class="list-item">
                            <a class="tech-link" onClick={() => goToSection()} href="#tech">Tech Stack</a>
                        </li>
                        <li class="list-item">
                            <a class="project-link" onClick={() => goToSection()} href="#projects">Projects</a>
                        </li>
                        <li class="list-item">
                            <a class="contact-link" onClick={() => goToSection()} href="#contact">Contact</a>
                        </li>
                        <li class="list-item">
                            <a class="resume-link" href="https://drive.google.com/file/d/1RhF4bqD3Pdn8l2MhuNWx6zW3q2M8RUi4/view?usp=sharing"
                                target="_blank">Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="content">
                <nav class="navbar">
                    <ul class="nav-links">
                        <li class="list-item">
                            <a href="#home">Home</a>
                        </li>
                        <li class="list-item">
                            <a href="#tech">Tech Stack</a>
                        </li>
                        <li class="list-item">
                            <a href="#projects">Projects</a>
                        </li>
                        <li class="list-item">
                            <a href="#contact">Contact</a>
                        </li>
                        <li class="list-item">
                            <a href="https://drive.google.com/file/d/1RhF4bqD3Pdn8l2MhuNWx6zW3q2M8RUi4/view?usp=sharing"
                                target="_blank">Resume</a>
                        </li>
                    </ul>
                    <span class="toggle" onClick={() => handleClick()}>
                        <span class="bar1"></span>
                        <span class="bar2"></span>
                        <span class="bar3"></span>
                    </span>
                </nav>

                <header>
                    <div class="home" id="home">
                        <div class="container1">
                            <h2>Hi, my name is</h2>
                            <h1 class="name">Saksham Sharma</h1>
                            {/* <div id="strings">
                                <p>I am <span class="text"></span></p>
                            </div> */}
                            <TypewriterComponent options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    // "I'm a Web Developer",
                                    // "I'm a Blockchain Developer",
                                    "I'm an Open Source enthusiast",
                                ]
                            }} />
                            <button><a href="#contact">Contact Me</a></button>
                        </div>
                        <img src={profile} alt="image" />
                    </div>
                </header>

                <section class="container2">
                    <div class="tech" id="tech">
                        <h2>Tech Stack</h2>
                        {/* <p>I am familiar with HTML5, CSS3, JavaScript, Bootstrap, React, C, C++ and Python</p> */}
                    </div>
                    <div class="icons">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={bs} alt="" />
                        <img src={rct} alt="" />
                        <img src={git} alt="" />
                        <img src={cpp} alt="" />
                        <img src={python} alt="" />
                        <img src={solidity} alt="" />
                        <img src={django} alt="" />
                    </div>
                </section>

                <section class="container3">
                    <div class="projects" id="projects">
                        <h2>Projects</h2>
                        <div class="project-cards">
                            <div class="card">
                                <img src={trabify} alt="" />
                                <div class="para">
                                    <h3>Trabify</h3>
                                    <p>Built a web application that allows the students of our college to buy and sell...</p>
                                    <p>Tech: React, Django, Firebase, PSQL</p>
                                    <div class="button">
                                        <button><a href="https://gotrabify.web.app/">Demo</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={dawnmerch} alt="" />
                                <div class="para">
                                    <h3>Dawn Merch</h3>
                                    <p>Built an e-commerce platform for buying various items...</p>
                                    <p>Tech: React, Redux, Firebase</p>
                                    <div class="button">
                                        <button><a href="https://sakkshm26.github.io/Dawn-merch/">Demo</a></button>
                                        <button><a href="https://github.com/sakkshm26/Dawn-merch/tree/master">Code</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={portfolio} alt="" />
                                <div class="para">
                                    <h3>Portfolio Website</h3>
                                    <p>Built my personal Portfolio Website with a responsive design.</p>
                                    <p>Tech: React, Firebase</p>
                                    <div class="button">
                                        <button><a href="https://sakkshm26.github.io/Portfolio-Website/">Demo</a></button>
                                        <button><a href="https://github.com/sakkshm26/Portfolio-Website">Code</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={movie} alt="" />
                                <div class="para">
                                    <h3>Movie App</h3>
                                    <p>Developed a Web App which allows the user to search a movie and the results are...</p>
                                    <p>Tech: HTML, CSS, JavaScript</p>
                                    <div class="button">
                                        <button><a href="https://sharp-bhabha-45afe8.netlify.app/">Demo</a></button>
                                        <button><a href="https://github.com/sakkshm26/Movie-App">Code</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={weather} alt="" />
                                <div class="para">
                                    <h3>Weather App</h3>
                                    <p>Developed a Web App which allows the user to enter a city name and the weather...</p>
                                    <p>Tech: HTML, CSS, JavaScript</p>
                                    <div class="button">
                                        <button><a href="https://zen-tesla-15c2c1.netlify.app/">Demo</a></button>
                                        <button><a href="https://github.com/sakkshm26/Weather-App">Code</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={form} alt="" />
                                <div class="para">
                                    <h3>Form Validation</h3>
                                    <p>It allows the user to fill up details in a form and the validity of the details is
                                        checked</p>
                                    <p>Tech: HTML, Bootstrap, JavaScript</p>
                                    <div class="button">
                                        <button><a href="https://determined-boyd-ad54ae.netlify.app/">Demo</a></button>
                                        <button><a href="https://github.com/sakkshm26/Form-Validation">Code</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div class="contact" id="contact">
                        <h2>Contact</h2>
                        <ul class="icons">
                            <li><a href="https://www.linkedin.com/in/sakshamsharma630" target="_blank"><i
                                class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/sakkshm26" target="_blank"><i class="fab fa-github"></i></a></li>
                            <li><a href="https://twitter.com/sakkshm_" target="_blank"><i class="fab fa-twitter-square"></i></a>
                            </li>
                            <li><a href="https://instagram.com/sakkshm_" target="_blank"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                        <p>© Saksham Sharma 2022</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Home

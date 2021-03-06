/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Proyecto from "./Proyecto";
import "./Hero.css";
import imgCalculadora from "../assets/calculadora.png";
import photoG from "../assets/photoG.jpg";
import insta from "../assets/insta.png";
import hforms from "../assets/hforms.jpg";
import venom from "../assets/venom.png";

export default function HeroSection() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark" id="navbar-example2" style={{ backgroundColor: "#120d21" }}>
        <div className="navbar-brand" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" id="navbarOption">
            <li className="nav-item">
              <a className="nav-link" href="#heroSection">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobreMi">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactSection">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <div className="HeroSection" id="heroSection">
          <div className="mainTitle">
            <h1 className="title">COMPUTER SCIENCE AND INFORMATION TECHNOLOGY </h1>
            <span className="secondTitle">ENGINEER</span>
          </div>
          <div className="contact">
            <div className="contactContainer">
              <a className="social-icon" href="https://github.com/esc20936">
                <i className="fa-brands fa-github icono" />
              </a>
              <a className="social-icon" href="https://www.linkedin.com/in/pablo-escobar-6188981a2">
                <i className="fa-brands fa-linkedin icono" />
              </a>
            </div>
          </div>
          <div className="animationContainer">
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json"
              className="lottie"
            />
          </div>
        </div>

        <div className="sobreMi" id="sobreMi">
          <div className="textArea">
            <div className="titleContainer">
              <h1 className="title2">About me</h1>
            </div>
            <div className="textContainer">
              <span className="description">
                Engineering student at Universidad del Valle de Guatemala (UVG).
                technology enthusiast motivated to continue
                honing and learning new skills to grow
                professionally. I am confident in my ability to learn
                new technologies and be flexible to change. Among the technologies I handle
                are C#, Java, JavaScript, PHP, Python, Relational and not relational Databases.
                I currently focus on mobile development with React Native and developing
                Web with React. I make use of different tools for my projects,
                such as versioning with GitHub, Webpack, Babel and ESLint.
              </span>
            </div>

          </div>
          <div className="Imagen">
            <Player
              autoplay
              loop
              // src="https://assets1.lottiefiles.com/packages/lf20_osrbi94c.json"
              src="https://assets8.lottiefiles.com/packages/lf20_xu3jsjrn.json"
              className="bitmojiIMG"
              setSpeed={1}
            />
          </div>
        </div>
        <div className="proyectos" id="proyectos">
          <div className="textArea">
            <div className="titleContainer2">
              <h1 className="title2">Projects</h1>
            </div>
          </div>
          <div className="proyectosContainer">
            <Proyecto
              img={hforms}
              titulo="HealthForms"
              tecnologia="React Native, Firebase"
              description="Health Forms is a mobile application designed to streamline the process of filling out medical forms by using QR codes to share user information."
              repo="https://github.com/esc20936/my-project"
            />
            <Proyecto
              img={venom}
              titulo="Venom 3D"
              tecnologia="React, Three.js"
              description="Venom 3D model. This is a sample of 3D models using Three.js and React for Web solutions."
              repo="https://github.com/esc20936/pagVenom"
            />
            <Proyecto
              img={photoG}
              titulo="PhotoGallery"
              tecnologia="React Native"
              description="Mobile application of multimedia content self-generated by APIS. For this project, the Instagram and TikTok applications were used as a reference."
              repo="https://github.com/esc20936/photoGallery"
            />
            <Proyecto
              img={imgCalculadora}
              titulo="Calculator"
              tecnologia="React.js"
              description="Functional modern calculator using components and state handling in React. For the development of the UI, the principle of Skeumorphism was used."
              repo="https://github.com/esc20936/calculadora"
            />
            <Proyecto
              img={insta}
              titulo="Instagram clone"
              tecnologia="React.js"
              description="Instagram web app clone using react components. All content is auto-generated by APIS."
              repo="https://github.com/esc20936/proyecto-1"
            />

          </div>
        </div>
        <div className="ContactSection" id="contactSection">
          <div className="textArea">
            <div className="titleContainer">
              <h1 className="title2">Let's talk, but you first!</h1>
            </div>
            <span className="description">
              ( Feel free to move me around )
            </span>
            <div className="textContainer">
              <div className="contact">
                <div className="contactContainer">
                  <a className="social-icon" href="mailto:pablo.pees@gmail.com">
                    <i className="fa-solid fa-envelope icono" />
                  </a>
                  <a className="social-icon" href="//api.whatsapp.com/send?phone=50259312457&text=Hey, I'd like to talk with you">
                    <i className="fa-brands fa-whatsapp icono" />
                  </a>
                  <a className="social-icon" href="https://twitter.com/PabloEs30798037">
                    <i className="fa-brands fa-twitter icono" />
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className="Imagen">
            <canvas className="webgl" id="webgl" />
          </div>
        </div>
      </div>

    </div>
  );
}

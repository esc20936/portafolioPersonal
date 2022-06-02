import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LogoImg from "../assets/marcaDeAgua.png";
import yo from "../assets/studying.png";
import "./Hero.css";


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
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobreMi">Sobre mi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <div className="HeroSection" id="heroSection">
          <div className="mainTitle">
            <h1 className="title">INGENÍERO EN CIENCIAS DE LA COMPUTACIÓN Y TECNOLOGÍAS DE LA </h1>
            <span className="secondTitle">INFORMACIÓN</span>
          </div>
          <div className="contact">
            <div className="contactContainer">
              <a className="social-icon" href="https://github.com/esc20936">
                <i className="fa-brands fa-github icono" />
              </a>
              <a className="social-icon" href="https://www.linkedin.com/in/pablo-escobar-6188981a2/">
                <i className="fa-brands fa-linkedin icono" />
              </a>
            </div>
          </div>
          {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" /> */}
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
              <h1 className="title2">Sobre Mi</h1>
            </div>
            <div className="textContainer">
              <span className="description">
                Estudiante de ingeniería en la Universidad del Valle de Guatemala (UVG),
                entusiasta de la tecnología con motivación para seguir
                perfeccionando y aprendiendo nuevas habilidades para crecer
                profesionalmente. Confío en mi habilidad de aprender
                nuevas tecnologías y ser flexible al cambio. Entre las tecnologías que manejo
                estan C#, Java, JavaScript, PHP, Python, Bases de datos relacionales y no relacionales.
                Actualmente me enfoco en el desarrollo movil con React Native y en el desarrollo
                Web con React.
              </span>
            </div>

          </div>
          <div className="Imagen">
            <Player
              autoplay
              loop
              // src="https://assets5.lottiefiles.com/packages/lf20_wczpanc1.json"
              src="https://assets8.lottiefiles.com/packages/lf20_xu3jsjrn.json"
              className="bitmojiIMG"
              setSpeed={3}
            />
          </div>
        </div>
        <div className="proyectos" id="proyectos">
        <div className="textArea">
            <div className="titleContainer2">
              <h1 className="title2">Proyectos</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

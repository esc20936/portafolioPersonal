import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LogoImg from "../assets/marcaDeAgua.png";
import "./Hero.css";

export default function HeroSection() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#120d21" }}>
        <div className="navbar-brand">
          {/* <img src={LogoImg} width="60" height="60" className="logoImg" alt="" /> */}
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" id="navbarOption">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre mi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="HeroSection">
        <div className="mainTitle">
          <h1 className="title">INGENÍERO EN CIENCIAS DE LA COMPUTACIÓN Y TECNOLOGÍAS DE LA </h1>
          <span className="secondTitle">INFORMACIÓN</span>
        </div>
        <div className="contact">
          <div className="contactContainer">
            <a className="social-icon" href="https://github.com/esc20936">
              <i className="fa-brands fa-github icono"></i>
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/pablo-escobar-6188981a2/">
              <i className="fa-brands fa-linkedin icono"></i>
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

      <div className="sobreMi">
      <div className="mainTitle sub">
          <span className="title sub">Sobre mi</span>
          <div className="aboutMeContainer">
          <h3 className="description">
            Soy estudiante de ciencias de la computación y tecnologías de información en la UVG.
            Soy un apasionado de la tecnología, el cual disfruta aprender nuevas tecnologías. Mi enfoque va más orientado al desarrollo movil y al desarrollo web, con tecnologías tales como React, React Native y Xamarin.
             
          </h3>
        </div>
        </div>
        
      </div>
      
    </div>
  );
}
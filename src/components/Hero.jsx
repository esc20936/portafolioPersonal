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
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobreMi">Sobre mi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
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
                están C#, Java, JavaScript, PHP, Python, Bases de datos relacionales y no
                relacionales.
                Actualmente me enfoco en el desarrollo móvil con React Native y en el desarrollo
                Web con React. Hago uso de diferentes herramientas para mis proyectos,
                tales como versionamiento con GitHub, Webpack, Babel y ESLint.
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
              <h1 className="title2">Proyectos</h1>
            </div>
          </div>
          <div className="proyectosContainer">
            <Proyecto
              img={imgCalculadora}
              titulo="Calculadora"
              tecnologia="React.js"
              description="Calculadora moderna funcional utilizando componentes y manejo de estados en React. Para el desarrollo del UI se utilizó el principio de Skeumorfismo."
              repo="https://github.com/esc20936/calculadora"
            />
            <Proyecto
              img={photoG}
              titulo="PhotoGallery"
              tecnologia="React Native"
              description="Aplicación móvil de contenido multimedia autogenerado por APIS. Para este proyecto se utilizo como referencia la aplicación de Instagram y de TikTok"
              repo="https://github.com/esc20936/photoGallery"
            />
            <Proyecto
              img={insta}
              titulo="Instagram clone"
              tecnologia="React.js"
              description="Clon de la aplicación web de Instagram utilizando componentes de react. Todo el contenido es autogenerado por APIS."
              repo="https://github.com/esc20936/proyecto-1"
            />

            <Proyecto
              img={hforms}
              titulo="HealthForms"
              tecnologia="React Native, Firebase"
              description="Health Forms es una aplicación móvil pensada para agilizar el proceso de llenado de formularios médicos utilizando códigos QR para compartir la información del usuario. "
              repo="https://github.com/esc20936/my-project"
            />
            <Proyecto
              img={venom}
              titulo="Venom 3D"
              tecnologia="React, Three.js"
              description="Modelo en 3D de Venom, una película de ciencia ficción de Marvel. Esta es una muestra de modelos en 3D utilizando Three.js y React para soluciones Web."
              repo="https://github.com/esc20936/pagVenom"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import "./index.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from "three";

import avatar from "./assets/models/avatar.glb";

import HeroSection from "./components/Hero";

// ReactDOM.render(<HeroSection />, document.getElementById("root"));

function createCanvas() {
  const canvas = document.querySelector(".webgl");
  return canvas;
}

function loadModel(SCENE) {
  const loader = new GLTFLoader();
  let maqueta = "";
  loader.load(
    "./assets/models/580fd583f980b2a2db68207d2ab47dc8.glb",
    (gltf) => {
      gltf.scene.scale.set(2.5, 2.5, 2.5);
      gltf.scene.position.set(0, -2.5, 0);
      maqueta = gltf.scene;

      SCENE.add(maqueta);
    },
    (xhr) => {
      console.log(`${((xhr.loaded) / (xhr.total)) * 100}% loaded`);
    },
    (error) => {
      console.log(error.message);
    },
  );
}

function init() {
  ReactDOM.render(<HeroSection />, document.getElementById("root"));
  const canvas = createCanvas();

  const SCENE = new THREE.Scene();
  // const light = new THREE.AmbientLight(0xFFFFFF, 0.8); // soft white light
  // SCENE.add(light);
  loadModel(SCENE);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const light1 = new THREE.DirectionalLight(0x631d19, 3);
  light1.position.set(1, 0.5, 1);
  light1.lookAt(new Vector3());
  light1.castShadow = false;
  SCENE.add(light1);

  const light2 = new THREE.DirectionalLight(0xd1d1d1, 2.5);
  light2.position.set(-1, 0.5, 2);
  light2.lookAt(new Vector3());
  light2.castShadow = false;
  SCENE.add(light2);

  const light3 = new THREE.DirectionalLight(0xececec, 1.5);
  light3.position.set(0, 0.5, -2);
  light3.lookAt(new Vector3());
  light3.castShadow = false;
  SCENE.add(light3);

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
  camera.position.set(0, 2, 4);
  SCENE.add(camera);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
  renderer.setClearColor(0x120d21, 1);
  renderer.setSize(sizes.width, sizes.height);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enableZoom = false;
  const tick = () => {
    controls.update();
    renderer.render(SCENE, camera);
    window.requestAnimationFrame(tick);
  };

  // ACTUALIZAR AL CAMBIAR EL TAMANO
  window.addEventListener("resize", () => {
    sizes.height = window.innerHeight;
    sizes.width = window.innerWidth;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  tick();
}

init();

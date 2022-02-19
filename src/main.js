import './index.sass'
import * as THREE from 'three';
import TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas } from './components/Canvas';
import { Torus } from './components/Torus';
import { Moon } from './components/Moon';
import spaceTextureImg from './assets/textures/space.jpg'; //galaxy-space-textured-background.jpg
import { Sun } from './components/Sun';
import { Earth } from './components/Earth';
import { Mars } from './components/Mars';
import { Mercury } from './components/Mercury';
import { Venus } from './components/Venus';
import movementSoundFile from "./assets/sounds/movement_sound.mp3";

const App = document.getElementById("app");

// canvas initialize
const canvas = Canvas();
App.append(canvas);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

const controls = new OrbitControls(camera, renderer.domElement);

const onWindowResize = () =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener( 'resize', onWindowResize, false );

// create lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

// create helpers
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 5);
// scene.add(lightHelper, gridHelper);

// create sun
const sun = Sun();

// create mercury
const mercury = Mercury();
mercury.position.set(80, 0, -20);

// create venus
const venus = Venus();
venus.position.set(130, 0, 10);

// create earth
const earth = Earth();
earth.position.set(200, 0, 0);

// create moon
const moon = Moon();

//create mars
const mars = Mars();
mars.position.set(280, 0, 40);

scene.add(sun, mercury, venus, earth, moon, mars);

// create space texture
const spaceTexture = new THREE.TextureLoader().load(spaceTextureImg);
scene.background = spaceTexture;

let t = 0;

function animate(time) {
  requestAnimationFrame(animate);

  sun.rotation.y -= 0.002;
  mercury.rotation.y += 0.002;
  venus.rotation.y += 0.002;
  earth.rotation.y += 0.003;
  moon.rotation.y += 0.01;
  mars.rotation.y += 0.007;

  // moon around earth rotation
  moon.position.x = Math.sin(t * 0.1) * 5 + 200;
  moon.position.z = Math.cos(t * 0.1) * 5;

  t += Math.PI / 180 * 2;

  TWEEN.update(time);
  controls.update();

  renderer.render(scene, camera);
}

animate();

// test

const animateButton = document.createElement("button");
animateButton.innerText = "Animate!";
animateButton.classList.add("animate-button");
document.body.append(animateButton);

const cameraPositions = [
  {
    "x": 82.8815445584162,
    "y": 5.393943582965272e-15,
    "z": -23.557024167646397
  },
  {
    "x": 139.65495888092576,
    "y": 8.558427028630176e-15,
    "z": 5.662788209672955
  },
  {
    "x": 205.70052553944333,
    "y": 1.259698994605241e-14,
    "z": 3.1378953138473564
  },
  {
    "x": 283.35346395079677,
    "y": 1.7549448700756022e-14,
    "z": 43.044268004710716
  }
];

let positionIndex = 0;

const movementSound = new Audio(movementSoundFile);

animateButton.addEventListener("click", e => {
  movementSound.cloneNode().play();
  // console.log("animate", { x: camera.position.x, y: camera.position.y, z: camera.position.z });
  const currentPosition = cameraPositions[positionIndex];
  positionIndex = positionIndex + 1 === cameraPositions.length? 0 : positionIndex + 1;

  const coords = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
  new TWEEN.Tween(coords)
      .to({ x: currentPosition.x, y: currentPosition.y, z: currentPosition.z }, 3000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() =>
        camera.position.set(coords.x, coords.y, coords.z)
      )
      .start();
});

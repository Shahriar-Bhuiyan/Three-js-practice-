import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, render.domElement);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0, 1 / 5, 5);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const BoxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, BoxMaterial);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF,side: THREE.DoubleSide });

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

function animation(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;
  render.render(scene, camera);
}

render.setAnimationLoop(animation);

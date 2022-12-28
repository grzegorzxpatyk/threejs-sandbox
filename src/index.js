import "./styles.css";
import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const edges = new THREE.EdgesGeometry(geometry);
const contour = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0xff6666 })
);
const material = new THREE.MeshBasicMaterial({ color: 0xccffaa });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube, contour);

camera.position.z = 5;

// const effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
// effect.setSize(window.innerWidth, window.innerHeight);
// effect.domElement.style.color = "white";
// effect.domElement.style.backgroundColor = "black";

// Special case: append effect.domElement, instead of renderer.domElement.
// AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

// document.body.appendChild(effect.domElement);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  contour.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  contour.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

import * as THREE from 'three';
import * as dat from 'dat.gui';

import earthMap from './img/earthMap.jpeg';
import skyImg from './img/sky.jpeg';
import cloud from './img/clouds.jpeg';
import heightMaping from './img/displaymentMap.png';

import planetVertexShader from './shader/planetVertex.glsl';
import planetFragmentShader from './shader/planetFragment.glsl';

import atmosphereVertexShader from './shader/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shader/atmosphereFragment.glsl';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild( renderer.domElement );

const textureLoarder = new THREE.TextureLoader(); 

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight); 

//earth
const planetGeometry = new THREE.SphereGeometry(5,50,50);

const earthMaterial = new THREE.ShaderMaterial({vertexShader:planetVertexShader,fragmentShader:planetFragmentShader,uniforms:{planetTexure:{value:textureLoarder.load(earthMap)},heightMap:{value:textureLoarder.load(heightMaping)},displacementScale:{value:0.15}}});
const earth = new THREE.Mesh(planetGeometry, earthMaterial);
scene.add(earth);

//monon


//earth atmosphere 
const atmosphereGeometry = new THREE.SphereGeometry(5.7,20,20);
const atmosphereMaterial = new THREE.ShaderMaterial({vertexShader:atmosphereVertexShader,fragmentShader:atmosphereFragmentShader,blending:THREE.AdditiveBlending, side:THREE.BackSide});
const atmosphere = new THREE.Mesh(atmosphereGeometry,atmosphereMaterial);
scene.add(atmosphere);

//earth clouds
const cloudGeometry = new THREE.SphereGeometry(5.5,50,50);
const cloudMaterial = new THREE.MeshBasicMaterial({map:textureLoarder.load(cloud),transparent:true, opacity:0.3})
const cloudLayer = new THREE.Mesh(cloudGeometry,cloudMaterial);
scene.add(cloudLayer);

scene.background = textureLoarder.load(skyImg);

camera.position.z = 15;

const earthChanging = {
  rotationSpeed: 0.003,
  clouds: true
};

const gui = new dat.GUI();
const planet = gui.addFolder('Earth');
planet.add(earthChanging,"rotationSpeed",0,0.01);
planet.add(earthChanging, "clouds").onChange(
  function(){
    if(!earthChanging.clouds){
      scene.remove(cloudLayer);
    }
    else
      scene.add(cloudLayer);
  });

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  earth.rotation.y += earthChanging.rotationSpeed;

  cloudLayer.rotation.y += earthChanging.rotationSpeed*1.1;
  cloudLayer.rotation.x += 0.00025;
   cloudLayer.rotation.z += 0.0003;
}

animate();

renderer.render(scene, camera);

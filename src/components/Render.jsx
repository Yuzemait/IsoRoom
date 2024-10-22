import React from 'react'
import { useEffect } from 'react'
import './Render.css'

import * as THREE from 'three'
import { LoadGLTFByPath } from '../lib/SceneLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { handleClick } from '../lib/HandleClick';

export default function Render({sceneFile='scene.gltf', onTitleChanged}) {
    useEffect(() => {
        const scene = new THREE.Scene();
        const mouse = new THREE.Vector2();
        
        const camera = new THREE.OrthographicCamera(
            -10,
            10,
            10,
            -10,
            0.1, 1000);
        camera.position.x = 10;
        camera.position.y = 8.020;
        camera.position.z = 10;
        camera.scale.set(1,1,1)
        // Convert to Euler angles
        camera.rotation.set(-27 * 3.1416 / 180, 41 * 3.1416 / 180, 19 * 3.1416 / 180);

        const canvas = document.getElementById(`canvas-${sceneFile}`);
        const renderer = new THREE.WebGLRenderer({ 
            canvas, 
            antialias: true 
        });

        renderer.setSize(window.innerWidth/2, window.innerWidth/2);
        window.addEventListener('resize', () => {
            const aspect = canvas.clientWidth / canvas.clientHeight;
            camera.left = -aspect * 10;
            camera.right = aspect * 10;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
          });



        scene.add(camera)
        LoadGLTFByPath(scene, sceneFile);
        scene.background = new THREE.Color('white' );
        
        handleClick(scene, camera, mouse, sceneFile, onTitleChanged);
        
        const animate = () => {
          
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
            controls.update();
            scene.updateWorldMatrix()
        }
        
        // controls
        
        const controls = new OrbitControls( camera, renderer.domElement );
        // controls.listenToKeyEvents( window ); // optional
        
        //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
        
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;
        
        controls.screenSpacePanning = false;
        controls.enablePan = false;
        
        controls.minZoom = 0.5;
        controls.maxZoom = 100;

        controls.maxPolarAngle = Math.PI / 2;

        animate();


    });


  return (
    <div className='canvas-container'>
        <canvas id={`canvas-${sceneFile}`}></canvas>
    </div>
  )
}

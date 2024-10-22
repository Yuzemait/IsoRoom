import * as THREE from 'three'
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';


export const LoadGLTFByPath = (scene, file) => {
    return new Promise((resolve, reject) => {
      // Create a loader
      const loader = new GLTFLoader();
      const path = "/scenes/" + file
  
      // Load the GLTF file
      loader.load(path, (gltf) => {

        scene.add(gltf.scene);

        resolve();
      }, undefined, (error) => {
        reject(error);
      });
    });
};
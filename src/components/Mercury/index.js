import * as THREE from 'three';
import mercuryImg from "../../assets/textures/mercury.jpg";
// import normalMapMercuryImg from '../../assets/textures/normal-map-mercury.jpg';

export const Mercury = () => {
    const mercuryTexture = new THREE.TextureLoader().load(mercuryImg);
    // const normalMapMercury = new THREE.TextureLoader().load(normalMapMercuryImg);

    const geometry = new THREE.SphereGeometry(1, 50, 50);
    const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
        // normalMap: normalMapMercury
    });

    const mercury = new THREE.Mesh(geometry, material);

    return mercury;
};
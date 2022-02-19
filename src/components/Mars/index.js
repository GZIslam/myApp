import * as THREE from 'three';
import marsImg from "../../assets/textures/mars.jpg";
// import normalMapMoonImg from '../../assets/textures/normal-map-moon.jpg';

export const Mars = () => {
    const marsTexture = new THREE.TextureLoader().load(marsImg);
    // const normalMapmars = new THREE.TextureLoader().load(normalMapmarsImg);

    const geometry = new THREE.SphereGeometry(1, 80, 80);
    const material = new THREE.MeshStandardMaterial({
        map: marsTexture,
        // normalMap: normalMapmars
    });

    const mars = new THREE.Mesh(geometry, material);

    return mars;
};
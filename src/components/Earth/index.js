import * as THREE from 'three';
import earthImg from "../../assets/textures/earth.jpg";
import normalMapEarthImg from '../../assets/textures/normal-map-earth.jpg';

export const Earth = () => {
    const earthTexture = new THREE.TextureLoader().load(earthImg);
    const normalMapEarth = new THREE.TextureLoader().load(normalMapEarthImg);

    const geometry = new THREE.SphereGeometry(2.5, 80, 80);
    const material = new THREE.MeshStandardMaterial({
        map: earthTexture,
        normalMap: normalMapEarth
    });

    const earth = new THREE.Mesh(geometry, material);

    return earth;
};
import * as THREE from 'three';
import moonImg from "../../assets/textures/moon.jpg";
import normalMapMoonImg from '../../assets/textures/normal-map-moon.jpg';

export const Moon = () => {
    const moonTexture = new THREE.TextureLoader().load(moonImg);
    const normalMapMoon = new THREE.TextureLoader().load(normalMapMoonImg);

    const geometry = new THREE.SphereGeometry(0.3, 80, 80);
    const material = new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalMapMoon
    });

    const moon = new THREE.Mesh(geometry, material);

    return moon;
};
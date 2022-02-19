import * as THREE from 'three';
import sunImg from "../../assets/textures/sun.jpg";
import normalMapMoonImg from '../../assets/textures/normal-map-moon.jpg';

export const Sun = () => {
    const sunTexture = new THREE.TextureLoader().load(sunImg);
    // const normalMapSun= new THREE.TextureLoader().load(normalMapMoonImg);

    const geometry = new THREE.SphereGeometry(20, 100, 100);
    const material = new THREE.MeshStandardMaterial({
        map: sunTexture,
        // normalMap: normalMapMoon
    });

    const sun = new THREE.Mesh(geometry, material);

    return sun;
};
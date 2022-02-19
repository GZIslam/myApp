import * as THREE from 'three';
import venusImg from "../../assets/textures/venus.jpg";
// import normalMapVenusImg from '../../assets/textures/normal-map-venus.jpg';

export const Venus = () => {
    const venusTexture = new THREE.TextureLoader().load(venusImg);
    // const normalMapVenus = new THREE.TextureLoader().load(normalMapVenusImg);

    const geometry = new THREE.SphereGeometry(3, 80, 80);
    const material = new THREE.MeshStandardMaterial({
        map: venusTexture,
        // normalMap: normalMapVenus
    });

    const venus = new THREE.Mesh(geometry, material);

    return venus;
};
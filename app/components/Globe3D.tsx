"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [earthTexture] = useTexture(['/globe.svg']); // Using your existing globe.svg as a placeholder

  // Set texture to grayscale
  earthTexture.grayscale = 1;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // Continuous spin
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} /> {/* Adjusted size for better visibility */}
      <meshPhysicalMaterial
        color="#1a1a1a" // Very dark gray for visibility
        map={earthTexture}
        roughness={0.05}
        metalness={0.0}
        transmission={0.95}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transparent={true}
        opacity={0.95} // Slightly increased opacity
        envMapIntensity={1.5} // Increased environment map intensity for reflections
      />
    </mesh>
  );
}

const Globe3D = () => {
  return (
    <section className="py-12 flex justify-center items-center w-full h-96">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}> {/* Adjusted camera position */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Globe />
        {/* OrbitControls removed for non-interactivity */}
      </Canvas>
    </section>
  );
};

export default Globe3D;

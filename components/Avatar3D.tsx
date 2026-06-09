"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Avatar() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <>
  {/* Head */}
  <mesh position={[0, 0.8, 0]}>
    <sphereGeometry args={[0.7, 32, 32]} />
    <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" />
  </mesh>

  {/* Body */}
  <mesh position={[0, -0.6, 0]}>
    <boxGeometry args={[1.2, 1.5, 0.8]} />
    <meshStandardMaterial color="#0891b2" />
  </mesh>

  {/* Left Eye */}
  <mesh position={[-0.2, 0.9, 0.6]}>
    <sphereGeometry args={[0.07, 16, 16]} />
    <meshStandardMaterial color="white" />
  </mesh>

  {/* Right Eye */}
  <mesh position={[0.2, 0.9, 0.6]}>
    <sphereGeometry args={[0.07, 16, 16]} />
    <meshStandardMaterial color="white" />
  </mesh>
</>
    </Float>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        <Avatar />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
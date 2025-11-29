"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface VehicleModelProps {
  type: "sedan" | "suv" | "van";
  color?: string;
}

export function VehicleModel({ type, color = "#1a1a1a" }: VehicleModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  // Different dimensions based on vehicle type
  const dimensions = {
    sedan: { body: [1.8, 0.5, 0.8], cabin: [1.2, 0.35, 0.7], cabinOffset: 0.1 },
    suv: { body: [1.9, 0.6, 0.9], cabin: [1.3, 0.45, 0.8], cabinOffset: 0.15 },
    van: { body: [2.2, 0.7, 0.9], cabin: [0.8, 0.5, 0.85], cabinOffset: 0.6 },
  };

  const dim = dimensions[type];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main body */}
      <RoundedBox
        args={dim.body as [number, number, number]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.3, 0]}
      >
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Cabin/roof */}
      <RoundedBox
        args={dim.cabin as [number, number, number]}
        radius={0.06}
        smoothness={4}
        position={[dim.cabinOffset, 0.65, 0]}
      >
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Windows */}
      <RoundedBox
        args={[(dim.cabin[0] as number) - 0.1, (dim.cabin[1] as number) - 0.1, (dim.cabin[2] as number) + 0.01]}
        radius={0.04}
        smoothness={4}
        position={[dim.cabinOffset, 0.65, 0]}
      >
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </RoundedBox>

      {/* Wheels */}
      {[
        [-0.55, 0.1, 0.4],
        [-0.55, 0.1, -0.4],
        [0.55, 0.1, 0.4],
        [0.55, 0.1, -0.4],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      {/* Headlights */}
      <mesh position={[0.9, 0.35, 0.3]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.9, 0.35, -0.3]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
      </mesh>

      {/* Taillights */}
      <mesh position={[-0.9, 0.35, 0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.9, 0.35, -0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, ReactNode } from "react";

interface Scene3DProps {
  children: ReactNode;
  className?: string;
}

export function Scene3D({ children, className }: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3, 2, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          {children}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

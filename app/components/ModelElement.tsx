import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedModel = ({
  Model,
  scale,
  modelPosition,
}: {
  Model: React.ComponentType<any>;
  scale?: number;
  modelPosition?: [number, number, number];
}) => {
  const groupRef = useRef<any>(null);

  useGSAP(() => {
    if (groupRef.current) {
      gsap.from(groupRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "back.out(1.5)",
      });
      gsap.from(groupRef.current.position, {
        y: -1, // Slide up from below
        duration: 1,
        ease: "power2.out",
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Model scale={scale} position={modelPosition} />
    </group>
  );
};

const ModelElement = ({
  position,
  model: Model,
  scale = 0.2,
  modelPosition = [0, 0, 0],
}: {
  position: string;
  model: React.ComponentType<{
    scale?: number;
    position?: [number, number, number];
  }>;
  modelPosition?: [number, number, number];
  scale?: number;
}) => {
  return (
    <div
      className={`absolute ${position} size-18 cursor-grab active:cursor-grabbing sm:size-20 md:size-24 lg:size-28`}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <React.Suspense fallback={null}>
          <Environment preset="city" />
          <Float speed={1} rotationIntensity={1} floatIntensity={2}>
            <AnimatedModel
              Model={Model}
              scale={scale}
              modelPosition={modelPosition}
            />
          </Float>
        </React.Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelElement;

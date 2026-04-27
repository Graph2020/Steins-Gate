import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

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
            <Model scale={scale} position={modelPosition} />
          </Float>
        </React.Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelElement;

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import type { ThreeElements } from "@react-three/fiber";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

export function Peper(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF("/models/dr_pepper_can.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.935}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.outer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/dr_pepper_can.glb");

"use client";

import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type PhoneProps = ThreeElements["group"];

type GLTFResult = GLTF & {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material;
  };
};

export function Phone(props: PhoneProps) {
  const { nodes, materials } = useGLTF(
    "/steinsgate_phone.glb",
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Base_0.geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Gray_0.geometry}
            material={materials.Gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Screen_0.geometry}
            material={materials.Screen}
          />
        </group>
        <group
          position={[0, -16.504, 389.808]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Base_0.geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Black_0.geometry}
            material={materials.Black}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Grove_0.geometry}
            material={materials.Grove}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Material_0.geometry}
            material={materials.Material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["B��zierCurve__0"].geometry}
          material={materials.BzierCurve__0}
          position={[-85.069, 19.266, 230.041]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30.755}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["B��zierCurve001__0"].geometry}
          material={materials.BzierCurve__0}
          position={[94.582, 19.248, 228.347]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30.755}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["B��zierCurve002__0"].geometry}
          material={materials.BzierCurve__0}
          position={[93.212, 19.177, 240.645]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30.755}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_Black_0.geometry}
          material={materials.Black}
          position={[-0.466, 16.581, -10.087]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={7.321}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 12.813, 226.92]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_Keys_0.geometry}
          material={materials.Keys}
          position={[84.841, 12.813, 226.92]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_Black_0.geometry}
          material={materials.Black}
          position={[132.577, -30.161, -342.934]}
          rotation={[-Math.PI / 2, 0, 1.134]}
          scale={[100, 49.419, 81.432]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_Keys_0.geometry}
          material={materials.Keys}
          position={[-83.599, 14.011, 279.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_Keys_0.geometry}
          material={materials.Keys}
          position={[0.879, 12.813, 227.583]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_Keys_0.geometry}
          material={materials.Keys}
          position={[0.879, 12.813, 127.536]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_Keys_0.geometry}
          material={materials.Keys}
          position={[-102.733, 12.813, 175.777]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_Keys_0.geometry}
          material={materials.Keys}
          position={[103.817, 12.813, 175.777]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[105.978, 97.026, 105.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_Keys_0.geometry}
          material={materials.Keys}
          position={[0.879, 12.813, 175.263]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[57.619, 59.864, 57.619]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_Text_0.geometry}
          material={materials.Text}
          position={[-72.618, 19.269, 422.786]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={27.512}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.126, 353.767]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003_Text_0.geometry}
          material={materials.Text}
          position={[82.754, 19.269, 379.718]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004_Text_0.geometry}
          material={materials.Text}
          position={[82.912, 19.269, 373.055]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_Text_0.geometry}
          material={materials.Text}
          position={[82.897, 19.269, 365.925]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text006_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text007_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text008_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text009_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text010_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text011_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text012_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text013_Text_0.geometry}
          material={materials.Text}
          position={[9.806, 19.269, 380.229]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text014_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text015_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text016_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.27, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 72.55, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text017_Text_0.geometry}
          material={materials.Text}
          position={[-0.734, 19.126, 353.767]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text018_Text_0.geometry}
          material={materials.Text}
          position={[-73.5, 19.126, 353.767]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text019_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.126, 306.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text020_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.126, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text021_Text_0.geometry}
          material={materials.Text}
          position={[-0.734, 19.126, 306.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text022_Text_0.geometry}
          material={materials.Text}
          position={[-73.5, 19.126, 306.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text023_Text_0.geometry}
          material={materials.Text}
          position={[72.033, 19.126, 261.666]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text024_Text_0.geometry}
          material={materials.Text}
          position={[-0.734, 19.126, 261.666]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text025_Text_0.geometry}
          material={materials.Text}
          position={[-73.5, 19.126, 261.666]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text026_Text_0.geometry}
          material={materials.Text}
          position={[-0.734, 19.126, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text027_Text_0.geometry}
          material={materials.Text}
          position={[-73.5, 19.126, 401.303]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text028_Text_0.geometry}
          material={materials.Text}
          position={[-0.734, 17.72, 221.644]}
          rotation={[-1.631, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text029_Text_0.geometry}
          material={materials.Text}
          position={[-0.734, 17.988, 125.83]}
          rotation={[-1.515, 0, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text030_Text_0.geometry}
          material={materials.Text}
          position={[-72.613, 16.517, 173.749]}
          rotation={[-Math.PI / 2, 0.029, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text031_Text_0.geometry}
          material={materials.Text}
          position={[73.637, 16.564, 173.749]}
          rotation={[-Math.PI / 2, -0.027, 0]}
          scale={[63.502, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text032_Text_0.geometry}
          material={materials.Text}
          position={[9.887, 19.269, 373.536]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text033_Text_0.geometry}
          material={materials.Text}
          position={[9.724, 19.269, 367.146]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text034_Text_0.geometry}
          material={materials.Text}
          position={[-63.118, 19.269, 382.105]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text035_Text_0.geometry}
          material={materials.Text}
          position={[-63.309, 19.269, 373.796]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text036_Text_0.geometry}
          material={materials.Text}
          position={[-63.336, 19.269, 368.044]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text037_Text_0.geometry}
          material={materials.Text}
          position={[83.176, 19.269, 332.237]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text038_Text_0.geometry}
          material={materials.Text}
          position={[82.912, 19.269, 326.218]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text039_Text_0.geometry}
          material={materials.Text}
          position={[83.203, 19.269, 319.054]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text040_Text_0.geometry}
          material={materials.Text}
          position={[9.908, 19.269, 333.959]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text041_Text_0.geometry}
          material={materials.Text}
          position={[9.887, 19.269, 327.312]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text042_Text_0.geometry}
          material={materials.Text}
          position={[9.904, 19.269, 320.748]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text043_Text_0.geometry}
          material={materials.Text}
          position={[-63.594, 19.269, 335.841]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text044_Text_0.geometry}
          material={materials.Text}
          position={[-63.156, 19.269, 328.987]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text045_Text_0.geometry}
          material={materials.Text}
          position={[-63.325, 19.269, 324.801]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text046_Text_0.geometry}
          material={materials.Text}
          position={[83.076, 19.269, 285.87]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text047_Text_0.geometry}
          material={materials.Text}
          position={[82.923, 19.269, 278.915]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text048_Text_0.geometry}
          material={materials.Text}
          position={[82.78, 19.269, 273.19]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text049_Text_0.geometry}
          material={materials.Text}
          position={[9.873, 19.269, 285.742]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text050_Text_0.geometry}
          material={materials.Text}
          position={[10.014, 19.269, 280.161]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text051_Text_0.geometry}
          material={materials.Text}
          position={[11.09, 19.269, 273.838]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text052_Text_0.geometry}
          material={materials.Text}
          position={[-63.271, 19.269, 286.893]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text053_Text_0.geometry}
          material={materials.Text}
          position={[-62.382, 19.269, 280.175]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text054_Text_0.geometry}
          material={materials.Text}
          position={[-63.33, 19.269, 274.305]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={6.319}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text056_Black_0.geometry}
          material={materials.Black}
          position={[-27.954, 16.423, -10.531]}
          rotation={[-1.557, 0, 0]}
          scale={[46.572, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text057_Black_0.geometry}
          material={materials.Black}
          position={[-56.15, 16.423, -10.531]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[46.572, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text058_Black_0.geometry}
          material={materials.Black}
          position={[54.984, 16.423, -10.531]}
          rotation={[-1.557, 0, 0]}
          scale={[46.572, 52.783, 31.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text059_Black_0.geometry}
          material={materials.Black}
          position={[26.788, 16.423, -10.531]}
          rotation={[-1.557, 0, 0]}
          scale={[46.572, 52.783, 31.212]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/steinsgate_phone.glb");

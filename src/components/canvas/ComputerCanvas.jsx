import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Avatar = ({ isMobile }) => {
  const { scene } = useGLTF('./myavatar/avatar.glb'); // Ensure correct GLB file path

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />

      {/* Bottom Light Effect */}
      <spotLight
        position={[0, -10, 0]} // Position the light below the avatar
        angle={0.5} // Control the spread of the light
        penumbra={1}
        intensity={3} // Adjust the intensity as needed
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={scene}
        scale={isMobile ? [2.5, 3.5, 3] : [5, 3.5, 4]} 
        position={isMobile ? [0, -3, -1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 15],
        fov: 30,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          zoomSpeed={0.6}
          minDistance={5}
          maxDistance={50}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Avatar isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

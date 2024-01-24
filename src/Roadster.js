import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Roadster(props) {
  const glbPath = process.env.PUBLIC_URL + "/roadster.glb";
  const { scene } = useGLTF(glbPath);
  const modelRef = React.useRef();

  const amplitude = 0.02; // Floating amplitude
  const frequency = 1.5; // Floating frequency  

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * frequency) * amplitude;
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      {...props}
      position={[1.2, 0, 2]}
      scale={0.38}
      rotation={[0.8, -1, 0]}
    />
  );
}

export default Roadster;

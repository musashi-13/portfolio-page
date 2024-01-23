import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
function easeInOutCubic(t) {
  
  return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function Model(props) {
  const { scene } = useGLTF('../public/scene.glb');
  const modelRef = React.useRef();

  const startRotation = [0.2, 0.3, 0.3];
  const targetRotation = [0.3, 0.7, 0.2];
  const animationDuration = 3;
  let elapsedTime = 0;

  useFrame((state, delta) => {
    if (modelRef.current && elapsedTime < animationDuration) {
      elapsedTime += delta;

      const t = easeInOutCubic(elapsedTime / animationDuration);

      modelRef.current.rotation.set(
        startRotation[0] + (targetRotation[0] - startRotation[0]) * t,
        startRotation[1] + (targetRotation[1] - startRotation[1]) * t,
        startRotation[2] + (targetRotation[2] - startRotation[2]) * t
      );

      if (t === 1) {elapsedTime = animationDuration;}
    }
  });

  return <primitive object={scene} ref={modelRef} rotation={startRotation} scale={1.5} {...props} />;
}
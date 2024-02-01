import { useCubeTexture, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

const CubeEntity = () => {

  const [cube, cube2] = useTexture(['textures/cubemap/bg.jpg', 'textures/cubemap/cube.png']);
  const envMap = useCubeTexture(['bg.jpg', 'cube.png', 'bg.jpg', 'bg.jpg', 'bg.jpg', 'bg.jpg'], { path: 'textures/cubemap/' });

  const cubeRef = useRef<any>(null);
  useFrame((state, delta) => cubeRef.current.rotation.y += delta);

  const y = useMotionValue(1.1);

  const scale = useMotionValue(1);
  const color = useTransform(scale, [1, 1.5], ['#ffc800', '#e69d00']);

  const handleClick = () => {
    console.log('click');
    console.log(envMap);
  }

  const handlePointerOver = () => {
    animate(scale, 1.3, { type: 'spring' });
    animate(y, [1.1, 1.3], { repeat: Infinity, repeatType: "reverse", duration: 1, repeatDelay: 0 });
  }

  const handlePointerOut = () => {
    animate(scale, 1, { type: 'spring' });
    animate(y, 1.1, { type: 'spring' });
  }

  return (
    <motion.mesh castShadow={true} position={[0, y, 4.5]} ref={cubeRef} onClick={handleClick} initial={{ x: -10 }} animate={{ x: 0, transition: { delay: 0.5, duration: 1, type: 'spring' } }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} scale={scale}>
      <motion.boxGeometry args={[0.7, 1.1, 0.05]} />
      <motion.meshStandardMaterial color={color} metalness={1} roughness={0.7} envMap={envMap} />
    </motion.mesh>
  );
}

export default CubeEntity;
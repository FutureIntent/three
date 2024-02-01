import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

const CubeEntity = () => {

  const [cube] = useTexture(['textures/cube/bg.jpg']);

  const cubeRef = useRef<any>(null);
  useFrame((state, delta) => cubeRef.current.rotation.y += delta);

  const y = useMotionValue(1.1);

  const scale = useMotionValue(1);
  const color = useTransform(scale, [1, 1.5], ['#ffc800', '#e69d00']);

  const handleClick = () => {
    console.log('click');
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
      <motion.meshStandardMaterial attach="material-0" color={color} metalness={1} roughness={0.7} />
      <motion.meshStandardMaterial attach="material-1" color={color} metalness={1} roughness={0.7} /> 
      <motion.meshStandardMaterial attach="material-2" color={color} metalness={1} roughness={0.7} /> 
      <motion.meshStandardMaterial attach="material-3" color={color} metalness={1} roughness={0.7} /> 
      <motion.meshStandardMaterial attach="material-4" color={color} metalness={1} roughness={0.7} />
      <motion.meshStandardMaterial attach="material-5" color={color} metalness={1} roughness={0.7} map={cube} />  
    </motion.mesh>
  );
}

export default CubeEntity;
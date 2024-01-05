import { useFrame, useThree } from "@react-three/fiber";
import { easeInOut, useMotionValue, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";

const CubeEntity = () => {

    const meshRef = useRef<any>(null);
    useFrame((state, delta) => meshRef.current.rotation.y +=delta);

    const [cubeOpacity, setCubeOpacity] = useState<number>(0);

    const opacity = useMotionValue(0);

    const handleClick = () => {
        setCubeOpacity(1);
    }

    useMotionValueEvent(opacity, "animationStart", () => {
        console.log("animation started on opacity")
      })
      
      useMotionValueEvent(opacity, "change", (latest) => {
        console.log("opacity changed to", latest)
      })

      useEffect(() => {
        opacity.get();
      }, [cubeOpacity])

    return (
        <motion.mesh position={[0, 0, 0]} ref={meshRef} onClick={handleClick}>
            <motion.boxGeometry args={[1, 1, 1]} animate={{opacity: cubeOpacity}} />
            <meshStandardMaterial />
        </motion.mesh>
    );
}

export default CubeEntity;
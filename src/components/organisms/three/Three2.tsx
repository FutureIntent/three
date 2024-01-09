import { useThree } from "@react-three/fiber";
import PlaneEntity from "../../molecules/three/meshes/PlaneEntity";
import { useEffect, useState } from "react";
import CubeEntity from "../../molecules/three/meshes/CubeEntity";
import { animate, useMotionValue, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";

const Three2 = () => {

    const [translateZ, setTranslateZ] = useState<number>(0);
    const z = useMotionValue(0);

    useThree(({ camera }) => camera.position.z = translateZ);

    useEffect(() => {
        animate(z, [0, 6], { duration: 1, ease: 'easeOut' });
    }, []);

    useMotionValueEvent(z, "change", (latest) => {
        setTranslateZ(latest);
    });

    return (
        <>
            <color args={["#000000"]} attach="background" />
            {/* <ambientLight intensity={0.5} color={'#FFFFFF'} /> */}
            {/* <directionalLight color="white" intensity={5} position={[0, 1.2, 4.6]} /> */}
            <motion.spotLight color={'#DAA520'} position={[0, 2, 6]} intensity={50} castShadow={true} penumbra={1} />
            <PlaneEntity />
            <CubeEntity />
        </>
    );
}

export default Three2;
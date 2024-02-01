import { useThree } from "@react-three/fiber";
import PlaneEntity from "@components/molecules/three/meshes/PlaneEntity";
import { useContext, useEffect } from "react";
import CubeEntity from "@components/molecules/three/meshes/CubeEntity";
import { animate, useMotionValue, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";
import { ThreeContext } from "@contexts/three/threeContext";
import { Environment } from "@react-three/drei";

const Three2 = () => {

    const z = useMotionValue(0);

    const threeHook = useThree();

    const { three } = useContext(ThreeContext);

    useEffect(() => {
        animate(z, [0, three.camera.position.z], { duration: 1, ease: 'easeOut' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useMotionValueEvent(z, "change", (latest) => {
        threeHook.camera.position.z = latest;
    });

    return (
        <>
            <Environment
                background={true}
                blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                files={['corona_ft.png', 'corona_bk.png', 'corona_up.png', 'corona_dn.png', 'corona_lf.png', 'corona_rt.png']}
                path="textures/skybox/"
            />
            <color args={["#000000"]} attach="background" />
            <motion.spotLight color={'#DAA520'} position={[0.1, 2, 6]} intensity={50} castShadow={true} penumbra={1} />
            <PlaneEntity />
            <CubeEntity />
        </>
    );
}

export default Three2;
import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import {planeTexture as texture} from '@components/atoms/textures/plane/planeTexture';

const PlaneEntity = () => {

    const planeTexture = useTexture({...texture});

    return (
        <mesh receiveShadow={true} position={[0, 0, 5]} rotation={[-1.57, 0, 0]}>
            <planeGeometry args={[5, 5]} />
            <motion.meshStandardMaterial {...planeTexture} />
        </mesh>
    );
}

export default PlaneEntity;
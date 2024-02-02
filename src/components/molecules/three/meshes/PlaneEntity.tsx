import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import {planeTexture as texture} from '@components/atoms/textures/plane/planeTexture';

const PlaneEntity = () => {

    const planeTexture = useTexture({...texture});

    return (
        <mesh receiveShadow={true} position={[0, 0, 0]} rotation={[-1.57, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <motion.meshStandardMaterial {...planeTexture} emissive={'white'} emissiveIntensity={1} envMapIntensity={10} />
        </mesh>
    );
}

export default PlaneEntity;
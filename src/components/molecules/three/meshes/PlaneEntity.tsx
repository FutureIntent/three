import { motion } from "framer-motion-3d";

const PlaneEntity = () => {

    return(
        <mesh receiveShadow={true} position={[0, 0, 0]} rotation={[-1.57, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <motion.meshStandardMaterial color="silver" metalness={1} roughness={1} />
        </mesh>
    );
}

export default PlaneEntity;
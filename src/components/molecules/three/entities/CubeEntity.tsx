import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const CubeEntity = () => {
    const meshRef = useRef<any>();
    const [rot, setRot] = useState(0);

    const handleClick = (event: any) => {
        console.log(event);
        meshRef.current.rotation.x += 10;
    }

    return (
        <mesh ref={meshRef} onClick={handleClick}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    );
}

export default CubeEntity;
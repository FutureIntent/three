import styled from "styled-components";
import ThreeContextProvider from "../../../contexts/three/threeContext";
import { Canvas } from "@react-three/fiber";
import CubeEntity from "../../molecules/three/entities/CubeEntity";

const ThreeContainer = styled.div`
width: 100%;
height: 100vh;
min-height: 500px;
min-width: 500px;
`;

const Three = () => {
    return (
        <ThreeContextProvider>
            <ThreeContainer id="canvas-container">
                <Canvas>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <CubeEntity />
                </Canvas>
            </ThreeContainer>
        </ThreeContextProvider>
    );
}

export default Three;
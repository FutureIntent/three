import React from 'react';
import styled from 'styled-components';
import Three2 from './components/organisms/three/Three2';
import ThreeContextProvider from './contexts/three/threeContext';
import { Canvas } from '@react-three/fiber';

const AppContent = styled.div`
width: 100%;
overflow: auto;
`;

const ThreeContainer = styled.div`
width: 100%;
height: 100vh;
min-height: 500px;
min-width: 500px;
`;

function App() {

  return (
    <AppContent>
      <ThreeContextProvider>
        <ThreeContainer id='canvas_container'>
          <Canvas shadows={true} camera={{ position: [0, 1.2, 0], rotation: [0, 0, 0] }}>
            <Three2 />
          </Canvas>
        </ThreeContainer>
      </ThreeContextProvider>
    </AppContent>
  );
}

export default App;

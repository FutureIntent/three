import React from 'react';
import styled from 'styled-components';
import Three from './components/organisms/three/Three';

const AppContent = styled.div`
width: 100%;
overflow: auto;
`;

function App() {
  return (
    <AppContent>
      <Three />
    </AppContent>
  );
}

export default App;

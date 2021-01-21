import React from 'react';
import Sidebar from './Components/Sidebar';
import Statistics from './Components/Statistics';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <Sidebar />
      <Statistics />
    </div>
  );
}

export default App;

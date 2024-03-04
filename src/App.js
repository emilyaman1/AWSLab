import React from 'react';
import Navbar from './Navbar';
import BasicExample from './Card'; // Import your BasicExample component

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center">CS 230L</h1>
      <h2 className="text-center">Section - 001</h2>
      <p className="text-center">WVU ID: 800246641</p>
      <p className="text-center">Hi I am Emily Aman</p>
      <div className="row justify-content-center">
        <div className="col text-center">
          <BasicExample />
        </div>
        <div className="col text-center">
          <BasicExample />
        </div>
        <div className="col text-center">
          <BasicExample />
        </div>
      </div>
    </div>
  );
}

export default App;

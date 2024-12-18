import React from 'react';
import Counter from './Counters';
import './Counter.css';

function ShowCounter() {
  return (
    <div className="App">
      <div className="counter-wrapper">
        <Counter dataTarget={1254} text="New Visiters Every Week" />
        <Counter dataTarget={12168} text="Happy customers every year" />
        <Counter dataTarget={2172} text="Won Amazing Awards" />
        <Counter dataTarget={732} text="New Listing Every Week" />
      </div>
    </div>
  );
}

export default ShowCounter;

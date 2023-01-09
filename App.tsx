import * as React from 'react';
import ClassCounter from './ClassCounter';
import FCounter from './FunctionCounter';
import './style.css';

export default function App() {
  
  return (
    <div>
      <FCounter></FCounter>
      <ClassCounter></ClassCounter>
    </div>
  );
}

import * as React from 'react';
function FCounter() {
  const [count,setCount] = React.useState(0);
  function incrementValue() {
    console.log('ffff')
    const newCount = count+1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Function Component Counter</h1>
      <span>{count}</span>
      <button onClick={()=> incrementValue()}>Counter</button>
    </div>
  );
}
export default FCounter;
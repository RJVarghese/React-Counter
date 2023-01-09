import * as React from 'react';
class ClassCounter extends React.Component<any, {count: number}> {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }
  incrementCounter() {
    this.setState(({ count }) => {
      console.log('hhh', count)
      return ({
      count: count + 1
    })});
  }
  render() {
    return (
      <div>
      <h1>Class Component Counter</h1>
      <span>{this.state.count}</span>
      <button onClick={()=>this.incrementCounter()}>counter</button>
      </div>
    )
  }
}
export default ClassCounter;
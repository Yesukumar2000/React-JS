import React, { PureComponent } from "react";

export default class CCCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      age: 0,
    };
  }

  // Lifecycle method - Component mounted
  componentDidMount() {
    console.log(`CC Counter Loaded`);
  }

  // Before update
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`CC - shouldComponentUpdate - before render`);
    return true;
  }

  // After update
  componentDidUpdate() {
    console.log(`CC - shouldComponentUpdate - after render`);
  }

  // Component will unmount
  componentWillUnmount() {
    console.log(`CC Counter will be Unloaded`);
  }

  render() {
    console.log(`Render`);
    return (
      <div className="counterDiv">
        <div>
          <h1>CC-Counter</h1>
          <h1>Score: {this.state.score}</h1>
          <button
            onClick={() => this.setState({ score: this.state.score + 1 })}
          >
            Increment Score
          </button>
          <button
            onClick={() => this.setState({ score: this.state.score - 1 })}
          >
            Decrement Score
          </button>
          <br />
          <h1>Age: {this.state.age}</h1>
          <button
            onClick={() => this.setState({ age: this.state.age + 1 })}
          >
            Increment Age
          </button>
          <button
            onClick={() => this.setState({ age: this.state.age - 1 })}
          >
            Decrement Age
          </button>
        </div>
      </div>
    );
  }
}

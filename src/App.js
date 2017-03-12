import React, { Component } from 'react';
import './App.css';
import Range from "./components/range"
import Output from "./components/output"


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: "Normal"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Body Mass Index (BMI) Calculator</h1>

        <form>

          <div>
            <label>Height</label>
            <Range />
          </div>

          <div>
            <label>Weight</label>
          </div>

        </form>

        <br />
        <br />

        <Output />

      </div>
    );
  }
}

export default App;

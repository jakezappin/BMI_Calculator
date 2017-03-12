import React, { Component } from 'react';


class Output extends Component {

  toFeet(number){
    let realFeet = ((number * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.floor((realFeet - feet) * 12);
    return feet + "'" + inches;
  }

  toLbs(number){
    let nearExactLbs = (number / .45359237);
    let lbs = Math.floor(nearExactLbs);
    return lbs;
  }

  render() {

    let height = this.toFeet(this.props.data.height);
    let weight = this.toLbs(this.props.data.weight);
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        <h3>Height: {height}</h3>
        <h3>Weight: {weight} lbs</h3>
        <h3>BMI: {bmi}</h3>
        <h3 className={(this.props.data.bmiClass === "Obese") ? "danger" : ''}>Category: {bmiClass}</h3>
      </div>
    );
  }
}

export default Output;

import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceVal: ["one", "two", "three", "four", "five", "six"],
    val: 1
  }

  handleClick = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { diceVal, val, locked, isRolling, disabled } = this.props
    let classes = `fas fa-dice-${diceVal[val-1]} fa-5x `
    if(locked)
      classes += "Die-locked "; 
    if(isRolling)
      classes += "Die-rolling"  
    return (
      <i
        className={`Die ${classes}`} 
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;

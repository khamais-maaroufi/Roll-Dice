import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export class RollDice extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location.reload();
  }
  render() {
    const i = Math.floor(Math.random() * 7) + 1;
    const j = Math.floor(Math.random() * 7) + 1;

    return (
      <div className="FlexContainer">
        <div className="FlexContainer-2">
          <div>
            <Die n={i} />
          </div>
          <div>
            <Die n={j} />
          </div>
        </div>
        <div className="FlexContainer-3">
          <button onClick={this.handleClick}>Try</button>
        </div>
      </div>
    );
  }
}

export default RollDice;

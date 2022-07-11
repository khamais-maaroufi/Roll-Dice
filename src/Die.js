import React, { Component } from "react";
import "./Die.css";
export class Die extends Component {
  render() {
    const i = this.props.n;
    let number;
    switch (i) {
      case 1:
        number = "fa-solid fa-dice-one fa-10x";
        break;
      case 2:
        number = "fa-solid fa-dice-two fa-10x";
        break;
      case 3:
        number = "fa-solid fa-dice-three fa-10x";
        break;
      case 4:
        number = "fa-solid fa-dice-four fa-10x";
        break;
      case 5:
        number = "fa-solid fa-dice-five fa-10x";
        break;
      case 6:
        number = "fa-solid fa-dice-six fa-10x";
        break;
      default:
        number = "fa-solid fa-dice-one fa-10x";
    }

    return (
      <div className="dice">
        <i class={number}></i>
      </div>
    );
  }
}

export default Die;

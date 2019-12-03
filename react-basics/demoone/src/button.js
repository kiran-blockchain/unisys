import React, { Component } from "react";

export default class ButtonComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button
        id={this.props.displayText}
          onClick={e => {
            this.props.userClick(e.target.id);
          }}
        >
          {this.props.displayText}
        </button>
      </div>
    );
  }
}

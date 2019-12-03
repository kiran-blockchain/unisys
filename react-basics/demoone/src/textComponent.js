import React, { Component } from "react";

export default class TextBoxComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={e => {
            this.props.handleChange(e);
          }}
        />
        
      </div>
    );
  }
}

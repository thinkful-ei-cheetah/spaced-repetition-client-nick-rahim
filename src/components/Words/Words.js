import React, { Component } from 'react';

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <li>{this.props.word}</li>;
  }
}

export default Words;

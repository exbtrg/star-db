import React, { Component } from 'react';
import SomeError from '../SomeError'

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <SomeError />
    }

    return this.props.children
  }
}

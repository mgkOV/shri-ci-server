import React, { Component } from "react";

class ErrorBoundry extends Component {
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
      return <div>Что-то пошло не так... :(</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;

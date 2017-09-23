import React, { Component } from "react";
import PropTypes from "prop-types";

class ResizeListener extends Component {
  static propTypes = {
    onResize: PropTypes.func,
    debug: PropTypes.bool
  };

  static defaultProps = {
    onResize: () => {},
    debug: false
  };

  get iframeStyles() {
    return {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      visibility: this.props.debug ? "visible" : "hidden",
      border: "none",
      outline: "3px dotted red",
      height: "100%",
      width: "100%"
    };
  }

  handleResize = () => {
    const resizeUpdateObject = {
      height: this.iframe.scrollHeight,
      width: this.iframe.scrollWidth
    };
    this.props.onResize(resizeUpdateObject);
  };

  componentDidMount() {
    this.iframe.contentWindow.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    this.iframe.contentWindow.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <iframe
        title={Math.random().toString()}
        ref={iframe => (this.iframe = iframe)}
        style={this.iframeStyles}
      />
    );
  }
}

export default ResizeListener;

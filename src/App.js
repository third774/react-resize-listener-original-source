import React, { Component } from "react";
import "./App.css";

import ResizeListener from "./ResizeListener";
import ResizingContent from "./ResizingContent";

class App extends Component {

  state = {
    height: 0,
    width: 0
  }

  handleResize = resizeUpdateObject => {
    this.setState({...resizeUpdateObject})
  };

  render() {
    const {height, width} = this.state
    return (
      <div className="App">
        <p>height: {height}</p>
        <p>width: {width}</p>
        <ResizingContent />
        <ResizeListener debug onResize={this.handleResize} />
      </div>
    );
  }
}

export default App;

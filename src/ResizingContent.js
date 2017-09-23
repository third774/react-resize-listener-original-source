import React, { Component } from "react";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum, commodi impedit placeat dicta fuga at eos quaerat voluptatibus odit quo ipsum, hic nesciunt perferendis perspiciatis vel provident ipsa ullam.";

class ResizingContent extends Component {
  state = { text };

  componentDidMount() {
    setInterval(() => {
      const { text } = this.state;
      const newText = `${text} ${text}`;
      this.setState({ text: newText });
    }, 1000);

    setInterval(() => {
      this.setState({ text });
    }, 4000);
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export default ResizingContent;

import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.playButtonRef = React.createRef();
  }
  handlePlayVideo = e => {
    e.preventDefault();
    this.props.action(e, this.props.videoId);
  };
  render() {
    return (
      <button
        ref={this.playButtonRef}
        data-id={this.props.id}
        onClick={this.handlePlayVideo.bind(this)}
        className="btn btn-play"
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;

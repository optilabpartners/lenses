import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.handlePlaybackCompleted = this.handlePlaybackCompleted.bind(this);
  }

  handlePlaybackCompleted = e => {
    this.props.callbackFromParent(e, true);
  };

  handleSrcChange = e => {
    e.preventDefault();
    e.target.play();
    const that = this;
    e.target.onended = e => {
      that.handlePlaybackCompleted(e);
    };
  };

  render() {
    return (
      <React.Fragment>
        <video
          muted
          onLoadedData={this.handleSrcChange.bind(this)}
          // onLoadedMetadata={this.handleSrcChange.bind(this)}
          src={this.props.videoSource}
          poster="background.jpg"
        />
        <div ref="overlayRef" className="overlay" style={{ display: "none" }} />
      </React.Fragment>
    );
  }
}

export default Video;

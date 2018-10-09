import React, { Component } from "react";
import Video from "./video";

class Videos extends Component {
  state = {
    videoFolder: "/videos/"
  };
  render() {
    return (
      <div className="row">
        <div className="video-comp">
          {this.props.videos.map(video => (
            <Video
              key={video._id}
              display={true}
              src={this.state.videoFolder.concat(video.videoSource)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Videos;

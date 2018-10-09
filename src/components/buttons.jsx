import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <nav className="nav-container">
        <ul className="nav">
          {this.props.videos.map(video => (
            <li key={"li" + video._id}>
              <Button
                action={this.props.action}
                key={video._id}
                videoId={video._id}
                name={video.name}
                inputRef={el => (this.videoElement = el)}
              />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Buttons;

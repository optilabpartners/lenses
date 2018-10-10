import React, { Component } from "react";
import Video from "./components/video";
import Buttons from "./components/buttons";
import "./App.css";
import "./flexboxgrid.css";
import { getVideos, getVideo, getIntro } from "./services/videoService";

class App extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.loadVideo = this.loadVideo.bind(this);
    this.currentVideo = null;
  }

  state = {
    videos: getVideos(),
    videoFolder: "/videos/",
    text: "Select a button",
    currentVideo: {},
    setRewind: false,
    playbackCompleted: false,
    videoSource: null,
    videoText: null
  };

  componentWillMount() {
    const intro = getIntro();
    this.setState({
      videoSource: this.state.videoFolder.concat(intro.videoSource),
      videoText: intro.videoText
    });
  }

  playbackCallback = (element, playbackDone) => {
    console.log("video done");
    if (this.currentVideo == null) {
      return false;
    } else {
      if (
        this.state.videoSource !==
        this.state.videoFolder.concat(this.currentVideo.videoSource)
      ) {
        this.setState({
          videoSource: this.state.videoFolder.concat(
            this.currentVideo.videoSource
          )
        });
      }
    }
  };

  loadVideo = (e, id) => {
    if (this.currentVideo === null) {
      this.currentVideo = getVideo(id);
      this.setState({
        videoSource: this.state.videoFolder.concat(
          this.currentVideo.videoSource
        ),
        videoText: this.currentVideo.text
      });
    } else {
      this.setState({
        videoSource: this.state.videoFolder.concat(
          this.currentVideo.reverseVideoSource
        ),
        videoText: this.currentVideo.text
      });
      this.currentVideo = getVideo(id);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="video-container">
              <React.Fragment>
                <Video
                  ref={this.videoRef}
                  videoSource={this.state.videoSource}
                  callbackFromParent={this.playbackCallback}
                />
              </React.Fragment>
            </div>
            <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: this.state.videoText }}
            />
          </div>
          <Buttons action={this.loadVideo} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

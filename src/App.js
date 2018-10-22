import React, { Component } from "react";
import Video from "./components/video";
import Buttons from "./components/buttons";
import "./App.css";
import { getVideos, getVideo, getIntro } from "./services/videoService";
import AnimateOnChange from "react-animate-on-change";

class App extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.loadVideo = this.loadVideo.bind(this);
    this.currentVideo = null;
    this.textUpdate = false;
  }

  state = {
    videos: getVideos(),
    videoFolder: "videos/",
    text: "Select a button",
    currentVideo: {},
    setRewind: false,
    playbackCompleted: false,
    videoSource: null,
    videoText: null,
    title: null
  };

  componentWillMount() {
    const intro = getIntro();
    this.textUpdate = true;
    this.setState({
      videoSource: this.state.videoFolder.concat(intro.videoSource),
      videoText: intro.videoText,
      title: intro.title
    });
  }

  playbackCallback = (element, playbackDone) => {
    if (this.currentVideo == null) {
      return false;
    } else {
      if (
        this.state.videoSource !==
        this.state.videoFolder.concat(this.currentVideo.videoSource)
      ) {
        // this.refs.overlayRef.style.display = "block";

        this.setState({
          videoSource: this.state.videoFolder.concat(
            this.currentVideo.videoSource
          ),
          title: this.currentVideo.header,
          videoText: this.currentVideo.text
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
        title: this.currentVideo.header,
        videoText: this.currentVideo.text
      });
    } else {
      this.setState({
        videoSource: this.state.videoFolder.concat(
          this.currentVideo.reverseVideoSource
        ),
        title: this.currentVideo.header,
        videoText: this.currentVideo.text
      });

      // this.textUpdate = false;
      this.currentVideo = getVideo(id);
    }
    this.refs.videoContainer.style.height =
      this.refs.videoContainer.offsetHeight + "px";
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.videoText !== nextState.videoText) {
      this.textUpdate = true;
    } else {
      this.textUpdate = false;
    }

    return true;
  }

  render() {
    const title =
      Object.keys(this.state.currentVideo).length !== 0 &&
      this.state.currentVideo.constructor !== Object
        ? this.state.currentVideo.header
        : this.state.title;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div ref="videoContainer" className="video-container">
              <Video
                ref={this.videoRef}
                videoSource={this.state.videoSource}
                callbackFromParent={this.playbackCallback}
              />
            </div>
            <div className="text-container">
              <AnimateOnChange
                customTag="div"
                baseClassName="text-change"
                animationClassName="text-change-active"
                animate={this.textUpdate !== false}
              >
                <h2>{title}</h2>
                <div>
                  <p>{this.state.videoText}</p>
                </div>
              </AnimateOnChange>
            </div>
          </div>
          <Buttons action={this.loadVideo} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

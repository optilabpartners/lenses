const videos = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Aqueoushumor",
    text: "Lorem ipsum",
    videoSource: "aqueoushumor.mp4",
    reverseVideoSource: "aqueoushumor_r.mp4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Choroid",
    text: "Lorem ipsum",
    videoSource: "choroid.mp4",
    reverseVideoSource: "choroid_r.mp4"
  }
];

export function getVideos() {
  return videos;
}

export function getVideo(id) {
  return videos.find(m => m._id === id);
}

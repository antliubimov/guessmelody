// get-random-tracks.js

const getRandomTracks = (data, num) => {
  let tracks = [];
  while (tracks.length < num) {
    let random = Math.floor(Math.random() * num);
    let track = data[random];
    if (!tracks.includes(track)) {
      tracks.push(track);
    }
  }
  return tracks;
};

export default getRandomTracks;

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// PROMPT TO SELECT MEDIA STREAM, PASS TO VIDEO ELEMENT, THEN PLAY
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // CATCH ERROR HERE
  }
}

button.addEventListener("click", async () => {
  // DISABLE BUTTON
  button.disable = true;
  // START PICTURE IN PICTURE
  await videoElement.requestPictureInPicture();
  // RESET BUTTON
  button.disable = false;
});

// ON LOAD
selectMediaStream();

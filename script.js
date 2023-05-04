const playButton = document.querySelector('.cta');
const videoContainer = document.querySelector('.hero-video-container');
const video = document.querySelector('.hero-video');
const closePopupButton = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');



playButton.addEventListener('click', () => {
  // Hide the video container
  videoContainer.style.display = 'none';

  // Create a new video element for the popup
  const popupVideo = document.createElement('video');
  popupVideo.src = 'video.mp4';
  popupVideo.controls = true;
  popupVideo.autoplay = true;

  popupVideo.style.width = '100%'
  popupVideo.style.height = 'auto'
  
  // Add the video element to the popup content
  popupContent.appendChild(popupVideo);
  
  // Show the popup
  popup.style.display = "flex"
});

function closePopup() {
  // Remove the video element from the popup content
  videoContainer.style.display = 'none'
  popupContent.innerHTML = '';

  // Hide the popup
  popup.style.display = 'none';

  // Show the video container again
  // videoContainer.style.display = 'block';
}

closePopupButton.addEventListener('click', () => {
  closePopup()
});


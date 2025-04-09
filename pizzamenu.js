// Add active class to animate images flying in
document.addEventListener('DOMContentLoaded', () => {
  const imageWrappers = document.querySelectorAll('.image-wrapper');
  let index = 0;

  // Animate each image wrapper flying in
  const interval = setInterval(() => {
    if (index < imageWrappers.length) {
      imageWrappers[index].classList.add('active');
      index++;
    } else {
      clearInterval(interval);
    }
  }, 300);

  // Hover functionality to fade other divs and show text
  imageWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
      imageWrappers.forEach(otherWrapper => {
        if (otherWrapper !== wrapper) {
          otherWrapper.classList.add('inactive');
        }
      });
    });

    wrapper.addEventListener('mouseleave', () => {
      imageWrappers.forEach(otherWrapper => {
        otherWrapper.classList.remove('inactive');
      });
    });
  });
});



window.onload = function() {
  const images = document.querySelectorAll('.delayed-image');
  
  // Initial delay before the first image is displayed
  setTimeout(() => {
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('visible'); // Add 'visible' class after delay
      }, index * 150); // Delay each subsequent image by 150 milliseconds
    });
  }, 1000); // Delay the first image by 1 second

  // Handle quick access visibility
  setTimeout(function() {
    document.getElementById('quick').style.display = 'block'; // Show the div after 1 second
  }, 950); // 1000 milliseconds = 1 second
};

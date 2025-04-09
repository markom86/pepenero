 // Get the button
 const button = document.getElementById('scrollButton');

 // Show the button after scrolling 20% of the page height
 window.addEventListener('scroll', () => {
   const scrollHeight = document.documentElement.scrollHeight;
   const scrollPosition = window.scrollY + window.innerHeight;

   // When scrolled 20% of the page, show the button
   if (scrollPosition > scrollHeight * 0.6) {
     button.classList.add('show');
   } else {
     button.classList.remove('show');
   }
 });

 

 // Function to scroll back to the top
 function scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 }

 let lastScroll = 0;

 window.addEventListener('scroll', () => {
     const currentScroll = window.scrollY;
     const navbar = document.querySelector('.navigation-bar');
     
     if (currentScroll > lastScroll) {
         navbar.style.transform = 'translateY(-100%)';
     } else {
         navbar.style.transform = 'translateY(0)';
     }
     
     lastScroll = currentScroll;
 });

 // js for slider menu pocinje

 document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0; // Start at the first slide
    let interval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active", "exit");
        if (i === index) {
          slide.classList.add("active");
        } else if (i === (index - 1 + slides.length) % slides.length) {
          slide.classList.add("exit");
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // Immediately show the first slide on page load
    showSlide(currentIndex);
  
    // Initialize slideshow
    interval = setInterval(nextSlide, 6000); // Slide changes every 6 seconds
  
    // Button event listeners
    prevBtn.addEventListener("click", () => {
      clearInterval(interval);
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      interval = setInterval(nextSlide, 6000);
    });
  
    nextBtn.addEventListener("click", () => {
      clearInterval(interval);
      nextSlide();
      interval = setInterval(nextSlide, 6000);
    });
  });
  
 // js for slider menu zavrsava

 //js za see more text

 function toggleText() {
  var button = document.getElementById("toggleButton");
  var hiddenText = document.getElementById("hiddenText");

  if (hiddenText.style.display === "none") {
      hiddenText.style.display = "inline";
      button.textContent = "Prikaži manje";
      // Move the button to the end
      button.parentNode.appendChild(button);
  } else {
      hiddenText.style.display = "none";
      button.textContent = "Show More";
      // Move the button back to its original position
      var journeyText = document.createTextNode('');
      button.parentNode.insertBefore(journeyText, button);
      button.parentNode.insertBefore(button, journeyText.nextSibling);
  }
}

// js za see more ends here

// js za login befgore publish

if (!sessionStorage.getItem('authenticated')) {
  const userID = prompt("Enter your User ID:");
  const password = prompt("Enter your Password:");

  if (userID === "rest" && password === "pulapula") {
    alert("Login successful!");
    sessionStorage.setItem('authenticated', true);
  } else {
    alert("Wrong ID or password!");
  }
}

// before publish ends here
 

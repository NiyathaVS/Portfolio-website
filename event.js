

const dynamicText = document.getElementById("dynamic-text");
      const textArray = [
          "HI!",
          "I'M NIYATHA",
          "A FRONTEND DEVELOPER",
          "A PHOTOGRAPHER",
          "A WRITER"
      ];
  
      let currentIndex = 0;
  
      function updateText() {
          dynamicText.innerHTML = textArray[currentIndex];
          currentIndex = (currentIndex + 1) % textArray.length;
      }
  
      setInterval(updateText, 2000); // Change text every 2 seconds (2000 milliseconds)

      
      const slides = document.querySelectorAll(".slide");

      // Loop through slides and set each slide's translateX property to index * 100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
      });

      document.addEventListener("DOMContentLoaded", function () {
        const textElement = document.getElementById('typing-text');
        const textContent = textElement.innerHTML;
        textElement.innerHTML = '';
        let index = 0;
    
        function type() {
            if (index < textContent.length) {
                // Check for HTML tags
                if (textContent.substring(index, index + 4) === "<br>") {
                    textElement.innerHTML += "<br>";
                    index += 4; // Skip past the <br> tag
                } else {
                    textElement.innerHTML += textContent.charAt(index);
                    index++;
                }
                setTimeout(type, 50); // Adjust the speed of typing here (milliseconds)
            }
        }
    
        type();
    });
    
    
      
      let curSlide = 0;
      
      // Select next slide button
      const nextSlide = document.querySelector(".btn-next");
      
      // Add event listener and next slide functionality
      nextSlide.addEventListener("click", function () {
        curSlide++;
      
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
      });
      
      const prevSlide = document.querySelector(".btn-prev");
      
      // Add event listener and navigation functionality
      prevSlide.addEventListener("click", function () {
        // Check if the current slide is the first and reset current slide to last
        if (curSlide === 0) {
          curSlide = slides.length - 1;
        } else {
          curSlide--;
        }
      
        // Move the slide by -100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
      });
      
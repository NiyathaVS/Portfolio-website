


const dynamicText = document.getElementById("dynamic-text");
      const textArray = [
          "HI!",
          "I'M NIYATHA",
          "A MACHINE LEARNING ENTHUSIAST",
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
    

    // Get modal elements
      const modal = document.getElementById("imageModal");
      const modalImage = document.getElementById("modalImage");
      const closeModal = document.getElementById("closeModal");

      // Add click event listeners to images
      document.querySelectorAll(".certification-image").forEach((image) => {
        image.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImage.src = image.src;
        });
      });

      // Close modal on click
      closeModal.addEventListener("click", () => {
        modal.style.display = "none";
      });

      // Close modal on outside click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
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

      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
    
        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
    
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        // Prepare data to send to Google Form
        const formData = new FormData();
        formData.append('entry.1901096310', name); // Replace with your actual entry ID for Name
        formData.append('entry.209348323', email); // Replace with your actual entry ID for Email
        formData.append('entry.737742267', message); // Replace with your actual entry ID for Message
    
        // Send data to Google Form
        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScNIQl5k4faKlZhe_RRy_RsD0Q-IJc582AVx8vo_bO4ac-xMQ/formResponse', {
            method: 'GET',
            mode: 'no-cors',
            body: formData
        })
        .then(response => {
            document.getElementById('formResponse').innerText = 'Thank you for your message!';
            document.getElementById('contactForm').reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
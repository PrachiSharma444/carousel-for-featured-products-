const carousel = document.getElementById("features");
      const items = document.querySelector(".carousel-inner-items");
      const itemCount = document.querySelectorAll(".carousel-item").length;
      let currentIndex = 0;

      function showNext() {
        if (currentIndex < itemCount - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        updateCarousel();
      }

      function showPrev() {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = itemCount - 1;
        }
        updateCarousel();
      }

      function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + "%";
        items.style.transform = `translateX(${newTransformValue})`;
      }

      // Automatically slide images
      setInterval(showNext, 4000); // Change the interval time (in milliseconds) as needed
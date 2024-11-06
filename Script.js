 // JavaScript function to change the car image based on the color clicked
function changeColor(colorImage) {
   // Select the car image by its ID
   var carImage = document.getElementById('carImage');
   
   // Change the source of the car image to the new color's image
   carImage.src = `images/${colorImage}`;
}
let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex - 1].style.display = 'block';  
}


function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
   const carItems = document.querySelectorAll('.car-item');
   const modal = document.getElementById('car-modal');
   const closeBtn = document.querySelector('.close');
   const carTitle = document.getElementById('car-title');
   const carImage = document.getElementById('car-image');
   const carPrice = document.getElementById('car-price');
   const colorOptions = document.getElementById('color-options');
   const purchaseBtn = document.getElementById('purchase-btn');

   // Sample car data
   const carData = {
       1: {
           title: 'Bugatti',
           image: 'image/bugatti.png',
           price: '$850,000',
           colors: ['#ff0000', '#0000ff', '#00ff00'] // Example colors
       },
       2: {
           title: 'BMW Coupe Blue',
           image: 'image/bmw.png',
           price: '$1,000,000',
           colors: ['#0000ff', '#00ff00', '#ff0000'] // Example colors
       },
       3: {
           title: 'Ferrari',
           image: 'image/ferrari.png',
           price: '$700,000',
           colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
       },
       4: {
         title: 'Red Sports car',
         image: 'image/ferrari.png',
         price: '$700,000',
         colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
     },
     5: {
      title: 'Mazda MX-5',
      image: 'image/Mazda MX-5.png',
      price: '$700,000',
      colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
  },
  6: {
   title: 'Jaguar F-Type',
   image: 'image/Jaguar F-Type.png',
   price: '$700,000',
   colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
},
7: {
   title: 'Lotus Emira',
   image: 'image/Lotus Emira.png',
   price: '$700,000',
   colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
},
8: {
   title: 'Chevrolet Corvette',
   image: 'image/Chevrolet Corvette.png',
   price: '$700,000',
   colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
},
9: {
   title: 'Porsche 718 Boxster',
   image: 'image/Porsche 718 Boxster.png',
   price: '$700,000',
   colors: ['#ff0000', '#00ff00', '#0000ff'] // Example colors
},
   };

   carItems.forEach(carItem => {
       carItem.addEventListener('click', (event) => {
           if (event.target.closest('.buy-btn') || event.target.closest('.rent-btn')) {
               const carId = carItem.getAttribute('data-car-id');
               const car = carData[carId];

               if (car) {
                   carTitle.textContent = car.title;
                   carImage.src = car.image;
                   carPrice.textContent = `Price: ${car.price}`;
                   colorOptions.innerHTML = car.colors.map(color => 
                       `<div class="color-option" style="background-color: ${color};" data-color="${color}"></div>`
                   ).join('');
                   modal.style.display = 'block';
               }
           }
       });
   });

   closeBtn.addEventListener('click', () => {
       modal.style.display = 'none';
   });

   window.addEventListener('click', (event) => {
       if (event.target === modal) {
           modal.style.display = 'none';
       }
   });

   document.querySelectorAll('.btn').forEach(button => {
       button.addEventListener('click', (event) => {
           event.preventDefault(); // Prevent default link behavior
           const action = button.getAttribute('data-action');

           if (action === 'buy') {
               const selectedColor = document.querySelector('.color-option.selected');
               const color = selectedColor ? selectedColor.getAttribute('data-color') : 'not selected';
               alert(`Thank you for your purchase of the ${carTitle.textContent}! Color selected: ${color}`);
           } else if (action === 'rent') {
               alert(`Thank you for renting the ${carTitle.textContent}!`);
           }
       });
   });

   colorOptions.addEventListener('click', (event) => {
       if (event.target.classList.contains('color-option')) {
           document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
           event.target.classList.add('selected');
       }
   });
});
document.addEventListener('DOMContentLoaded', function() {
   // Check if user is logged in
   const userName = localStorage.getItem('userName');
   const authLink = document.getElementById('authLink');

   // If the user is logged in, update the link to "Profile"
   if (userName) {
       authLink.textContent = `Welcome, ${userName}`;
       authLink.href = "profile.html"; // Link to profile page
   }

   // Listen for login or account creation and dynamically update the login button
   const loginForm = document.getElementById('loginForm'); // Assuming you have a form with this id in login.html
   if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          // Get user's name (after successful login or account creation)
          const user = document.getElementById('userName').value; // Replace with the actual field for the name
          localStorage.setItem('userName', user);

          // Update login button to profile immediately
          authLink.textContent = `Welcome, ${user}`;
          authLink.href = "profile.html";
      });
  }
});
// Example logout function, to be used when logging out
function logout() {
   localStorage.removeItem('userName');
   location.reload(); // Reload the page to reset the login button
}
// Function to open the modal and set the car details
function openModal(carTitle, carImageSrc, carPrice) {
    document.getElementById('car-title').textContent = carTitle; // Set car title in modal
    document.getElementById('car-image').src = carImageSrc; // Set car image in modal
    document.getElementById('car-price').textContent = carPrice; // Set car price in modal
    document.getElementById('car-modal').style.display = 'block'; // Show the modal
}

// Close modal functionality
document.querySelector('.close').onclick = function() {
    document.getElementById('car-modal').style.display = 'none'; // Hide the modal
};

// Event listener for "Purchase" link
document.querySelector('.buy-btn').onclick = function(event) {
    event.preventDefault(); // Prevent default anchor action
    const carTitle = document.getElementById('car-title').textContent; // Get car title from modal
    // Redirect to purchase page with the car title as a query parameter
    window.location.href = `Purchase.html{encodeURIComponent(carTitle)}`;
};

// Event listeners for "Buy Now" buttons
document.querySelectorAll('.buy-btn').forEach(button => {
    button.onclick = function(event) {
        event.preventDefault(); // Prevent default anchor action
        const carItem = button.closest('.car-item'); // Get the closest car item
        const carTitle = carItem.querySelector('h2').textContent; // Get car title
        const carImageSrc = carItem.querySelector('img').src; // Get car image source
        const carPrice = carItem.querySelector('p').textContent; // Get car price

        openModal(carTitle, carImageSrc, carPrice); // Open modal with car details
    };
});


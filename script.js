const chocolates = {
  "Dark Chocolate": 150,
  "Milk Chocolate": 187.50,
  "White Chocolate": 360,
  "Blonde Chocolate": 220,
  "Ruby Chocolate": 100,
  "Raw Chocolate": 225,
  "Vegan Chocolate": 200,
  "Gianduja Chocolate": 302
  // Add more chocolates and prices as needed
};

const form = document.getElementById('formChocolate');
const checkboxes = form.querySelectorAll('input[type="checkbox"]');
const quantityInput = form.querySelector('input[name="quantity"]');
const totalPriceSpan = document.getElementById('TotalPrice');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotal);
});//This part of the code is responsible for attaching an event listener to each checkbox element on the form

quantityInput.addEventListener('input', updateTotal); //input:The 'input' event occurs when 
//the value of the input field changes
 //updateTotal : This function is responsible
// for recalculating the total price based on the selected checkboxes 

function updateTotal() {
  let total = 0;
  let count = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const chocolateName = checkbox.value; //value represents the name of the chocolates assigned to that checkbox.
      const price = chocolates[chocolateName]; //The value assigned to price is the price of the chocolate whose 
      //name matches the value stored in the chocolateName variable.
      const quantity = parseInt(quantityInput.value);//parseInt() is a JavaScript function used to parse a string
      // and convert it into an integer.
      //parseInt(quantityInput.value) converts the string value entered in the input field into an integer.
      total += price * quantity;
      count += quantity;
    }
  });

  if (count > 8) {
    alert("You can't select more than 8 items.");
    quantityInput.value = 0;
    total = 0;
  }

  totalPriceSpan.textContent = total.toFixed(2);
}
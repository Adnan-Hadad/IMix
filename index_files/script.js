// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzC3Hf2P7ted6hk4CGSsnSCDO7uLpKp0v_Mgb5wNsUuuz2NUFfCMOl4QXYW9vkZrjPtog/exec";

// const form = document.forms["contact-form"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       Origin: "https://example.com",
//     },
//     body: new FormData(form),
//   })
//     .then((response) =>
//       alert("Thank you! your form is submitted successfully.")
//     )
//     .then(() => {
//       window.reload();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

function setErrorText(element, messageKey) {
  const lang = document.getElementById("html").getAttribute("lang");
  const messages = {
    ar: {
      name: "الرجاء إدخال الاسم",
      qty: "الرجاء اختيار الكمية",
      phone: "الرجاء إدخال رقم الهاتف",
      location: "الرجاء اختيار الموقع",
      address: "الرجاء إدخال العنوان",
    },
    en: {
      name: "Please enter your name",
      qty: "Please select quantity",
      phone: "Please enter your phone number",
      location: "Please select location",
      address: "Please enter your address",
    },
  };

  element.textContent = messages[lang][messageKey];
}

function validateForm(event) {
  const nameInput = document.getElementById("name");
  const qtySelect = document.getElementById("qty");
  const phoneInput = document.getElementById("phone");
  const locationSelect = document.getElementById("location");
  const addressInput = document.getElementById("address");

  const nameError = document.getElementById("name-error");
  const qtyError = document.getElementById("qty-error");
  const phoneError = document.getElementById("phone-error");
  const locationError = document.getElementById("location-error");
  const addressError = document.getElementById("address-error");

  nameError.textContent = "";
  qtyError.textContent = "";
  phoneError.textContent = "";
  locationError.textContent = "";
  addressError.textContent = "";

  let isValid = true;

  if (nameInput.value.trim() === "") {
    setErrorText(nameError, "name");
    isValid = false;
  }

  if (qtySelect.value === "") {
    setErrorText(qtyError, "qty");
    isValid = false;
  }

  if (phoneInput.value.trim() === "") {
    setErrorText(phoneError, "phone");
    isValid = false;
  }

  if (locationSelect.value === "") {
    setErrorText(locationError, "location");
    isValid = false;
  }

  if (addressInput.value.trim() === "") {
    setErrorText(addressError, "address");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
}

// Set the date to count down to
const countDownDate = new Date("Oct 31, 2023 00:00:00").getTime();

// Update the countdown every second
const x = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown display with the new values
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the minimum and maximum values for the counter
const min = 0;
const max = 999;

// Get the counter element
const counter = document.getElementById("counter");

// Update the counter with a random number every second
setInterval(function () {
  // Generate a random number between min and max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Update the counter with the new random number
  counter.innerHTML = randomNumber;
}, 5000);

// Get the counter element
const counterNumber = document.getElementById("number");

// Set the initial counter value
let counterValue = 100;

// Update the counter every second
setInterval(() => {
  counterValue++;
  counterValue++;
  counterValue = counterValue + 16;
  counterNumber.textContent = counterValue;
}, 10000);

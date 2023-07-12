
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneNumberInput = document.getElementById('phoneNumber');
const genderInput = document.getElementById('gender');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('country');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

function validateForm() {
  let isValid = true;

  const inputs = [
    { input: nameInput, fieldName: 'Name' },
    { input: emailInput, fieldName: 'Email' },
    { input: passwordInput, fieldName: 'Password' },
    { input: confirmPasswordInput, fieldName: 'Confirm Password' },
    { input: phoneNumberInput, fieldName: 'Phone Number' },
    { input: genderInput, fieldName: 'Gender' },
    { input: stateInput, fieldName: 'State' },
    { input: countryInput, fieldName: 'Country' },
  ];

  // Reset error messages
  inputs.forEach((item) => {
    const errorDiv = item.input.nextElementSibling;
    errorDiv.textContent = '';
    item.input.classList.remove('error');
  });

  // Check for empty fields and specific validations
  inputs.forEach((item) => {
    if (item.input.value.trim() === '') {
      showError(item.input, `${item.fieldName} is required.`);
      isValid = false;
    } else if (item.input === emailInput && !isValidEmail(item.input.value)) {
      showError(item.input, 'Please enter a valid email address.');
      isValid = false;
    } else if (item.input === phoneNumberInput && !isValidPhoneNumber(item.input.value)) {
      showError(item.input, 'Please enter a valid phone number with 10 digits.');
      isValid = false;
    }else if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, 'Passwords do not match.');
      isValid = false;
    }

  });

  return isValid;
}

function showError(input, errorMessage) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = errorMessage;
  input.classList.add('error');
}

function isValidEmail(email) {
  // Basic email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  // Phone number validation using a regular expression
  const phoneNumberRegex = /^\d{10}$/;
  return phoneNumberRegex.test(phoneNumber);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPassword(password) {
  const lengthValid = password.length === 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  return lengthValid && hasUpper && hasNumber && hasSpecial;
}

rl.question("Enter your password: ", (passwordInput) => {

  if (checkPassword(passwordInput)) {
    console.log("Your password is valid.");
  } else {
    console.log("Your password is not valid. Please pick a new one.");
  }
  rl.close();
});
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // convert empty input to empty strings for validation purpose
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Vul je naam in!";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Vul je email adres in!";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Vul je wel een gelding emailadres in?";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Vul een wachtwoord in!";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Vul een wachtwoord in!";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password =
      "Voor een beetje veiligheid, minimaal 6 karakters en maximaal 30";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Het gekozen wachtwoord komt niet overeen.";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

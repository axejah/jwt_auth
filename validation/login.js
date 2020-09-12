const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // convert empty input to empty strings for validation purpose
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Vul je emailadres in";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Ongeldig emailadres";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Vul je wachtwoord in";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

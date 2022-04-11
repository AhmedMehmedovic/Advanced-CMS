const validator = {
  errors: [],

  fail: function () {
    return this.errors.length > 0;
  },
  getErrors: function () {
    let tempErrors = this.errors;
    this.errors = [];
    return tempErrors;
  },

  rules: {
    minLength: function (
      value,
      length = 5,
      message = "Input must have min 5 caracters"
    ) {
      if (value.length > length) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },

    maxLength: function (
      value,
      length = 10,
      message = "Input must have max 10 caracters"
    ) {
      if (value.length < length) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },

    email: function (
      email,
      request = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message = "Email isn't in regular format : email@example.xxx"
    ) {
      if (email == "") {
        validator.errors.push("Email is required");
        return false;
      }
      if (!email.match(request)) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },

    password: function (password, message = "Password is required") {
      if (password == "") {
        validator.errors.push(message);
        return false;
      }
      if (!password.match(/[A - Za - z]/)) {
        validator.errors.push("Password must contain letters from A-z ");
        return false;
      }
      if (!password.match(/\d/)) {
        validator.errors.push("Password must contain numbers");
        return false;
      }

      if (!password.match(/[.]/)) {
        validator.errors.push("Password must contain '.' ");
        return false;
      }
      return true;
    },

    phone: function (
      input,
      request = /^(\+)+[\d]{1,14}$/,
      message = "Phone must be in valid format "
    ) {
      if (input.length < 4) {
        validator.errors.push("ASDSA sadoljkjdsfk");
      }

      if (!input.match(request)) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },
    match: function (value1, value2, message = "Inputs must be the same") {
      if (value1 !== value2) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },
  },
  login: function (emailInput, passwordInput, message) {},
};

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
      if (value.length < length) {
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
      if (value.length > length) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },
    empty: function (value, message) {
      if (value == "") {
        validator.errors.push(message);
        return false;
      }
      return true;
    },
    format: function (input, request, message) {
      if (!input.match(request)) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },

    match: function (value1, value2, message = "Inputs must be the same !") {
      if (value1 !== value2) {
        validator.errors.push(message);
        return false;
      }
      return true;
    },
  },

  inputs: {
    password: function (password, confirmPassowrd = null) {
      validator.rules.minLength(
        password,
        5,
        "Password must contain min 5 caracters !"
      );
      validator.rules.maxLength(
        password,
        10,
        "Password must contain max 10 caracters !"
      );
      validator.rules.format(
        password,
        /[A-Za-z]/,
        "Password must contain letters from A-z  !"
      );
      validator.rules.format(password, /\d/, "Password must contain numbers !");
      validator.rules.format(password, /[.]/, "Password must contain '.' !");
      validator.rules.empty(password, "Password is required");

      if (confirmPassowrd !== null) {
        validator.rules.match(
          password,
          confirmPassowrd,
          "Password and retype must be the same !"
        );
        return false;
      }
      return true;
    },
    email: function (email) {
      validator.rules.empty(email, "Email is required !");
      validator.rules.format(
        email,
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email isn't in regular format : email@example.xxx !"
      );

      return true;
    },
    name: function (first, last) {
      validator.rules.minLength(
        first,
        2,
        "First name must have min 5 caracters!"
      );
      validator.rules.minLength(
        last,
        2,
        "Last name must have min 5 caracters!"
      );
      validator.rules.maxLength(
        first,
        15,
        "First name must have max 15 caracters!"
      );
      validator.rules.maxLength(
        last,
        15,
        "Last name must have max 15 caracters!"
      );

      return true;
    },
    phone: function (phoneNumber, message) {
      validator.rules.minLength(
        phoneNumber,
        13,
        "Phone number must have min 13 caracters!"
      );
      validator.rules.maxLength(
        phoneNumber,
        16,
        "Phone number must have min 16 caracters!"
      );
      return true;
    },
  },
};

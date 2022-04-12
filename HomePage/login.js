document.addEventListener("DOMContentLoaded", function (e) {
  if (user.isLoggedIn()) {
    location.href = user.redirectUrl;
  }

  const loginPage = {
    inputs: {
      email: document.querySelector('.input-form input[type="email"]'),
      password: document.querySelector('.input-form input[type="password"]'),
      submit: document.querySelector('input[value="Sign in"]'),
    },

    registerModals: function () {
      this.modalErrors = modal(document.getElementById("modal1"));
    },

    onClickSubmit: function () {
      let self = this;
      this.inputs.submit.addEventListener("click", function (e) {
        e.preventDefault();
        let email = loginPage.inputs.email.value;
        let password = loginPage.inputs.password.value;
        validator.inputs.email(email);
        validator.inputs.password(password);
        if (validator.fail()) {
          self.modalErrors.body(validator.getErrors());
          self.modalErrors.show();
          return false;
        }

        if (!user.init(email, password)) {
          self.modalErrors.body(user.getErrors());
        }

        self.modalErrors.show();
      });
    },
    onLoad: function () {
      this.registerModals();
      this.onClickSubmit();
    },
  };
  loginPage.onLoad();
});

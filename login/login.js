document.addEventListener("DOMContentLoaded", function (e) {
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
        validator.rules.email(email);
        validator.rules.password(password);
        if (validator.fail()) {
          self.modalErrors.body(validator.getErrors());
        }

        if (!user.init(email, password)) {
          self.modalErrors.body(user.getErrors());
        }
        if (user.register(email, password)) {
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

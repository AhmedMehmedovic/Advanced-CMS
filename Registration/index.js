if (user.isLoggedIn()) {
  location.href = user.redirectUrl;
}

document.addEventListener("DOMContentLoaded", function (e) {
  const registerPage = {
    inputs: {
      email: document.querySelector('.body input[name="email"] '),
      password: document.querySelector('.body input[name="password"] '),
      retype: document.querySelector('.body input[name="Re-type Password"] '),
      firstName: document.querySelector('.body input[name="First Name"] '),
      lastName: document.querySelector('.body input[name="Last Name"] '),

      submit: document.getElementById("register"),
    },

    registerModals: function () {
      this.modalErrors = modal(document.getElementById("modal1"));
    },

    onClickSubmit: function () {
      let self = this;
      this.inputs.submit.addEventListener("click", function (e) {
        e.preventDefault();
        let email = registerPage.inputs.email.value;
        let password = registerPage.inputs.password.value;
        let retype = registerPage.inputs.retype.value;
        let firstName = registerPage.inputs.firstName.value;
        let lastName = registerPage.inputs.lastName.value;

        validator.inputs.email(email);
        validator.inputs.password(password, retype);
        validator.inputs.name(firstName, lastName);

        if (validator.fail()) {
          self.modalErrors.body(validator.getErrors());
          self.modalErrors.show();
          return false;
        }

        if (!user.register(email, password, firstName, lastName)) {
          self.modalErrors.body(user.getErrors());
          return false;
        }

        self.modalErrors.show();

        user.init(email, password);
        location.reload();
      });
    },

    onLoad: function () {
      this.registerModals();
      this.onClickSubmit();
    },
  };

  registerPage.onLoad();
});

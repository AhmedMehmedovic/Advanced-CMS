document.addEventListener("DOMContentLoaded", function (e) {
  const registerPage = {
    inputs: {
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      submit: document.getElementById("submitButton"),
    },
    registerModals: function () {
      this.modalErrors = modal(document.getElementById("modal1"));
    },

    onClickSubmit: function () {
      this.inputs.submit.addEventListener("click", function (e) {
        e.preventDefault();

        if (
          user.register(
            registerPage.inputs.email.value,
            registerPage.inputs.password.value
          )
        ) {
          console.log("Uspjesna registracija");
        } else {
          registerPage.modalErrors.body(user.getErrors());
          registerPage.modalErrors.show();
        }
      });
    },

    onLoad: function () {
      this.registerModals();
      this.onClickSubmit();
    },
  };

  registerPage.onLoad();
});

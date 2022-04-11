const user = {
  storageKey: null,
  data: {},
  errors: [],

  getErrors: function () {
    let tempErrors = this.errors;
    this.errors = [];
    return tempErrors;
  },

  save: function () {
    if (typeof this.storageKey !== "string") {
      throw Error("Spremanje nije uspješno");
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  },

  init: function (key, password) {
    this.storageKey = md5(key);
    this.data = localStorage.getItem(this.storageKey);
    if (this.data == null) {
      this.errors.push("Korisnik nije registrovan");
      return false;
    }
    this.data = JSON.parse(this.data);

    if (
      validator.rules.match(
        password,
        this.data.password,
        "Password is not corect"
      )
    ) {
      cookie.setItem("session", this.storageKey);
      return true;
    }

    this.data = {};
    this.storageKey = null;
    cookie.removeItem("session");
    return false;
  },

  register: function (email, password) {
    user.storageKey = md5(email);

    if (localStorage.getItem(user.storageKey) !== null) {
      this.errors.push("Email je zauzet!");
      user.storageKey = null;
      return false;
    }

    user.data.email = email;
    user.data.password = password;

    this.save();
    return true;
  },

  isLoggedIn: function () {
    let session = cookie.getItem("session");
    if (session !== false) {
      this.storageKey = session;
      this.data = localStorage.getItem(this.storageKey);
      if (this.data == null) {
        return false;
      }
      this.data = JSON.parse(this.data);
      return true;
    }
    return false;
  },
};

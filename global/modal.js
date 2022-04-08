/**
 *
 * @param {HTMLElement} element
 * @returns
 */
const modal = function (element) {
  const self = this;
  let _close = function () {
    element.classList.remove("show");
    element.querySelector(".body ul").innerHTML = "";
  };
  let closeBackground = (function () {
    element.addEventListener("click", function (e) {
      let target = e.target;
      if (Object.values(target.classList).includes("modal")) {
        _close();
      }
    });
  })();

  let closeButton = (function () {
    let closeButton = element.querySelector(".header button.close");

    if (closeButton) {
      closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        _close();
      });
    }
  })();

  return {
    show: function () {
      element.classList.add("show");
    },
    close: _close,

    body: function (messages) {
      if (typeof messages === "string") {
        messages = [messages];
      }
      let body = element.querySelector(".body ul");
      for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(message));
        body.appendChild(li);
      }
    },

    title: function (html) {
      element.querySelector(".header span.title").innerHTML = html;
    },
  };
};

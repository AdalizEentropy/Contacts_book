const contact = {
  name: "Test",
  lastname: "Testov",
  phone: "+79000000111",
  email: "test@gmail.com",
  company_name: "NSPK",
  job_title: "Manager",
};

window.addEventListener("DOMContentLoaded", () => {
  function setFormValue(id, attrValue) {
    document.getElementById(id).setAttribute("value", attrValue);
  }

  function setSubmit() {
    const body = document.querySelector("body");
    const form = document.querySelector(".form");
    form.removeChild(document.querySelector(".form_buttons"));

    for (var input of form.getElementsByTagName("input")) {
      input.setAttribute("disabled", "disabled");
    }

    body.append(createAlert("Contact was changed"));
  }

  function createAlert(text) {
    const div = document.createElement("div");
    div.className = "alert";

    const alertClose = document.createElement("span");
    alertClose.className = "alert_close";
    alertClose.innerText = "X";

    const url = document.createElement("a");
    url.setAttribute("href", "index.html");

    const alertText = document.createElement("span");
    alertText.className = "alert_text";
    alertText.innerText = text;

    url.append(alertClose);
    div.append(url, alertText);

    return div;
  }

  document.querySelector(
    ".profile_name"
  ).innerText = `${contact.name} ${contact.lastname}`;

  Object.keys(contact).forEach(key => {
    setFormValue(key, contact[key]);
  });

  document.querySelector(".button_edit").onclick = setSubmit;
});

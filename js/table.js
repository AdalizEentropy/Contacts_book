let contacts = [
  {
    name: "Test",
    lastname: "Testov",
    phone: "+79000000111",
    email: "test@gmail.com",
    company_name: "NSPK",
    job_title: "Manager",
  }, {
    name: "Svetlana",
    lastname: "Volokhova",
    phone: "+79000000000",
    email: "sv@gmail.com",
    company_name: "NSPK",
    job_title: "Developer",
  }, {
    name: "Petr",
    lastname: "Petrov",
    phone: "+79000000123",
    email: "petrov@ya.ru",
    company_name: "Sber",
    job_title: "HR",
  }];

const newContact = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  company_name: "",
  job_title: ""
};

window.addEventListener("DOMContentLoaded", () => {
  function addNewContact() {
    const contactForm = makeCreationForm();
    const modalForm = {
      header: 'Create new contact',
      submitLabel: 'Save Contact',
      cancelLabel: 'Cancel',
      content: contactForm,
      submitFunction: saveContact
    };
    clearNewContact();
    addFormValueListener(contactForm);

    Modal.init(modalForm);
  }

  function saveContact() {
    contacts.push(newContact);
    buildContacts();
    calculateContacts();
  }

  function buildContacts() {
    const table = document.querySelector("table");
    table.removeChild(document.querySelector("tbody"));
    table.append(document.createElement("tbody"));
    showContacts();
  }

  function showContacts() {
    contacts.forEach(createTableLine);
  }

  function createTableLine(contact) {
    let inputs = ['name', 'lastname', 'phone', 'email', 'company_name', 'job_title'];
    const formedContact = {};
    inputs.forEach(input => {
      formedContact[input] = contact.hasOwnProperty(input) ? contact[input] : "";
    });

    const tr = document.createElement("tr");
    Object.keys(formedContact).forEach(key => {
      const td = document.createElement("td");
      td.textContent = formedContact[key];
      tr.append(td);
    });

    document.querySelector(".contacts_table table tbody").append(tr);
  }

  function addFormValueListener(contactForm) {
    Object.values(contactForm).forEach(item => {
      item.addEventListener('change', event => {
        const inputValue = event.target.value;
        validateFormValue(item.name, inputValue);
        newContact[item.name] = inputValue
      });
    });
  }

  function calculateContacts() {
    const contactsCount = contacts.length;
    document.querySelector(".table_button_count").innerText = contactsCount;
    if (contactsCount == 1) {
      document.querySelector(".contacts_count").innerText = `(${contactsCount} Contact)`
    } else {
      document.querySelector(".contacts_count").innerText = `(${contactsCount} Contacts)`
    }
  }

  function clearNewContact() {
    Object.keys(newContact).forEach(key => newContact[key] = "");
  }

  document.querySelector(".contact_add_button").addEventListener('click', addNewContact);
  showContacts();
  calculateContacts();
});


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

let newContact = {};

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
    addFormValueListener(contactForm);

    Modal.init(modalForm);
  }

  function saveContact() {
    createTableLine(newContact);
  }

  function showContacts() {
    contacts.forEach(contact => {
      createTableLine(contact);
    });
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
    newContact = {};
    Object.values(contactForm).forEach(value => {
      value.addEventListener('change', input => newContact[value.name] = input.target.value);
    });
  }

  function calculateContacts() {
    contacts.length;
  }

  document.querySelector(".contact_add_button").addEventListener('click', addNewContact);
  showContacts();
  calculateContacts();
});


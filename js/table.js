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

window.addEventListener("DOMContentLoaded", () => {
  function addNewContact() {
    const modalForm = {
      header: 'Create new contact',
      submitLabel: 'Save Contact',
      cancelLabel: 'Cancel',
      content: makeCreationForm(),
      submitFunction: (e) => saveContact(e)
    };

    Modal.init(modalForm);
  }

  function saveContact(event) {
    //TODO не понятно как достать заполненые значения
    const input = event.target.previousElementSibling;

    // const contact = {
    //   name: "Petr2",
    //   lastname: "Petrov2",
    //   phone: "+79000000124",
    //   email: "petrov@ya.ru2",
    //   company_name: "Sber2",
    //   job_title: "HR2"
    // };
    // contacts.push(contact);
    // createTableLine(contact);
  }

  function showContacts() {
    contacts.forEach(contact => {
      createTableLine(contact);
    });
  }

  function createTableLine(contact) {
    const tr = document.createElement("tr");
    Object.keys(contact).forEach(key => {
      const td = document.createElement("td");
      td.textContent = contact[key];
      tr.append(td);
    });

    document.querySelector(".contacts_table table tbody").append(tr);
  }

  document.querySelector(".contact_add_button").addEventListener('click', addNewContact);
  showContacts();
});

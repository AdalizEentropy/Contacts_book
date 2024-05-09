function makeCreationForm() {
    const formFields = {
        name: 'First name',
        lastname: 'Last name',
        phone: 'Phone number',
        email: 'Email',
        company_name: 'Company name',
        job_title: 'Job title'
    };

    const form = document.createElement('form');
    form.className = 'form';
    form.setAttribute('action', '');

    Object.keys(formFields).forEach(key => {
        form.append(makeFormRow(key, formFields[key]));
    });

    return form;
}

function makeFormRow(fieldName, fieldLabel) {
    const container = document.createElement('div');
    container.className = 'field';

    const label = document.createElement('label');
    label.setAttribute('for', fieldName);
    label.innerText = fieldLabel;

    const input = document.createElement('input');
    input.setAttribute('id', fieldName);
    input.setAttribute('name', fieldName);
    input.setAttribute('type', 'text');

    container.append(label, input);

    return container;
}
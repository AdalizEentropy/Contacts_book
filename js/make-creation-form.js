function makeCreationForm() {
    const form = document.createElement('form');
    form.className = 'form';
    form.setAttribute('action', '');

    formFields.forEach(item => {
        form.append(makeFormRow(item));
    });

    return form;
}

function makeFormRow(item) {
    const container = document.createElement('div');
    container.className = 'field';

    const label = document.createElement('label');
    label.setAttribute('for', item['value']);
    label.innerText = item['lable'];

    const input = document.createElement('input');
    input.setAttribute('id', item['value']);
    input.setAttribute('name', item['value']);
    input.setAttribute('type', item['type']);
    input.setAttribute('placeholder', item['placeholder']);

    container.append(label, input);

    return container;
}
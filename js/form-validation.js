function validateFormValue(formName, inputValue) {
    switch (formName) {
        case ('email'):
            if (inputValue && !inputValue.includes('@')) {
                alert("Incorrect email value");
            }
            break;
        case ('phone'):
            if (!inputValue || !inputValue.match(/^(\+)?[\d\s()-]+$/)) {
                alert("Incorrect phone value");
            }
            break;
    }
}
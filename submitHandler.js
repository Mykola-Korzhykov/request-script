const form = document.getElementById('form');

form.addEventListener('submit', e => {
    const fields = collectFields();
    const isValidate = validateFields(fields);

    if(isValidate) {
        const message = createMessage(fields);
        sendMessage(message);
    }

    e.preventDefault();
});
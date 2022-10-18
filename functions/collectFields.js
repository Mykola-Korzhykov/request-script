const collectFields = () => {
    const tag = scriptConfig.fieldTag;

    const tagFields = document.querySelectorAll(`input[name^="${tag}"], select[name^="${tag}"], textarea[name^="${tag}"]`);
    const data = {};

    tagFields.forEach(field => {
        const name = field.getAttribute('name').split('-')[1];

        const text = field.dataset.text,
              smile = field.dataset.smile;

        const value = field.value;

        data[name] = {
            text,
            smile,
            value
        };
    });

    return data;
}
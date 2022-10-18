const validateFields = fields => {
    for(key in fields) {
        const field = fields[key];
        if(!field.value || !field.text || !field.smile) {
            console.log('Some fields is empty or wrong!');
            return false;
        }
    }

    return true;
}
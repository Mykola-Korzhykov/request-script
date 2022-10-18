const createMessage = fields => {
    let message = '';

    for(key in fields) {
        const field = fields[key];
        message += `${field.smile} <b>${field.text}:</b> ${field.value}\n`;
    }
    
    return encodeURIComponent(message);
}
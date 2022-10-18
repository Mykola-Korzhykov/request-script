const functions = ['collectFields', 'validateFields', 'createMessage', 'sendMessage'];
const scripts = ['scriptConfig'];

functions.forEach(scriptName => {
    scripts.push(`functions/${scriptName}`);
});

scripts.push('submitHandler');
requirejs(scripts);
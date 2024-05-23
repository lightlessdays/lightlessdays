const boilerplateCodes = [
    {
        type: 'HTML',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
    },
    {
        type: 'CSS',
        code: `body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}`
    },
    {
        type: 'JavaScript',
        code: `document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});`
    }
];

function createCodeBlock(type, code) {
    const container = document.createElement('div');
    container.classList.add('code-block');

    const title = document.createElement('h2');
    title.innerText = `${type} Boilerplate`;

    const textarea = document.createElement('textarea');
    textarea.id = `${type.toLowerCase()}-code`;
    textarea.readOnly = true;
    textarea.innerText = code;

    const button = document.createElement('button');
    button.innerText = `Copy ${type}`;
    button.addEventListener('click', () => copyCode(textarea.id));

    container.appendChild(title);
    container.appendChild(textarea);
    container.appendChild(button);

    return container;
}

function copyCode(elementId) {
    const code = document.getElementById(elementId);
    code.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
}

document.addEventListener('DOMContentLoaded', () => {
    const codeBlocksContainer = document.getElementById('code-blocks');
    boilerplateCodes.forEach(boilerplate => {
        const codeBlock = createCodeBlock(boilerplate.type, boilerplate.code);
        codeBlocksContainer.appendChild(codeBlock);
    });
});

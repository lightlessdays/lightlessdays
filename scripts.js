const boilerplateCodes = [
    {
        type: 'Responsive Blog Ad 1',
        code: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9887862710118026"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-f5+5t+4z-d1+5q"
     data-ad-client="ca-pub-9887862710118026"
     data-ad-slot="3943845360"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`
    },
    {
        type: 'Responsive Blog Ad 2',
        code: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9887862710118026"
     crossorigin="anonymous"></script>
<!-- Ad Unit 2 For BLOG -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9887862710118026"
     data-ad-slot="2365593595"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`
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

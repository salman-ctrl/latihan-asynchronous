setTimeout(() => {
    document.body.style.backgroundColor = ('blue');
    setTimeout(() => {
        document.body.style.backgroundColor = ('red');
        setTimeout(() => {
            document.body.style.backgroundColor = ('green')
        }, 1000);
    }, 3000);
}, 2000);

setInterval(() => {
    console.log('commit has ready'wjw)
}, 2000);

setTimeout(() => {
    alert('hai senang berkenalan');
    setTimeout(() => {
        alert('siapa namamu')
        setTimeout(() => {
            alert('okeelah')
        }, 2000);
    }, 3000);
}, 4000);

const h2 = document.querySelector('h2');
const button = document.querySelector('button')
const input = document.createElement('input');
h2.textContent = 'nama mu pa';

document.body.appendChild(input);
button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const h1 = document.createElement('h1');
    const text = document.createTextNode(`i love you ${inputValue}`);
    document.body.appendChild(h1);
    document.body.appendChild(text);
});

const h2 = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.createElement('input');
document.body.appendChild(input);

button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    displayText(h1, `I love you ${inputValue} ❤️❤️❤️❤️`);
});

function displayText(element, text) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust the interval (in milliseconds) according to your preference
}



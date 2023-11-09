const by = (selector) => document.querySelector(selector);
const $typingText = by(".typing-text");
const $cursor = by(".cursor");

const words = ["Maravillarnos", "Prepararnos", "Avanzar", "Mejorar"];
const delay = {
    typing:200,
    keeping:1000,
    erasing:100,
    word: 2000,
};

const sleep = (ms) => {
    return new Promise((resolve) =>{
        setTimeout (() => resolve(),ms); 
    });

};

const type = async (word) => {
    $cursor.classList.add ("typing");
    for (const char of word){
        $typingText.textContent += char;
        await sleep(delay.typing);
    }
    $cursor.classList.remove("typing");
    await sleep(delay.keeping);

    for (let i = 1; i<=word.length; i++) {
        $typingText.textContent = word.substring(0, word.length - i);
        await sleep(delay.erasing);
    }
}

const loop = async (wordIndex = 0) => {
    await type(words [wordIndex % words.length]);

    setTimeout(async () => {
        await loop(wordIndex + 1);

    }, delay.word);
}

document.addEventListener("DOMContentLoaded", () => {
    loop ();
});

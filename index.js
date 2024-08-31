if ('speechSynthesis' in window) {
    alert("Broswer supports speech synthesis 🎉");
} else {
    alert("Sorry, your browser doesn't support the speech synthesis API !");
}

// document.getElementById('b').onkeypress = clickMeHandler;

// document.getElementById('b').onload = clickMeHandler

// function clickMeHandler(e) {
// console.log("click me handler, type: ", e.type);
// console.log("click me handler, target: ", e.target);

let letters = new Map()
letters = {
    q: [4, 2],
    w: [4, 3],
    e: [4, 4],
    r: [4, 5],
    t: [4, 6],
    y: [4, 7],
    u: [4, 8],
    i: [4, 9],
    o: [4, 10],
    p: [4, 11],
    a: [3, 2],
    s: [3, 3],
    d: [3, 4],
    f: [3, 5],
    g: [3, 6],
    h: [3, 7],
    j: [3, 8],
    k: [3, 9],
    l: [3, 10],
    z: [2, 2],
    x: [2, 3],
    c: [2, 4],
    v: [2, 5],
    b: [2, 6],
    n: [2, 7],
    m: [2, 8]
}

// let pTag = document.getElementsByTagName("p")[0].innerHTML
// let text = pTag

// document.addEventListener('DOMContentLoaded', function () {


//     // Create a new SpeechSynthesisUtterance object
//     let utterance = new SpeechSynthesisUtterance();

//     // Set the text and voice of the utterance
//     utterance.text = text;
//     utterance.voice = window.speechSynthesis.getVoices()[0];

//     // Speak the utterance
//     window.speechSynthesis.speak(utterance);
// })

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('pauseButton')
const outputDiv = document.getElementById('output');
const textArea = document.getElementById("story");
const navigateButton = document.getElementById("navigate");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
let result = ""

// recognition.interimResults = true;
recognition.final
recognition.continuous = true;

startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
    startButton.textContent = 'Recording...';
});

stopButton.addEventListener('click', () => {
    recognition.stop()
    startButton.disabled = false
    result += " "
    outputDiv.textContent = result
})

navigateButton.addEventListener('click', () => {

})

recognition.onresult = event => {
    result += event.results[event.results.length - 1][0].transcript;
    console.log(result)
    outputDiv.textContent = result;
};

recognition.onend = () => {
    startButton.disabled = false;
    startButton.textContent = 'Start Recording';
};

recognition.onerror = event => {
    console.error('Speech recognition error:', event.error);
};

recognition.onnomatch = () => {
    console.log('No speech was recognized.');
};

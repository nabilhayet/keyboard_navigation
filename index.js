if ('speechSynthesis' in window) {
    alert("Broswer supports speech synthesis 🎉");
} else {
    alert("Sorry, your browser doesn't support the speech synthesis API !");
}

document.getElementById('b').onkeypress = clickMeHandler;

function clickMeHandler(e) {
    // console.log("click me handler, type: ", e.type);
    // console.log("click me handler, target: ", e.target);

    let pTag = document.getElementsByTagName("p")[0].innerHTML
    let text = pTag

    // Create a new SpeechSynthesisUtterance object
    let utterance = new SpeechSynthesisUtterance();

    // Set the text and voice of the utterance
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[0];

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
}


const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onstart = () => {
    startButton.textContent = 'Listening...';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;
};

recognition.onend = () => {
    startButton.textContent = 'Start Voice Input';
};

startButton.addEventListener('click', () => {
    recognition.start();
});
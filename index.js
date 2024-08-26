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
const stopButton = document.getElementById('pauseButton')
const outputDiv = document.getElementById('output');
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

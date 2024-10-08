const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('pauseButton')
const outputDiv = document.getElementById('output');
const textArea = document.getElementById("story");
const navigateButton = document.getElementById("navigate");
const typedText = document.getElementById("story");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
let result = ""

recognition.final
recognition.continuous = true;

startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false
    startButton.textContent = 'Recording...';
    typedText.disabled = false
    if (result.length > 0) {
        result += " "
    }
});

stopButton.addEventListener('click', () => {
    recognition.stop()
    startButton.disabled = false
    stopButton.disabled = true
    navigateButton.disabled = false
    //  result += " "
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
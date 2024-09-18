if ('speechSynthesis' in window) {
    alert("Broswer supports speech synthesis 🎉");
} else {
    alert("Sorry, your browser doesn't support the speech synthesis API !");
}

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('pauseButton')
const outputDiv = document.getElementById('output');
const textArea = document.getElementById("story");
const navigateButton = document.getElementById("navigate");
const typedText = document.getElementById("story");
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

navigateButton.addEventListener('click', letterSpeech)
function letterSpeech() {
    if (result.length > 0) {
        startButton.disabled = true
        navigateButton.disabled = true
        stopButton.disabled = true
        recognition.stop()
        let content = result

        let utterance = new SpeechSynthesisUtterance();
        utterance.text = content
        window.speechSynthesis.speak(utterance)
    }
}

let counter = 0
let pointer = 0
let u = new SpeechSynthesisUtterance();

typedText.addEventListener('input', event => {
    if (event.key === "Backspace" || event.key === "Delete") {
        pointer -= 1
        u.text = `You deleted the last character`
        window.speechSynthesis.speak(u)
    }
    if (pointer < 0) {
        pointer = 0
    }
    if (event.data == result[counter] && counter == pointer) {
        u.text = `You typed letter ${event.data} and it matched with your speech`
        window.speechSynthesis.speak(u)
        counter += 1
        pointer += 1
    } else {
        console.log("Please delete the last letter")
        let position = letters[result[counter]]
        pointer += 1
        debugger
        u.text = `You typed letter ${event.data} and it did not match with letter ${result[counter]}.First delete ${pointer - counter} characters and then to type ${result[counter]} go to the bottom corner of your keyboard and then go ${position[0]} position up and ${position[1]} position right.`
        window.speechSynthesis.speak(u)
    }
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

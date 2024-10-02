![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/OS) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/OS) ![GitHub followers](https://img.shields.io/github/followers/nabilhayet) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/OS)                                          
                                        <h1>:jack_o_lantern: Keyboard Navigation :jack_o_lantern: </h1>
                                                      
This groundbreaking project assists individuals without vision in navigating letters on a keyboard. It takes input from the user and continues until the stop button is pressed. When the navigate button is activated, the system echoes the user's input and displays the text on the webpage. 

A key feature of this project is the keyboard navigation functionality. It provides real-time voice feedback to users, informing them if they pressed the correct letter. In cases of an incorrect key press, the system instructs the user to delete the character and guides them to the correct position on the keyboard. This voice-guided assistance persists until the end of the input is reached. 
<a href="https://www.youtube.com/watch?v=UWaRqHpO8fU&t=2s">Demo</a>

Table of Contents
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Installing](#installing)
- [Challenges](#challenges)
- [Future-Implementation](#future-implementation)
- [Code-Snippet](#code-snippet)
                               
## Features
<ul>
   <li>Record User's speech</li>
   <li>Speech to text</li>
   <li>Text to Speech</li>
   <li>Stop button to stop recording</li>
  <li>Navigate button to echo user's speech</li>
  <li>Navigate keyboard letters as voice command while typing</li>
  <li></li>
</ul>

## User Signup 
![signup](https://user-images.githubusercontent.com/33500404/109457096-2ac89100-7a28-11eb-8b43-59f02ad884df.gif)

## Make Reservation
![make_res](https://user-images.githubusercontent.com/33500404/109456292-8265fd00-7a26-11eb-96f8-35cc644b9bd6.gif)

## View Reservation 
![view_reservation](https://user-images.githubusercontent.com/33500404/109456997-f3f27b00-7a27-11eb-8cfe-7816b5dbce14.gif)

## Add Cafe
![add_cafe](https://user-images.githubusercontent.com/33500404/109458180-4fbe0380-7a2a-11eb-84db-92658ebf615a.gif)

## View Cafes
![view_cafes](https://user-images.githubusercontent.com/33500404/109458557-091cd900-7a2b-11eb-985f-263f27203c86.gif)

## Form Validation
![Error_validation](https://user-images.githubusercontent.com/33500404/109458252-6ebc9580-7a2a-11eb-927f-fbbdfdc17d31.gif)


## Tech-Stack
<p>This Web app makes use of the following:</p>
*  Javascript
*  HTML
*  CSS

## Installing
<ul>
   <li> Clone this repo to your local machine git clone <this-repo-url></li>
  <li> Make sure your browser is upto date</li>
  <li>Only Chrome & Firefox supports speech recognition </li>
  <li> run index.html</li>
</ul>
        
## Challenges
<ul>
  <li>Continuous navigation from one button to another</li>
  <li>Removing unexpected input from voice command </li>
  <li> Mapping letters to keyboard position</li>
  <li> Echo voice command for each input</li>
</ul>

## Future-Implementation
<ul>
  <li>Getting more accurate input from user</li>
  <li>Improve keyboard navigation's algorithm</li>
  <li>Adding voice command replacing buttons</li>
</ul>

## Code-Snippet 

```
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
```





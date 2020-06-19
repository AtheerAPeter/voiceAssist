const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const greetings = [
  "i'm good how about you",
  "doing good homeboy",
  "leave me alone",
];
const hello = ["hello", "hi", "hello, how you doing"];
const weather = ["weather is fine", "you need a tan", "you don't even go out"];
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("start talking now");
};
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "i dont know what you saying";
  content.textContent = "i dont know what you saying";

  if (
    message.includes("how") ||
    message.includes("are") ||
    message.includes("you") ||
    message.includes("doing")
  ) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    content.textContent = finalText;
  }
  if (message.includes("hello") || message.includes("hi")) {
    const finalText = hello[Math.floor(Math.random() * hello.length)];
    speech.text = finalText;
    content.textContent = finalText;
  }
  if (
    message.includes("weather") ||
    message.includes("is") ||
    message.includes("the")
  ) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
    content.textContent = finalText;
  }
  window.speechSynthesis.speak(speech);
}

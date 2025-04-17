const recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.onresult = event => {
  for (const result of event.results){
    console.log().textContent = result;
  }
};
document.querySelector('#mic-btn').addEventListener('click', () => {
  recognition.start();
});
recognition.onresult = event => {
    const result = event.results[event.results.length - 1];
    const text = result[0].transcript;
    document.querySelector('#texto').textContent = text;
  };
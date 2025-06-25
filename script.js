function speakText() {
  const input = document.getElementById("text");
  if (input.value.trim() !== "") {
    const utterance = new SpeechSynthesisUtterance(input.value);
    speechSynthesis.speak(utterance);
  }
}

const v = document.getElementById("v");
function load() {
  v.innerHTML = "";
  speechSynthesis.getVoices().forEach((x, i) =>
    v.add(new Option(x.name + " (" + x.lang + ")", i)));
}
load(); speechSynthesis.onvoiceschanged = load;
document.getElementById("b").onclick = () => {
  const u = new SpeechSynthesisUtterance(document.getElementById("t").value);
  u.voice = speechSynthesis.getVoices()[v.value];
  speechSynthesis.speak(u);
};

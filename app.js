var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var translateBtn = document.querySelector("#translate");

var apiUrl = "https://api.funtranslations.com/translate/dothraki.json";

function joinTextWithUrl(text) {
  return apiUrl + "?" + "text=" + text;
}

function getData() {
  var input = inputText.value;
  if (input === "") {
    return alert("Hey! we cannot translate nil 😐");
  }

  fetch(joinTextWithUrl(input))
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated))
    .catch((err) => console.log(err));
}

translateBtn.addEventListener("click", getData);

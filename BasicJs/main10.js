var btn = document.getElementById("go-button");

function buttonClicked(){
  console.log("Button clicked");

  var customText = document.getElementsByClassName("my-input");
  var textArea = document.getElementsByClassName("my-textarea");
  var results = document.getElementById("text");

  results.innerHTML ="hello ," + customText[0].value + "<br />";
  console.log(textArea);
  results.innerHTML += "message:" + textArea[0].value;
}


btn.addEventListener("click" , buttonClicked)

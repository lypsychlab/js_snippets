//disappearing_textinput:
//add default text in an input field that vanishes on click
//paste this at the top of your JS on a text-input question
var input = $("QR~"+this.questionId);
var text = "default text";
input.value = text;

input.on('focus', function clear() {
  if (input.value == text)
  {
    input.value= "";
  }
});

input.on('blur', function repopulate() {
  if (input.value == "")
  {
    input.value= text;
  }
});
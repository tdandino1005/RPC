// TODO:make a reference to the first button on the page
const buttons = document.querySelectorAll("button");

// TODO: Do something whenever a button is clicked

buttons.forEach(function (button) {
  button.addEventListener(
    "click",

    // Callback function
    function (mickey) {
      console.log(event.target.innerText);
    }
  );
});

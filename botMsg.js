const secondsToMilliseconds = (num) => num * 1000;

const startScript = function () {
  let counter = 1;
  const intervalMilliseconds = secondsToMilliseconds(0.5);
  window.InputEvent = window.Event || window.InputEvent;
  const event = new InputEvent("input", { bubbles: true });
  const textbox = document.querySelector("#main div._13NKt");

  setInterval(() => {
    textbox.textContent = "mensagem " + counter;
    textbox.dispatchEvent(event);
    document.querySelector("#main span[data-testid=send]").click();
    counter += 1;
  }, intervalMilliseconds);
};

startScript();

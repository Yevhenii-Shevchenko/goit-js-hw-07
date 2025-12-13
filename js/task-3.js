const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleOutputUserName);

function handleOutputUserName(inp) {
  let userName = inp.currentTarget.value.trim();

  if (userName === "") {
    userName = "Anonymous";
  }
  output.textContent = userName;
}
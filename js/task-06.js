function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = Number(document.querySelector("input").value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesContainer.insertAdjacentHTML("beforeend", box);
  }

  document.querySelector("input").value = ""; // Inputu temizle
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  document.getElementById("boxes").innerHTML = "";
});
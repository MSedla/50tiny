const hints = [
  { time: "00:47", text: "První hint: Petr Kožíšek" },
  { time: "01:00", text: "Druhý hint: ", image: "img/hint2.jpg" },
  { time: "01:01", text: "Třetí hint: 7275" },
  { time: "01:02", text: "Čtvrtý hint: ", image: "img/hint3.jpg" },
  { time: "01:03", text: "Pátý hint: = 12.884615384615384615384615384615" },
  { time: "01:04", text: "Šestý hint: ↑ 335/26" },
  { time: "01:05", text: "Sedmý hint: ↑ 335/26" }
];

const output = document.getElementById("output");

function updateHints() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  let content = "";

  hints.forEach(hint => {
    const [h, m] = hint.time.split(":").map(Number);
    if (currentHour > h || (currentHour === h && currentMinutes >= m)) {
      content += `<div class="hint"><p>${hint.text}</p>`;
      if (hint.image) {
        content += `<img src="${hint.image}" alt="Hint image">`;
      }
      content += `</div>`;
    }
  });

  output.innerHTML = content;
}

updateHints();
setInterval(updateHints, 60000); // kontrola každou minutu

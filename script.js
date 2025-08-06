// script.js
const hints = [
  { time: "00:47", text: "První hint: Petr Kožíšek" },
  { time: "01:03", text: "Druhý hint: "},
  { time: "14:00", text: "Třetí hint: 7275"},
  { time: "15:00", text: "Čtvrtý hint: "},
  { time: "16:00", text: "Pátý hint: "}
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
      content += `<p>${hint.text}</p>`;
    }
  });

  output.innerHTML = content;
}

updateHints();
setInterval(updateHints, 60000); // kontrola každou minutu

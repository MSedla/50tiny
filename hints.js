const hints = [
  { time: "11:47", text: "Čtvrtý hint: 177 8" },
  { time: "13:50", text: "Sedmý hint: 0 012" },
  { time: "14:19", text: "Osmý hint: PETR KRÁL , datum nar. 25. srpna 1977" }
];

const output = document.getElementById("outputquiz");

function updateHints() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  let content = "";

  hints.forEach(hint => {
    const [h, m] = hint.time.split(":").map(Number);
    if (currentHour > h || (currentHour === h && currentMinutes >= m)) {
      content += `<div class="hint"><p>${hint.text}</p></div>`;
    }
  });

  output.innerHTML = content;
}

updateHints();
setInterval(updateHints, 60000); // kontrola každou minutu

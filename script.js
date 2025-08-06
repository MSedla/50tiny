// script.js
const hints = [
  { time: "12:00", text: "První indicie: Najdi červený dům." },
  { time: "13:00", text: "Druhá indicie: Podívej se pod lavičku." },
  { time: "14:00", text: "Třetí indicie: Vezmi si mapu." },
  { time: "15:00", text: "Čtvrtá indicie: Sleduj kompas." },
  { time: "16:00", text: "Pátá indicie: Hledej pod kamenem." }
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

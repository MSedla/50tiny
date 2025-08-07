const quizData = [
  {
    time: "08:00",
    question: "Kdo je nejlepší vnouče?",
    answers: ["Marek", "Dan", "Lucka", "Zuza"],
    correct: "Marek",
    hint: "První hint: Petr Kožíšek"
  },
  {
    time: "09:15",
    question: "Kolik letos slavím?",
    answers: ["25", "47", "46", "50"],
    correct: "50",
    hint: "Druhý hint: <img src='img/hint2.jpg' alt='Hint 2' width='300'>"
  },
  {
    time: "10:59",
    question: "Jak se Hynek jmenuje opravdovým jménem?",
    answers: ["Nikdo neví", "Tomáš Garrigue Masaryk", "Brad Pitt", "Jarda Lhota"],
    correct: "Nikdo neví",
    hint: "Třetí hint: 7275"
  },
  {
    time: "12:27",
    question: "Jak často sekám trávu?",
    answers: ["2x týdně", "10x měsíčně", "On je někdy čas kdy nesekám?", "5x týdně"],
    correct: "On je někdy čas kdy nesekám?",
    hint: "Pátý hint: <img src='img/hint3.jpg' alt='Hint 4' width='300'>"
  },
  {
    time: "12:48",
    question: "Kde nejradši spí kocouři?",
    answers: ["Na gaučíčku", "Na polštářích", "Nesnášejí spaní", "Na posteli"],
    correct: "Nesnášejí spaní",
    hint: "Šestý hint: = 12.884615384615..."
  },
  {
    time: "15:55",
    question: "Závidím Markovi jeho kšiltovku?",
    answers: ["ANO", "NE"],
    correct: "ANO",
    hint: "Devátý hint: ↑ 335/26"
  },
  {
    time: "16:30",
    question: "Už víš kam?",
    answers: ["ANO", "NE"],
    correct: "ANO",
    hint: "Desátý hint: Well well well dobře ty na tvůj věk :)",
    wrongHint: "Desátý hint: Dish Belgická 335/26"
  }
];

const container = document.getElementById("quiz-container");

function checkTimeAndShowQuestions() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  quizData.forEach((item, index) => {
    const [h, m] = item.time.split(":").map(Number);
    if (currentHour > h || (currentHour === h && currentMinutes >= m)) {
      if (!document.getElementById("q" + index)) {
        const div = document.createElement("div");
        div.id = "q" + index;
        div.className = "question";

        let html = `<p><strong>${item.question}</strong></p>`;
        item.answers.forEach(answer => {
          html += `
            <label>
              <input type="radio" name="q${index}" value="${answer}">
              ${answer}
            </label>
          `;
        });

        html += `<button onclick="submitAnswer(${index})">Odeslat</button>`;
        html += `<div id="hint${index}" class="hint"></div>`;

        div.innerHTML = html;
        container.appendChild(div);
      }
    }
  });
}

function submitAnswer(index) {
  const question = quizData[index];
  const options = document.getElementsByName("q" + index);
  let selected = null;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selected = options[i].value;
      break;
    }
  }
  const hintBox = document.getElementById("hint" + index);

  if (!selected) {
    hintBox.innerHTML = "<span style='color: orange;'>Vyber odpověď!</span>";
    return;
  }

  if (selected === question.correct) {
    hintBox.innerHTML = question.hint;
    options.forEach(opt => opt.disabled = true);
  } else {
    hintBox.innerHTML = question.wrongHint || "<span style='color: red;'>Špatně :( Zkus to znovu.</span>";
  }
}

checkTimeAndShowQuestions();
setInterval(checkTimeAndShowQuestions, 60000);

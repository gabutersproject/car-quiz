(function () {
  var QUIZ_LENGTH = 10;
  var LETTERS = ["A", "B", "C", "D"];

  var BANK = [
    {
      category: "Controls",
      prompt: "On a typical modern motorcycle, which control works the front brake?",
      choices: [
        "The right-hand lever",
        "The left-hand lever",
        "The left foot pedal",
        "A switch on the dashboard"
      ],
      answer: 0,
      explain: "The front brake is the right-hand lever. The left hand works the clutch, and the right foot usually works the rear brake."
    },
    {
      category: "Controls",
      prompt: "Which control does a rider use for the clutch on a typical motorcycle?",
      choices: [
        "The left-hand lever",
        "The right-hand lever",
        "The right foot pedal",
        "The starter button"
      ],
      answer: 0,
      explain: "The clutch lever sits on the left handlebar. Pulling it in disconnects the engine from the gearbox so the rider can change gear or stop in gear."
    },
    {
      category: "Controls",
      prompt: "Where is the rear brake pedal on a typical motorcycle?",
      choices: [
        "By the right foot",
        "By the left foot",
        "On the left handlebar",
        "On the right handlebar"
      ],
      answer: 0,
      explain: "The rear brake is normally a pedal for the right foot. The left foot shifts gears."
    },
    {
      category: "Controls",
      prompt: "On a typical motorcycle, the gear shift lever is operated by the:",
      choices: [
        "Left foot",
        "Right foot",
        "Left hand",
        "Right hand"
      ],
      answer: 0,
      explain: "The shift lever is on the left. A common pattern is first gear down from neutral, then the higher gears up."
    },
    {
      category: "Safety",
      prompt: "What does ABS do when a rider or driver brakes hard?",
      choices: [
        "Pulses the brakes so a wheel is less likely to lock",
        "Adds horsepower for a shorter stop",
        "Locks every wheel on purpose",
        "Turns the engine off"
      ],
      answer: 0,
      explain: "ABS means anti-lock braking system. It eases brake pressure if a wheel is about to stop rotating, which helps the tire keep grip."
    },
    {
      category: "Engine",
      prompt: "What does the “cc” in a 650cc engine describe?",
      choices: [
        "The volume the pistons displace",
        "The number of cylinders",
        "The top speed in kilometers",
        "The horsepower rating"
      ],
      answer: 0,
      explain: "Cubic centimeters measure engine displacement: the space swept by the pistons. It is a size, not a horsepower figure."
    },
    {
      category: "Riding",
      prompt: "At riding speed, countersteering is used to:",
      choices: [
        "Start a lean into a turn",
        "Lock the bars straight",
        "Apply the rear brake",
        "Find neutral"
      ],
      answer: 0,
      explain: "A brief press on the handlebar in the direction you want to turn helps the bike lean that way. Once it is leaned, you steer through the corner."
    },
    {
      category: "Bikes",
      prompt: "A “naked” motorcycle is best described as a bike that:",
      choices: [
        "Has little or no full fairing",
        "Has no engine",
        "Is built only for dirt",
        "Uses pedals instead of a motor"
      ],
      answer: 0,
      explain: "Naked bikes leave the engine and frame more exposed. They skip the big front fairing used on sport bikes."
    },
    {
      category: "Maintenance",
      prompt: "A chain final drive stays healthier when the rider:",
      choices: [
        "Keeps it clean, correctly tensioned, and lubricated",
        "Soaks it in engine coolant",
        "Paints it before every ride",
        "Runs it dry so grit cannot stick"
      ],
      answer: 0,
      explain: "A dirty or dry chain wears the chain and sprockets. Too much slack or a chain that is too tight also damages the drivetrain."
    },
    {
      category: "Engine",
      prompt: "What does EFI stand for?",
      choices: [
        "Electronic fuel injection",
        "Engine force index",
        "Exhaust flow intake",
        "Electric front ignition"
      ],
      answer: 0,
      explain: "Electronic fuel injection meters fuel with electronically controlled injectors, instead of a carburetor."
    },
    {
      category: "Engine",
      prompt: "A turbocharger is driven mainly by:",
      choices: [
        "Exhaust gas spinning a turbine",
        "A belt from the crankshaft only",
        "The battery",
        "Air from the cabin vents"
      ],
      answer: 0,
      explain: "Exhaust flow spins the turbine, which drives a compressor that packs more air into the engine. A belt-driven compressor is a supercharger."
    },
    {
      category: "Drivetrain",
      prompt: "What does AWD stand for?",
      choices: [
        "All-wheel drive",
        "Automatic wheel differential",
        "Advanced wind drag",
        "Axle weight distribution"
      ],
      answer: 0,
      explain: "All-wheel drive can send power to every wheel, which helps when one tire has less grip than the others."
    },
    {
      category: "Drivetrain",
      prompt: "What does a differential let the drive wheels do in a turn?",
      choices: [
        "Rotate at different speeds",
        "Lock together at all times",
        "Stop the engine at idle",
        "Steer the front tires"
      ],
      answer: 0,
      explain: "The outside wheel travels farther in a corner, so it needs to turn faster than the inside wheel. The differential allows that."
    },
    {
      category: "Engine",
      prompt: "A higher octane rating mainly means the fuel:",
      choices: [
        "Resists knock, which is uncontrolled combustion",
        "Always makes more power in every engine",
        "Cleans the tires",
        "Replaces engine oil"
      ],
      answer: 0,
      explain: "Octane measures resistance to knock. Use the grade the manufacturer specifies. A higher grade does not add power in an engine that does not need it."
    },
    {
      category: "Engine",
      prompt: "What is the main job of a catalytic converter?",
      choices: [
        "Turn much of the harmful exhaust gas into less harmful gas",
        "Increase tire pressure",
        "Cool the engine oil",
        "Make the horn louder"
      ],
      answer: 0,
      explain: "The converter uses a catalyst to change carbon monoxide, hydrocarbons, and nitrogen oxides into less harmful gases."
    },
    {
      category: "Handling",
      prompt: "Understeer in a car means:",
      choices: [
        "The front tires lose grip and the car runs wide",
        "The rear tires step out and the car rotates",
        "The engine stalls in the corner",
        "The parking brake is on"
      ],
      answer: 0,
      explain: "Understeer is a push: the car turns less than the driver asked. Oversteer is the opposite, when the rear loses grip."
    },
    {
      category: "Engine",
      prompt: "Torque is best described as:",
      choices: [
        "A twisting force",
        "The width of a tire",
        "The color of the exhaust",
        "The weight of the chassis"
      ],
      answer: 0,
      explain: "Torque is rotational force, often felt as pull at low engine speed. Horsepower combines torque with how fast the engine is turning."
    },
    {
      category: "Engine",
      prompt: "The redline on a tachometer marks:",
      choices: [
        "The highest engine speed the maker recommends",
        "The best highway cruising speed",
        "An empty fuel tank",
        "The correct tire pressure"
      ],
      answer: 0,
      explain: "RPM means revolutions per minute. The redline is the top of the safe operating range marked by the manufacturer."
    },
    {
      category: "Riding",
      prompt: "Engine braking happens when you:",
      choices: [
        "Close the throttle so the engine’s resistance slows the vehicle",
        "Hold the starter button",
        "Shift to neutral at speed",
        "Turn the engine kill switch off"
      ],
      answer: 0,
      explain: "With the throttle closed and a gear engaged, the engine resists the wheels and the vehicle slows. It supports the brakes; it does not replace them."
    },
    {
      category: "Engine",
      prompt: "In a liquid-cooled engine, the radiator:",
      choices: [
        "Gives heat from the coolant to the outside air",
        "Stores the fuel",
        "Charges the battery by itself",
        "Mixes oil into the gasoline"
      ],
      answer: 0,
      explain: "Coolant carries heat from the engine to the radiator. Air passing through the radiator then carries that heat away."
    }
  ];

  var startScreen = document.getElementById("screen-start");
  var quizScreen = document.getElementById("screen-quiz");
  var resultScreen = document.getElementById("screen-result");
  var startBtn = document.getElementById("start-btn");
  var nextBtn = document.getElementById("next-btn");
  var againBtn = document.getElementById("again-btn");
  var categoryEl = document.getElementById("category");
  var countEl = document.getElementById("count");
  var barEl = document.getElementById("progress-bar");
  var promptEl = document.getElementById("prompt");
  var choicesEl = document.getElementById("choices");
  var feedbackEl = document.getElementById("feedback");
  var explainEl = document.getElementById("explain");
  var rankEl = document.getElementById("rank");
  var scoreEl = document.getElementById("score-line");
  var rankLineEl = document.getElementById("rank-line");
  var reviewWrap = document.getElementById("review-wrap");
  var reviewEl = document.getElementById("review");
  var liveEl = document.getElementById("live");

  var deck = [];
  var index = 0;
  var score = 0;
  var locked = false;
  var missed = [];

  function shuffle(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function show(screen) {
    startScreen.hidden = screen !== "start";
    quizScreen.hidden = screen !== "quiz";
    resultScreen.hidden = screen !== "result";
  }

  function say(text) {
    liveEl.textContent = text;
  }

  function prepareDeck() {
    return shuffle(BANK).slice(0, QUIZ_LENGTH).map(function (question) {
      var choices = shuffle(question.choices.map(function (text, choiceIndex) {
        return { text: text, correct: choiceIndex === question.answer };
      }));
      return {
        category: question.category,
        prompt: question.prompt,
        explain: question.explain,
        choices: choices
      };
    });
  }

  function renderQuestion() {
    var question = deck[index];
    locked = false;
    categoryEl.textContent = question.category;
    countEl.textContent = "Question " + (index + 1) + " of " + deck.length;
    barEl.style.width = ((index) / deck.length) * 100 + "%";
    promptEl.textContent = question.prompt;
    feedbackEl.hidden = true;
    explainEl.textContent = "";
    choicesEl.innerHTML = "";

    question.choices.forEach(function (choice, choiceIndex) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.dataset.index = String(choiceIndex);

      var letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = LETTERS[choiceIndex];

      var label = document.createElement("span");
      label.textContent = choice.text;

      button.appendChild(letter);
      button.appendChild(label);
      button.addEventListener("click", function () {
        choose(choiceIndex);
      });
      choicesEl.appendChild(button);
    });

    say(question.category + ". " + question.prompt);
    var first = choicesEl.querySelector("button");
    if (first) first.focus();
  }

  function choose(choiceIndex) {
    if (locked) return;
    var question = deck[index];
    var picked = question.choices[choiceIndex];
    if (!picked) return;
    locked = true;

    var buttons = choicesEl.querySelectorAll("button");
    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (question.choices[buttonIndex].correct) button.classList.add("is-correct");
      if (buttonIndex === choiceIndex && !picked.correct) button.classList.add("is-wrong");
    });

    if (picked.correct) {
      score += 1;
      say("Correct. " + question.explain);
    } else {
      var correctText = question.choices.filter(function (choice) {
        return choice.correct;
      })[0].text;
      missed.push({
        prompt: question.prompt,
        answer: correctText
      });
      say("Not quite. The answer is " + correctText + ". " + question.explain);
    }

    explainEl.textContent = question.explain;
    feedbackEl.hidden = false;
    nextBtn.textContent = index === deck.length - 1 ? "See results" : "Next question";
    nextBtn.focus();
  }

  function rankFor(points, total) {
    var ratio = points / total;
    if (ratio === 1) {
      return {
        title: "Apex ace",
        line: "Clean lap. You know the machines and the words that describe them."
      };
    }
    if (ratio >= 0.8) {
      return {
        title: "Shop lead",
        line: "Strong round. You could talk a rider or driver through most of these."
      };
    }
    if (ratio >= 0.6) {
      return {
        title: "Canyon regular",
        line: "The basics are there. A few details are still worth a second look."
      };
    }
    if (ratio >= 0.4) {
      return {
        title: "Learning the line",
        line: "A fair start. The notes under each miss will make the next run easier."
      };
    }
    return {
      title: "In the garage",
      line: "Everyone starts on the stand. Run it again and the terms will settle in."
    };
  }

  function showResult() {
    var result = rankFor(score, deck.length);
    rankEl.textContent = result.title;
    scoreEl.innerHTML = score + " <span>/ " + deck.length + "</span>";
    rankLineEl.textContent = result.line;
    reviewEl.innerHTML = "";

    if (missed.length === 0) {
      reviewWrap.hidden = true;
    } else {
      reviewWrap.hidden = false;
      missed.forEach(function (item) {
        var li = document.createElement("li");
        var question = document.createElement("p");
        question.className = "q";
        question.textContent = item.prompt;
        var answer = document.createElement("p");
        answer.className = "a";
        answer.textContent = "Answer: " + item.answer;
        li.appendChild(question);
        li.appendChild(answer);
        reviewEl.appendChild(li);
      });
    }

    barEl.style.width = "100%";
    show("result");
    say(result.title + ". You scored " + score + " out of " + deck.length + ".");
    againBtn.focus();
  }

  function startQuiz() {
    deck = prepareDeck();
    index = 0;
    score = 0;
    missed = [];
    show("quiz");
    renderQuestion();
  }

  function next() {
    if (!locked) return;
    if (index === deck.length - 1) {
      showResult();
      return;
    }
    index += 1;
    renderQuestion();
  }

  startBtn.addEventListener("click", startQuiz);
  againBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", next);

  document.addEventListener("keydown", function (event) {
    if (quizScreen.hidden) return;
    if (!locked) {
      var number = Number(event.key);
      if (number >= 1 && number <= 4) {
        event.preventDefault();
        choose(number - 1);
      }
      return;
    }
    if (event.key === "Enter" && event.target !== nextBtn) {
      event.preventDefault();
      next();
    }
  });
})();

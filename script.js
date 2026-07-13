/* ==========================================================
   This script:
   - Grades the quiz
   - Calculates the total score
   - Displays pass/fail
   - Shows feedback for each question
   - Clears results when the quiz is reset
========================================================== */

// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("quizForm");
    const results = document.getElementById("results");
    const resultsContent = document.getElementById("resultsContent");
    const resetButton = document.getElementById("resetBtn");

    // Grade the quiz when submitted
    form.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        let score = 0;

        let output = "";

        /* ==================================================
           QUESTION 1
        ================================================== */

        let q1 = document
            .getElementById("htmlAnswer")
            .value
            .trim()
            .toLowerCase();

        let q1Correct = "hypertext markup language";

        if (q1 === q1Correct) {

            score++;

            output += `
            <div class="result-card">
                <h3 class="correct">✔ Question 1 - Correct</h3>
                <p>Your answer: ${q1}</p>
            </div>
            `;

        } else {

            output += `
            <div class="result-card">
                <h3 class="incorrect">✖ Question 1 - Incorrect</h3>

                <p>Your answer:
                ${q1 === "" ? "No answer provided." : q1}
                </p>

                <p class="correct-answer">
                Correct Answer:
                HyperText Markup Language
                </p>
            </div>
            `;
        }

        /* ==================================================
           QUESTION 2
        ================================================== */

        const q2 = document.querySelector('input[name="q2"]:checked');

        if (q2 && q2.value === "nav") {

            score++;

            output += `
            <div class="result-card">
                <h3 class="correct">✔ Question 2 - Correct</h3>
            </div>
            `;

        } else {

            output += `
            <div class="result-card">
                <h3 class="incorrect">✖ Question 2 - Incorrect</h3>

                <p class="correct-answer">
                Correct Answer:
                &lt;nav&gt;
                </p>

            </div>
            `;
        }

        /* ==================================================
           QUESTION 3
        ================================================== */

        const q3 = document.querySelector('input[name="q3"]:checked');

        if (q3 && q3.value === "color") {

            score++;

            output += `
            <div class="result-card">
                <h3 class="correct">✔ Question 3 - Correct</h3>
            </div>
            `;

        } else {

            output += `
            <div class="result-card">

                <h3 class="incorrect">✖ Question 3 - Incorrect</h3>

                <p class="correct-answer">
                Correct Answer:
                color
                </p>

            </div>
            `;
        }

        /* ==================================================
           QUESTION 4
        ================================================== */

        const q4 = document.querySelector('input[name="q4"]:checked');

        if (q4 && q4.value === "flexbox") {

            score++;

            output += `
            <div class="result-card">
                <h3 class="correct">✔ Question 4 - Correct</h3>
            </div>
            `;

        } else {

            output += `
            <div class="result-card">

                <h3 class="incorrect">✖ Question 4 - Incorrect</h3>

                <p class="correct-answer">
                Correct Answer:
                Flexbox
                </p>

            </div>
            `;
        }

        /* ==================================================
           QUESTION 5
        ================================================== */

        const checked = [];

        document.querySelectorAll('input[name="q5"]:checked')
            .forEach(box => checked.push(box.value));

        const correctAnswers = ["header", "main", "section"];

        const correctSelection =
            checked.length === correctAnswers.length &&
            correctAnswers.every(answer => checked.includes(answer));

        if (correctSelection) {

            score++;

            output += `
            <div class="result-card">

                <h3 class="correct">
                ✔ Question 5 - Correct
                </h3>

            </div>
            `;

        } else {

            output += `
            <div class="result-card">

                <h3 class="incorrect">
                ✖ Question 5 - Incorrect
                </h3>

                <p class="correct-answer">

                Correct Answers:

                &lt;header&gt;<br>
                &lt;main&gt;<br>
                &lt;section&gt;

                </p>

            </div>
            `;
        }

        /* ==================================================
           FINAL SCORE
        ================================================== */

        const passed = score >= 4;

        results.style.display = "block";

        resultsContent.innerHTML = `

            <div class="score ${passed ? "pass" : "fail"}">

                ${passed ? "✔ PASS" : "✖ FAIL"}

                <br><br>

                Final Score:
                ${score} / 5

                (${Math.round(score / 5 * 100)}%)

            </div>

            ${output}

        `;

        // Scroll smoothly to the results
        results.scrollIntoView({
            behavior: "smooth"
        });

    });

    /* ==================================================
       RESET QUIZ
    ================================================== */

    resetButton.addEventListener("click", function () {

        results.style.display = "none";

        resultsContent.innerHTML = "";

    });

});

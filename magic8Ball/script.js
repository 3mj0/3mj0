document.addEventListener('DOMContentLoaded', function() {
    const answers = [
        "Yes.",
        "No.",
        "Ask again later.",
        "Definitely.",
        "Absolutely not.",
        "I wouldn't count on it.",
        "Yes, in due time.",
        "No way!",
        "Maybe.",
        "Most likely."
    ];
    document.getElementById('askButton').addEventListener('click', function () {
        const question = document.getElementById('question').value;
        const answerDisplay = document.getElementById('answer');
        if (question.trim() === "") {
            answerDisplay.textContent = "Please ask a question!";
        } else {
            const randomIndex = Math.floor(Math.random() * answers.length);
            answerDisplay.textContent = answers[randomIndex];
        }
    });
});

document.getElementById("toggle-ingredients").addEventListener("click", function() {
    const ingredientsList = document.getElementById("ingredients-list");
    if (ingredientsList.classList.contains("hidden")) {
        ingredientsList.classList.remove("hidden");
        this.textContent = "Hide Ingredients";
    } else {
        ingredientsList.classList.add("hidden");
        this.textContent = "Show Ingredients";
    }
});

const steps = document.querySelectorAll("#steps-list li");
let currentStep = 0;

document.getElementById("start-cooking").addEventListener("click", function() {
    highlightStep(currentStep);
});

function highlightStep(step) {
    if (step >= steps.length) return;
    steps.forEach((s, index) => s.classList.remove("active"));
    steps[step].classList.add("active");

    const progress = (step + 1) / steps.length * 100;
    document.getElementById("progress").style.width = progress + "%";

    currentStep++;
}

steps.forEach((step, index) => {
    step.addEventListener("click", function() {
        highlightStep(index);
    });
});

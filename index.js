const button = document.getElementById("button");
const label = document.getElementById("label");
const input = document.getElementById("input");
const loadingBar = document.getElementById("loadingBar");
const loadingContainer = document.getElementById("loadingContainer");
const explosion = document.getElementById("explosion");
const explosionSound = document.getElementById("explosionSound");

const loadingSteps = [
    "Reading your mind...",
    "Analyzing brain patterns...",
    "Connecting to your brain via Bluetooth...",
    "Calculating 3982904823498... possible combinations...",
];

button.onclick = function () {
    if (input.value.trim() === "") {
        return; // Do nothing if input is empty
    }

    label.textContent = "";
    explosion.style.display = "none";
    loadingContainer.style.display = "block";
    loadingBar.style.width = "0%";

    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 25;
        loadingBar.style.width = `${progress}%`;
    }, 2000);

    loadingSteps.forEach((text, index) => {
        setTimeout(() => {
            label.textContent = text;
        }, index * 2000);
    });

    // Show explosion + sound + message
    setTimeout(() => {
        loadingContainer.style.display = "none";
        explosion.style.display = "block";
        explosionSound.currentTime = 0;
        explosionSound.play();
        label.textContent = `You were thinking of NUMBER ${input.value}!!! 🤯😱`;

        setTimeout(() => {
            explosion.style.display = "none";
        }, 1000);

        clearInterval(progressInterval);
    }, 8000);
};
    

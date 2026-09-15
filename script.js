const container = document.getElementById("_container");

const greenColorCodes = [
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353",
    "#7CFC00",
    "#5DFC0A",
    "#4CBB17",
    "#4AC948",
    "#00EE00",
    "#33FF33",
    "#00C957"
];

const numberOfSquares = 120;

for (let i = 0; i < numberOfSquares; i++) {
    const activity = document.createElement("div");
    activity.classList.add("activity");

    activity.addEventListener("mouseover", () => {
        addColor(activity);
    });

    activity.addEventListener("mouseout", () => {
        removeColor(activity);
    });

    container.appendChild(activity);
}

function addColor(element) {
    const color = getRandomGreenColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = "#21262d";
    element.style.boxShadow = "0 0 2px rgba(0, 0, 0, 0.5)";
}

function getRandomGreenColor() {
    return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}

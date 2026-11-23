// Change the aquarium water color
function changeWater() {
    document.getElementById("aquarium").style.backgroundColor = "mediumpurple";
    document.getElementById("message").textContent = "The water changed color!";
}

// Make the fish bigger
function resizeFish() {
    document.getElementById("fish").style.transform = "scale(1.4)";
    document.getElementById("message").textContent = "Your fish is growing!";
}

// Rotate the fish
function rotateFish() {
    document.getElementById("fish").style.transform = "rotate(180deg)";
    document.getElementById("message").textContent = "Your fish is turning!";
}

// Reveal the octopus
function showCreature() {
    document.getElementById("octopus").style.display = "inline";
    document.getElementById("message").textContent = "Surprise! You found an octopus!";
}

// Hide the octopus
function hideCreature() {
    document.getElementById("octopus").style.display = "none";
    document.getElementById("message").textContent = "The octopus is hiding!";
}

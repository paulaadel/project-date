const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    if (noButton.style.position !== "absolute") {
        const rect = noButton.getBoundingClientRect();
        noButton.style.position = "absolute";
        noButton.style.left = rect.left + "px";
        noButton.style.top = rect.top + "px";
        noButton.style.margin = "0";
        // Force reflow
        noButton.offsetHeight;
    }
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    noButton.style.display = "none";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";

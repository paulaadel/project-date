const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

let yesScale = 1;
let noScale = 1;
let noOpacity = 1;

const moveNoButton = () => {
    if (noButton.style.position !== "absolute") {
        const rect = noButton.getBoundingClientRect();
        noButton.style.position = "absolute";
        noButton.style.left = rect.left + "px";
        noButton.style.top = rect.top + "px";
        noButton.style.margin = "0";
        noButton.offsetHeight;
    }
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";

    yesScale += 0.15;
    yesButton.style.transform = `scale(${yesScale})`;

    noScale -= 0.1;
    noOpacity -= 0.1;

    if (noScale <= 0 || noOpacity <= 0) {
        noButton.style.display = "none";
    } else {
        noButton.style.transform = `scale(${noScale})`;
        noButton.style.opacity = noOpacity;
    }
};

noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});
noButton.addEventListener("click", moveNoButton);

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    noButton.style.display = "none";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.style.display = "none";

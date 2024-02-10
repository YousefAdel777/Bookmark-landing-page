let menu = document.querySelector("header nav");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");
let tabs = document.querySelectorAll(".tabs li");
let tabsContent = document.querySelectorAll(".content > *");
let questions = document.querySelectorAll(".question");
let emailInput = document.getElementById("email");

menuIcon.addEventListener("click", () => {
    menu.classList.remove("-translate-y-full");
    menuIcon.classList.add("hidden");
    document.body.classList.add("overflow-hidden");
});

closeIcon.addEventListener("click", () => {
    menu.classList.add("-translate-y-full");
    menuIcon.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
});

tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        tabs.forEach((tab) => tab.classList.remove("active"));
        this.classList.add("active");
        tabsContent.forEach((content) => content.classList.add("hidden"));
        document.querySelector(this.dataset.content).classList.remove("hidden");
        document.querySelector(this.dataset.content).classList.add("flex");
    });
});

questions.forEach((question) => {
    question.addEventListener("click", function () {
        questions.forEach((q) => q.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelector("form").addEventListener("submit", (event) => {
    removeError();
    let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/ig;
    if (!regex.test(emailInput.value)) {
        event.preventDefault();
        let errorMessage = document.createElement("p");
        errorMessage.className = "error";
        errorMessage.appendChild(document.createTextNode("Whoops, make sure it's an email"));
        document.getElementById("error").classList.remove("hidden");
        emailInput.classList.add("error");
        emailInput.after(errorMessage);
    }
});

emailInput.addEventListener("focus", removeError);

function removeError () {
    let errorMessage = document.querySelector("p.error");
    if (errorMessage) {
        errorMessage.remove();
    }
    emailInput.classList.remove("error");
    document.getElementById("error").classList.add("hidden");
}
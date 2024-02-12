import Hero from "./components/Hero.js";
import CardsSection from "./components/CardsSection.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        Hero(),
        CardsSection([
            {
                title: "Supervisor",
                content: "Monitors activity to identify project roadblocks",
                icon: "./images/icon-supervisor.svg",
                color: "var(--color-cyan)"
            },
            {
                title: "Team Builder",
                content: "Scans our talent network to create the optimal team for your project",
                icon: "./images/icon-team-builder.svg",
                color: "var(--color-red)"
            },
            {
                title: "Karma",
                content: "Regularly evaluates our talent to ensure quality",
                icon: "./images/icon-karma.svg",
                color: "var(--color-orange)"
            },
            {
                title: "Calculator",
                content: "Uses data from past projects to provide better delivery estimates",
                icon: "./images/icon-calculator.svg",
                color: "var(--color-blue)"
            }
        ])
    );    
});

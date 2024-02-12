export default function Hero() {
    const COMPONENT_NAME = "hero";
    const $hero = document.createElement("div"),
        $h1 = document.createElement("h1"),
        $h2 = document.createElement("h2"),
        $content = document.createElement("p");
    $hero.classList.add(COMPONENT_NAME);
    $h1.classList.add(COMPONENT_NAME + "__h1");
    $h2.classList.add(COMPONENT_NAME + "__h2");
    $content.classList.add(COMPONENT_NAME + "__content");
    $h1.textContent = "Reliable, efficient delivery";
    $h2.textContent = "Powered by Technology";
    $content.textContent = "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful";
    $hero.append(
        $h1,
        $h2,
        $content
    );
    return $hero;
};

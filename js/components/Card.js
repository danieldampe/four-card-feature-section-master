export default function Card({title, content, icon, color}) {
    const COMPONENT_NAME = "card";
    const $card = document.createElement("div"),
        $title = document.createElement("div"),
        $content = document.createElement("p"),
        $icon = document.createElement("img");
    $card.classList.add(COMPONENT_NAME);
    $title.classList.add(COMPONENT_NAME + "__title");
    $content.classList.add(COMPONENT_NAME + "__content");
    $icon.classList.add(COMPONENT_NAME + "__icon");
    $title.textContent = title;
    $content.textContent = content;
    $icon.src = icon;
    $icon.alt = title + " " + "icon";
    $card.style.setProperty("--border-top-color", color);
    $card.append($title, $content, $icon);
    return $card;
};

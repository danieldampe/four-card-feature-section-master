import Card from "./Card.js"
export default function CardsSection(arr) {
    const $section = document.createElement("div"),
        $fragment = document.createDocumentFragment();
    $section.classList.add("cards-section");
    arr.forEach((elm, index) => index < 4 && $fragment.append(Card(elm)));
    $section.append($fragment);
    return $section;
};

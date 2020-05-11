const name = "Maciek";

console.log(`Witaj ${name}!`);

const articleParagraph = document.querySelector(".article__text--js");

if (articleParagraph) {
  articleParagraph.innerHTML =
    "Ta część artykułu została zmodyfikowana z użyciem JavaScript.";
}

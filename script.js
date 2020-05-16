const articleParagraph = document.querySelector(".article__text--js");

if (articleParagraph) {
  articleParagraph.innerHTML =
    "Ta część artykułu została zmodyfikowana z użyciem JavaScript.";
}

const name = "Maciej";
const age = 27;

function greet(userName, userAge) {
  console.log(`Witaj ${userName}! Twój wiek to: ${userAge}.`);
}

const user = {
  name: "Karol",
  age: 37,
  greet() {
    console.log(`Cześć ${this.name}! Twój wiek to: ${this.age}.`);
  },
};

greet(name, age);
user.greet();

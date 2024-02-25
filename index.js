// import "./styles.css";

const answers = [
  "да",
  "нет",
  "возможно",
  "может быть",
  "точно нет",
  "точно да",
  "конечно",
  "сложно ответить",
  "вселенная подскажет",
];

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    const ball = document.querySelector('.ball');

    const randomIndex = Math.floor(Math.random() * answers.length);
    ball.innerHTML = '';
    ball.insertAdjacentHTML('beforeend', `<p>${answers[randomIndex]}</p>`)

})

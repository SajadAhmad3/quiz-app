const quizDB= [{
    question: "Q1: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a 4"
},
{
    question: "Q2: What is the full form of CSS?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a1"
},
{
    question: "Q3: What is the full form of HTTP?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a2"
},
{
    question: "Q4: What is the full form of JS?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a4"
},
{
    question: "Q5: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a3"
},
{
    question: "Q6: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a2"
},
{
    question: "Q7: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a2"
},
{
    question: "Q8: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a1"
},
{
    question: "Q9: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a3"
},
{
    question: "Q10: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"High Text Markup Language",
    d:"HyperText Markup Language",
    ans:"a1"
}];

const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')

let qCount = 0;
let score = 0;
function loadQuestion(){

    const qLIST =  quizDB[qCount]
    question.innerHTML  = qLIST.question;
    opt1.innerHTML = qLIST.a;
    opt2.innerHTML = qLIST.b;
    opt3.innerHTML = qLIST.c;
    opt4.innerHTML = qLIST.d;
}

loadQuestion();

function  getCheckAnswer(){
    let answer;
    answers.forEach((curAns) => {
        if(curAns.checked){
            answer = curAns.id;
        }
    });
    return answer;  
};

function deselectAll(){
    answers.forEach((curAns) => curAns.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer =  getCheckAnswer();
    if(checkedAnswer === quizDB[qCount].ans){
        score++;
    };

    qCount++;

    deselectAll();
    if(qCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> Your Score ${score}/${quizDB.length}</h3>
        <button class="btn" onclick = "location.reload()"> Play Again</button>
         `;

         showScore.classList.remove('showArea')

    }
});
let quizNum = Math.floor((Math.random()* 10) +1);
console.log(quizNum);

let inputNum = prompt('Schätzen Sie die Zahl zwischen 1 und 10');
if(quizNum == inputNum) {
    document.querySelector('#result').innerText = (`Yeah, du liegst richtig, die Nummer lautet ${quizNum}`);   
}else {
    document.querySelector('#result').innerText = (`Sorry, du hast verloren. Die Nummer lautet ${quizNum}`);
}
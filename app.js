let randomNumber = Math.round(Math.random()*11);
let userNumber = prompt("Enter a number between 1 to 10");
if (randomNumber == userNumber) {
    alert("Good Work")
}else{
    alert('Not Matched');
}
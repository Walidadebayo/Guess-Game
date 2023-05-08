function myFunction(){
    var randomNum = Math.floor(Math.random() * 5 + 1);

    document.getElementById("gue").innerHTML = randomNum;

    var guess;
    guess = document.getElementById("inpu").value;

    if (guess != randomNum) {
        alert("Your Guess is Wrong. You Lose😥😪😓!");
    } else {
        alert("Your Guess is Right. You Win😂🤣😅!");
}
}
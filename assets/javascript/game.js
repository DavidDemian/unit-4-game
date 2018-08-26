$(document).ready(function () {


    // generate a target value for user to hit 

    var Random = Math.floor(Math.random() * 102 + 19)
    console.log(Random)
    $('#target').text(Random);

    var GeneratedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#Wins').text(wins);
    $('#Losses').text(losses);


    //resets the game
function reset(){
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $('#target').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('#Current').text(total);
    } 

    // if current score eguals the target value, user's score increments by 1,else, user loses score increments by 1
    function loser() {
        alert("You lose!!");
        losses++;
        $('#Losses').text(losses);
        reset();
    }

    function winner() {
        alert("You won!!!");
        wins++;
        $('#Wins').text(wins);
        reset();
    }
    // create 4 crystals with random values for each 
    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 11 + 1);
            GeneratedNumbers.push(num);
        }
        console.log(GeneratedNumbers)
    }

    fourRandomNumbers();

    $('#j1').on('click', function () {
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $('#Current').text(total);


        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    })

    $('#j2').on('click', function () {
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $('#Current').text(total);

        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    })

    $('#j3').on('click', function () {
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $('#Current').text(total);


        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    })

    $('#j4').on('click', function () {
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('#Current').text(total);


        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    });
});
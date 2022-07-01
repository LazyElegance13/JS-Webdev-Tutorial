let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];
let gamePattern = [];

let started = false;

let level = 0;

$(document).keydown(function(event) {
    userKey = event.key;
    if (!started) {
        if (userKey == 'a') {
            $(this).removeClass('game-over');
            nextSequence(); 
            started = true;
        } 
    }
});

$('.btn').click(function () {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animateClick(userChosenColour);

    checkAnswer(userClickedPattern.indexOf(userChosenColour));

});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level '+ level);
    
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    animateClick(randomChosenColour);
    playSound(randomChosenColour);
}

function playSound(name) {
    let audio = new Audio('sounds/'+ name + '.mp3');
    audio.play();
}

function animateClick(colour) {
    // $('#'+ id).fadeIn(100).fadeOut(100).fadeIn(100);
    $('#'+colour).addClass('pressed');
    setTimeout(function () {
        $('#' + colour).removeClass('pressed');
    }, 100)
}

function gameOver() {
    started = false;
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press A key to Restart')
    playSound('wrong');
    setTimeout(function() {
        $('body').removeClass('game-over');         
    }, 200)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('Success!');
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    } else {
        console.log('Wrong');
        gameOver();

        startOver();
    }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}
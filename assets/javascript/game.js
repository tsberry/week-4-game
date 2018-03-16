var target = 0;
var score = 0;
var score1 = 1;
var score2 = 2;
var score3 = 3;
var score4 = 4;
var wins = 0;
var losses = 0;

function update() {
    var val = $(this).val();
    score += parseInt(val);
    console.log($(this).val());
    console.log(score);
    $("#score").text(score);
    $(this).children(":odd").attr("style", "visibility:show");

    if (score === target) {
        wins++;
        start();
    }
    if (score > target) {
        losses++;
        start();
    }
}

function start() {
    score = 0;
    target = 19 + Math.floor(Math.random() * 102);
    score1 = 1 + Math.floor(Math.random() * 12);
    score2 = 1 + Math.floor(Math.random() * 12);
    score3 = 1 + Math.floor(Math.random() * 12);
    score4 = 1 + Math.floor(Math.random() * 12);
    $("#c1").val(score1);
    $("#c2").val(score2);
    $("#c3").val(score3);
    $("#c4").val(score4);

    $("#target").text(target);
    $("#score").text(score);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score1").text(score1);
    $("#score2").text(score2);
    $("#score3").text(score3);
    $("#score4").text(score4);
    $("#score1").attr("style", "visibility:hidden");
    $("#score2").attr("style", "visibility:hidden");
    $("#score3").attr("style", "visibility:hidden");
    $("#score4").attr("style", "visibility:hidden");
}

start();
$(".scorebox").on("click", update);
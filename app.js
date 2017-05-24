function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for(var i =0; i< choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      quess("btn" + i, choices[i]);

    }
  }
};

function guess(id, guess){
  var button = document.getElementById(id);
  button.onclick = function(){
    quiz.guess(guess);
    populate();
  }
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        elemnt.innerHTML = gameOverHtml;
}


var questions = [
  new Questions("adsfasdfsadf?", ["heel", "b", "c", "d"], "c"),
  new Questions("adsfasdfsadf?", ["heel", "b", "c", "d"], "c"),
  new Questions("adsfasdfsadf?", ["heel", "b", "c", "d"], "c"),
  new Questions("adsfasdfsadf?", ["heel", "b", "c", "d"], "c"),
  new Questions("adsfasdfsadf?", ["heel", "b", "c", "d"], "c"),
];

var quiz = new Quiz(questions);

populate();

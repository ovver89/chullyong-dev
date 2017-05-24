function populate(){
  if(quiz.isEnded()) {
    //showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
  }
}

var questions = [
  new Questions("");
  new Questions("");
  new Questions("");
  new Questions("");
  new Questions("");
];

var quiz = new Quiz(questions);

populate();

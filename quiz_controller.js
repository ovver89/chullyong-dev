function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = funtion() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = funtion(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
  his.questionIndex++;
}

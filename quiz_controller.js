function Quiz(questions) {
  this.score = 0;
  this.questions: questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = funtion() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = funtion() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = funtion(answer) {
  this.questionIndex++;

  if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
}

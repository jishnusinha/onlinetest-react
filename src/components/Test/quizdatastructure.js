import quiz from "./../../data/quiz.json";
const quizArr = [];

class quizdatastructure {
  quizfunc = () => {
    alert("quiz dtstructure called");

    for (let x of quiz) {
      let singlequizdata = {
        index: x.id,
        question: x.question,
        answerSelectedindex: null,
        correctAnswer: x.correct_answer_index,
        savedforlater: false,
        marked: false,
        attempted: false,
        answer: x.answer,
      };
      quizArr.push(singlequizdata);
    }

    return quizArr;
  };
}
export default quizdatastructure;

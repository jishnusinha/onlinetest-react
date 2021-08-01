import { Fragment, useState, useEffect } from "react";

import Classes from "./Test.module.css";
import quiz from "./../../data/quiz.json";
import RightPanel from "./RightPanel";
import BottomPanel from "./BottomPanel";
import LeftPanel from "./LeftPanel";

const TestSection = (props) => {
  let currentquestionState = {
    index: 0,
    answerSelectedindex: null,
    correctAnswer: null,
    savedforlater: false,
    marked: false,
    attempted: false,
    answer: [],
  };
  const quizfunc = () => {
    //alert("quiz dtstructure called");
    let quizArr = [];
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
  const [currentquestionindex, setcurrentquestionindex] = useState(1);
  const [questionState, setquestionState] = useState(currentquestionState);
  const [quizstate, setQuizstate] = useState(quizfunc);

  useEffect(() => {
    setQuizstate(quizfunc);
  }, []);

  const nextQuestion = () => {
    quizStatetracker(questionState);
    setcurrentquestionindex(currentquestionindex + 1);
  };

  const mark_and_nextQuestion = () => {
    let qState = questionState;
    qState.marked = true;
    quizStatetracker(qState);
    setcurrentquestionindex(currentquestionindex + 1);
  };

  const clearresp = () => {
    let qState = { ...questionState, answerSelectedindex: null };
    setquestionState(qState);
    quizStatetracker(qState);
    setcurrentquestionindex(currentquestionindex + 1);
  };

  const selectQuestion = (i) => {
    setcurrentquestionindex(i);
  };

  const answerselect = (ansIndex) => {
    let qState = questionState;
    qState.answerSelectedindex = ansIndex;
    setquestionState(qState);
  };

  const updatequestionState = (value) => {
    setquestionState(value);
  };

  const quizStatetracker = (quizobj) => {
    let { index } = quizobj;
    let quizStatusarr = quizstate;
    quizStatusarr[index - 1] = quizobj;
    setQuizstate(quizStatusarr);
  };

  return (
    <Fragment>
      <div className={Classes.wrapper}>
        <LeftPanel currentquestionindex={currentquestionindex} questionState={quizstate[currentquestionindex - 1]} updatequestionState={updatequestionState} answerselect={answerselect} quizStatetracker={quizStatetracker} answerSelectedindex={questionState.answerSelectedindex} />
        <div className={Classes.rightpanel}>
          <RightPanel currentindex={currentquestionindex} selectQuestion={selectQuestion} quizstate={quizstate} />
        </div>
        <BottomPanel nextQuestion={nextQuestion} questionState={quizstate[currentquestionindex - 1]} mark_and_nextQuestion={mark_and_nextQuestion} clearresp={clearresp} />
      </div>
    </Fragment>
  );
};

export default TestSection;

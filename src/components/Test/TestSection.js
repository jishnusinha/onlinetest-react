import { Fragment, useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
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
  };

  const [currentquestionindex, setcurrentquestionindex] = useState(0);
  const [questionState, setquestionState] = useState(currentquestionState);
  const [quizstate, setQuizstate] = useState([]);
  useEffect(() => {
    let quizStatusarr = [];
    for (let x of quiz) {
      quizStatusarr.push(x);
    }
    setQuizstate(quizStatusarr);
  }, []);
  const nextQuestion = () => {
    quizStatetracker(questionState);
    setcurrentquestionindex(currentquestionindex + 1);
    let { index } = questionState;

    setquestionState({ ...questionState, index: index + 1 });
  };

  const selectQuestion = (i) => {
    setcurrentquestionindex(i);
    let { index } = questionState;
    setquestionState({ ...questionState, index: i - 1 });
  };

  const answerselect = (ansIndex) => {
    let { answerSelectedindex } = questionState;
    setquestionState({ ...questionState, answerSelectedindex: ansIndex });
    //quizStatetracker(questionState);
    console.log(questionState);
  };

  const updatequestionState = (value) => {
    setquestionState(value);
    console.log(value);
  };

  const quizStatetracker = (quizobj) => {
    let { index } = quizobj;
    let quizStatusarr = quizstate;
    quizStatusarr[index] = quizobj;
    setQuizstate(quizStatusarr);
  };

  return (
    <Fragment>
      <div className={Classes.wrapper}>
        <LeftPanel currentquestionindex={currentquestionindex} quiz={quiz} questionState={questionState} updatequestionState={updatequestionState} answerselect={answerselect} quizStatusarr={quizstate} />
        <div className={Classes.rightpanel}>
          <RightPanel quiz={quiz} currentindex={currentquestionindex} selectQuestion={selectQuestion} questionState={questionState} />
        </div>
        <BottomPanel nextQuestion={nextQuestion} />
      </div>
    </Fragment>
  );
};

export default TestSection;

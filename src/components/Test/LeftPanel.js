import { Fragment, useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Classes from "./Test.module.css";

const LeftPanel = (props) => {
  const { currentquestionindex, quiz, answerselect, questionState, updatequestionState, quizStatusarr } = props;
  const [selectedanswer, setselectedanswer] = useState(null);
  const setanswer = (i) => {
    answerselect(i);
    setselectedanswer(i);
  };
  useEffect(() => {
    if (questionState.answerSelectedindex === null) {
      setselectedanswer(null);
    } else {
      setselectedanswer(quizStatusarr[currentquestionindex].answerSelectedindex);
    }

    //setselectedanswer(null);
    let { attempted } = questionState;
    updatequestionState({ ...questionState, attempted: true });
  }, [questionState.index, questionState.answerSelectedindex]);

  const options = ["A", "B", "C", "D"];
  const option = quiz[currentquestionindex].answer.map((x, index) => {
    return (
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div style={{ border: "1px solid black", padding: "5px" }}>
          <p>
            <b>{options[index]} . </b>
          </p>
        </div>

        <Button className={selectedanswer !== null && selectedanswer == index ? "button4" : "button2"} func={() => setanswer(index)}>
          {x}{" "}
        </Button>
      </div>
    );
  });
  return (
    <Fragment>
      <div className={Classes.leftpanel}>
        <h5>{quiz[0].question} </h5>

        {option}
      </div>
    </Fragment>
  );
};

export default LeftPanel;

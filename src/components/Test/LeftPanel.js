import { Fragment, useState, useEffect } from "react";

import Button from "../UI/Button";
import Classes from "./Test.module.css";
const LeftPanel = (props) => {
  const { currentquestionindex, answerselect, questionState, updatequestionState, quizStatetracker } = props;
  const [selectedanswer, setselectedanswer] = useState(null);

  const setanswer = (i) => {
    answerselect(i);
    setselectedanswer(i);
  };

  useEffect(() => {
    setselectedanswer(questionState.answerSelectedindex);
    quizStatetracker({ ...questionState, attempted: true });

    updatequestionState({ ...questionState, attempted: true });
  }, [currentquestionindex]);

  const options = ["A", "B", "C", "D"];
  const option = questionState.answer.map((x, index) => {
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
        <h5>{questionState.question} </h5>

        {option}
      </div>
    </Fragment>
  );
};

export default LeftPanel;

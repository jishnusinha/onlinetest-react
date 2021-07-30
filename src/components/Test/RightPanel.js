import { Fragment, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Classes from "./Test.module.css";

const RightPanel = (props) => {
  const { quiz, currentindex, selectQuestion } = props;
  console.log(currentindex);

  return (
    <Fragment>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {quiz.map((x, index) => {
          return (
            <Button className={currentindex == index ? "smallbtn button3" : "smallbtn button1"} func={() => selectQuestion(index)}>
              {index + 1}{" "}
            </Button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default RightPanel;

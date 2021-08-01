import { Fragment, useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Classes from "./Test.module.css";
import Status from "./../../assets/Status.png";

const RightPanel = (props) => {
  const { currentindex, selectQuestion, quizstate } = props;

  console.log(currentindex);
  const btnclass = (index) => {
    console.log(quizstate);
    let q = quizstate[index];
    if (q.attempted) {
      if (q.answerSelectedindex === null) {
        if (q.marked) {
          return "button6";
        } else {
          return "button3";
        }
      } else {
        if (q.marked) {
          return "button7";
        }

        return "button";
      }
    }

    if (!q.attempted) {
      return "button1";
    }
  };
  return (
    <Fragment>
      <img src={Status} style={{ width: "100%" }} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {quizstate.map((x, index) => {
          return (
            <Button className={currentindex == index + 1 ? `semiroundeddbtn  ${btnclass(index)}` : `smallbtn ${btnclass(index)}`} func={() => selectQuestion(index + 1)}>
              {index + 1}{" "}
            </Button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default RightPanel;

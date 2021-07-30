import { Fragment, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Classes from "./Test.module.css";

const BottomPanel = (props) => {
  const { quiz, currentindex, nextQuestion } = props;

  return (
    <Fragment>
      <div className={Classes.bottompanel}>
        <div style={{ float: "left", display: "flex" }}>
          <Button className={"button5"}>Mark for Review and next </Button>
          <Button className={"button5"}> Clear Response </Button>
        </div>
        <div style={{ float: "right" }}>
          <Button className={"button"} func={nextQuestion}>
            Save and Next{" "}
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomPanel;

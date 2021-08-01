import { Fragment, useState } from "react";

import Button from "../UI/Button";
import Classes from "./Test.module.css";

const BottomPanel = (props) => {
  const { nextQuestion, mark_and_nextQuestion, clearresp } = props;

  return (
    <Fragment>
      <div className={Classes.bottompanel}>
        <div style={{ float: "left", display: "flex" }}>
          <Button className={"button5"} func={mark_and_nextQuestion}>
            Mark for Review and next{" "}
          </Button>
          <Button className={"button5"} func={clearresp}>
            {" "}
            Clear Response and Next{" "}
          </Button>
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

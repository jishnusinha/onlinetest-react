import { useReducer } from "react";

import CartContext from "./cart-context";
import QuizContext from "./quiz-context";

const defaultQuizState = {
  currentQuestionindex: 0,
  quizArr: [],
};

const quizReducer = (state, action) => {
  if (action.type === "CHANGE_QUESTION") {
    return {
      currentQuestionindex: 0,
      quizArr: [],
    };
  }
  if (action.type === "UPDATE_QUESTION_STATE") {
    return {
      currentQuestionindex: 0,
      quizArr: [],
    };
  }

  return defaultQuizState;
};

const CartProvider = (props) => {
  const [quizState, dispatchQuizAction] = useReducer(cartReducer, defaultQuizState);

  const changeQuestionHandler = (quizindex) => {
    dispatchQuizAction({ type: "CHANGE_QUESTION", quizindex: quizindex });
  };

  const updateQuizstateHandler = (quizindex, currentQuestionstate) => {
    dispatchQuizAction({ type: "UPDATE_QUESTION_STATE", quizindex: quizindex, currentQuestionstate: currentQuestionstate });
  };

  const quizContext = {
    currentQuestionindex: quizState.currentQuestionindex,
    quizArr: quizState.quizArr,
    updateQuizstate: updateQuizstateHandler,
    changeQuestion: changeQuestionHandler,
  };

  return <QuizContext.Provider value={quizContext}>{props.children}</QuizContext.Provider>;
};

export default CartProvider;

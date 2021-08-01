import React from "react";

const CartContext = React.createContext({
  currentQuestionindex: 0,
  quizArr: [],
  updateQuizstate: (quizindex, currentQuestionstate) => {},
  changeQuestion: (quizindex) => {},
});

export default CartContext;

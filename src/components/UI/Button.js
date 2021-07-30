import classes from "./Button.module.css";
const Button = (props) => {
  //const externalclass = classes[props.className];
  let externalclass = [];
  // console.log(props.className.split(" "));
  for (let x of props.className.split(" ")) {
    externalclass.push(classes[x]);
  }
  externalclass = externalclass.toString().replace(",", " ");

  return (
    <button className={`${classes.button} ${externalclass}`} onClick={props.func}>
      {props.children}
    </button>
  );
};

export default Button;

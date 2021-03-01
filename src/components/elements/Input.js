import "../../stylesheets/elements/_inputs.scss";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      className={`input input__${props.className}`}
      type={props.text}
      id={props.id}
      name={props.name}
    ></input>
  );
};

export default Input;

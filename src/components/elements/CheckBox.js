import "../../stylesheets/elements/_checkBox.scss";

const CheckBox = (props) => {
  return (
    <label htmlFor={props.label} className="checkBox">
      <input
        id={props.id}
        type="checkbox"
        value={props.value}
        name={props.name}
        className="checkBoxInput"
      />
      <span class="checkBox__show checkBox__show--checkBox"></span>
      <span className="checkBoxText">{props.content}</span>
    </label>
  );
};

export default CheckBox;

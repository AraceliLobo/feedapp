import "../../stylesheets/elements/_select.scss";

const Select = (props) => {
  return (
    <div>
      <label htmlFor={props.label} className="selectLabel">
        <input
          id={props.id}
          type="checkbox"
          value={props.value}
          name={props.name}
          className="selectInput"
        />
        {props.content}
      </label>
    </div>
  );
};

export default Select;

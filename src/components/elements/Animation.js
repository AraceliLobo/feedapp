import "../../stylesheets/elements/_animation.scss";

const animationStyle = {
  width: "100px",
  height: "100px",
};

const Animation = (props) => {
  return (
    <lottie-player
      src={props.result}
      background="transparent"
      speed="1"
      style={animationStyle}
      autoplay
    ></lottie-player>
  );
};

export default Animation;

// URL FOR VERIFICATION FAILED: "https://assets1.lottiefiles.com/packages/lf20_xw6o0yii.json"

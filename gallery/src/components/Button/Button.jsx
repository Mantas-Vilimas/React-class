import "./Button.css";

const Button = ({ text, buttonInfo, onClick }) => {
  const handleClick = () => {
    onClick(buttonInfo);
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

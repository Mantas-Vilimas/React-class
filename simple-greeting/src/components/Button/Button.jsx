import "./Button.css";

const Button = ({ onClick }) => {
  const text = "Welcome";
  const handleClick = () => {
    onClick(text);
  };

  return (
    <section>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
    </section>
  );
};

export default Button;

const Input = ({ label, htmlFor, id, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input type="text" id={id} name={id} onChange={handleChange} />
    </div>
  );
};

export default Input;

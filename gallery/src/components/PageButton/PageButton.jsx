const PageButton = ({ label, isActive, onClick }) => {
  const handleClick = () => {
    if (isActive) {
      onClick(false);
    } else {
      onClick(true);
    }
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default PageButton;

const CustomButton = ({ key, disabled, onClick, className, title }) => {
  return (
    <button
      key={key}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
};

export default CustomButton;

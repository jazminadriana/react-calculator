import './Button.css'

function Button({ children, handleClick }) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '='); 
  };

  return (
    <button 
      type="button"
      className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()} 
      onClick={() => handleClick(children)}>
      {children}
    </button>
      );
}

export default Button;
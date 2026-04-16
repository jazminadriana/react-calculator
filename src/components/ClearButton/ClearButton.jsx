import './ClearButton.css';

const ClearButton = ({ children, handleClear }) => (
  <button 
    type="button"
    className='clear-button'
    onClick={handleClear}>
    {children}
  </button>
);

export default ClearButton;
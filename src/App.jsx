import './styles/App.css';
import Button from './components/Button/Button';
import Display from './components/Display/Display';
import ClearButton from './components/ClearButton/ClearButton';
import { useState } from 'react';
import { evaluateMath } from './logic/evaluateMath';

function App() {
  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput((prev) => prev + val);
  };

  const calculateResult = () => {
    const result = evaluateMath(input);
    setInput(result);
  };

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Display input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

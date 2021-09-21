import {useState} from 'react';

import './App.css';

function App() {
  const [ buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue': 'red';
  return (
    <div>
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      onClick={() => setButtonColor(newButtonColor)}
      disabled={disabled}
      >
         Change to {newButtonColor} 
      </button>

      <input 
      type='checkbox'
      onChange={(e) => setDisabled(e.target.checked)}
      defaultChecked={disabled}
      id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
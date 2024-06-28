import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [expr, setExpr] = useState('');
  const [history, setHistory] = useState({});
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (value) => {
    setExpr(expr + value);
  };

  const handleEqual = () => {
    try {
      const res = evaluate(expr);
      setHistory({ ...history, [expr]: res });
      setExpr(res.toString());
    } catch (error) {
      setExpr('Error');
    }
  };

  const handleClear = () => {
    setExpr('');
  };

  const handleToggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEqual();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          id="display"
          type="text"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <div className="grid grid-cols-7 gap-4">
          {['1', '2', '3', '+', '-', 'sin(', 'csc(', '4', '5', '6', '/', '*', 'cos(', 'sec(', '7', '8', '9', '(', ')', 'tan(', 'cot(', 'C', '0', '', '^', '='].map((value, index) => (
            <button
              key={index}
              onClick={value === '=' ? handleEqual : value === 'C' ? handleClear : () => handleClick(value)}
              className={`bg-gray-200 text-black p-4 rounded shadow hover:bg-gray-300 ${value === '=' ? 'col-span-2' : ''} ${value === '' ? 'bg-transparent' : ''}`}
            >
              {value}
            </button>
          ))}
        </div>
        <button
          onClick={handleToggleHistory}
          className="mt-4 bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-700"
        >
          History
        </button>
      </div>
      {showHistory && (
        <div className="bg-white mt-6 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-lg font-bold mb-4">History</h2>
          <table className="w-full text-left">
            <tbody>
              {Object.keys(history).reverse().map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>= {history[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;

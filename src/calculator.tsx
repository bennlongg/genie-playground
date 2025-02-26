import React, { useState } from 'react';

type ButtonType = 'digit' | 'operator' | 'function';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: ButtonType;
  wide?: boolean;
}

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [pendingOperation, setPendingOperation] = useState<string | null>(null);
  const [isNewInput, setIsNewInput] = useState(true);

  const handleDigit = (digit: string) => {
    if (isNewInput) {
      setDisplayValue(digit);
      setIsNewInput(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const handleOperation = (operation: string) => {
    const currentValue = parseFloat(displayValue);

    if (storedValue === null) {
      setStoredValue(currentValue);
    } else if (pendingOperation) {
      const result = calculate(storedValue, currentValue, pendingOperation);
      setDisplayValue(String(result));
      setStoredValue(result);
    }

    setPendingOperation(operation);
    setIsNewInput(true);
  };

  const handleEquals = () => {
    if (storedValue === null || pendingOperation === null) return;

    const currentValue = parseFloat(displayValue);
    const result = calculate(storedValue, currentValue, pendingOperation);
    
    setDisplayValue(String(result));
    setStoredValue(null);
    setPendingOperation(null);
    setIsNewInput(true);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setPendingOperation(null);
    setIsNewInput(true);
  };

  const handleDecimal = () => {
    if (isNewInput) {
      setDisplayValue('0.');
      setIsNewInput(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const calculate = (a: number, b: number, operation: string): number => {
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : NaN;
      default:
        return b;
    }
  };

  const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'digit', wide = false }) => {
    let backgroundColor = '#e0e0e0';
    let color = '#333';
    
    if (type === 'operator') {
      backgroundColor = '#f5923e';
      color = 'white';
    } else if (type === 'function') {
      backgroundColor = '#a5a5a5';
      color = 'white';
    }

    return (
      <button
        onClick={onClick}
        style={{
          width: wide ? 'calc(50% - 5px)' : 'calc(25% - 5px)',
          height: '60px',
          margin: '2.5px',
          border: 'none',
          borderRadius: '10px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: color,
          background: backgroundColor,
          boxShadow: `
            0px 3px 0px 0px rgba(0,0,0,0.2),
            inset 0px 1px 0px 0px rgba(255,255,255,0.5),
            inset 0px -1px 0px 0px rgba(0,0,0,0.1)
          `,
          position: 'relative',
          transition: 'all 0.1s',
          userSelect: 'none',
          cursor: 'pointer',
          '&:active': {
            boxShadow: `
              0px 1px 0px 0px rgba(0,0,0,0.2),
              inset 0px 1px 0px 0px rgba(255,255,255,0.5),
              inset 0px -1px 0px 0px rgba(0,0,0,0.1)
            `,
            transform: 'translateY(2px)',
          }
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div style={{
      width: '320px',
      padding: '20px',
      borderRadius: '20px',
      background: 'linear-gradient(145deg, #e6e6e6, #f5f5f5)',
      boxShadow: `
        20px 20px 60px #c9c9c9,
        -20px -20px 60px #ffffff,
        inset 0px 0px 10px rgba(0,0,0,0.05)
      `,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      margin: '0 auto',
    }}>
      <div style={{
        width: '100%',
        height: '80px',
        padding: '0 15px',
        borderRadius: '10px',
        background: '#ecf0f3',
        boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#333',
        overflow: 'hidden',
      }}>
        {displayValue}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
        <Button label="C" onClick={handleClear} type="function" />
        <Button label="±" onClick={() => setDisplayValue(String(-parseFloat(displayValue)))} type="function" />
        <Button label="%" onClick={() => setDisplayValue(String(parseFloat(displayValue) / 100))} type="function" />
        <Button label="÷" onClick={() => handleOperation('÷')} type="operator" />

        <Button label="7" onClick={() => handleDigit('7')} />
        <Button label="8" onClick={() => handleDigit('8')} />
        <Button label="9" onClick={() => handleDigit('9')} />
        <Button label="×" onClick={() => handleOperation('×')} type="operator" />

        <Button label="4" onClick={() => handleDigit('4')} />
        <Button label="5" onClick={() => handleDigit('5')} />
        <Button label="6" onClick={() => handleDigit('6')} />
        <Button label="-" onClick={() => handleOperation('-')} type="operator" />

        <Button label="1" onClick={() => handleDigit('1')} />
        <Button label="2" onClick={() => handleDigit('2')} />
        <Button label="3" onClick={() => handleDigit('3')} />
        <Button label="+" onClick={() => handleOperation('+')} type="operator" />

        <Button label="0" onClick={() => handleDigit('0')} wide />
        <Button label="." onClick={handleDecimal} />
        <Button label="=" onClick={handleEquals} type="operator" />
      </div>
    </div>
  );
};

export default Calculator;

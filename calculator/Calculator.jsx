import React, { useState } from 'react';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');
    const [pendingOperation, setPendingOperation] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);

    const handleButtonClick = (value) => {
        if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        } else if (value === '=') {
            handleEquals();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            updateDisplay(value);
        }
    };

    const updateDisplay = (value) => {
        setDisplayValue(displayValue + value);
    };

    const handleOperator = (operator) => {
        setPendingOperation(operator);
        setPreviousValue(displayValue);
        setDisplayValue('');
    };

    const handleEquals = () => {
        if (pendingOperation && previousValue !== null) {
            const result = eval(`${previousValue} ${pendingOperation} ${displayValue}`);
            setDisplayValue(result.toString());
            setPendingOperation(null);
            setPreviousValue(null);
        }
    };

    const clearDisplay = () => {
        setDisplayValue('');
        setPendingOperation(null);
        setPreviousValue(null);
    };

    return (
        <div style={styles.calculator}>
            <input type="text" value={displayValue} style={styles.display} disabled />
            <div style={styles.buttons}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '=', 'C'].map((button) => (
                    <button key={button} style={styles.button} onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

const styles = {
    calculator: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '300px',
        margin: '0 auto',
        marginTop: '100px',
    },
    display: {
        width: '100%',
        height: '50px',
        fontSize: '24px',
        textAlign: 'right',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    buttons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    },
    button: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '18px',
        padding: '15px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default Calculator;

import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Select from 'react-select';
import Result from './Result';

const CalculatorForm = (props) => {
	const [selectedOptionState, setSelectedOptionState] = useState({
		selectedOption: {
			value: '--Vyberte operaci--',
			label: '--Vyberte operaci--',
		},
	});
	const [resultState, setResultState] = useState({ result: null });

	const options = [
		{ value: 'ADD', label: 'Sčítání' },
		{ value: 'SUBTRACT', label: 'Odčítání' },
		{ value: 'MULTIPLY', label: 'Násobení' },
		{ value: 'DIVIDE', label: 'Dělení' },
	];

	let calculate = () => {
		const { x, y } = props;
		switch (selectedOptionState.selectedOptionState.value) {
			case 'ADD':
				return parseFloat(x) + parseFloat(y);
			case 'SUBTRACT':
				return parseFloat(x) - parseFloat(y);
			case 'MULTIPLY':
				return parseFloat(x) * parseFloat(y);
			case 'DIVIDE':
				return parseFloat(x) / parseFloat(y);
			default:
				return null; // Sem by to nikdy nemělo dojít.
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const result = calculate();
		setResultState({ result });
	};
	const handleChange = (selectedOptionState) => {
		setSelectedOptionState({ selectedOptionState });
	};
	return (
		<div>
			<form className="CalculatorForm" onSubmit={handleSubmit}>
				<NumberInput
					OnChange={props.xOnChange}
					name="x"
					label="První číslo:"
					value={props.x}
				/>
				<NumberInput
					OnChange={props.yOnChange}
					name="y"
					label="Druhé číslo:"
					value={props.y}
				/>
				<Select
					onChange={handleChange}
					value={selectedOptionState.value}
					options={options}
				/>
				<button type="submit">Spočítej</button>
			</form>
			<Result value={resultState.result} />
		</div>
	);
};

export default CalculatorForm;

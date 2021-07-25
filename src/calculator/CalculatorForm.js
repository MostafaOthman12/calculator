import React, { Component } from 'react';
import NumberInput from './NumberInput';
import Select from 'react-select';
import Result from './Result';

export default class CalculatorForm extends Component {
	state = {
		selectedOption: '--Vyberte operaci--',
		result: null,
	};
	options = [
		{ value: 'ADD', label: 'Sčítání' },
		{ value: 'SUBTRACT', label: 'Odčítání' },
		{ value: 'MULTIPLY', label: 'Násobení' },
		{ value: 'DIVIDE', label: 'Dělení' },
	];

	calculate = () => {
		const { x, y } = this.props;
		const { selectedOption } = this.state;

		switch (selectedOption.value) {
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

	handleSubmit = (event, result) => {
		event.preventDefault();
		result = this.calculate();
		this.setState({ result });
	};
	handleChange = (selectedOption) => {
		this.setState({ selectedOption }, () =>
			console.log(`Option selected:`, this.state.selectedOption),
		);
	};

	render() {
		return (
			<div>
				<form className="CalculatorForm" onSubmit={this.handleSubmit}>
					<NumberInput
						OnChange={this.props.xOnChange}
						name="x"
						label="První číslo:"
						value={this.props.x}
					/>
					<NumberInput
						OnChange={this.props.yOnChange}
						name="y"
						label="Druhé číslo:"
						value={this.props.y}
					/>
					<Select
						onChange={this.handleChange}
						value={this.state.selectedOption}
						options={this.options}
					/>
					<button type="submit">Spočítej</button>
				</form>
				<Result value={this.state.result} />
			</div>
		);
	}
}

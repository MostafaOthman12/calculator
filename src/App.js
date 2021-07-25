import React, { Component } from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import './App.css';

export default class App extends Component {
	state = {
		x: 0,
		y: 0,
		title: 'React kalkulačka',
	};

	inputXonchange = (event) => {
		this.setState({ x: event.target.value });
	};

	inputYonchange = (event) => {
		this.setState({ y: event.target.value });
	};

	render() {
		let { x, y, operation } = this.state;
		return (
			<div className="App">
				<h1>{this.state.title}</h1>
				<CalculatorForm
					onSubmit={this.handleSubmit}
					xOnChange={this.inputXonchange}
					yOnChange={this.inputYonchange}
					x={this.state.x}
					y={this.state.y}
				/>
			</div>
		);
	}
}

import React, { Component, useState } from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import './App.css';

const App = () => {
	const [titleState, setTitleState] = useState({ title: 'React kalkulačka' });
	const [xState, setXState] = useState({ x: 0 });
	const [yState, setyState] = useState({ y: 0 });

	const inputXonchange = (event) => {
		setXState({ x: event.target.value });
	};

	const inputYonchange = (event) => {
		setyState({ y: event.target.value });
	};

	return (
		<div className="App">
			<h1>{titleState}</h1>
			<CalculatorForm
				xOnChange={inputXonchange}
				yOnChange={inputYonchange}
				x={xState}
				y={yState}
			/>
		</div>
	);
};

export default App;

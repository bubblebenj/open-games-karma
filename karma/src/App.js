import React, { Component } from 'react';
import Game from './Game';
import './App.css';

class App extends Component {
	render() {
		let game = new Game();

		return (
			<div className="App">
				{game.render()}
			</div>
		);
	}
}

export default App;

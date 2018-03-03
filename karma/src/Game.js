import React, { Component } from 'react';
import Board from './Board';
import Hud from './Hud';

class Game extends Component {
	render() {
		let board = new Board(30, 20);
		let hud = new Hud();

		return (
			<div className="Game">
				{board.render()}
				{hud.render()}
			</div>
		);
	}
}

export default Game;

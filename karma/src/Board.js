import React, { Component } from 'react';
import Entity from './Entity';

class Board extends Component {

	constructor(x, y) {
		super();
		this.setSize(x, y);
	};

	render() {
		let entities = [];
		for (let i=0; i<this.x; i++) {
			for (let j=0; j<this.y; j++) {
				let entity = new Entity();
				entity.setPosition(i*20, j*20);
				entities.push(entity.render());
			}
		}

		return (
			<div className="Board">
				{entities}
			</div>
		);
	};

	setSize(x, y) {
		this.x = x;
		this.y = y;
	};
}

export default Board;
import React, { Component } from 'react';

const INFLUENCE_TYPE = {
	EARTH: 'EARTH',
	WIND: 'WIND',
	FIRE: 'FIRE',
	WATER: 'WATER',
	METAL: 'METAL',
	WOOD: 'WOOD'
};


class Entity extends Component {

	constructor() {
		super();
		// Coordinates
		this.x = 0;
		this.y = 0;

		this.influence = [
			{type: INFLUENCE_TYPE.FIRE, radius:2}
		]
	};

	render() {
		return (
			<div className="Entity" style={{left:this.x+'px', top:this.y+'px'}}>

			</div>
		);
	};

	setPosition(x, y) {
		this.x = x;
		this.y = y;
	};
}

export default Entity;
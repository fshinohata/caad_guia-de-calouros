import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<section className="Navbar">
					<div className="burger" onClick={this.props.onClickBurger}>
						<span className="burger-line"></span>
						<span className="burger-line"></span>
						<span className="burger-line"></span>
					</div>
				</section>
			</div>
		)
	}
}

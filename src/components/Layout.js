import React, { Component } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CenteredBackgroundImage from './CenteredBackgroundImage';

import logo from "../img/logo_caad.png";
import './Layout.scss';

export default class Layout extends Component {
	render() {
		return (
			<div id="outer-container" className="Layout">
				<CenteredBackgroundImage src={logo} />
				<Navbar />
				<Sidebar outerContainerId="outer-container" pageWrapId="main-container" />
				<main id="main-container" className="Layout__main">
					{this.props.children}
				</main>
			</div>
		)
	}
}

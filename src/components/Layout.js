import React, { Component } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CenteredBackgroundImage from './CenteredBackgroundImage';

import logo from "../img/logo_caad.png";
import './Layout.scss';

export default class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: false,
		};
	}

	setSidebarOpen(open) {
		this.setState({
			...this.state,
			sidebarOpen: open,
		})
	}

	toggleSidebar() {
		this.setSidebarOpen(!this.state.sidebarOpen);
	}

	render() {
		return (
			<div className="Layout">
				<CenteredBackgroundImage src={logo} />
				<Sidebar open={this.state.sidebarOpen} onSetOpen={(state) => this.setSidebarOpen(state)}>
				<Navbar onClickBurger={() => this.toggleSidebar()} />
					<main className="Layout__main">
						{this.props.children}
					</main>
				</Sidebar>
			</div>
		)
	}
}

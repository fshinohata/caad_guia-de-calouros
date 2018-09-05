import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/home/Home';

class App extends Component {
	constructor(props) {
		super(props);

		this.baseUrl = window.location.pathname;
	}

	render() {
		return (
			<BrowserRouter basename={this.baseUrl}>
				<Layout>
					<Route exact path="/" component={Home} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;

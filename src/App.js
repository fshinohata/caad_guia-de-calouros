import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import links from './links';

// import { AnimatedSwitch } from './components/Animations';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import FirstSteps from './pages/firstSteps/FirstSteps';

class App extends Component {
	render() {
		const basename = window.location.pathname;
		return (
			<Router basename={basename}>
				<Layout>
					{/*<AnimatedSwitch>*/}
					<Switch>
						<Route exact path={links.home} component={Home} />
						<Route exact path={links.primeirosPassos} component={FirstSteps} />
						<Route render={() => <div>Not Found</div>} />
					</Switch>
					{/*</AnimatedSwitch>*/}
				</Layout>
			</Router>
		);
	}
}

export default App;

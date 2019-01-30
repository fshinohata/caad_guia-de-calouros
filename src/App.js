import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import links from './links';

import Layout from './components/Layout';
import Home from './pages/home/Home';
import FirstSteps from './pages/firstSteps/FirstSteps';
import About from './pages/about/About';
import MapPoli from './pages/mapPoli/MapPoli';
import Dinf from './pages/dinf/Dinf';
import Ufpr from './pages/ufpr/Ufpr';
import Course from './pages/course/Course';

class App extends Component {
	render() {
		const basename = window.location.pathname;
		return (
			<Router basename={basename}>
				<Layout>
					<Switch>
						<Route exact path={links.home} component={Home} />
						<Route exact path={links.primeirosPassos} component={FirstSteps} />
						<Route exact path={links.sobre} component={About} />
						<Route exact path={links.mapa} component={MapPoli} />
						<Route exact path={links.dinf} component={Dinf} />
						<Route exact path={links.ufpr} component={Ufpr} />
						<Route exact path={links.curso} component={Course} />
						<Route render={() => <div>Not Found</div>} />
					</Switch>
				</Layout>
			</Router>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Switch, withRouter } from 'react-router-dom';
import './Animations.scss';


class Animate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		setTimeout(() => this.setState({ show: true }),10);
	}
	render() {
		const { "in": _in, key, timeout, classNames, unmountOnExit, onExited } = this.props;
		return (
			<CSSTransition in={_in || this.state.show} key={key} timeout={timeout || 5000} classNames={classNames} unmountOnExit={unmountOnExit || true} onExited={onExited}>
			{(state) => this.props.children}
			</CSSTransition>
		);
	}
}

export class AnimatedGroup extends Component {
	render() {
		const { className, component } = this.props;
		return (
			<TransitionGroup component={component} className={className}>
			{this.props.children}
			</TransitionGroup>
		);
	}
}

/*
class AnimatedSwitch extends Component {
	render() {
		const { location } = this.props;
		const key = location.pathname.split("/")[1] || "/";
		return (
			<AnimatedGroup component="main">
				<Fade key={key} unmountOnExit>
					<section className="position-relative">
						<Switch location={location}>
						{this.props.children}
						</Switch>
					</section>
				</Fade>
			</AnimatedGroup>
		);
	}
}

const animatedSwitch = withRouter(AnimatedSwitch);
export { animatedSwitch as AnimatedSwitch };
/**/

export class FadeInUp extends Component {
    render() {
    	const { "in": _in, key, timeout, unmountOnExit, onExited } = this.props;
        return (
            <Animate classNames="Animations__fade-in-up" in={_in} key={key} timeout={timeout} unmountOnExit={unmountOnExit} onExited={onExited}>
            {this.props.children}
            </Animate>
        );
    }
}

export class Fade extends Component {
    render() {
    	const { "in": _in, key, timeout, unmountOnExit, onExited } = this.props;
        return (
            <Animate classNames="Animations__fade" in={_in} key={key} timeout={timeout} unmountOnExit={unmountOnExit} onExited={onExited}>
            {this.props.children}
            </Animate>
        );
    }
}

export class StackUp extends Component {
    render() {
    	const { "in": _in, key, timeout, unmountOnExit, onExited } = this.props;
        return (
            <Animate classNames="Animations__stack-up" in={_in} key={key} timeout={timeout} unmountOnExit={unmountOnExit} onExited={onExited}>
            {this.props.children}
            </Animate>
        );
    }
}


import React, { Component } from 'react'
import './CenteredBackgroundImage.scss';

export default class CenteredBackgroundImage extends Component {
	render() {
		let { src } = this.props;
		return (
			<div className="CenteredBackgroundImage">
				<img src={src} alt="Logo do Centro Acadêmico" />
			</div>
		)
	}
}

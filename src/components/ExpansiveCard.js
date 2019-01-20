import React, { Component } from 'react';
import { Grid, Card } from "semantic-ui-react";

import './ExpansiveCard.scss';

class ExpansiveCard extends Component {
	constructor(props) {
		super(props);
		this.toggleContent = this.toggleContent.bind(this);
		this.state = {
			showContent: false,
		};
	}
	toggleContent() {
		this.setState({
			showContent: !this.state.showContent,
		});
	}
	render() {
		const { title, subtitle } = this.props;
		return (
			<Grid.Column className="ExpansiveCard">
            	<Card className="ExpansiveCard_Card" onClick={this.toggleContent}>
					<Card.Content>
						<Card.Header>{title}</Card.Header>
						<Card.Meta>
							<span className="date">{subtitle}</span>
						</Card.Meta>
						{
							this.state.showContent
							? this.props.children
							: null
						}
					</Card.Content>
            	</Card>
			</Grid.Column>
		);
	}
}

export default ExpansiveCard;
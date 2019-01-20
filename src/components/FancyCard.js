import React, { Component } from 'react';
import './FancyCard.scss';

import { Card, Image, Grid } from "semantic-ui-react";

class FancyCard extends Component {

	render() {
		const { image, title, subtitle, buttons } = this.props;
		return (
			<div className="FancyCard">
				<Grid.Column className="FancyCard_Col">
					<Card className="FancyCard_Card">
						{ image ? <Image src={image} className="FancyCard_Image" /> : null }
						<Card.Content>
							<Card.Header>{title}</Card.Header>
							<Card.Meta>
								<span className="date">{subtitle}</span>
							</Card.Meta>
							<Card.Description>{this.props.children}</Card.Description>
						</Card.Content>
						{
							buttons
							? <Card.Content extra>{buttons}</Card.Content>
							: null
						}
					</Card>
				</Grid.Column>
			</div>
		);
	}

}

export default FancyCard;
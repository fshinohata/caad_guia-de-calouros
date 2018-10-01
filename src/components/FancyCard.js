import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import './FancyCard.scss';

class FancyCard extends Component {
	renderImageIfNecessary(image) {
		if (image) {
			return <CardMedia image={image} className="FancyCard__CardMedia" />
		}
		return null;
	}
	render() {
		const { image, title, subtitle, buttons, xs, sm, md, lg } = this.props;
		return (
			<Col xs={xs || 12} sm={sm} md={md || 4} lg={lg} className="FancyCard">
            	<Card raised className="FancyCard__Card">
            		<CardActionArea className="FancyCard__CardActionArea">
	            		{this.renderImageIfNecessary(image)}
	            		<CardHeader title={title} subheader={subtitle} />
	            		<CardContent>
	            		{
	            			this.props.children
	            		}
	            		</CardContent>
            		</CardActionArea>
            		<CardActions className="FancyCard__CardActions">
            			{buttons}
            		</CardActions>
            	</Card>
			</Col>
		);
	}
}

export default FancyCard;
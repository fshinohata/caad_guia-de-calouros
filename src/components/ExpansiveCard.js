import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
		const { title, subtitle, xs, sm, md, lg } = this.props;
		return (
			<Col xs={xs || 12} sm={sm} md={md || 4} lg={lg} className="ExpansiveCard">
            	<Card raised className="ExpansiveCard__Card">
            		<CardActionArea className="ExpansiveCard__CardActionArea" onClick={this.toggleContent}>
	            		<CardHeader title={title} subheader={subtitle} />
	            		<CardContent>
	            		{
	            			this.state.showContent ?
	            				this.props.children :
	            				null
	            		}
	            		</CardContent>
            		</CardActionArea>
            	</Card>
			</Col>
		);
	}
}

export default ExpansiveCard;
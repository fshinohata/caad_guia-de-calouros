import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import ThinkingDude from '../../img/thinking_dude.jpg';
import './Home.scss';

const cards = [
	{ title: "HELLO", subtitle: "WORLD", content: ""}
];

const classes = {
	media: {
		backgroundSize: "contain",
	},
};

class Home extends Component {
    render() {
        return (
            <div className="Home">
            	<Container>
            		<Row>
            			<Col xs="12" md="4">
			            	<Card raised>
			            		<CardMedia image={ThinkingDude} classes={classes} className="Home__primeiros-passos__img" />
			            		<CardHeader title="HELLO" subheader="WORLD" />
			            		<CardContent>
			            			This is content
			            		</CardContent>
			            	</Card>
            			</Col>
            			<Col xs="12" md="4">
			            	<Card raised>
			            		<CardHeader title="HELLO" subheader="WORLD" />
			            		<CardContent>
			            			This is content
			            		</CardContent>
			            	</Card>
            			</Col>
            			<Col xs="12" md="4">
			            	<Card raised>
			            		<CardHeader title="HELLO" subheader="WORLD" />
			            		<CardContent>
			            			This is content
			            		</CardContent>
			            	</Card>
            			</Col>
            		</Row>
            	</Container>
            </div>
        );
    }
}

export default Home;

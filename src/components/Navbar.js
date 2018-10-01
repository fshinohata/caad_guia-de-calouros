import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.scss';

export default class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<AppBar position="fixed" className="Navbar__AppBar">
			        <Toolbar>
			        	<IconButton color="inherit" aria-label="Menu" className="Navbar__IconButton">
			        		<MenuIcon onClick={this.props.onClickBurger} />
			        	</IconButton>
		          		<Typography variant="title" color="inherit">
		          			<Link to="/">CAAD</Link>
		         		</Typography>
			        </Toolbar>
			      </AppBar>
			</div>
		)
	}
}

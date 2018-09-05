import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';

class InkeyLink extends Component {
    render() {
        return (
            <button style={{ position: "relative" }} {...this.props}>
            	<Ink />
            	{this.props.children}
            </button>
        );
    }
}

export default InkeyLink;

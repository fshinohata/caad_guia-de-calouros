import React, { Component } from 'react';
import "./Text.scss";

class Text extends Component {
    render() {
    	const { align } = this.props;
        return (
            <div className="Text" style={{ textAlign: align }}>{this.props.children}</div>
        );
    }
}

export default Text;

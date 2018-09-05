import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import './Sidebar.scss';

const menuStyle = {
    bmMenuWrap: {
        transition: '.3s ease'
    }
};

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    handleStateChange(state) {
        this.setState({
            isMenuOpen: state.isOpen
        });
    }

    closeMenu() {
        this.setState({
            isMenuOpen: false
        });
    }

    render() {
        let { pageWrapId, outerContainerId } = this.props;
        return (
            <Menu isOpen={this.state.isMenuOpen} onStateChange={(state) => this.handleStateChange} styles={menuStyle} customCrossIcon={false} pageWrapId={pageWrapId} outerContainerId={outerContainerId} >
				<Link onClick={() => this.closeMenu()} className="Sidebar__item" to="/">Primeiros Passos</Link>
				<Link onClick={() => this.closeMenu()} className="Sidebar__item" to="/">Cardápio do RU</Link>
				<Link onClick={() => this.closeMenu()} className="Sidebar__item" to="/">Mapa do Politécnico</Link>
				<Link onClick={() => this.closeMenu()} className="Sidebar__item -small" to="/">Calendário Acadêmico</Link>
			</Menu>
        );
    }
}

export default Sidebar;

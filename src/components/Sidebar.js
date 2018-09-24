import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSidebar from 'react-sidebar';

import './Sidebar.scss';

const isScreenLargeEnough = window.matchMedia("(min-width: 768px)");

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.screenChanged = this.screenChanged.bind(this);
        isScreenLargeEnough.addListener(this.screenChanged);
        this.state = {
            docked: isScreenLargeEnough.matches,
        };
    }

    screenChanged() {
        this.setState({
            docked: isScreenLargeEnough.matches,
        });
    }

    render() {
        return (
            <ReactSidebar sidebar={<SidebarContent />} open={this.props.open} docked={false} onSetOpen={this.props.onSetOpen} touchHandleWidth={30} dragToggleDistance={20} sidebarClassName="Sidebar">
            {this.props.children}
			</ReactSidebar>
        );
    }
}

export default Sidebar;

const SidebarContent = () => (
    <div>
        <h2 className="Sidebar__title">CAAD</h2>
        <Link onClick={() => this.closeSidebar()} className="Sidebar__item" to="/">Primeiros Passos</Link>
        <Link onClick={() => this.closeSidebar()} className="Sidebar__item" to="/">Cardápio do RU</Link>
        <Link onClick={() => this.closeSidebar()} className="Sidebar__item" to="/">Mapa do Politécnico</Link>
        <Link onClick={() => this.closeSidebar()} className="Sidebar__item -small" to="/">Calendário Acadêmico</Link>
    </div>
);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSidebar from 'react-sidebar';
import links from '../links';

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
        const { open, onSetOpen } = this.props;
        return (
            <ReactSidebar sidebar={<SidebarContent onSetOpen={onSetOpen} />} open={open} docked={false} onSetOpen={onSetOpen} touchHandleWidth={30} dragToggleDistance={20} sidebarClassName="Sidebar">
            {this.props.children}
			</ReactSidebar>
        );
    }
}

export default Sidebar;

const SidebarContent = ({ onSetOpen }) => (
    <div className="Sidebar__items">
        <Link onClick={() => onSetOpen(false)} className="Sidebar__item" to="/">Página Inicial</Link>
        <Link onClick={() => onSetOpen(false)} className="Sidebar__item" to="/primeiros-passos">Primeiros Passos</Link>
        <a onClick={() => onSetOpen(false)} className="Sidebar__item" href={links.cardapioPolitecnico}>Cardápio do RU</a>
        {/*<Link onClick={() => onSetOpen(false)} className="Sidebar__item" to="/">Mapa do Politécnico</Link>*/}
        <a onClick={() => onSetOpen(false)} className="Sidebar__item -small" href={links.calendarioCEPE}>Calendário Acadêmico</a>
    </div>
);

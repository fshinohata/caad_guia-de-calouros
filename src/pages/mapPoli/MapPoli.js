import React, { Component } from 'react';
import { Container, Header } from "semantic-ui-react";
import env from "../../env.json";

import './MapPoli.scss';

class MapPoli extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: 50 }}>
                    <Header as="h2">Mapa do Centro Politécnico</Header>
                    <iframe
                        title="Mapa do Centro Politécnico - Curitiba, PR"
                        className="MapPoli"
                        frameBorder={0} style={{ border:0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=${env.googleApiKey}&q=UFPR+Polytechnic+Center`}
                        allowFullScreen>
                    </iframe>
                </Container>
            </div>
        );
    }
}

// 'https://www.google.com/maps/d/u/0/embed?mid=1aPAe4TlyRibtXXu5xjSGXpRUDtt-UL5e'

export default MapPoli;

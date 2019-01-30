import React, { Component } from 'react';
import { Container, Header } from "semantic-ui-react";
import env from "../../env.json";
import Text from '../../components/Text';

import './MapPoli.scss';

class MapPoli extends Component {
    render() {
        return (
          <div>
              <Container className="Info">
                  <Text align="justify">
                      <p>
                      As linhas de ônibus da URBS que passam próximas ao Centro Politécnico são:
                      </p>
                      <ul>
                          <li>Centro Politécnico (469)</li>
                          <li>Estudantes (466)</li>
                          <li>Interbairros II (020 e 021)</li>
                          <li>Interbairros V (050)</li>
                          <li>Inter 2 (022 e 023)</li>
                          <li>Santa Barbara (461)</li>
                          <li>Universidades (165)</li>
                      </ul>
                  </Text>
                </Container>
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

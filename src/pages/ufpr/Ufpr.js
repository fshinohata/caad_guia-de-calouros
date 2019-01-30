import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { StackUp } from '../../components/Animations';
import Text from '../../components/Text';

import "./Ufpr.scss";

class Ufpr extends Component {
    render() {
        return (
          <StackUp>
    				<Container className="Ufpr">
              <Text align="justify">
                <p>
                  <h2>Em breve</h2>
                </p>
              </Text>
            </Container>
      		</StackUp>
        );
    }
}

export default Ufpr;

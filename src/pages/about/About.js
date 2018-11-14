import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import links from '../../links';
import { StackUp } from '../../components/Animations';
import Text from '../../components/Text';
import Email from '../../img/emailcaad.png';

class About extends Component {
    render() {
        return (
            <Container>
            	<Row>
            		<StackUp>
	            			<Text align="justify">
		            			<p>
		            				Esse guia é um apanhado de informações interessantes para (futuros) graduandos em Ciência da Computação na Universidade Federal do Paraná.
                        Tem por objetivo auxiliar na preparação e adaptação no ambiente acadêmico e ser um link rápido para sites externos.
		            			</p>
		            			<p>
                        O Guia do Calouro foi idealizado pela gestão Ranauê e sua primeira versão foi implementada em 2015.
                        2018 é o ano de sua restauração, implementada pela gestão AutoCAAD com a ajuda do mestre Fernando Shinohata.
      								</p>
      								<p>
                        Para saber mais sobre a história do Centro Acadêmico Alexandre Direne (antigo Centro de Estudos de Informática) só clicar <a href={links.historiaCAAD}> aqui </a>.
      								</p>
      								<p>
                        Esperamos que esse Guia tenha sido de alguma forma útil desde a escolha do curso até o primeiro ano como Calouro de BCC UFPR.
                        Todo feedback é bem vindo e pode ser enviado a <img src={Email} />
      								</p>
	            			</Text>
            		</StackUp>
            	</Row>
            </Container>
        );
    }
}

export default About;

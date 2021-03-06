import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import links from '../../links';
import { StackUp } from '../../components/Animations';
import Text from '../../components/Text';
import Email from '../../img/emailcaad.png';
import Lucy from '../../img/lucy.jpg';

import "./About.scss";

class About extends Component {
    render() {
        return (
            <StackUp>
				<Container className="About">
					<Text align="justify">
            <img src={Lucy} alt="Mascote do Centro Acadêmico Alexandre Direne" align="left"/>
						<p>
							Esse guia é um apanhado de informações interessantes para (futuros) graduandos em Ciência da Computação na Universidade Federal do Paraná.
							Tem por objetivo auxiliar na preparação e adaptação no ambiente acadêmico e ser um link rápido para sites externos.
						</p>
						<p>
							O Guia do Calouro foi idealizado pela gestão Ranauê e sua primeira versão foi implementada em 2015.
							2019 foi o ano de sua restauração, implementada pela gestão AutoCAAD com a ajuda do mestre Fernando Shinohata.
						</p>
						<p>
							Para você que se pergunta <span style={{ fontWeight: "bold" }}>"O que é esse crânio de background do guia?"</span>: ele compõe a logo do CAAD. O crânio é nosso mascote, que ainda pode ser encontrado na sede do CAAD (mesmo que aos pedaços e manchado). A história diz que esse crânio chegou ao CAAD em meados de 2011, e desde então é o objeto mais querido da sede.
            </p>
            <p>
              Para saber mais sobre a história do Centro Acadêmico Alexandre Direne (antigo Centro de Estudos de Informática) só clicar <a target="_blank" href={links.historiaCAAD}> aqui </a>.
						</p>
						<p>
							Esperamos que esse Guia tenha sido de alguma forma útil desde a escolha do curso até o primeiro ano como Calouro de BCC UFPR.
							Todo feedback é bem vindo e pode ser enviado a <img src={Email} alt="Email do Centro Acadêmico Alexandre Direne" />
						</p>
            <p>
              <div>
                Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a>, <a href="https://www.flaticon.com/authors/good-ware" title=" Good Ware">Good Ware</a>, <a href="https://www.flaticon.com/authors/smashicons" title=" Smashicons">Smashicons</a> and <a href="https://www.flaticon.com/authors/freepik" title=" Freepik">Freepik</a>   from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
              </div>
            </p>
					</Text>
        </Container>
      		</StackUp>
        );
    }
}

export default About;

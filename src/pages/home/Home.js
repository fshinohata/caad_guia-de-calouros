import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { FadeInUp } from '../../components/Animations';
import FancyCard from '../../components/FancyCard';
import Text from '../../components/Text';
import ThinkingDude from '../../img/thinking_dude.jpg';
import Restaurant from '../../img/restaurant.png';
import Calendar from '../../img/calendar.svg';
import Info from '../../img/info.png';
import links from '../../links';

import './Home.scss';

class Home extends Component {
    render() {
    	const primeirosPassos = (
    		<Link to={links.primeirosPassos}>
    			<Button size="small" color="primary">
    				Ver primeiros passos
    			</Button>
    		</Link>
    	);

    	const cardapioRU = (
    		<a href={links.cardapioPolitecnico}>
    			<Button size="small" color="primary">
    				Veja o cardápio de hoje
    			</Button>
    		</a>
    	);

    	const calendarioCEPE = (
    		<a href={links.calendarioCEPE}>
    			<Button size="small" color="primary">
    				Ver calendário
    			</Button>
    		</a>
    	);

      const sobre = (
    		<Link to={links.sobre}>
    			<Button size="small" color="primary">
    				Conheça o Guia
    			</Button>
    		</Link>
    	);

        return (
            <div className="Home">
            	<Container>
            		<Row>
                        <FadeInUp>
                            <FancyCard buttons={primeirosPassos} image={ThinkingDude} title="Primeiros Passos" subtitle="O que devo fazer?">
                                <Text align="justify">
                                    Aqui, temos informações o suficiente para você começar: da matrícula até as primeiras semanas de aula.
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={cardapioRU} image={Restaurant} title="Conheça o RU" subtitle="Restaurante Universitário">
                                <Text align="justify">
                                    É sempre bom saber o que será servido no restaurante universitário. O preço é de apenas R$1,30!
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={calendarioCEPE} image={Calendar} title="Calendário Acadêmico" subtitle="Tem datas importantes :)">
                                <Text align="justify">
                                    Fique atento ao calendário acadêmico, ele contém datas importantes, como o início do período de matrículas.
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={sobre} image={Info} title="Sobre o Guia">
                            </FancyCard>
                        </FadeInUp>
            		</Row>
            	</Container>
            </div>
        );
    }
}

export default Home;

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link }  from "react-router-hash-link";

import { Grid, Container } from "semantic-ui-react";
import { FadeInUp } from '../../components/Animations';
import FancyCard from '../../components/FancyCard';
import Text from '../../components/Text';
import ThinkingDude from '../../img/thinking_dude.jpg';
import Restaurant from '../../img/restaurant.png';
import Calendar from '../../img/calendar.svg';
import Map from "../../img/map.png";
import Info from '../../img/info.png';
import Computer from '../../img/computer.png';
import LogoDinf from '../../img/logoDinf.jpg';
import LogoUFPR from '../../img/logoUfpr.jpg';
import links from '../../links';

import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="Home">
            	<Container>
                    <Grid className="flex jc-c">
                        <FadeInUp>
                            <FancyCard buttons={<Link to={links.primeirosPassos}>Ver primeiros passos</Link>} image={ThinkingDude} title="Primeiros Passos" subtitle="O que devo fazer?">
                                <Text align="justify">
                                    Aqui, temos informações o suficiente para você começar: da matrícula até as primeiras semanas de aula.
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<a href={links.cardapioPolitecnico} target="_blank">Veja o cardápio de hoje</a>} image={Restaurant} title="Conheça o RU" subtitle="Restaurante Universitário">
                                <Text align="justify">
                                    É sempre bom saber o que será servido no restaurante universitário. O preço é de apenas R$1,30!
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<a href={links.calendarioCEPE} target="_blank">Ver calendário</a>} image={Calendar} title="Calendário Acadêmico" subtitle="Tem datas importantes :)">
                                <Text align="justify">
                                    Fique atento ao calendário acadêmico, ele contém datas importantes, como o início do período de matrículas.
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<Link to={links.sobre}>Vai um pouco de história? :)</Link>} image={Info} title="Sobre este guia" subtitle="...e o centro acadêmico">
                                <Text align="justify">
                                    Se quiser conhecer um pouco mais sobre a gente, clique no link abaixo!
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<Link to={links.mapa}>Veja o mapa</Link>} image={Map} title="Mapa do Centro Politécnico" subtitle="Para não se perder!">
                                <Text align="justify">
                                    É sempre bom conhecer o lugar no qual você vai passar pelo menos quatro anos, né?
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<Link to={"#bcc"}>Vem ver as diferenças</Link>} image={Computer} title="O curso" subtitle="BCC é o curso certo para mim?">
                                <Text align="justify">
                                    Ciência da Computação, Engenharia da Computação ou Sistemas de Informação (e outras variantes)?
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<Link to={"#dinf"}>Conheça o DInf</Link>} image={LogoDinf} title="Departamento de Informática" subtitle="Porque escolher DInf UFPR?">
                                <Text align="justify">
                                    Saiba o que você "ganha" sendo estudante no Departamento de Informática da UFPR.
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                        <FadeInUp>
                            <FancyCard buttons={<Link to={"#ufpr"}>Conheça a UFPR</Link>} image={LogoUFPR} title="Universidade Federal do Paraná" subtitle="Porque escolher UFPR?">
                                <Text align="justify">
                                    Conheça a melhor do Paraná!
                                </Text>
                            </FancyCard>
                        </FadeInUp>
                    </Grid>
            	</Container>
            </div>
        );
    }
}

//`https://www.google.com/maps/embed/v1/place?key=${env.googleApiKey}&q=UFPR+Polytechnic+Center`
export default Home;

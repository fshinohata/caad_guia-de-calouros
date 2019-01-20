import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Grid } from "semantic-ui-react";

import links from '../../links';
import { StackUp } from '../../components/Animations';
import ExpansiveCard from '../../components/ExpansiveCard';
import Text from '../../components/Text';

class FirstSteps extends Component {
    render() {
        return (
            <Container>
            	<Grid columns={1}>
            		<StackUp>
	            		<ExpansiveCard title="Como saber se passei?" subtitle="Entre no site do Núcleo de Concursos da UFPR ou vá até a Praça Santos Andrade.">
	            			<Text align="justify">
		            			<p>
		            				Tem alguns jeitos de saber que você passou.
		            			</p>
		            			<p>
									Muita gente gosta de ir lá na Praça Santos de Andrade pra descobrir. Sabe, aquela na frente do Teatro Guaíra? É que no dia da divulgação dos resultados costumam distribuir gratuitamente jornais com os resultados pro pessoal que passa por lá. Vai bastante gente, trazendo família, amigos ou sozinha mesmo. Alguns se sujam um pouco com tinta, farinha e outras coisas. Tem gente que não gosta de participar e sai limpinha. Cada um é cada um.
								</p>
								<p>
									Mas se você quer mais emoção, vá para o banho de lama. O lugar muda de ano a ano, mas não é difícil descobrir onde é que vai ser. Eles divulgam alguns dias antes da saída do resultado. Indo lá, você vai encontrar alguns dos seus veteranos e também alguns dos seus colegas que acabaram de passar. Não se esqueça de pegar os contatos! Você pode conferir o resultado lá mesmo e, se for o caso, vão te sujar bastante.
								</p>
								<p>
									Enfim, você também pode entrar no site do Núcleo de Concursos da UFPR no dia em que saem os resultados que eles vão estar logo ali na primeira página, separados por curso. Prático, rápido, sem grandes emoções. Mas eficaz. (e uma pá de gente vê por aí, mesmo)
								</p>
	            			</Text>
	            		</ExpansiveCard>
            		</StackUp>
            		<StackUp>
	            		<ExpansiveCard title="Matrícula" subtitle="Como é o dia da matrícula?">
	            			<Text>
	            				<h5>O que, onde e quando</h5>
								<p>Você terá que levar documentos pra se matricular! (ver no site do núcleo de concursos)</p>
								<p>Cada curso tem data e hora marcados (ver no site do núcleo de concursos)
									Normalmente, acontece no Prédio Histórico da UFPR (que fica na praça Santos de Andrade, numa das pontas da Rua XV de Novembro, em frente ao Teatro Guaíra)</p>
								<h5>Como é o dia</h5>
								<p>Um dia tranquilo! :)</p>
								<ul>
									<li>Apenas uma entrada (a da frente do prédio) e uma saída (a do lado do prédio)</li>
									<li>Acompanhantes não passarão - no prédio, só calouros, funcionários e voluntários</li>
									<li>Você será enfileirado com seus colegas de curso - aproveite pra conhecer e conversar!</li>
									<li>Sempre terá uma placa ou alguém indicando pra onde você deve seguir</li>
									<li>Você pode receber folhetos, cartilhas, livretos, camiseta e outros materiais pra calouros. Boa ideia levar algo pra guardar tudo isso.</li>
									<li>Nesse dia você também tira a foto pra carteirinha de estudante. Esteja apresentável. (eu disse apresentável, não divx, ok?)</li>
								</ul>
								<h5>Trote?</h5>
								<ul>
									<li>Na saída alguns veteranos estarão te esperando</li>
									<li>Se eles tiverem algum folheto em mãos, pegue - o folheto é importante</li>
									<li>Se você não quiser trote, só ignore. Se te pararem, recuse e continue andando. No geral, os veteranos vão fazer uma pressãozinha, mas respeitam a sua decisão.</li>
									<li>Se você resolver participar - o que é bacaninha - aproveite bastante a experiência! Não é todo mundo que tem essa chance, sabia?</li>
								</ul>
	            			</Text>
	            		</ExpansiveCard>
            		</StackUp>
            		<StackUp>
	            		<ExpansiveCard title="Pós-Matrícula, antes das aulas" subtitle="O que fazer até as aulas começarem?">
	            			<Text align="justify">
		            			<p>Depois de bastante esforço, você conseguiu. Está matriculado na UFPR. Mas.. E agora?</p>

		            			<h5>Pesquise</h5>
								<p>Você agora faz parte da Universidade Federal do Paraná, e isso te traz alguns benefícios, e não, não é só pagar meia no cinema. Durante esse período de ansiedade, de “ai meu deus quero aula, quero federal, AAAAAH !!!”, procure conhecer esses benefícios, seus direitos como aluno, as oportunidades que você pode ter dentro da faculdade, e etc.</p>

								<p>Alguns exemplos de benefícios como aluno da UFPR:</p>

								<ul>
									<li>Você agora pode utilizar o intercampi gratuitamente! (Ônibus que passa em todos os Campi da UFPR). Você encontra os horários do intercampi aqui.</li>
									<li>
										A Pró-Reitoria de Assuntos Estudantis (PRAE) oferece uma série de bolsas aos alunos que necessitam de auxilio financeiro. Entre elas estão:
										<ul>
											<li>Auxílio Permanência: auxílio financeiro no valor de R$ 400,00 mensais, visa subsidiar gastos inerentes à formação acadêmica como fotocópias, compra de livros, materiais para aulas práticas, etc.;</li>
											<li>Auxílio Refeição: fornece isenção das taxas nas refeições feitas nos restaurantes universitários da universidade, 3 refeições por dia, 7 dias por semana;</li>
											<li>Auxílio Moradia: auxílio financeiro no valor de R$ 275,00 mensais, para a manutenção do estudante oriundo de outras cidades, nos locais em que residam durante o período do curso;</li>
											<li>Auxílio Creche: destinado aos estudantes vinculados ao PROBEM que possuem filhos na faixa etária de 0 a 6 anos incompletos, devidamente matriculados em Centros de Educação Infantil particulares ou conveniados.</li>
										</ul>
									</li>
								</ul>
								<p>Depois que for atrás de saber seus direitos, seus benefícios, e suas obrigações, enquanto as aulas não começam, aproveite para sair, ir em baladas, marque algo com seus futuros colegas, e as aulas chegarão mais rápido do que você imagina! ;)</p>
							</Text>
	            		</ExpansiveCard>
            		</StackUp>
            		<StackUp>
	            		<ExpansiveCard title="Sua primeira semana" subtitle="Participe da Semana de Calouros! :)">
	            			<Text>
	            				<p>Você provavelmente já ouviu falar que vai rolar a semana dos calouros, mas caso nunca tenha ouvido falar, fique tranquilo: vamos explicar tudo o que você precisa saber (ou pelo menos te dar as informações necessárias para se virar xD).</p>

								<p>A semana de Calouros é organizada pelo Programa de Ensino Tutorial de Computação (PET Computação). Nessa semana, você calouro não terá aulas; e muito importante: NÃO LEVARÁ TROTE. (é verdade mesmo, não se preocupe).</p>

								<blockquote>“Aah então vou fazer o que na faculdade?!”</blockquote>

								<p>Você vai:</p>

								<ul>
									<li>Fazer um tour da faculdade: conhecer o campus é muito importante, assim você não ficará (tão) perdido quando falarem que sua aula é na espinha de peixe, quando for almoçar no RU, etc.</li>
									<li>Ver palestras interessantes: com pessoas que já estão formadas, que atuam na área, com pessoas de dentro da faculdade, vai conhecer o coordenador do curso, vai conhecer o pessoal do Centro de Estudos de Informatica (CAAD), do PET, da Empresa Junior de computação (ECOMP), do C3SL, e muito mais.</li>
									<li>Aprender algumas coisas: você vai passar um tempo nos laboratórios de informática aprendendo a usar algumas ferramentas que serão importantes durante o curso. E outras coisas.</li>
									<li>Socializar (um pouco): vai ter a chance de fazer novos colegas e participar de gincanas.</li>
								</ul>
								<p>Mais informações sobre a semana de calouros no site do <a href={links.semanaDosCalouros}>PET Computação</a>.</p>
	            			</Text>
	            		</ExpansiveCard>
            		</StackUp>
					<StackUp>
						<ExpansiveCard title="Primeira semana de aulas" subtitle="Como enfrentar a primeira semana de aulas?">
							<Text align="justify">
							<p>
								Durante a primeira semana acontece a recepção de vocês, calouros que estão lendo agora, aonde nós apresentamos a universidade para vocês, desde coisas que vocês usaram muito até coisas que vocês não usarão. haverão palestras introdutórias ao curso, a apresentação do chefe do departamento, do coordenador do curso, do nosso centro acadêmico (CAAD) e do PET computação, também é ofertado um curso de Linux básico, pois é o sistema operacional usado nos computadores do laboratório e muitos de vocês não tem familiaridade com o mesmo.
							</p>

							<p>
								Logo após a semana dos calouros promovida pelo PET vem a primeira semana de aula, normalmente vocês serão informados sobre os horários de aula, salas e professores antes de começar.
							</p>

							<p>
								Essa primeira semana de aula também é quando acontece o trote dos calouros; e você pode escolher se vai participar ou não (nenhum de vocês será forçado a participar, se alguém falar o contrário, procure o CAAD ou o PET).
							</p>

							<p>
								O trote é uma das formas de fazer a integração entre vocês calouros , e nós veteranos e até mesmo a integração entre vocês.
							</p>
							</Text>
						</ExpansiveCard>
					</StackUp>
					<StackUp>
						<ExpansiveCard title="Aulas na faculdade" subtitle="O que são? Onde vivem?">
							<Text align="justify">
							<p>
								Bom, como algumas pessoas já podem ter comentado com vocês, as aulas na faculdade são diferentes das aulas que muitos de vocês tiveram, por exemplo, primeiro vocês podem se ausentar das aulas quando quiserem, sem aviso prévio, seja para resolver algo, ou para ir ao banheiro, porem, ainda existe frequência e se você faltar 7 aulas está reprovado.
							</p>

							<p>
								A matéria é dada por um professor, podendo sofrer alteração no decorrer do semestre (é raro mas pode acontecer) em alguma sala do politécnico ou laboratório (normalmente são as salas perto do departamento), a parte de avaliações e duração da aula ficam a critério do professor e são apresentadas no primeiro dia de aula (isso é lei!).
							</p>
							</Text>
						</ExpansiveCard>
					</StackUp>
					<StackUp>
						<ExpansiveCard title="To com fome, sede, quero fazer xixi" subtitle="Como sobreviver durante as aulas">
							<Text align="justify">
							<h5>Comer</h5>
							<p>
								Temos o restaurante universitário (carinhosamente chamado de RU &lt;3) que oferece café da manhã a R$0,50 e almoço e jantar a R$1,30, e que apesar do preço tem uma ótima qualidade. Além disso temos 3 cantinas: uma no biológicas (longe :( ), uma dentro da espinha de peixe (marcada aqui no mapa) e outra perto do RU. Sem falar do Shopping Jardim das Américas, que é pertinho do poli e que tem alguns lugares para comer que dão desconto para aluno da UFPR (leve carteirinha ou comprovante de matrícula).
							</p>

							<h5>Bebedouros e banheiros</h5>
							<p>
								Temos vários espalhados pelo campus, porém perto de onde vocês mais ficarão (o DINF) não tem quase nenhum :(.
							</p>

							<p>
								Tem um bebedouro na parte de cima do dinf, e banheiro só na espinha de peixe ou no bloco das PC’s
							</p>

							<p>
								<b>DICA:</b> leve papel higiênico, pois nunca se sabe quando vocês vai precisar e dificilmente tem nos banheiros.
							</p>

							<h5>Primeiros socorros</h5>
							<p>
								Caso algum de vocês passem mal ou se machuquem enquanto estão programando, temos a CASA 3 que pode auxiliar vocês em casos de pouca gravidade.
							</p>

							<p>
								Caso você veja um amiguinho passando mal, o auxilie levando para a casa 3, lá eles saberão o q fazer :)
							</p>
							</Text>
						</ExpansiveCard>
					</StackUp>
					<StackUp>
						<ExpansiveCard title="Seus veteranos" subtitle="Quem são? Daonde vêm? Do que se alimentam? Como se reproduzem?">
							<Text align="justify">
							<p>
								Os seus veteranos são pessoas legais.
							</p>

							<p>
								Os seus veteranos são pessoas que nem você, que nem os teus colegas. Eles apenas tem mais experiência no curso e no ambiente universitário. Eles podem ser fontes muito úteis de informação. Eles podem indicar professores, moradias, estágios, festas, etc. Caso você precise de alguma dessas informações eles podem ser facilmente encontrados no CAAD e nos labs.
							</p>
							</Text>
						</ExpansiveCard>
					</StackUp>
					<StackUp>
						<ExpansiveCard title="Coisas que você ganha como aluno de BCC" subtitle="Recursos que o Departamento de Informática disponibiliza aos alunos.">
							<Text align="justify">
							<p>
								Como aluno BCC você ganha acesso a 3 laboratórios no dinf por meio da conta para logar no sistema que será entregue na primeira semana de aula. Além de ter sua conta para uso dentro da universidade, o dinf ainda disponibiliza um dominio online, uma conta de email e uma conta no gitlab (tipo o github mas do dinf) para cada aluno.
							</p>
							</Text>
						</ExpansiveCard>
					</StackUp>
					<StackUp>
						<ExpansiveCard title="Acho que faltou alguma coisa" subtitle="Tem alguma sugestão para melhorar o guia?">
							<Text align="justify">
							<p>
								Quaisquer dúvidas ou sugestões, não hesite em falar com os membros do Centro Acadêmico, pessoalmente ou via email (nosso email está na <Link to={links.sobre}>página sobre</Link>).
							</p>
							</Text>
						</ExpansiveCard>
					</StackUp>
            	</Grid>
            </Container>
        );
    }
}

export default FirstSteps;

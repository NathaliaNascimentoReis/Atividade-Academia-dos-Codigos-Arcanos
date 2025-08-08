// 1. A Jornada do Vilão: Ficha e apresentação do personagem
let nome = "Desconhecido";
let idade = "Desconhecida";
let nivel = 65;
let vida = 55;
let vidaMaxima = 100;
const classe = "Ladino";
let moedas = 100;
let xp = 90;
let maana; //desbloqueia no nível 66

console.log(`Todas as informações registradas neste documento foram adquiridas por investigações minuciosas da Associação Independente de Segurança Tecnológica Supraestatal e categorizam-se como sigilo máximo. Em caso de vazamentos de dados, punições elevadas serão aplicadas. Ao prosseguir, você confirma estar ciente e concordar com os termos citados. \n`);
console.log(`O indivíduo de nome ${nome}, de idade ${idade}, é um ${classe}\n`);

// 2. Atributos
let agilidade = 40;
let defesa = 18;
let percepcao = 25;
let forca; // desbloquea no nível 66

// Perícias de Ladino (somente desbloqueadas no nível 66)
let furtividade;
let pontaria;

console.log(`🎮 Nível: ${nivel}, ❤️ Vida: ${vida}, 🛡️ Defesa Final: ${defesa}, 🪙 Moedas de Ouro: ${moedas}, ✨ XP final: ${xp}.\n`);

// 3. Equipamentos
const arma = "Pistola Mágica";
const danoBaseDaArma = 12;
const elementoDaArma = "Fogo";
const equipamento = "Hoverboard Mágico";
const elementoDoEquipamento = "Energia";
const bonusDoEquipamento = 5;
let agilidadeFinal = agilidade + bonusDoEquipamento;
let kitMedicoCura = 30;

// 4. Missão
console.log(`Primeira vez avistado: Base de Facção Criminosa Organizada (FCO)`);
console.log(`Acompanhado por dois homens não-identificados, armava um plano para roubar o objeto mágico 'Elixir da Sabedoria Tecnológica' (um item capaz de dar sabedoria de programação em todas as linguagens existentes). Assim que se aproximaram, nossos agentes começaram a seguí-los \n`);

// ! Dificuldade de Teste para Percepção de perseguição (perceber que está sendo seguido): 20
let perceberPerseguicao;
let dificuldadePercepcao = 20;
perceberPerseguicao = percepcao > dificuldadePercepcao;
console.log(`${nome} percebe que está sendo perseguido?: ${perceberPerseguicao} \n`);
xp += 5; // aumenta XP por sucesso no teste

console.log(`Ao notar os agentes, ${classe} e os homens sobem em ${equipamento} e buscam despistar os agentes`);
let DificuldadeDeFugir = 13
let consegueDespistar = agilidadeFinal > DificuldadeDeFugir
console.log(`Consegue despistar?: ${consegueDespistar} \n`);
xp += 5; // aumenta XP por sucesso no teste

console.log(`Enquanto procuravam pelo Elixir, avistaram o Draconata nas profundezas da base, que guardava consigo a caixa do Elixir. Ao avistar os intruzos, ele rapidamente se prepara, e lança Ventania para afastar ${nome}`);
console.log(`${nome} bate as costas na parede com a força da ventania, e se machuca`);
let dano = 20;
let suportarDano = defesa > dano;
console.log(`O ${nome} suporta o baque?: ${suportarDano} \n`);
let defesaFinal = defesa / 2; // por conta da defesa ter falhado, ela é reduzida na metade
let vidaFinal = vida - dano;

console.log(`${nome} bate as costas na parede com a força da ventania e se machuca.`);
let danoMassivoDaArma = danoBaseDaArma * 5;
console.log(`${nome} se recompõe e puxa ${arma}. Sem piedade, dispara 5 vezes seguidas na cabeça do Draconata.`);

console.log(`Os criminosos vasculham em Draconata a chave da caixa com o objeto, e a encontram. Eles roubam o objeto mágico e o vendem, divindo o valor entre eles \n`);
let temLockpick = false;
let temChave = true;
let conseguemAbrirACaixa = temChave || temLockpick;
let lucroDaVenda = 1000002 / 3;
let moedasFinal = lucroDaVenda + moedas;
let passarUmNivel = (xp >= 100);

// 5. Conclusão
console.log(`Especula-se que o status de ${nome} esteja:`);
console.log(`🎮 Nível: ${nivel}, ❤️ Vida: ${vidaFinal}, 🛡️ Defesa Final: ${defesaFinal}, 🪙 Moedas de Ouro: ${moedasFinal}, ✨ XP final: ${xp}. ${nome} passou para o próximo nível?: ${passarUmNivel} \n`);

// 2° A Batalha dos Algoritmos
console.log(`Os detalhes abaixo nesta atualização foram registrados graças à análises de provas e testemunhos pós-ataque`);

if (passarUmNivel) {
    xp = xp - 100;
    nivel ++;
    agilidadeFinal += 15;
    defesaFinal += 15;
    percepcao += 15;
    vidaFinal += 10;
    furtividade = 25;
    pontaria = 225;

    if (nivel = 66){
        maana = 20; //por ter alcançado nível 66, desbloqueou MAANA e habilidades mágicas
        forca = 20; //por ter alcançado nível 66, desbloqueou o atributo FORÇA
    };
}; 

console.log(`Status e atributos atualizados:`);
console.log(`🎮 Nível: ${nivel}, ❤️ Vida: ${vidaFinal}, 🛡️ Defesa: ${defesaFinal}, 🪄 Maana: ${maana}, 🪙 Moedas de Ouro: ${moedasFinal}, ✨ XP atual: ${xp}.`);
console.log(`⚡Agilidade: ${agilidadeFinal}, 👊 Força ${forca}, 👀 Percepção: ${percepcao} \n`);
console.log(`Após roubar e vender com sucesso o Elixir, ${nome} se prepara para roubar o próximo item mágico: 'A Manopla de Scripts'. Para concluir este objetivo, a primeira etapa é adicionar próteses de cyberpsicose, que dará a possibilidade de combinar Maana com objetos tecnológicos, potencializando suas capacidades! \n`);

//  Capítulo 1 - Primeira Decisão: Use condicionais simples (if) para reagir a uma situação de perigo ou oportunidade.
if (vida <= 70) {
    vidaFinal += kitMedicoCura;
    kitMedicoCura = 0;
};

let proteseDeCyberpsicose = 10000;
let cirurgiaDeProtese = 25000;
let programacaoDeProteseComEquipamentos = 3000;
let valorTotalParaInvestimentoEmProtese = programacaoDeProteseComEquipamentos + proteseDeCyberpsicose + cirurgiaDeProtese;
console.log(`Para adquirir, programar e instalar suas próteses, ${classe} terá de gastar ${valorTotalParaInvestimentoEmProtese}.`);
let cyberPsicose;

// Capítulo 2 - Escolha Estratégica: Use condicionais compostas (if/else) para criar um momento de escolha binária decisiva.
if (moedasFinal > valorTotalParaInvestimentoEmProtese && (nivel = 66)) {
    moedasFinal = moedasFinal - valorTotalParaInvestimentoEmProtese;
    console.log(`${nome} compra Prótese de Cyberpsicose e realiza cirurgia para instalá-la em seu corpo. Agora, possui ${moedasFinal} moedas de ouro \n`);
    cyberPsicose = true;
} else {
    console.log(`${nome} terá de roubar mais itens mágicos para conseguir investir na prótese e/ou aumentar seu nível para desbloquear Maana \n`);
};

console.log(`Após adquirir suas próteses potencializadoras de poder, ${nome} e seu grupo seguem seus caminhos para a Base da RobotsTech, para roubar a Manopla de Scripts. Suas motivações e contratantes permanecem desconhecidos \n`);

// Capítulo 3 - Batalha Épica: Use condicionais encadeadas (if/else if/else) para um sistema de combate complexo.
console.log(`O plano inicial dos mal-feitores era invadir a base capturando um dos caminhões de entrega para a loja e se disfarçando de um funcionário. ${nome} ficaria próximo à base, possuindo em seu campo de visão os caminhões que entrarem e saírem. Após a saída de um veículo, ele o seguiria, e informaria seus parceiros sobre a rota, que se posicionariam na estrada para atacar o motorista. Então, ao vencer, conquistariam o automóvel e se passariam por funcionários da RobotsTech. Dentro da organização, discretamente roubariam o objeto e sua missão estaria concluída. O verdadeiro andamento está descrito abaixo. \n`);

let notouCaminhaoSair;
let planoInicialConcluido;

if (percepcao >= 15) {
    notouCaminhaoSair = true;
    console.log(`${nome} vê que um caminhão está saindo da base`)

    if (agilidade >= 30){
    console.log(`${nome} consegue acompanhar o caminhão`)

        if (furtividade > 205) {
        console.log(`O motorista não nota que está sendo perseguido \n`)

            if (cyberPsicose === true && maana >= 10) {
            console.log(`${classe} Aproveita sua Cyperpsicopse para potencializar sua atividade cerebral e capacidade de movimento. Agora, ele consegue fazer três ações com maestria no tempo de uma! Ele aguarda a chegada de seus companheiros para o ataque.\n`);
            maana = maana - 10;
            
            console.log(`Assim que os homens chegam na estrada, ${nome} acelera para a frente do caminhão, puxa de seu coldre sua pistola e atira certeiramente na cabeça do motorista; rapidamente, eles encostam no caminhão e um dos homens adentra o veículo, tomando o controle e parando-o. \n`);
            planoInicialConcluido = true;
            
            console.log(`Não houve exitação ao jogar o corpo morto na traseira do caminhão, tudo feito a sangue frio; e, sem delongas, um dos homens ficou responsável por se passar pelo funcionário e o outro e ${nome} se preparavam no compartimento de carga. Dessa forma, seguiram seu caminho para a base.`);

            }
        } else {
            console.log(`O motorista percebe que está sendo seguido, e se prepara para o possível ataque.`);

            if (cyberPsicose = true && maana >= 10) {
            console.log(`${classe} Aproveita sua Cyperpsicopse para potencializar sua atividade cerebral e capacidade de movimento. Agora, ele consegue fazer três ações com maestria no tempo de uma! Ele aguarda a chegada de seus companheiros para o ataque.\n`);
            maana = maana - 10; 

            console.log(`Com a chegada de seus parceiros, o ${classe} pega sua arma, mas o condutor foi esperto e se preparou. Um pouco antes de ${nome} tentar aproximação, ele joga um coquetel molotov aceso na sua direção, e, pelo susto, o mesmo cai de seu ${equipamento} e é pego pelas chamas.`);
            console.log(`Ao notar o efeito, o caminhoneiro não sente remorso, e atira mais dois coquetéis molotov seguidos. \n`);
            console.log(`A partir daí, nada se sobre o que aconteceu com ${nome}, que fora resgatado pelos companheiros.`);
            }
        }

    } else {
        console.log(`Seus planos falham, pois ${nome} não foi capaz de acompanhar o caminhão`);
    }

} else {
    console.log(`Seus planos falham, pois ${nome} não vê nenhum caminhão sair da base`);
}
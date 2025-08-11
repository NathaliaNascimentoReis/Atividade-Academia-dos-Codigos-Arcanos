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

console.log(
  `Todas as informações registradas neste documento foram adquiridas por investigações minuciosas da Associação Independente de Segurança Tecnológica Supraestatal e categorizam-se como sigilo máximo. Em caso de vazamentos de dados, punições elevadas serão aplicadas. Ao prosseguir, você confirma estar ciente e concordar com os termos citados. \n`
);
console.log(`O indivíduo de nome ${nome}, de idade ${idade}, é um ${classe}\n`);

// 2. Atributos
let agilidade = 40;
let defesa = 18;
let percepcao = 25;
let forca; // desbloquea no nível 66

// Perícias de Ladino (somente desbloqueadas no nível 66)
let furtividade;
let pontaria;

console.log(
  `🎮 Nível: ${nivel}, ❤️ Vida: ${vida}, 🛡️ Defesa Final: ${defesa}, 🪙 Moedas de Ouro: ${moedas}, ✨ XP final: ${xp}.\n`
);

// 3. Equipamentos
const arma = "Pistola Mágica";
const danoBaseDaArma = 12;
const elementoDaArma = "Pyro";
const equipamento = "Hoverboard Mágico";
const elementoDoEquipamento = "Energia";
const bonusDoEquipamento = 5;
let agilidadeFinal = agilidade + bonusDoEquipamento;
let kitMedicoCura = 30;

// 4. Missão
console.log(`Primeira vez avistado: Base de Facção Criminosa Organizada (FCO)`);
console.log(
  `Acompanhado por dois homens não-identificados, armava um plano para roubar o objeto mágico 'Elixir da Sabedoria Tecnológica' (um item capaz de dar sabedoria de programação em todas as linguagens existentes). Assim que se aproximaram, nossos agentes começaram a seguí-los \n`
);

// ! Dificuldade de Teste para Percepção de perseguição (perceber que está sendo seguido): 20
let perceberPerseguicao;
let dificuldadePercepcao = 20;
perceberPerseguicao = percepcao > dificuldadePercepcao;
console.log(
  `${nome} percebe que está sendo perseguido?: ${perceberPerseguicao} \n`
);
xp += 5; // aumenta XP por sucesso no teste

console.log(
  `Ao notar os agentes, ${classe} e os homens sobem em ${equipamento} e buscam despistar os agentes`
);
let DificuldadeDeFugir = 13;
let consegueDespistar = agilidadeFinal > DificuldadeDeFugir;
console.log(`Consegue despistar?: ${consegueDespistar} \n`);
xp += 5; // aumenta XP por sucesso no teste

console.log(
  `Enquanto procuravam pelo Elixir, avistaram o Draconata nas profundezas da base, que guardava consigo a caixa do Elixir. Ao avistar os intruzos, ele rapidamente se prepara, e lança Ventania para afastar ${nome}`
);
console.log(
  `${nome} bate as costas na parede com a força da ventania, e se machuca`
);
let dano = 20;
let suportarDano = defesa > dano;
console.log(`O ${nome} suporta o baque?: ${suportarDano} \n`);
let defesaFinal = defesa / 2; // por conta da defesa ter falhado, ela é reduzida na metade
let vidaFinal = vida - dano;

console.log(
  `${nome} bate as costas na parede com a força da ventania e se machuca.`
);
let danoMassivoDaArma = danoBaseDaArma * 5;
console.log(
  `${nome} se recompõe e puxa ${arma}. Sem piedade, dispara 5 vezes seguidas na cabeça do Draconata.`
);

console.log(
  `Os criminosos vasculham em Draconata a chave da caixa com o objeto, e a encontram. Eles roubam o objeto mágico e o vendem, divindo o valor entre eles \n`
);
let temLockpick = false;
let temChave = true;
let conseguemAbrirACaixa = temChave || temLockpick;
let lucroDaVenda = 1000002 / 3;
let moedasFinal = lucroDaVenda + moedas;
let passarUmNivel = xp >= 100;

// 5. Conclusão
console.log(`Especula-se que o status de ${nome} esteja:`);
console.log(
  `🎮 Nível: ${nivel}, ❤️ Vida: ${vidaFinal}, 🛡️ Defesa Final: ${defesaFinal}, 🪙 Moedas de Ouro: ${moedasFinal}, ✨ XP final: ${xp}. ${nome} passou para o próximo nível?: ${passarUmNivel} \n`
);

// 2° A Batalha dos Algoritmos
console.log(
  `Os detalhes abaixo nesta atualização foram registrados graças à análises de provas e testemunhos pós-ataque`
);

if (passarUmNivel) {
  xp = xp - 100;
  nivel++;
  agilidadeFinal += 15;
  defesaFinal += 15;
  percepcao += 15;
  vidaFinal += 10;
  furtividade = 25;
  pontaria = 225;

  if ((nivel = 66)) {
    maana = 20; //por ter alcançado nível 66, desbloqueou MAANA e habilidades mágicas
    forca = 20; //por ter alcançado nível 66, desbloqueou o atributo FORÇA
  }
}

console.log(`Status e atributos atualizados:`);
console.log(
  `🎮 Nível: ${nivel}, ❤️ Vida: ${vidaFinal}, 🛡️ Defesa: ${defesaFinal}, 🪄 Maana: ${maana}, 🪙 Moedas de Ouro: ${moedasFinal}, ✨ XP atual: ${xp}.`
);
console.log(
  `⚡Agilidade: ${agilidadeFinal}, 👊 Força ${forca}, 👀 Percepção: ${percepcao} \n`
);
console.log(
  `Após roubar e vender com sucesso o Elixir, ${nome} se prepara para roubar o próximo item mágico: 'A Manopla de Scripts'. Para concluir este objetivo, a primeira etapa é adicionar próteses de cyberpsicose, que dará a possibilidade de combinar Maana com objetos tecnológicos, potencializando suas capacidades! \n`
);

//  Capítulo 1 - Primeira Decisão: Use condicionais simples (if) para reagir a uma situação de perigo ou oportunidade.
if (vida <= 70) {
  vidaFinal += kitMedicoCura;
  kitMedicoCura = 0;
}

let proteseDeCyberpsicose = 10000;
let cirurgiaDeProtese = 25000;
let programacaoDeProteseComEquipamentos = 3000;
let valorTotalParaInvestimentoEmProtese =
  programacaoDeProteseComEquipamentos +
  proteseDeCyberpsicose +
  cirurgiaDeProtese;
console.log(
  `Para adquirir, programar e instalar suas próteses, ${classe} terá de gastar ${valorTotalParaInvestimentoEmProtese}.`
);
let cyberPsicose;

// Capítulo 2 - Escolha Estratégica: Use condicionais compostas (if/else) para criar um momento de escolha binária decisiva.
if (moedasFinal > valorTotalParaInvestimentoEmProtese && (nivel = 66)) {
  moedasFinal = moedasFinal - valorTotalParaInvestimentoEmProtese;
  console.log(
    `${nome} compra Prótese de Cyberpsicose e realiza cirurgia para instalá-la em seu corpo. Agora, possui ${moedasFinal} moedas de ouro \n`
  );
  cyberPsicose = true;
} else {
  console.log(
    `${nome} terá de roubar mais itens mágicos para conseguir investir na prótese e/ou aumentar seu nível para desbloquear Maana \n`
  );
}

console.log(
  `Após adquirir suas próteses potencializadoras de poder, ${nome} e seu grupo seguem seus caminhos para a Base da RobotsTech, para roubar a Manopla de Scripts. Suas motivações e contratantes permanecem desconhecidos \n`
);

// Capítulo 3 - Batalha Épica: Use condicionais encadeadas (if/else if/else) para um sistema de combate complexo.
console.log(
  `O plano inicial dos mal-feitores era invadir a base capturando um dos caminhões de entrega para a loja e se disfarçando de um funcionário. ${nome} ficaria próximo à base, possuindo em seu campo de visão os caminhões que entrarem e saírem. Após a saída de um veículo, ele o seguiria, e informaria seus parceiros sobre a rota, que se posicionariam na estrada para atacar o motorista. Então, ao vencer, conquistariam o automóvel e se passariam por funcionários da RobotsTech. Dentro da organização, discretamente roubariam o objeto e sua missão estaria concluída. O verdadeiro andamento está descrito abaixo. \n`
);

let notouCaminhaoSair;
let planoInicialConcluido;

if (percepcao >= 15) {
  notouCaminhaoSair = true;
  console.log(`${nome} vê que um caminhão está saindo da base`);
  xp += 5;

  if (agilidade >= 30) {
    console.log(`${nome} consegue acompanhar o caminhão`);
    xp += 5;

    if (furtividade > 20) {
      console.log(`O motorista não nota que está sendo perseguido \n`);
      xp += 5;

      if (cyberPsicose === true && maana >= 10) {
        console.log(
          `${classe} Aproveita sua Cyperpsicopse para potencializar sua atividade cerebral e capacidade de movimento. Agora, ele consegue fazer três ações com maestria no tempo de uma! Ele aguarda a chegada de seus companheiros para o ataque.\n`
        );
        maana = maana - 10;

        console.log(
          `Assim que os homens chegam na estrada, ${nome} acelera para a frente do caminhão, puxa de seu coldre sua pistola e atira certeiramente na cabeça do motorista; rapidamente, eles encostam no caminhão e um dos homens adentra o veículo, tomando o controle e parando-o. \n`
        );
        planoInicialConcluido = true;

        console.log(
          `Não houve exitação ao jogar o corpo morto na traseira do caminhão, tudo feito a sangue frio; e, sem delongas, um dos homens ficou responsável por se passar pelo funcionário e o outro e ${nome} se preparavam no compartimento de carga. Dessa forma, seguiram seu caminho para a base, aguardando o confronto mais difícil de suas almas criminosas. \n`
        );
      }
    } else {
      console.log(
        `O motorista percebe que está sendo seguido, e se prepara para o possível ataque.`
      );

      if ((cyberPsicose = true && maana >= 10)) {
        console.log(
          `${classe} Aproveita sua Cyperpsicopse para potencializar sua atividade cerebral e capacidade de movimento. Agora, ele consegue fazer três ações com maestria no tempo de uma! Ele aguarda a chegada de seus companheiros para o ataque.\n`
        );
        maana = maana - 10;

        console.log(
          `Com a chegada de seus parceiros, o ${classe} pega sua arma, mas o condutor foi esperto e se preparou. Um pouco antes de ${nome} tentar aproximação, ele joga um coquetel molotov aceso na sua direção, e, pelo susto, o mesmo cai de seu ${equipamento} e é pego pelas chamas.`
        );
        console.log(
          `Ao notar o efeito, o caminhoneiro não sente remorso, e atira mais dois coquetéis molotov seguidos. \n`
        );
        console.log(
          `A partir daí, nada se sobre o que aconteceu com ${nome}, que fora resgatado pelos companheiros. \n`
        );
      }
    }
  } else {
    console.log(
      `Seus planos falham, pois ${nome} não foi capaz de acompanhar o caminhão`
    );
  }
} else {
  console.log(
    `Seus planos falham, pois ${nome} não vê nenhum caminhão sair da base`
  );
}

// 1. Continuidade Épica: Continue a saga do seu personagem dos Níveis 1 e 2, mostrando sua evolução.
console.log(`Status atual de ${nome}:`);
console.log(
  `🎮 Nível: ${nivel}, ❤️ Vida: ${vidaFinal}, 🛡️ Defesa: ${defesaFinal}, 🪄 Maana: ${maana}, 🪙 Moedas de Ouro: ${moedasFinal}, ✨ XP atual: ${xp}.`
);
console.log(
  `⚡Agilidade: ${agilidadeFinal}, 👊 Força ${forca}, 👀 Percepção: ${percepcao} \n`
);

console.log(
  `O próximo desafio dos criminosos será invadir cautelosamente a base da empresa RobotsTech (empresa desenvolvedora de robôs supertecnológicos) para roubar "A Manopla De Scripts"!`
);

let manoplaDeScripts;

console.log(
  `Enquanto se dirigiam à sua próxima parada, o prédio da RobotsTech, ${classe} e seus colegas aproveitam o caminho para organizar suas coisas, saqueando os mantimentos e armas do condutor falecido. Com sorte, no caminhão, encontram três Sacos de Capacidade Infinita, que distribuem igualmente. \n`
);

// 2- Arrays - As Coleções Arcanas
// 3.5. Criar e manipular coleções de dados
// 3.5.1. Declaração e inicialização
let sacoDeCapacidadeInfinita = [
  {
    Arma: "Pistola Mágica",
    Quantidade_de_balas: 14,
    Elemento_balas: "Pyro",
    Dano_de_tiro: 8,
  },
  {
    Arma: "Coquetel Molotov", // encontrado no caminhão nos itens do motorista
    Quantidade_de_explosivos: 5,
    Elemento_explosivos: "Pyro",
    Dano_de_explosao: 12,
  },
  {
    Arma: "Metralhadora", // encontrado nos itens do motorista
    Quantidade_de_balas: 30,
    Elemento_balas: "Pyro",
    Dano_de_tiro: 10,
  },
];

let aliados = [
  {
    Nome: "?",
    Genero: "Homem",
    Idade: "?",
    Arma: "Revólver",
    Elemento_da_arma: "Energia",
    Dano_base_da_arma: 4,
  }, // o elemento "Energia" paralisa inimigos com choque
  {
    Nome: "?",
    Genero: "Homem",
    Idade: "?",
    Arma: "UZI",
    Elemento_da_arma: "JavScript",
    Dano_base_da_arma: 16,
  }, // o elemento "JavaScript" é super letal, pois quando as balas acertam o inimigo, geram uma explosão, que corrói todo o corpo do atigindo
];
for (let i = 0; i < aliados.length; i++) {
  console.table(aliados[i]);
}

let inimigosEncontrados = [
  // para derrotar um inimigo, é necessário dar 16 pontos de dano ou diversos ataques frenéticos
  { Identificado_como: "Motorista de caminhão", Estado: "Morto" }, // Será preenchido na aventura
];
let tesourosEncontrados = [
  {}, // Array vazio será preenchido na aventura
];
let salasExploradas = {}; // Array vazio será preenchido na aventura

console.log(
  `Com a organização de seus itens atuais, os invasores se preparam para a batalha. ${nome} e um de seus parceiros, estão na traseira do caminhão com suas armas prontas para o ataque; enquanto isso, o outro dirige o veículo vestindo o uniforme do condutor morto, para entrar sem ser percebido.\n`
);

console.log(
  `Ao chegar no portão da base, o homem disfarçado utiliza o crachá do inimigo falecido e entra na base. Ao passar, ele é parado por um segurança, que pede para entrar com o caminhão na garagem para uma vistoria. \n`
);

console.log(
  `No instante em que o segurança abre as portas da traseira do caminhão para averiguar, ${classe} pega a submetralhadora e dá uma coronhada na cabeça dele, que cai no chão \n`
);

inimigosEncontrados.push({
  Identificado_como: "Segurança",
  Estado: "Caído",
  Arma: "Stun Gun",
  Elemento_da_arma: "Energia",
});

console.table(inimigosEncontrados);

if (forca + 15 >= 20) {
  // +15 pois ambos os criminosos o seguraram
  console.log(
    `O segurança é segurado fortemente contra o chão da garagem, e, friamente, coronhadas frenéticas são desferidas contra seu rosto. O desfigurado (palavra perfeita para descrever o estado dele após os golpes), morre no chão da garagem. Seu corpo é colocado acima do outro no compartimento do veículo.\n`
  );

  inimigosEncontrados[1].Estado = "Morto";

  for (let i = 0; i < inimigosEncontrados.length; i++) {
    if (
      inimigosEncontrados[i].Estado === "Morto" &&
      inimigosEncontrados[i].Arma
    ) {
      // passa a arma do inimigo morto para o Saco De Capacidade Infinita
      sacoDeCapacidadeInfinita.push({
        Arma: inimigosEncontrados[i].Arma,
        Elemento: inimigosEncontrados[i].Elemento_da_arma,
      });

      // tira a arma do inimigo morto
      inimigosEncontrados[i].Arma = "";
      inimigosEncontrados[i].Elemento_da_arma = "";
    }
  }
} else {
  console.log(`O segurança consegue escapar e chama reforços\n`);
}

inimigosEncontrados[1].Identificado_como = "Desfigurado";

console.log(`Armas atuais de ${nome}:`);
console.log(sacoDeCapacidadeInfinita);

console.log(`Inimigos enfrentados até agora por ${classe}:`);
console.log(inimigosEncontrados);

salasExploradas = ["Estacionamento na garagem"];

// 4- Gerenciamento de Salas com For (cada sala visitada terá um evento diferente dependendo da ordem)
// A Esploração da Base

console.log(
  `Após saquear a arma do segurança morto, eles seguem furtivos para uma porta ao fundo da garagem, o primeiro corredor\n`
);
salasExploradas.push("O Primeiro Corredor");

inimigosEncontrados.push({
  Identificado_como: "Guarda_Primeiro_Corredor",
});

for (let i = 0; i < salasExploradas.length; i++) {
  let sala = salasExploradas[i];

  if (sala === "O Primeiro Corredor" && i === 1) {
    console.log(`Sala ${i}: ${sala}`);
    console.log(`Um guarda-de-segurança está de costas e vulnerável\n`);

    if (sacoDeCapacidadeInfinita.Arma === "Stun Gun") {
      console.log(
        `${nome} derruba o guarda com sua arma de choque, desmaiando-o\n`
      );
      inimigosEncontrados[2].Estado - "Desmaiado";
    } else {
    console.log(
      `Ao colocarem seus pés no corredor, um guarda que antes estava virado de costas, de repente, como se pressentisse perigo, se vira bruscamente e os nota. Por não ter nenhuma arma e estar em desvantagem numérica, ele tenta correr para uma porta no final do corredor\n`
    );
    if (agilidade > 60) {
      console.log(
        `Os criminosos conseguem alcançar o homem, e um dos parceiros de ${classe} segura sua cabeça e força atrito contra o rosto dele e a parede; antes branca, agora vermelha de sangue.\n`
      );
      inimigosEncontrados[2].Estado = "Morto";
      console.log(`Eles seguem `);
      
    } else {
      console.log(
        `Chegando na sala, ele chama a atenção de outros dois funcionários da segurança. Rapidamente, eles notam os invasores, e sacam imediatamente suas armas. \n`
      );
      inimigosEncontrados.push(
        {
          Identificado_como: "Funcionário de segurança 1",
          Estado: "Vivo",
          Arma: "Punhal",
        },
        {
          Identificado_como: "Funcionário de segurança 2",
          Estado: "Vivo",
          Arma: "Cassetete",
        }
      );
      if (agilidade > 40) {
        console.log(
          `Um dos aliados de ${nome} puxa rapidamente seu revólver e atira na cabeça de um dos homens \n`
        );
      } else {
        console.log(
          `Ao notar as problemáticas da situação, os funcionários do local avançam contra os invasores, que saem correndo e fecham a porta atrás de si. Eles escutam os seguranças chamando reforços e, e decidem avançar com tudo que podem no prédio. Arrombam portas, esmagam pessoas, correm por todo lado, e se não fossem tão bem treinados, não seriam capazes de escapar da orda de agentes que os persegue. Felizmente, alcançam o topo do prédio, e, na última sala, quebram os peinéis de segurança e assim que avistam o punhal, o roubam. Escapando pelos telhados e se pendurando pelo prédio, roubam um dos carros e atropelam todo no caminho. Eles conseguem escapar.`
        );
      }
    }
  }
}
}
console.table(inimigosEncontrados);
console.log(`Sua misão foi concluída, e os malfeitores permanecem desconhecidos. Sobre seu próximo passo, não há informações, mas acredita-se que irão atrás da "Salvação"`);
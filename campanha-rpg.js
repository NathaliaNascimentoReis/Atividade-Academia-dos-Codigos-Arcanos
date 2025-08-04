// 1. A Jornada do Vilão: Ficha e apresentação do personagem
let nome = "Desconhecido";
let idade = "Desconhecida";
let nivel = 65;
let vida = 55;
let classe = "Ladino";
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
let furtividade = 15;
let pontaria = 15;

console.log(`🎮 Nível: ${nivel}, ❤️ Vida: ${vida}, 🛡️ Defesa Final: ${defesa}, 🪙 Moedas de Ouro: ${moedas}, ✨ XP final: ${xp}.\n`);

// 3. Equipamentos
const arma = "Pistola Mágica";
const danoBaseDaArma = 12;
const elementoDaArma = "Fogo";
const equipamento = "Hoverboard Mágico";
const elementoDoEquipamento = "Energia";
const bonusDoEquipamento = 5;
let agilidadeFinal = agilidade + bonusDoEquipamento;

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
    nivel ++;
    agilidadeFinal += 15;
    defesaFinal += 15;
    percepcao += 15;
    vidaFinal += 10;
    xp = 0;

    if (nivel = 66){
        maana = 20; //por ter alcançado nível 66, desbloqueou MAANA e habilidades mágicas
        forca = 20; //por ter alcançado nível 66, desbloqueou o atributo FORÇA
    };
}; 

console.log(`Status e atributos atualizados:`);
console.log(`🎮 Nível: ${nivel}, ❤️ Vida: ${vidaFinal}, 🛡️ Defesa: ${defesaFinal}, 🪄 Maana: ${maana}, 🪙 Moedas de Ouro: ${moedasFinal}, ✨ XP atual: ${xp}.`);
console.log(`⚡Agilidade: ${agilidadeFinal}, 👊 Força ${forca}, 👀 Percepção: ${percepcao} \n`);
console.log(`Após roubar e vender com sucesso o Elixir, ${nome} se prepara para roubar o próximo item mágico: 'A Manopla de Scripts'. Para concluir este objetivo, a primeira etapa é adicionar próteses de cyberpsicose, que dará a possibilidade de combinar Maana com objetos tecnológicos, potencializando suas capacidades!`);

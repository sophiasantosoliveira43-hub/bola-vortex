import { ProductEdition, Hotspot, PlayerRoleInfo, Review, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/volleyball_hero_1789244121102.jpg';
export const DETAIL_IMAGE = '/src/assets/images/volleyball_detail_1789244136660.jpg';
export const ACTION_IMAGE = '/src/assets/images/volleyball_action_1789244151415.jpg';

export const PRODUCT_SPECS = [
  { label: 'Circunferência', value: '65 - 67 cm', detail: 'Padrão Oficial FIVB Pro' },
  { label: 'Peso Calibrado', value: '260 - 280 g', detail: 'Equilíbrio aerodinâmico milimétrico' },
  { label: 'Pressão Recomendada', value: '4.25 - 4.61 psi (0.30 - 0.325 kgf/cm²)', detail: 'Retenção ultra-longa' },
  { label: 'Superfície', value: 'Microfibra Dimpled PU Japan', detail: 'Toque aveludado anti-deslizante' },
  { label: 'Construção', value: 'Thermal-Fusion 18 Painéis', detail: 'Sem costura, 0% absorção de umidade' },
  { label: 'Câmara Interna', value: 'Butil Premium Dupla Vedação', detail: 'Válvula hermética anti-vazamento' },
];

export const EDITIONS: ProductEdition[] = [
  {
    id: 'olympic-azure',
    name: 'Vortex Pro Olympic Azure',
    subtitle: 'A clássica campeã de quadra e praia',
    colorName: 'Azul Real & Amarelo Solar',
    colorHex: '#1d4ed8',
    secondaryHex: '#eab308',
    badge: 'Mais Vendida',
    image: HERO_IMAGE,
    inStock: true,
  },
  {
    id: 'cyber-gold',
    name: 'Vortex Pro Gold Master Edition',
    subtitle: 'Edição limitada com detalhes em folha dourada',
    colorName: 'Branco Pérola & Dourado Nobre',
    colorHex: '#f8fafc',
    secondaryHex: '#ca8a04',
    badge: 'Edição Limitada',
    image: DETAIL_IMAGE,
    inStock: true,
  },
  {
    id: 'stealth-night',
    name: 'Vortex Pro Night Spike Edition',
    subtitle: 'Alto contraste para partidas noturnas e arena indoor',
    colorName: 'Grafite Fosco & Laranja Eletrizante',
    colorHex: '#0f172a',
    secondaryHex: '#f97316',
    badge: 'Novo Lançamento',
    image: ACTION_IMAGE,
    inStock: true,
  },
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'surface',
    title: 'Micro-Covinhas Aerodinâmicas (Dimple Tech)',
    description: 'Assim como em bolas de golfe de elite, as centenas de micro-covinhas reduzem a turbulência do ar ao redor da bola. O resultado? Saques flutuantes com efeito imprevisível e saques viagem que cortam o ar como um míssil.',
    x: 48,
    y: 36,
    stat: '+34%',
    statLabel: 'Mais estabilidade de voo',
  },
  {
    id: 'softtouch',
    title: 'Camada Pro-Soft de Amortecimento de Impacto',
    description: 'Camada intermediária de espuma de polímero termoplástico que dissipa o impacto na recepção. Você recebe ataques a 110 km/h sem aquela dor que arde no antebraço, garantindo manchetes perfeitas.',
    x: 28,
    y: 62,
    stat: '0 dor',
    statLabel: 'Conforto supremo no passe',
  },
  {
    id: 'thermal-seam',
    title: 'Junção Térmica Sem Linhas (Seamless Bond)',
    description: 'Lâminas fundidas a quente eliminam atritos causados por linhas tradicionais. A curvatura é 100% contínua em qualquer ângulo, assegurando que o toque saia exatamente onde a ponta dos seus dedos apontar.',
    x: 72,
    y: 45,
    stat: '100%',
    statLabel: 'Esfericidade consistente',
  },
  {
    id: 'butyl-core',
    title: 'Câmara de Butil Hi-Tech com Válvula Auto-Selante',
    description: 'Mantém a calibragem ideal até 3x mais tempo do que bolas convencionais com câmara de borracha comum. Nunca mais jogue com bola murcha ou ovalizada.',
    x: 60,
    y: 75,
    stat: '90 dias',
    statLabel: 'Sem precisar recalibrar',
  },
];

export const PLAYER_ROLES: PlayerRoleInfo[] = [
  {
    id: 'levantador',
    role: 'Levantadores (Setters)',
    namePt: 'Para quem rege o jogo',
    tagline: 'Toque cirúrgico, aderência pura nos dedos e zero escorregamento',
    quote: '"Com essa bola, a saída de bola da mão é suave e instantânea. A microtextura dá uma firmeza que permite colocar a bola na mão do ponteiro até na inversão rápida."',
    benefits: [
      'Grip tátil que não escorrega mesmo com as mãos suadas',
      'Rotação limpa permitindo levantamentos rápidos de tempo e costas',
      'Amortecimento que engole o peso da bola na empunhadura',
    ],
    statHighlight: {
      value: '99.4%',
      label: 'Precisão de posicionamento',
    },
  },
  {
    id: 'atacante',
    role: 'Ponteiros e Opostos (Spikers)',
    namePt: 'Para quem define o ponto',
    tagline: 'Ressalto explosivo no braço e estalo potente que ecoa no ginásio',
    quote: '"O impacto na hora da cortada é inacreditável. Você sente a bola afundar na palma e ser catapultada para o chão com máxima velocidade."',
    benefits: [
      'Sensação nítida no momento de atacar diagonal ou paralela',
      'Feedback sonoro e mecânico marcante que impõe respeito na quadra',
      'Não deforma após centenas de pancadas violentas contra o piso',
    ],
    statHighlight: {
      value: '+12 km/h',
      label: 'Velocidade percebida de ataque',
    },
  },
  {
    id: 'libero',
    role: 'Líberos e Defensores',
    namePt: 'Para quem salva todas no chão',
    tagline: 'Manchete macia que anula o impacto e sobe na medida para o contra-ataque',
    quote: '"A diferença no antebraço é da água pro vinho. Bolas pesadas de saque viagem amortecem com facilidade e sobem na mão de quem vai levantar."',
    benefits: [
      'Acabamento aveludado que não arde e não deixa marcas roxas',
      'Trajetória previsível que facilita a leitura de efeito do adversário',
      'Excelente resposta em mergulhos e defesas de mão espalmada',
    ],
    statHighlight: {
      value: '-42%',
      label: 'Menos choque no antebraço',
    },
  },
  {
    id: 'amador',
    role: 'Vôlei de Fim de Semana & Amigos',
    namePt: 'Para quem ama o esporte sem abrir mão do conforto',
    tagline: 'O jogo flui com rallys muito mais longos e todo mundo quer jogar',
    quote: '"Todo mundo do nosso racha elogiou. Ninguém saiu com os braços ardendo e os rallys duraram o dobro do tempo. Essa bola é realmente incrível!"',
    benefits: [
      'Qualquer um consegue controlar a bola logo no primeiro toque',
      'Ideal tanto para quadra de cimento, piso flutuante de madeira ou areia limpa',
      'Durabilidade que dura anos mesmo com uso semanal constante',
    ],
    statHighlight: {
      value: '2.5x',
      label: 'Rallys mais longos e divertidos',
    },
  },
];

export const COMPARISONS = [
  {
    feature: 'Toque na manchete',
    vortexPro: 'Ultra-macio com camada de espuma reativa (zero ardência)',
    standardBall: 'Duro, plástico rígido que machuca o antebraço',
    advantage: true,
  },
  {
    feature: 'Estabilidade em voo (Saque e Passe)',
    vortexPro: 'Aerodinâmica Dimple com fluxo laminar sem desvios falsos',
    standardBall: 'Oscilações irregulares e perda repentina de sustentação',
    advantage: true,
  },
  {
    feature: 'Aderência e Grip no Levantamento',
    vortexPro: 'Microfibra japonesa com controle mesmo com suor',
    standardBall: 'Superfície lisa que escorrega facilmente',
    advantage: true,
  },
  {
    feature: 'Construção e Esfericidade',
    vortexPro: '18 painéis fusionados termicamente (100% estanque)',
    standardBall: 'Costurada à mão ou máquina com frestas que entram umidade',
    advantage: true,
  },
  {
    feature: 'Retenção de Calibragem',
    vortexPro: 'Câmara de butil de alta densidade (até 90 dias sem bomba)',
    standardBall: 'Câmara de látex simples (precisa calibrar todo treino)',
    advantage: true,
  },
  {
    feature: 'Certificação de Dimensões',
    vortexPro: 'Padrão Rigoroso FIVB Oficial (65-67cm / 260-280g)',
    standardBall: 'Pesos variáveis fora do padrão de jogo',
    advantage: true,
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rodrigo M. "Carioca"',
    role: 'Levantador Semi-Profissional',
    teamOrCity: 'São Paulo - SP',
    rating: 5,
    date: 'Ontem',
    verified: true,
    highlight: 'Essa bola é simplesmente surreal, a melhor que já toquei.',
    comment:
      'Eu jogo vôlei há 14 anos e já tive todas as bolas famosas do mercado. Quando peguei a Vortex Pro na mão, a primeira coisa que salta aos olhos é a maciez sem ser fofa demais. No levantamento ela não escapa nem com a mão suada. Meus ponteiros elogiaram o peso do ressalto no ataque.',
  },
  {
    id: '2',
    author: 'Camila Fernandes',
    role: 'Treinadora & Atleta de Vôlei',
    teamOrCity: 'Belo Horizonte - MG',
    rating: 5,
    date: 'Há 3 dias',
    verified: true,
    highlight: 'As atletas pararam de reclamar de dor no antebraço no mesmo dia!',
    comment:
      'Comprei o kit com 6 para o meu clube de treinamento juvenil. A adaptação foi instantânea. Meninas que tinham receio de entrar na manchete contra saques mais fortes ganharam confiança absurda. A durabilidade do material é surpreendente.',
  },
  {
    id: '3',
    author: 'Lucas Siqueira',
    role: 'Capitão de Time Universitário',
    teamOrCity: 'Curitiba - PR',
    rating: 5,
    date: 'Há 1 semana',
    verified: true,
    highlight: 'Essa bola é incrível demais! O saque viagem faz uma curva perfeita.',
    comment:
      'O controle no saque viagem é de outro planeta. O som que ela faz quando bate na mão e explode no chão é viciante. Chegou super rápido em casa com a calibragem já certinha. Vale cada centavo.',
  },
  {
    id: '4',
    author: 'Juliana Paes Costa',
    role: 'Jogadora de Vôlei de Quadra e Praia',
    teamOrCity: 'Rio de Janeiro - RJ',
    rating: 5,
    date: 'Há 2 semanas',
    verified: true,
    highlight: 'Nunca mais compro outra marca. Sensação de bola de olimpíada.',
    comment:
      'Todo fim de semana nosso racha junta mais de 20 pessoas. Sempre tinha briga sobre qual bola usar. Agora todo mundo só quer a Vortex Pro. Se alguém tira ela do jogo pra guardar, o pessoal reclama!',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Por que todo mundo diz que essa bola é incrível para jogar vôlei?',
    answer:
      'Porque ela resolve as duas maiores dores de quem joga vôlei: a dor no braço ao receber ataques fortes e a falta de controle e escorregamento na ponta dos dedos. Combinamos microfibra premium japonesa com amortecimento inteligente e micro-covinhas aerodinâmicas que garantem uma trajetória milimétrica.',
    category: 'jogo',
  },
  {
    question: 'A bola possui as medidas e peso oficiais da FIVB?',
    answer:
      'Sim! A Vortex Pro segue rigorosamente as dimensões oficiais internacionais: circunferência de 65 a 67 cm e peso de 260 a 280 gramas, calibrada sob tolerâncias olímpicas de precisão.',
    category: 'jogo',
  },
  {
    question: 'Posso usar essa bola na praia, grama ou somente em quadra indoor?',
    answer:
      'Ela foi concebida com tecnologia Thermal-Fusion de selagem térmica que não possui linhas expostas e não absorve água nem areia. Funciona de maneira espetacular tanto em quadras de madeira/cimento indoor quanto em quadras externas e areia limpa.',
    category: 'jogo',
  },
  {
    question: 'Qual é a calibragem de ar recomendada para a Vortex Pro?',
    answer:
      'A calibragem recomendada é entre 4.25 e 4.61 psi (aproximadamente 0.30 a 0.325 kgf/cm²). A bola já vai pré-testada de fábrica e sua câmara de butil mantém a pressão ideal por meses.',
    category: 'cuidados',
  },
  {
    question: 'Como funciona a garantia "Teste Incrível de 90 Dias"?',
    answer:
      'Temos tanta certeza de que essa bola vai transformar suas partidas de vôlei que você tem 90 dias inteiros para testá-la em quantos jogos quiser. Se por qualquer motivo você não achar que ela é a bola mais incrível que já usou, devolvemos 100% do seu dinheiro sem burocracia.',
    category: 'entrega',
  },
  {
    question: 'Qual é o prazo de entrega e como é calculada a entrega?',
    answer:
      'Oferecemos Frete Expresso Grátis para todo o Brasil em compras acima de R$ 199. Enviamos em até 24 horas úteis com código de rastreamento enviado diretamente no seu WhatsApp e e-mail.',
    category: 'entrega',
  },
];

export const BUNDLES = [
  {
    id: 'single' as const,
    title: 'Individual Pro',
    subtitle: '1 Bola Vortex Pro Oficial',
    tag: 'Essencial',
    priceOriginal: 349,
    priceCurrent: 247,
    installments: '6x de R$ 41,16 sem juros',
    pixDiscount: 'R$ 222,30 no PIX (10% OFF)',
    features: [
      '1x Bola de Vôlei Vortex Pro (Edição a sua escolha)',
      '1x Bico agulha metálico de calibragem',
      'Certificado de Autenticidade e Medidas FIVB',
      'Garantia Incondicional de 90 Dias',
    ],
    popular: false,
  },
  {
    id: 'combo' as const,
    title: 'Combo Atleta Pro',
    subtitle: '1 Bola + Bomba Dupla Ação + Sacola Mesh',
    tag: 'Mais Escolhido',
    priceOriginal: 489,
    priceCurrent: 319,
    installments: '10x de R$ 31,90 sem juros',
    pixDiscount: 'R$ 287,10 no PIX (10% OFF)',
    features: [
      '1x Bola de Vôlei Vortex Pro (Edição a sua escolha)',
      '1x Mini Bomba de Alta Pressão Dupla Ação com Manômetro',
      '1x Sacola respirável anti-odor para transporte',
      '2x Agulhas de reposição + lubrificante de válvula',
      'Frete Grátis Prioritário para todo o Brasil',
      'Garantia Incondicional de 90 Dias',
    ],
    popular: true,
  },
  {
    id: 'team' as const,
    title: 'Kit Equipe & Treino',
    subtitle: '6 Bolas + Bag Profissional + Calibrador',
    tag: 'Melhor Custo-Benefício',
    priceOriginal: 2190,
    priceCurrent: 1290,
    installments: '12x de R$ 107,50 sem juros',
    pixDiscount: 'R$ 1.161,00 no PIX (10% OFF)',
    features: [
      '6x Bolas de Vôlei Vortex Pro (Pode mesclar cores)',
      '1x Mala Bag reforçada para 6 bolas com alça almofadada',
      '1x Manômetro Digital de Precisão Esportiva',
      '1x Bomba de Alta Pressão de Chão com mangueira flexível',
      'Frete Grátis Express + Atendimento VIP para Clubes',
      'Garantia Estendida de 1 Ano',
    ],
    popular: false,
  },
];

export interface ContactInfo {
  name: string;
  tagline: string;
  boschNetwork: string;
  phones: string[];
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  email: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    full: string;
    mapsUrl: string;
    wazeUrl: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  stats: {
    yearsExperience: string;
    vehiclesServiced: string;
    customerRating: string;
    boschCertified: string;
  };
}

export const contactInfo: ContactInfo = {
  name: "Auto Car Bosch Car Service",
  tagline: "Centro Automotivo de Alta Precisão & Mecânica Geral",
  boschNetwork: "Rede Oficial Bosch Car Service",
  phones: ["(38) 3214-7590", "(38) 3082-0265"],
  whatsapp: "553832147590",
  whatsappDisplay: "(38) 3214-7590",
  whatsappUrl: "https://wa.me/553832147590?text=Ol%C3%A1%2C+gostaria+de+agendar+um+or%C3%A7amento+na+Auto+Car+Bosch+Car+Service.",
  email: "autocarmg@yahoo.com.br",
  address: {
    street: "Av. Itamar Caldeira Brant",
    number: "50",
    neighborhood: "Lourdes",
    city: "Montes Claros",
    state: "MG",
    zip: "39400-701",
    full: "Av. Itamar Caldeira Brant, 50 - Bairro Lourdes, Montes Claros - MG, 39400-701",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Auto+Car+Montes+Claros+Av+Itamar+Caldeira+Brant+50",
    wazeUrl: "https://waze.com/ul?q=Av.+Itamar+Caldeira+Brant,+50,+Montes+Claros+-+MG",
  },
  hours: {
    weekdays: "Segunda a Sexta: 07:30 às 18:00",
    saturday: "Sábado: 08:00 às 12:00 (Plantão/Agendados)",
    sunday: "Domingo: Fechado",
  },
  stats: {
    yearsExperience: "24+",
    vehiclesServiced: "20.000+",
    customerRating: "4.9 / 5.0",
    boschCertified: "100%",
  },
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  highlights: string[];
  techUsed: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "injecao-eletronica",
    title: "Injeção Eletrônica & Diagnóstico Computadorizado",
    shortDesc: "Escaneamento avançado com tecnologia Bosch para identificar anomalias em sensores, módulos e queima de combustível.",
    fullDesc: "Utilizamos scanners originais da família Bosch KTS de última geração para leitura profunda dos módulos do veículo. Diagnóstico preciso de falhas de ignição, perda de potência, consumo excessivo, atuadores, bicos injetores e sensores de oxigênio.",
    icon: "/icons/injecao-eletronica.svg",
    highlights: ["Scanners oficiais Bosch KTS", "Limpeza e teste de bicos por ultrassom", "Análise de emissões e sonda lambda", "Reprogramação e calibração de módulos"],
    techUsed: "Equipamentos de telemetria Bosch & Osciloscópio Digital",
    badge: "Mais Procurado",
  },
  {
    id: "alinhamento-balanceamento",
    title: "Alinhamento 3D Laser & Balanceamento",
    shortDesc: "Geometria milimétrica computadorizada que garante estabilidade extrema, economia de combustível e vida útil máxima aos pneus.",
    fullDesc: "Alinhamento 3D de alta precisão com leitura instantânea dos ângulos de cáster, câmber e convergência através de refletores de alta definição, além de balanceamento dinâmico que elimina qualquer vibração no volante.",
    icon: "/icons/alinhamento-balanceamento.svg",
    highlights: ["Tecnologia de captura óptica 3D", "Preservação do desgaste uniforme dos pneus", "Eliminação de trepidação em altas velocidades", "Ajuste milimétrico de suspensão"],
    techUsed: "Rampa e Sistema de Alinhamento 3D Computadorizado",
    badge: "Alta Precisão",
  },
  {
    id: "ar-condicionado",
    title: "Climatização & Ar-Condicionado Automotivo",
    shortDesc: "Recarga ecológica de gás, localização de microvazamentos com contraste UV e oxi-sanitização contra bactérias e fungos.",
    fullDesc: "Manutenção completa do sistema de ar-condicionado de veículos nacionais e importados. Estação de carga automatizada que recolhe, recicla e injeta a quantidade exata de gás e óleo lubrificante de compressor, além de higienização por ozônio.",
    icon: "/icons/ar-condicionado.svg",
    highlights: ["Carga de gás ecológica R134a / R1234yf", "Higienização por Oxi-Sanitização (elimina ácaros e vírus)", "Troca de filtro de cabine antipólen", "Reparo em compressores e mangueiras"],
    techUsed: "Estação Automática de Recarga e Detector UV",
  },
  {
    id: "mecanica-geral",
    title: "Mecânica Geral & Revisão de Motores",
    shortDesc: "Manutenção preventiva e corretiva completa do conjunto motriz, cabeçotes, correias sincronizadoras e juntas.",
    fullDesc: "Equipe com certificação Doutor em Motores Cofap e Metal Leve. Executamos desde a simples troca preventiva de correia dentada e bomba d'água até a retífica completa de motores a gasolina, flex e diesel leve.",
    icon: "/icons/mecanica-geral.svg",
    highlights: ["Certificação Doutor em Motores Cofap e Metal Leve", "Troca de kit de correia dentada e tensores", "Revisão e teste de compressão de cilindros", "Manutenção de embreagem e câmbio"],
    techUsed: "Torquímetros aferidos e ferramentas específicas de sincronismo",
    badge: "Padrão de Fábrica",
  },
  {
    id: "auto-eletrica",
    title: "Auto Elétrica & Eletrônica Embarcada",
    shortDesc: "Diagnóstico de redes CAN, baterias, alternadores, motores de partida, iluminação e sistemas de conforto elétrico.",
    fullDesc: "Solução definitiva para problemas elétricos complexos. Testes de fuga de corrente, saúde da bateria com analisador de condutância Bosch, reparo de chicotes, iluminação LED homologada e alternadores.",
    icon: "/icons/auto-eletrica.svg",
    highlights: ["Análise computadorizada de bateria e alternador", "Reparo em motores de partida e ignição", "Diagnóstico de rede CAN e curto-circuitos", "Instalação de componentes elétricos de alta qualidade"],
    techUsed: "Testador de Baterias e Alternadores Bosch BAT 131",
  },
  {
    id: "freios-suspensao",
    title: "Freios ABS, Suspensão & Direção",
    shortDesc: "Segurança máxima com checagem computadorizada de pastilhas, discos de alta performance, amortecedores e terminais.",
    fullDesc: "O sistema de frenagem é o item mais crítico do seu veículo. Realizamos sangria de fluido de freio por pressão garantindo ausência de ar, aferição de espessura de discos com micrômetro e teste de amortecedores.",
    icon: "/icons/servicos-mecanica.svg",
    highlights: ["Troca de fluido de freio por máquina sob pressão", "Discos e pastilhas homologadas (Fremax/Bosch/Cobreq)", "Inspeção completa de buchas, pivôs e bandejas", "Amortecedores com garantia de fábrica"],
    techUsed: "Sangrador pneumático e micrômetros de precisão",
    badge: "Segurança Total",
  },
];

export interface SymptomItem {
  id: string;
  title: string;
  icon: string;
  symptom: string;
  cause: string;
  solution: string;
  recommendedService: string;
  urgency: "Urgente" | "Atenção" | "Preventivo";
}

export const diagnosticSymptoms: SymptomItem[] = [
  {
    id: "injecao-luz",
    title: "Luz da Injeção Acesa no Painel",
    icon: "AlertTriangle",
    symptom: "A luz amarela do motor acendeu ou está piscando, o carro pode perder potência ou falhar na aceleração.",
    cause: "Falha na leitura da sonda lambda, velas desgastadas, bobina ineficiente ou bico injetor entupido.",
    solution: "Escaneamento completo com scanner Bosch KTS para leitura dos códigos de falha DTC e teste de sensores.",
    recommendedService: "Injeção Eletrônica & Diagnóstico",
    urgency: "Urgente",
  },
  {
    id: "volante-trepidando",
    title: "Volante Trepidando ou Puxando",
    icon: "Compass",
    symptom: "Em velocidades acima de 80km/h o volante vibra, ou o carro tende a puxar para um dos lados em linha reta.",
    cause: "Desbalanceamento de rodas, perda de peso de chumbo ou desalinhamento da suspensão após impactos em buracos.",
    solution: "Alinhamento 3D a laser e balanceamento dinâmico nas 4 rodas com aferição de folgas de pivôs e buchas.",
    recommendedService: "Alinhamento 3D & Balanceamento",
    urgency: "Atenção",
  },
  {
    id: "ar-fraco",
    title: "Ar-Condicionado Fraco ou com Mau Cheiro",
    icon: "Wind",
    symptom: "O ar demora para resfriar a cabine, sai ar morno ou há um odor desagradável ao ligar a ventilação.",
    cause: "Nível baixo de fluido refrigerante por microvazamento e acúmulo de fungos e bactérias no filtro de cabine.",
    solution: "Carga ecológica de gás com teste de estanqueidade UV e higienização por ozônio (oxi-sanitização).",
    recommendedService: "Climatização & Ar-Condicionado",
    urgency: "Preventivo",
  },
  {
    id: "barulho-freio",
    title: "Chiado ou Pedal Baixo ao Frear",
    icon: "Disc",
    symptom: "Ruído metálico ao pisar no freio, pedal esponjoso ou trepidação ao reduzir a velocidade.",
    cause: "Pastilhas no final da vida útil raspando nos discos, fluido de freio vencido com alta umidade ou discos empenados.",
    solution: "Substituição de pastilhas com componentes de baixo ruído, retífica ou troca de discos e sangria de fluido.",
    recommendedService: "Freios ABS, Suspensão & Direção",
    urgency: "Urgente",
  },
  {
    id: "dificuldade-partida",
    title: "Dificuldade ao Dar Partida no Motor",
    icon: "Zap",
    symptom: "O motor gira pesado, o painel apaga ao virar a chave ou o carro só pega no tranco ou cabos de emergência.",
    cause: "Bateria sulfatada, alternador não recarregando na voltagem ideal ou motor de partida com escovas gastas.",
    solution: "Teste de condutância e vida útil da bateria com testador Bosch BAT e inspeção do sistema de carga.",
    recommendedService: "Auto Elétrica & Eletrônica",
    urgency: "Urgente",
  },
  {
    id: "revisao-km",
    title: "Revisão Preventiva por KM ou Tempo",
    icon: "ShieldCheck",
    symptom: "Carro atingiu 10.000km desde a última troca, ou você está planejando uma viagem com a família.",
    cause: "Desgaste natural de óleos lubrificantes, filtros, palhetas e fluidos que perdem suas propriedades químicas.",
    solution: "Check-up completo de mais de 40 itens 'de para-choque a para-choque' com garantia de procedência Bosch.",
    recommendedService: "Mecânica Geral & Revisão Preventiva",
    urgency: "Preventivo",
  },
];

export const partnerBrands = [
  { name: "Bosch", logo: "/marcas/img-01.png" },
  { name: "Cofap", logo: "/marcas/img-02.png" },
  { name: "Nakata", logo: "/marcas/img-03.png" },
  { name: "Metal Leve", logo: "/marcas/img-04.png" },
  { name: "Mahle", logo: "/marcas/img-05.png" },
  { name: "Magneti Marelli", logo: "/marcas/img-06.png" },
  { name: "Continental", logo: "/marcas/img-07.png" },
  { name: "Fremax", logo: "/marcas/img-08.png" },
  { name: "Cobreq", logo: "/marcas/img-09.png" },
  { name: "SKF", logo: "/marcas/img-10.png" },
  { name: "NGK", logo: "/marcas/img-11.png" },
  { name: "Dayco", logo: "/marcas/img-12.png" },
];

export interface TestimonialItem {
  name: string;
  initials: string;
  avatarColor: string;
  vehicle: string;
  text: string;
  rating: number;
  date: string;
  city: string;
  localGuide?: string;
  ownerReply?: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Rodrigo Vasconcelos",
    initials: "RV",
    avatarColor: "#1a73e8",
    vehicle: "Jeep Compass Longitude",
    text: "Excelente atendimento! O diagnóstico da injeção foi cirúrgico com os equipamentos da Bosch. Enquanto outras oficinas queriam trocar peças desnecessárias, a Auto Car identificou e corrigiu o sensor exato. Transparência e competência nota 10!",
    rating: 5,
    date: "Há 2 semanas",
    city: "Montes Claros - MG",
    localGuide: "Local Guide · 18 avaliações",
    ownerReply: "Muito obrigado, Rodrigo! A precisão e honestidade no diagnóstico com nossos scanners Bosch KTS são o pilar da nossa oficina. Conte sempre conosco!",
  },
  {
    name: "Mariana Alencar",
    initials: "MA",
    avatarColor: "#e37400",
    vehicle: "Volkswagen T-Cross",
    text: "Oficina impecável, limpa e super moderna. O alinhamento 3D a laser deixou o carro perfeito na viagem para Belo Horizonte pela BR-135. Atendimento rápido pelo WhatsApp e preço justo com peças originais. Recomendo de olhos fechados!",
    rating: 5,
    date: "Há 1 mês",
    city: "Montes Claros - MG",
    localGuide: "Cliente Verificado",
    ownerReply: "Ficamos muito felizes com seu feedback, Mariana! Segurança na estrada e conforto para sua família é nossa prioridade absoluta.",
  },
  {
    name: "Carlos Eduardo Mendes",
    initials: "CM",
    avatarColor: "#0f9d58",
    vehicle: "Toyota Corolla Hybrid",
    text: "Levo meus carros na Auto Car desde a época da oficina antiga do Sr. Batata, e agora com o Danilo e Edmar Jr a estrutura se tornou uma das melhores de Minas Gerais. O padrão Bosch Car Service passa total tranquilidade.",
    rating: 5,
    date: "Há 3 semanas",
    city: "Montes Claros - MG",
    localGuide: "Local Guide · 34 avaliações",
    ownerReply: "Grande Carlos! Uma honra enorme ter clientes amigos de longa data como você acompanhando essa evolução de mais de duas décadas. Um forte abraço!",
  },
  {
    name: "Fabiano Antunes",
    initials: "FA",
    avatarColor: "#8e24aa",
    vehicle: "Honda HR-V Touring",
    text: "No calor de Montes Claros ar-condicionado é item de sobrevivência. Fizeram a recarga ecológica com contraste e a higienização com ozônio. O ar voltou a gelar no talo sem cheiro nenhum. Serviço rápido e equipe muito educada.",
    rating: 5,
    date: "Há 1 mês",
    city: "Montes Claros - MG",
    localGuide: "Cliente Verificado",
    ownerReply: "Agradecemos a confiança, Fabiano! Nossa recicladora automática de gás garante o rendimento máximo do sistema de climatização. Volte sempre!",
  },
];

export const tipsArticles = [
  {
    id: "cambio-manual-automatico",
    title: "Entenda as diferenças entre o câmbio manual e automático",
    summary: "Carros com câmbio automático ganham cada vez mais espaço no Brasil. Saiba quando trocar o óleo da transmissão e como evitar desgastes prematuros.",
    category: "Transmissão",
    readTime: "3 min de leitura",
    image: "/dicas/thumb__1312d-1.jpg",
  },
  {
    id: "cuidados-embreagem",
    title: "Cuidados com a embreagem evitam desgaste precoce",
    summary: "Fundamental para colocar o veículo em movimento, pequenos hábitos como segurar o carro na ladeira pela embreagem reduzem a vida útil drasticamente.",
    category: "Mecânica",
    readTime: "4 min de leitura",
    image: "/dicas/thumb__d59f8-5.jpg",
  },
  {
    id: "carro-na-maresia",
    title: "Ao voltar da praia ou estradas de terra, lave o veículo",
    summary: "A maresia e poeiras oxidantes atacam conectores elétricos, borrachas de suspensão e peças metálicas. Veja a forma correta de proteção.",
    category: "Conservação",
    readTime: "2 min de leitura",
    image: "/dicas/thumb__e4e1c-meuautomovelmaresia5.jpg",
  },
  {
    id: "tanque-na-reserva",
    title: "Andar com o tanque na reserva pode queimar a bomba de combustível",
    summary: "O combustível atua como refrigerante da bomba elétrica interna. Rodar frequentemente no limite causa superaquecimento e aspira sujeiras do fundo do tanque.",
    category: "Injeção",
    readTime: "3 min de leitura",
    image: "/dicas/thumb__16e36-4.jpg",
  },
];

export const faqsData = [
  {
    q: "Como funciona a garantia dos serviços na Auto Car?",
    a: "Como membros oficiais da Rede Bosch Car Service, oferecemos garantia total tanto nas peças de reposição genuínas quanto na mão de obra especializada. Qualquer serviço é registrado em nosso sistema com rastreabilidade completa.",
  },
  {
    q: "Vocês atendem todas as marcas e modelos de veículos?",
    a: "Sim! Nosso conceito é multimarca de alta precisão. Contamos com softwares técnicos Bosch atualizados trimestralmente com dados de mais de 12.000 modelos de automóveis nacionais e importados.",
  },
  {
    q: "Preciso agendar com antecedência para fazer orçamento?",
    a: "Você pode nos visitar diretamente na Av. Itamar Caldeira Brant, 50 (Bairro Lourdes). Porém, para maior conforto e agilidade, recomendamos o agendamento prévio pelo nosso WhatsApp ou formulário online.",
  },
  {
    q: "Quais as formas de pagamento aceitas?",
    a: "Aceitamos cartões de crédito em até 10x sem juros (consulte condições da bandeira), PIX, cartões de débito, dinheiro e faturamento para frotas corporativas cadastradas.",
  },
  {
    q: "O que significa o conceito de manutenção 'de para-choque a para-choque'?",
    a: "Significa que cuidamos de tudo o que seu carro precisa em um único lugar: injeção eletrônica, motor, freios, suspensão, ar-condicionado, pneus, elétrica e revisão periódica, sem que você precise perder tempo visitando múltiplas oficinas.",
  },
];

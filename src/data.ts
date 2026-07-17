import { InsuranceCategory } from './types';

export const PARTICULAR_CATEGORIES: InsuranceCategory[] = [
  {
    id: 'saude',
    name: 'Saúde',
    icon: 'Heart',
    description: 'Mais do que um seguro, uma parceria de bem-estar com acesso à prestigiada Rede Médis, médico online e assistências inovadoras para garantir a sua tranquilidade.',
    commercialPitch: 'Escolha a proteção que melhor se adapta à sua vida. Desde soluções completas para toda a família até planos dedicados para seniores ou proteção dentária imediata, sem barreiras.',
    accentColor: '#90BC0D', // Ageas Green
    modalities: [
      {
        id: 'saude-familia',
        name: 'Saúde Família',
        tagline: 'A proteção ideal para cada elemento do seu agregado familiar.',
        description: 'Um seguro de saúde completo que combina hospitalização, ambulatório, saúde mental e parto, adaptando-se ao crescimento da sua família.',
        benefits: [
          'Descontos familiares progressivos até 15% na inclusão de mais membros.',
          'Sem limite de idade de permanência após a subscrição.',
          'Consultas de Medicina Geral e Familiar na Rede Médis por apenas 19€.',
          'Reembolso de despesas fora da rede enviado em apenas 72 horas.',
          'Acesso gratuito à entrega de medicamentos em casa.'
        ],
        coverages: [
          { name: 'Hospitalização', detail: 'Até 1.000.000€ com proteção oncológica reforçada (Opção 3).' },
          { name: 'Assistência Ambulatória', detail: 'Consultas, análises e exames clínicos na rede.' },
          { name: 'Saúde Mental', detail: 'Inclui psicologia, psiquiatria e psicoterapia presencial ou online.' },
          { name: 'Parto', detail: 'Normal e Cesariana incluídos nas opções 2 e 3.', isOptional: true },
          { name: 'Estomatologia', detail: 'Opção de tratamentos dentários com capitais até 1.000€.', isOptional: true },
          { name: 'Doenças Graves', detail: 'Capital de 1.000.000€ para tratamentos internacionais exclusivos (Opção 3).', isOptional: true }
        ],
        exclusions: [
          'Cirurgias meramente estéticas ou tratamentos de emagrecimento.',
          'Doenças mentais ou crónicas preexistentes não declaradas ou aceites.'
        ],
        highlights: [
          { label: 'Rede Médica', value: '+8.000 Locais' },
          { label: 'Consultas', value: 'Desde 19€' },
          { label: 'Desconto Familiar', value: 'Até 15%' }
        ]
      },
      {
        id: 'saude-senior',
        name: 'Saúde Sénior',
        tagline: 'Proteção e assistência especializada dos 55 aos 75 anos.',
        description: 'Criado especificamente para as necessidades desta fase da vida, garantindo acompanhamento médico e apoio domiciliário completo, sem limite de permanência.',
        benefits: [
          'Subscrição facilitada dos 55 aos 75 anos, sem limite de permanência.',
          'Consultas na Rede Médis com copagamento de apenas 17€.',
          'Serviços de assistência domiciliária: fisioterapia, enfermagem e limpeza.',
          'Inclui vacina anual gratuita contra a gripe.',
          'Oferta da primeira consulta com especialista em Medicina Geral ou Interna.'
        ],
        coverages: [
          { name: 'Hospitalização', detail: 'Até 5.000€ na opção Vintage Plus para intervenções urgentes.' },
          { name: 'Assistência Ambulatória', detail: 'Consultas, diagnósticos e análises clínicas.' },
          { name: 'Fisioterapia ao Domicílio', detail: 'Até 10 sessões incluídas por ano no Vintage Plus.' },
          { name: 'Enfermagem ao Domicílio', detail: 'Cuidados de enfermagem especializados sem sair de casa.' },
          { name: 'Doenças Graves', detail: 'Proteção financeira exclusiva de 1.000.000€ no Vintage Plus.', isOptional: true }
        ],
        exclusions: [
          'Tratamentos ou urgências médicas realizadas fora da Rede Médis.',
          'Materiais consumíveis utilizados nas assistências ao domicílio.'
        ],
        highlights: [
          { label: 'Idade de Adesão', value: '55 a 75 anos' },
          { label: 'Consultas na Rede', value: 'Apenas 17€' },
          { label: 'Apoio Domicílio', value: 'Incluído' }
        ]
      },
      {
        id: 'medis-dental',
        name: 'Médis Dental',
        tagline: 'O sorriso mais protegido e brilhante, sem carências.',
        description: 'Um seguro dentário independente e de acesso imediato que permite manter a sua saúde oral em dia com copagamentos reduzidos de apenas 3€.',
        benefits: [
          'Sem questionário médico, sem períodos de carência e sem limite de idade.',
          'Acesso imediato à rede nacional de clínicas Médis Dental de norte a sul.',
          'Copagamento fixo de apenas 3€ para a maioria dos atos frequentes.',
          'Descontos familiares até 20% para manter os sorrisos de todos protegidos.',
          'Acesso a tratamentos premium (implantes, alinhadores invisíveis) a preços convencionados.'
        ],
        coverages: [
          { name: 'Consultas de Medicina Dentária', detail: 'Ilimitadas a 3€ por visita.' },
          { name: 'Destartarização Bimaxilar', detail: 'Até 2 sessões por ano a 3€ cada.' },
          { name: 'Exodontias (Extrações)', detail: 'Ilimitadas, incluindo dentes de leite e siso.' },
          { name: 'Restaurações', detail: 'Até 3 por ano a 3€ cada para tratamento de cáries.' },
          { name: 'Ortodontia (Aparelhos)', detail: 'Estudo incluído a 3€; manutenção por 21€.' },
          { name: 'Implantes e Facetas', detail: 'Acesso a preços de rede convencionados altamente competitivos.' }
        ],
        exclusions: [
          'Tratamentos realizados por dentistas com grau de parentesco direto.',
          'Procedimentos puramente cosméticos realizados fora dos acordos de rede.'
        ],
        highlights: [
          { label: 'Atos Frequentes', value: 'Apenas 3€' },
          { label: 'Carência', value: 'Isento' },
          { label: 'Preço Individual', value: '10,90€/mês' }
        ]
      },
      {
        id: 'medis-light',
        name: 'Médis Light',
        tagline: 'A forma mais simples e económica de proteger a sua saúde.',
        description: 'Um plano de saúde acessível focado no essencial: médico online gratuito, consultas a preços reduzidos e apoio médico de urgência ao domicílio.',
        benefits: [
          'Preço fixo muito acessível de apenas 10,90€ por pessoa/mês.',
          'Sem limite de idade, sem carências e sem necessidade de questionário médico.',
          'Médico Online ilimitado, disponível 24 horas por dia por voz ou vídeo.',
          'Subsídio diário de hospitalização em caso de internamento imprevisto.',
          'Médico ao domicílio ilimitado sem custos de deslocação.'
        ],
        coverages: [
          { name: 'Médico Online', detail: 'Acesso ilimitado e gratuito para consultas e receitas.' },
          { name: 'Consultas Médicas na Rede', detail: 'Preço fixo de 20€ a 30€ por consulta.' },
          { name: 'Subsídio de Internamento', detail: '50€/dia a partir do 4.º dia de internamento (máx. 60 dias/ano).' },
          { name: 'Assistência ao Domicílio', detail: 'Enfermagem, fisioterapia e análises ao domicílio (até 5 utilizações/ano).' },
          { name: 'Segunda Opinião Médica', detail: 'Acesso gratuito a especialistas da Clínica Universitária de Navarra.' }
        ],
        exclusions: [
          'Doenças profissionais ou acidentes de trabalho abrangidos por outros seguros.',
          'Situações médicas de emergência extrema que exijam transporte do INEM.'
        ],
        highlights: [
          { label: 'Mensalidade', value: '10,90€' },
          { label: 'Médico Online', value: 'Gratuito' },
          { label: 'Consultas na Rede', value: '20€ a 30€' }
        ]
      }
    ]
  },
  {
    id: 'casa',
    name: 'Casa',
    icon: 'Home',
    description: 'Mais do que uma estrutura física, a sua casa é o seu porto seguro. Os nossos planos oferecem coberturas robustas contra imprevistos e assistências que facilitam o dia a dia.',
    commercialPitch: 'Escolha a flexibilidade do Casa Segura, garanta a conformidade do seu Alojamento Local, proteja peças de valor artístico, ou salvaguarde a sua responsabilidade civil familiar com a maior confiança.',
    accentColor: '#8E419C', // Ageas Purple
    modalities: [
      {
        id: 'casa-segura',
        name: 'Casa Segura',
        tagline: 'O seguro multirriscos que protege o seu lar e a sua tranquilidade.',
        description: 'Uma solução flexível para proteger o edifício e o recheio com coberturas amplas contra tempestades, inundações ou roubos, além de assistências práticas ao domicílio.',
        benefits: [
          'Duas opções de proteção ajustadas: Casa (28 coberturas) ou Casa+ (46 coberturas).',
          'Assistência médica de urgência ao domicílio por apenas 15€ por consulta.',
          'Serviço exclusivo de assistência veterinária em casa para cães e gatos.',
          'Apoio familiar especializado: enfermagem domiciliária e substituto familiar.',
          'Descontos acumulados até 30% se subscrever em conjunto com outros seguros.'
        ],
        coverages: [
          { name: 'Incêndio e Danos Físicos', detail: 'Cobre danos no edifício e recheio causados por fogo, queda de raios e explosões.' },
          { name: 'Danos por Água e Inundações', detail: 'Proteção contra rotura de canalizações e inundações por tempestades.' },
          { name: 'Furto e Roubo no Imóvel', detail: 'Garante o valor dos bens roubados com vestígios de arrombamento.' },
          { name: 'Riscos Elétricos', detail: 'Danos em aparelhos e instalação por sobretensão ou curto-circuitos.' },
          { name: 'Assistência Lar e Digital', detail: 'Envio de profissionais para reparações e apoio informático.' },
          { name: 'Fenómenos Sísmicos', detail: 'Cobertura opcional com franquia de 5% ou 10%.', isOptional: true }
        ],
        exclusions: [
          'Desaparecimento inexplicável de bens ou furtos cometidos por coabitantes.',
          'Danos estéticos em muros e paredes exteriores causados por graffitis.'
        ],
        highlights: [
          { label: 'Coberturas Base', value: 'Até 46' },
          { label: 'Médico em Casa', value: '15€/Consulta' },
          { label: 'Franquia Sísmica', value: '5% ou 10%' }
        ]
      },
      {
        id: 'alojamento-local',
        name: 'Alojamento Local',
        tagline: 'Segurança e conformidade legal para o seu negócio turístico.',
        description: 'Cumpre a obrigação legal de Responsabilidade Civil para estabelecimentos de alojamento local, protegendo o anfitrião, as áreas comuns do edifício e oferecendo serviços premium aos hóspedes.',
        benefits: [
          'Garante a responsabilidade civil obrigatória exigida por lei.',
          'Cobre danos provocados por hóspedes nas partes comuns do edifício.',
          'Serviço Concierge incluído para apoio a reservas e informações aos hóspedes.',
          'Assistência médica ao alojamento incluída em caso de urgência do hóspede.',
          'Preço indicativo muito competitivo a partir de 79,50€ por ano.'
        ],
        coverages: [
          { name: 'Responsabilidade Civil Obrigatória', detail: 'Capitais de 75.000€ ou 150.000€ por sinistro.' },
          { name: 'Assistência ao Anfitrião e Hóspede', detail: 'Pequenas reparações gratuitas de canalização/eletricidade (até 10h/ano).' },
          { name: 'Assistência Médica', detail: 'Consultas de urgência e enfermagem no local de risco para o hóspede.' },
          { name: 'Serviço Concierge', detail: 'Informações turísticas, reservas de restaurantes e marcação de limpezas.' }
        ],
        exclusions: [
          'Danos associados a obras estruturais ou de ampliação sem comunicação prévia.',
          'Multas, coimas ou penalizações decorrentes do incumprimento de registos legais.'
        ],
        highlights: [
          { label: 'Capital RC', value: 'Até 150.000€' },
          { label: 'Preço Anual', value: 'Desde 79,50€' },
          { label: 'Assistência Médica', value: 'Incluída' }
        ]
      },
      {
        id: 'arte',
        name: 'Arte',
        tagline: 'A salvaguarda ideal para as suas obras de valor artístico e histórico.',
        description: 'Um seguro desenhado especificamente para colecionadores privados, garantindo a máxima proteção logística, de transporte e preservação financeira de antiguidades e peças de arte.',
        benefits: [
          'Acesso a uma equipa especializada de peritos, historiadores e restauradores de arte.',
          'Proteção logística completa que cobre os riscos de embalagem, transporte e montagem.',
          'Cobre a desvalorização comercial da peça artística após restauro devido a sinistro.',
          'Valor segurado definido diretamente pelo cliente, com base em avaliação técnica.',
          'Adequado para coleções privadas, galerias ou exposições temporárias.'
        ],
        coverages: [
          { name: 'Danos Materiais', detail: 'Danos por incêndio, inundação, humidade ou acidentes de manuseamento.' },
          { name: 'Roubo e Furto', detail: 'Proteção total das peças contra furto qualificado ou roubo na residência.' },
          { name: 'Riscos de Transporte', detail: 'Garantias ativas durante o trânsito e mudança de local das obras.' },
          { name: 'Desvalorização Comercial', detail: 'Compensação financeira pela perda de valor artístico após reparação.' }
        ],
        exclusions: [
          'Desgaste natural, oxidação, humidade contínua ou danos por luz solar direta.',
          'Restauros ou manuseamentos efetuados por profissionais não licenciados.'
        ],
        highlights: [
          { label: 'Avaliação', value: 'À Medida' },
          { label: 'Logística', value: 'Cobre Trânsito' },
          { label: 'Peritagem', value: 'Especializada' }
        ]
      },
      {
        id: 'rc-familiar',
        name: 'Responsabilidade Civil Familiar',
        tagline: 'Proteja a sua família contra imprevistos causados a terceiros.',
        description: 'Garante o pagamento de indemnizações decorrentes de danos corporais ou materiais causados involuntariamente a terceiros no decurso da vida privada.',
        benefits: [
          'Cobre atos de todos os membros do agregado familiar, incluindo filhos menores.',
          'Inclui danos causados por animais de estimação sob a sua responsabilidade.',
          'Válido em Portugal e em toda a União Europeia, ideal para viagens de lazer.',
          'Proteção ativa para a prática amadora de desportos e uso de bicicletas sem motor.',
          'Opções de capital flexíveis entre 50.000€ e 250.000€.'
        ],
        coverages: [
          { name: 'Danos Corporais', detail: 'Indemnizações por lesões corporais provocadas acidentalmente a terceiros.' },
          { name: 'Danos Materiais', detail: 'Cobre estragos em propriedade alheia causados por membros da família.' },
          { name: 'Atividades de Lazer', detail: 'Proteção ativa para uso de patins, trotinetas e bicicletas sem motor na via pública.' },
          { name: 'Animais Domésticos', detail: 'Cobre incidentes com cães (exceto raças perigosas) e gatos.', isOptional: true }
        ],
        exclusions: [
          'Danos causados por veículos motorizados sujeitos a seguro obrigatório.',
          'Atividades de caça profissional ou incidentes com cães de guarda não declarados.'
        ],
        highlights: [
          { label: 'Capitais', value: 'Até 250.000€' },
          { label: 'Território', value: 'Portugal + UE' },
          { label: 'Animais Cobertos', value: 'Sim' }
        ]
      }
    ]
  },
  {
    id: 'vida',
    name: 'Vida',
    icon: 'Shield',
    description: 'A estabilidade financeira de quem mais ama é a nossa prioridade. Os nossos seguros de vida oferecem soluções flexíveis para garantir o suporte ideal em qualquer circunstância.',
    commercialPitch: 'Salvaguarde o seu crédito hipotecário, garanta a educação dos seus filhos, ou obtenha uma proteção abrangente contra doenças graves com pagamento antecipado em vida.',
    accentColor: '#D30773', // Ageas Magenta
    modalities: [
      {
        id: 'ritmo-vida',
        name: 'Ritmo Vida Família',
        tagline: 'A flexibilidade ideal para acompanhar o ritmo da sua família.',
        description: 'Um seguro de vida flexível que se adapta a cada fase da vida, oferecendo ampla proteção contra morte ou invalidez, e possibilidade de duplicar capitais por acidente.',
        benefits: [
          'Permite subscrição conjunta para duas Pessoas Seguras (Opção Base).',
          'Duplicação de capitais seguros em caso de morte ou invalidez por acidente.',
          'Prémios anuais recalculados para manter a máxima otimização financeira.',
          'Flexibilidade aos 67 anos: a cobertura de Invalidez IDPAC passa a Dependência.',
          'Morte com cobertura ativa até aos 85 anos nas opções Base e Mais.'
        ],
        coverages: [
          { name: 'Morte', detail: 'Pagamento do capital seguro aos beneficiários indicados.' },
          { name: 'Invalidez IDPAC (60% ou 66%)', detail: 'Antecipação do capital em caso de invalidez total e permanente por doença ou acidente.' },
          { name: 'Duplicação por Acidente', detail: 'Paga o dobro do capital seguro se a morte/invalidez resultar de acidente de circulação.' },
          { name: 'Subsídio diário de Hospitalização', detail: 'Subsídio diário de 0,13% do capital em caso de internamento (Opção Top).', isOptional: true }
        ],
        exclusions: [
          'Suicídio ou tentativa de suicídio ocorrido no primeiro ano de vigência do contrato.',
          'Doenças preexistentes manifestadas e não declaradas na subscrição.'
        ],
        highlights: [
          { label: 'Idade Limite Morte', value: 'Até 85 anos' },
          { label: 'Invalidez Coberta', value: 'IDPAC 60%/66%' },
          { label: 'Subscrição', value: 'Individual ou Casal' }
        ]
      },
      {
        id: 'credito-habitacao',
        name: 'Crédito Habitação',
        tagline: 'A proteção ideal exigida pelo seu banco com as melhores condições.',
        description: 'Seguro de vida estruturado especificamente para cumprir as obrigações do crédito hipotecário, garantindo a liquidação da dívida ao banco em caso de imprevisto.',
        benefits: [
          'Garante a liquidação integral do capital em dívida ao banco credor.',
          'Subscrição alargada que permite incluir os dois titulares na mesma apólice.',
          'Atualização automática do capital seguro de acordo com o saldo devedor do crédito.',
          'Transição automática da invalidez IDPAC para Dependência aos 67 anos.',
          'Prémio competitivo recalculado anualmente com base na idade atuarial real.'
        ],
        coverages: [
          { name: 'Morte', detail: 'Garante a liquidação do crédito habitação ao banco credor beneficiário.' },
          { name: 'Invalidez Definitiva IDPAC', detail: 'Antecipação do capital para amortizar o crédito em caso de incapacidade severa.' },
          { name: 'Dependência por Doença', detail: 'Garante a cobertura em caso de perda de autonomia para as atividades diárias básicas.' }
        ],
        exclusions: [
          'Doenças preexistentes não declaradas ou de caráter evolutivo conhecidas.',
          'Acidentes resultantes da prática de desportos radicais não declarados na proposta.'
        ],
        highlights: [
          { label: 'Beneficiário', value: 'Banco Credor' },
          { label: 'Titulares', value: 'Até 2 Pessoas' },
          { label: 'Capital', value: 'Ajustável à Dívida' }
        ]
      },
      {
        id: 'viva-plus',
        name: 'Viva Plus',
        tagline: 'Proteção robusta contra doenças graves com pagamento em vida.',
        description: 'Um seguro de vida inovador que permite antecipar 50% do capital seguro após o diagnóstico de uma doença grave para ajudar a financiar tratamentos, mantendo os restantes 50% ativos.',
        benefits: [
          'Preço fixo por escalões etários, oferecendo grande estabilidade orçamental.',
          'Antecipação em vida de 50% do capital seguro em caso de diagnóstico de Doença Grave.',
          'Inclui uma lista alargada de 27 Doenças Graves (Cancro, Enfarte, AVC, etc.).',
          'Duplicação de capitais em caso de morte por acidente (até 2x no pack Top).',
          'Subscrição facilitada dos 18 aos 66 anos de idade.'
        ],
        coverages: [
          { name: 'Morte', detail: 'Garante o pagamento do capital remanescente aos beneficiários.' },
          { name: 'Antecipação por Doença Grave', detail: 'Disponibiliza imediatamente 50% do capital seguro para apoio a tratamentos.' },
          { name: 'Invalidez IDPAC', detail: 'Garante a cobertura em caso de incapacidade total e permanente para o trabalho.' },
          { name: 'Morte por Acidente', detail: 'Pagamento em dobro do capital contratado (2x capital no pack Top).' }
        ],
        exclusions: [
          'Doenças diagnosticadas ou intervenções cirúrgicas anteriores à data de início da apólice.',
          'Danos decorrentes de automutilação ou condutas criminosas do segurado.'
        ],
        highlights: [
          { label: 'Doenças Graves', value: '27 Patologias' },
          { label: 'Antecipação', value: '50% do Capital' },
          { label: 'Capitais', value: '10.000€ a 200.000€' }
        ]
      },
      {
        id: 'solucao-jovem',
        name: 'Solução Jovem',
        tagline: 'O amanhã e a educação dos seus filhos protegidos desde hoje.',
        description: 'Um seguro de vida desenhado especificamente para garantir que, em caso de morte da pessoa segura, os seus filhos recebam uma renda mensal regular para financiar os seus estudos até aos 23 anos.',
        benefits: [
          'Renda mensal garantida para os filhos em caso de morte da pessoa segura.',
          'Renda mensal cresce automaticamente 3% ao ano para mitigar a inflação.',
          'Valores de renda flexíveis à escolha: 250€, 500€, 700€ ou 1.000€ por mês.',
          'A renda é paga mensalmente de forma direta até o beneficiário atingir os 23 anos.',
          'Subscrição muito flexível para pais ou avós até aos 55 anos.'
        ],
        coverages: [
          { name: 'Garantia de Renda Mensal', detail: 'Pagamento mensal direto aos filhos em caso de morte do progenitor/tutor.' },
          { name: 'Crescimento de Renda', detail: 'Valor da renda cresce progressivamente 3% ao ano a partir da primeira anuidade.' }
        ],
        exclusions: [
          'Incapacidades temporárias ou resgates antecipados em vida (não permitidos).',
          'Morte decorrente de atos dolosos cometidos pelo tomador ou beneficiários.'
        ],
        highlights: [
          { label: 'Renda Mensal', value: 'Até 1.000€/mês' },
          { label: 'Prazo Renda', value: 'Até aos 23 anos' },
          { label: 'Crescimento', value: '3% ao ano' }
        ]
      }
    ]
  },
  {
    id: 'acidentes-pessoais',
    name: 'Acidentes Pessoais',
    icon: 'Activity',
    description: 'Segurança total para as suas atividades diárias. Esteja protegido 24h por dia contra acidentes ocorridos no trabalho, em viagens, na prática desportiva ou momentos de lazer.',
    commercialPitch: 'Garanta uma proteção global com opções de capital flexíveis e adicione coberturas específicas para o seu estilo de vida como Erasmus, ciclismo, neve ou desportos de aventura.',
    accentColor: '#FC9E00', // Ageas Orange
    modalities: [
      {
        id: 'ap-individual',
        name: 'Acidentes Pessoais Individual',
        tagline: 'Proteção total e global para todos os imprevistos da vida diária.',
        description: 'Seguro concebido para proteger a Pessoa Segura em caso de acidente, cobrindo despesas de tratamento, morte ou invalidez permanente em qualquer parte do mundo.',
        benefits: [
          'Proteção ativa 24 horas por dia, 365 dias por ano, em qualquer parte do mundo.',
          'Possibilidade de incluir todo o agregado familiar numa única apólice.',
          'Até 40% de desconto acumulado na subscrição multiproduto Ageas.',
          'Reembolso de despesas médicas, hospitalares e medicamentosas sem complicações.',
          'Idade de adesão estendida até aos 79 anos.'
        ],
        coverages: [
          { name: 'Morte por Acidente', detail: 'Pagamento de capital aos herdeiros (até 250.000€ na Opção 4).' },
          { name: 'Invalidez Permanente', detail: 'Indemnização proporcional ao grau de desvalorização determinado clinicamente.' },
          { name: 'Despesas de Tratamento e Repatriamento', detail: 'Cobre custos hospitalares e médicos até 10.000€.' },
          { name: 'Subsídio Diário de Hospitalização', detail: 'Pagamento diário de até 100€ em caso de internamento (Opcional).', isOptional: true },
          { name: 'Responsabilidade Civil Familiar', detail: 'Cobertura opcional para danos causados a terceiros na vida privada.', isOptional: true }
        ],
        exclusions: [
          'Acidentes decorrentes da prática profissional de desportos de alta competição.',
          'Tratamentos estéticos ou não prescritos por profissionais de saúde licenciados.'
        ],
        highlights: [
          { label: 'Âmbito', value: 'Mundial 24h' },
          { label: 'Capitais Morte', value: 'Até 250.000€' },
          { label: 'Desconto direto', value: 'Até 40%' }
        ]
      },
      {
        id: 'ap-opcoes-extra',
        name: 'Opções Extra Atividades',
        tagline: 'Proteção personalizada para cada estilo de vida e paixão.',
        description: 'Extensões de cobertura específicas que adaptam a proteção de acidentes pessoais a perfis de estudantes internacionais, ciclistas, amantes da neve ou praticantes de desportos de aventura.',
        benefits: [
          'Estudantes sem Fronteiras: Ideal para Erasmus, com despesas médicas até 20.000€ no estrangeiro.',
          'Velocípedes: Cobre danos causados e sofridos no uso de bicicletas ou trotinetas de lazer.',
          'Neve: Prática amadora não federada de ski e snowboard com resgate em pista incluído.',
          'Adrenalina: Cobre desportos radicais amadores (mergulho, BTT, rafting, bungy jumping).',
          'Contratação ágil e sem complicações associada ao plano individual base.'
        ],
        coverages: [
          { name: 'Estudantes sem Fronteiras', detail: 'Despesas médicas no estrangeiro até 20.000€ e reembolso de propinas (até 1.000€/ano).' },
          { name: 'Responsabilidade Civil Velocípedes', detail: 'Garante indemnizações a terceiros por acidentes de bicicleta/trotineta.' },
          { name: 'Resgate na Neve', detail: 'Socorro e assistência especializada em pistas de ski e transporte médico.' },
          { name: 'Desportos de Aventura', detail: 'Coberturas para acidentes em mergulho, escalada, karting, BTT e rafting.' }
        ],
        exclusions: [
          'Competições desportivas organizadas por entidades externas ou treinos federados.',
          'Deslocações internacionais ao estrangeiro com duração superior a 90 dias seguidos.'
        ],
        highlights: [
          { label: 'Estudantes', value: 'Cobre Erasmus' },
          { label: 'Velocípedes', value: 'RC Incluído' },
          { label: 'Desportos', value: 'Prática Amadora' }
        ]
      }
    ]
  },
  {
    id: 'poupanca',
    name: 'Poupança e Investimento',
    icon: 'TrendingUp',
    description: 'Rentabilize as suas poupanças com toda a segurança. Criamos soluções sólidas e flexíveis para planear o seu amanhã, preparar a reforma ou rentabilizar capitais.',
    commercialPitch: 'Escolha a simplicidade de uma poupança mensal a partir de 10€, otimize o seu IRS com o PPR+, ou crie uma renda mensal segura para a sua reforma.',
    accentColor: '#EE5623', // Ageas Dark Orange
    modalities: [
      {
        id: 'multiplic-protecao',
        name: 'Multiplic Proteção+',
        tagline: 'Seguro de vida e conta poupança integrados num único contrato.',
        description: 'A solução ideal para acumular uma poupança progressiva e, em simultâneo, garantir um capital de proteção à sua família em caso de imprevisto.',
        benefits: [
          'Poupança acessível a partir de apenas 10€ por mês.',
          'Componente de capitalização com participação garantida de 75% nos rendimentos.',
          'Garante um capital adicional seguro para situações de invalidez ou doença.',
          'Resgate parcial sem penalizações após a segunda anuidade.',
          'Idade de subscrição abrangente dos 18 aos 65 anos.'
        ],
        coverages: [
          { name: 'Garantia de Capital em Vida', detail: 'Pagamento total do saldo acumulado na conta ao final do prazo.' },
          { name: 'Capital por Morte ou Invalidez', detail: 'Pagamento do capital adicional seguro aos beneficiários (mínimo de 35.000€ a 50.000€).' },
          { name: 'Doenças Graves', detail: 'Antecipação de 50% do capital de proteção em caso de diagnóstico.', isOptional: true },
          { name: 'Renda de Educação', detail: 'Garante uma pensão trimestral aos filhos menores em caso de fatalidade.', isOptional: true }
        ],
        exclusions: [
          'Resgates efetuados nas primeiras duas anuidades do contrato (sujeitos a restrições).',
          'Incapacidades decorrentes de desportos radicais ou de circulação em motas nas opções base.'
        ],
        highlights: [
          { label: 'Entrega Mínima', value: '10€/mês' },
          { label: 'Nível de Risco', value: '2 / 7 (Baixo)' },
          { label: 'Garantia de Morte', value: 'Desde 35.000€' }
        ]
      },
      {
        id: 'ppr-mais',
        name: 'PPR+',
        tagline: 'Comece hoje a construir o amanhã que sempre sonhou para a sua reforma.',
        description: 'Plano Poupança Reforma com capital garantido e participação anual em resultados, permitindo acumular património com excelentes benefícios fiscais.',
        benefits: [
          'Subscrição muito acessível a partir de apenas 25€ por mês ou 500€ de entrega única.',
          'Garantia do capital investido líquido de encargos de subscrição.',
          'Participação em resultados mínima de 75% dos rendimentos obtidos pelo fundo.',
          'Excelentes benefícios fiscais à entrada (IRS) e tributação reduzida à saída.',
          'Permite reembolso sem penalização nos termos legais (reforma, desemprego, prestação da casa).'
        ],
        coverages: [
          { name: 'Garantia de Capital no Vencimento', detail: 'Pagamento de 100% do capital investido deduzido de comissões.' },
          { name: 'Garantia de Morte', detail: 'Pagamento do saldo total acumulado aos beneficiários sem processos sucessórios lentos.' }
        ],
        exclusions: [
          'Reembolsos antecipados fora das condições previstas na lei (sujeitos a penalizações fiscais).',
          'Garantia de rentabilidades futuras fixas (a rentabilidade adicional varia anualmente).'
        ],
        highlights: [
          { label: 'Investimento Mín.', value: '25€/mês' },
          { label: 'Benefício Fisc.', value: 'Otimização de IRS' },
          { label: 'Garantia', labelClass: 'text-emerald-400', value: 'Capital Garantido' }
        ]
      },
      {
        id: 'maximus-poupanca',
        name: 'Maximus Poupança',
        tagline: 'Segurança absoluta para investimentos a médio e longo prazo.',
        description: 'Seguro de capitalização de médio/longo prazo focado na preservação total do capital, ideal para quem quer valorizar poupanças sem risco de mercado.',
        benefits: [
          'Prazo flexível entre 8 e 12 anos, sem estar indexado à idade de reforma.',
          'Garantia de 100% dos prémios pagos líquidos de encargos de subscrição.',
          'Resgaste parcial ou total isento de qualquer penalização a partir do 4.º ano.',
          'Excelente indicador de risco 2/7 (Risco Baixo).',
          'Entrega inicial a partir de 1.000€ com reforços facultativos a partir de 100€.'
        ],
        coverages: [
          { name: 'Capital Garantido em Vida', detail: 'Devolução de 100% do capital investido líquido mais rendimentos creditados.' },
          { name: 'Garantia por Morte', detail: 'Devolução imediata do saldo da conta aos beneficiários designados.' }
        ],
        exclusions: [
          'Resgates efetuados no 1.º, 2.º ou 3.º ano de contrato estão sujeitos a pequenas penalizações (0.5% a 2%).',
          'Rentabilidade anual adicional não é fixa, dependendo dos resultados anuais distribuídos.'
        ],
        highlights: [
          { label: 'Adesão Mínima', value: '1.000€' },
          { label: 'Penalização zero', value: 'A partir do 4.º Ano' },
          { label: 'Risco', value: '2 / 7 (Muito Baixo)' }
        ]
      },
      {
        id: 'rendimento-flexivel',
        name: 'Rendimento Flexível',
        tagline: 'Converta o seu património num rendimento mensal seguro para a reforma.',
        description: 'Solução financeira que permite transformar uma poupança única num complemento de reforma pago sob a forma de pensão mensal, mantendo o capital gerido profissionalmente.',
        benefits: [
          'Adesão conjunta aos Fundos de Pensões Horizonte a partir de 10.000€ de capital único.',
          'Permite aplicar o valor obtido com a venda de habitação própria com isenção de mais-valias.',
          'Três estratégias de investimento profissional ajustadas ao perfil de risco (Ações, Valorização e Segurança).',
          'Grande flexibilidade: escolha o valor que quer receber mensalmente ou maximize a renda.',
          'Liberdade total de designação de beneficiários em caso de morte.'
        ],
        coverages: [
          { name: 'Rendimento Mensal Flexível', detail: 'Definição personalizada da renda mensal a receber.' },
          { name: 'Estratégias de Alocação', detail: 'Distribuição do capital entre Horizonte Segurança (0% ações), Valorização (25% ações) e Ações (55% ações).' },
          { name: 'Transição Ciclo de Vida', detail: 'Distribuição dinâmica automática que reduz o risco à medida que a idade avança.' },
          { name: 'Proteção por Morte', detail: 'Entrega de 100% do saldo remanescente aos beneficiários designados.' }
        ],
        exclusions: [
          'Garantias de capital ou rendimento mínimo nas estratégias de investimento com ações.',
          'Resgates extraordinários nos primeiros 4 anos estão sujeitos a comissão de reembolso (0.5% a 1%).'
        ],
        highlights: [
          { label: 'Adesão Mínima', value: '10.000€' },
          { label: 'Tributação', value: '8% nos primeiros 10 anos' },
          { label: 'Gestão', value: 'Horizonte Pensões' }
        ]
      }
    ]
  }
];

export const EMPRESA_CATEGORIES: InsuranceCategory[] = [
  {
    id: 'automovel',
    name: 'Automóvel',
    icon: 'Car',
    description: 'Soluções inteligentes de proteção automóvel para frotas de empresas, garantindo assistência rápida e manutenção operacional da sua atividade comercial.',
    commercialPitch: 'Escolha o nível de proteção adequado para cada veículo do seu negócio. Desde a cobertura básica de responsabilidade civil até pacotes completos com proteção contra tempestades, choque e viatura de substituição.',
    accentColor: '#33D9EC', // Ageas Turquoise
    modalities: [
      {
        id: 'protec-empresas',
        name: 'ProTec - Seguro Automóvel',
        tagline: 'O seguro automóvel corporativo que mantém o seu negócio em movimento.',
        description: 'Garante a proteção do veículo da empresa, dos seus ocupantes e da responsabilidade civil, estruturado em pacotes flexíveis e personalizáveis.',
        benefits: [
          'SOS Auto: Assistência garantida até 60 minutos, com compensação monetária em caso de atraso.',
          'Reboque GPS com link de rastreamento do técnico enviado diretamente para o telemóvel.',
          'Viatura de substituição em caso de avaria incluída na assistência em viagem.',
          'Cobertura específica e assistência para veículos elétricos (inclui recarga rápida no local).',
          'Assistência VIP disponível para coberturas estendidas e limites superiores.'
        ],
        coverages: [
          { name: 'Responsabilidade Civil Obrigatória', detail: 'Até 1.300.000€ para danos materiais e 6.450.000€ para danos corporais por sinistro.' },
          { name: 'Quebra Isolada de Vidros', detail: 'Garante para-brisas, óculo traseiro e vidros laterais. Franquia zero na rede Ageas.' },
          { name: 'Furto ou Roubo', detail: 'Cobre danos ou perda do veículo em consequência de roubo.' },
          { name: 'Choque, Colisão ou Capotamento', detail: 'Garante estragos no próprio veículo causados por acidentes.' },
          { name: 'Fenómenos da Natureza', detail: 'Cobre danos causados por tempestades severas e sismos.', isOptional: true },
          { name: 'Assistência a Veículos Elétricos', detail: 'Recarga rápida no local por falta de energia e veículo térmico de substituição.', isOptional: true }
        ],
        exclusions: [
          'Danos em objetos pessoais ou mercadorias transportadas no veículo (cobertos em bagagem pessoal).',
          'Sinistros em veículos conduzidos por pessoas sem habilitação legal ou sob efeito de álcool.'
        ],
        highlights: [
          { label: 'Assistência', value: 'Normal ou VIP' },
          { label: 'Viatura de Subst.', value: 'Até 3 ou 7 dias' },
          { label: 'Franquia Vidros', value: 'Zero (Rede Ageas)' }
        ]
      }
    ]
  },
  {
    id: 'colaboradores',
    name: 'Colaboradores',
    icon: 'Users',
    description: 'Proteja e valorize o ativo mais valioso da sua empresa: as pessoas. Planos de saúde, vida e acidentes de trabalho com gestão corporativa eficiente.',
    commercialPitch: 'Promova a retenção de talento e garanta a total conformidade legal com seguros obrigatórios e opcionais desenhados para proteger a sua equipa.',
    accentColor: '#90BC0D', // Ageas Green
    modalities: [
      {
        id: 'saude-pme',
        name: 'Saúde PME',
        tagline: 'O plano de saúde coletivo para as pequenas e médias empresas.',
        description: 'Garante o acesso a cuidados médicos de excelência para os colaboradores da empresa e respetivos familiares, promovendo o bem-estar organizacional.',
        benefits: [
          'Acesso à prestigiada Rede Médis com copagamentos reduzidos para a equipa.',
          'Descontos progressivos de quantidade: até 30% para equipas com mais de 50 colaboradores.',
          'Médico Online ilimitado, disponível 24h por dia para todos os colaboradores.',
          'Serviço exclusivo de entrega de medicamentos ao domicílio sem custos.',
          'Flexibilidade com 5 opções de capitais para se ajustar ao orçamento da empresa.'
        ],
        coverages: [
          { name: 'Hospitalização + Oncologia', detail: 'Capitais de 20.000€ até ilimitado com proteção oncológica reforçada.' },
          { name: 'Assistência Ambulatória', detail: 'Consultas e exames na rede (capitais de 1.000€ a 5.000€).' },
          { name: 'Saúde Mental Coletiva', detail: 'Consultas de psicologia e psiquiatria incluídas na rede.' },
          { name: 'Parto', detail: 'Cobertura opcional com capitais até 5.000€.', isOptional: true },
          { name: 'Estomatologia Coletiva', detail: 'Acesso a tratamentos dentários na rede.', isOptional: true }
        ],
        exclusions: [
          'Tratamentos e cirurgias de caráter estético ou cirurgias de correção de obesidade.',
          'Despesas hospitalares decorrentes de acidentes de trabalho (devem ser cobertas por seguro específico).'
        ],
        highlights: [
          { label: 'Desconto Equipas', value: 'Até 30%' },
          { label: 'Opções de Plano', value: '5 Níveis' },
          { label: 'Inclusão Família', value: 'Permitida' }
        ]
      },
      {
        id: 'empresa-viva',
        name: 'Empresa Viva',
        tagline: 'O seguro de vida coletivo simples, flexível e sem formalidades médicas.',
        description: 'Um benefício corporativo de alto valor para colaboradores e sócios-gerentes, protegendo as famílias em caso de morte ou invalidez precoce.',
        benefits: [
          'Adesão rápida sem necessidade de questionários de saúde ou exames médicos.',
          'Desconto de quantidade por equipa até 12% para mais de 50 colaboradores.',
          'Prémios dedutíveis como custos operacionais ao abrigo do Código do IRC.',
          'Subscrição muito flexível para equipas a partir de apenas 3 colaboradores.',
          'Morte com capitais até 40.000€ por pessoa segura.'
        ],
        coverages: [
          { name: 'Morte Base', detail: 'Pagamento do capital contratado aos herdeiros ou beneficiários.' },
          { name: 'Invalidez Total e Definitiva', detail: 'Pagamento antecipado do capital em caso de incapacidade definitiva.' },
          { name: 'Invalidez Permanente (Mais/Top)', detail: 'Cobertura ativa nas opções superiores.' },
          { name: 'Morte por Acidente', detail: 'Pagamento em dobro do capital seguro na opção Top.' }
        ],
        exclusions: [
          'Doenças preexistentes manifestadas antes da adesão e excluídas pelas condições gerais.',
          'Morte decorrente de acidentes profissionais cobertos obrigatoriamente por Acidentes de Trabalho.'
        ],
        highlights: [
          { label: 'Exames Médicos', labelClass: 'text-emerald-400', value: 'Isento' },
          { label: 'Desconto de Equipa', value: 'Até 12%' },
          { label: 'Mínimo de Pessoas', value: '3 Colaboradores' }
        ]
      },
      {
        id: 'at-outrem',
        name: 'Acidentes de Trabalho (Conta de Outrem)',
        tagline: 'O seguro obrigatório por lei que protege os colaboradores da empresa.',
        description: 'Garante o cumprimento integral da obrigação legal da empresa, transferindo a responsabilidade por acidentes de trabalho para a seguradora.',
        benefits: [
          'Cobre 100% dos trabalhadores por conta de outrem (efetivos, estagiários e part-time).',
          'Proteção extensiva a situações de teletrabalho, mediante comunicação prévia.',
          'Garante assistência médica e indemnizações por incapacidade temporária ou permanente.',
          'Envio ecológico e cómodo das Folhas de Férias com informação salarial online.',
          'Inclui acidentes ocorridos no trajeto normal de ida e regresso do trabalho.'
        ],
        coverages: [
          { name: 'Prestações em Dinheiro', detail: 'Indemnizações por incapacidade temporária, pensão por incapacidade permanente e subsídios por morte.' },
          { name: 'Prestações em Espécie', detail: 'Assistência médica, cirúrgica, farmacêutica, hospitalização e reabilitação profissional.' },
          { name: 'Apoio Psicoterapêutico', detail: 'Apoio psicológico ao colaborador e à sua família imediata em caso de sinistro grave.' }
        ],
        exclusions: [
          'Doenças profissionais (não tratadas como acidentes de trabalho nesta apólice).',
          'Acidentes ocorridos fora do horário ou local de trabalho não relacionados com a atividade.'
        ],
        highlights: [
          { label: 'Caráter Legal', labelClass: 'text-amber-400', value: 'Obrigatório por Lei' },
          { label: 'Teletrabalho', value: 'Abrangido' },
          { label: 'Folhas de Férias', value: 'Submissão Online' }
        ]
      },
      {
        id: 'at-propria',
        name: 'Acidentes de Trabalho (Conta Própria)',
        tagline: 'Segurança obrigatória e proteção alargada para trabalhadores independentes.',
        description: 'Cumpre a obrigação legal dos profissionais independentes e acrescenta opções comerciais para proteger a sua atividade e vida extraprofissional.',
        benefits: [
          'Garante a conformidade legal para profissionais independentes em Portugal.',
          'Três níveis comerciais ajustados: Especial (mínimo legal), Extra e Premium.',
          'Opção de proteção para acidentes ocorridos fora da atividade profissional (Extra/Premium).',
          'Inclui assistência hospitalar com reembolso de até 80% das despesas.',
          'Sem juros no fracionamento dos pagamentos (mensal, trimestral, semestral, anual).'
        ],
        coverages: [
          { name: 'Garantias Legais', detail: 'Prestações em dinheiro e assistência médica obrigatória por acidentes de trabalho.' },
          { name: 'Acidentes Extraprofissionais', detail: 'Morte, invalidez e despesas fora do horário de trabalho (Extra/Premium).' },
          { name: 'Danos em Vestuário', detail: 'Proteção de roupa e calçado danificados em acidentes de trabalho cobertos.' },
          { name: 'Proteção Jurídica', detail: 'Apoio legal e pagamento de despesas em litígios decorrentes de acidentes.' }
        ],
        exclusions: [
          'Acidentes provocados sob o efeito de álcool, drogas ou sem habilitação de condução.',
          'Desportos considerados perigosos ou de aventura, salvo contratação com sobreprémio.'
        ],
        highlights: [
          { label: 'Níveis de Proteção', value: '3 Opções' },
          { label: 'Acidentes Pessoais', value: 'Cobertura 24h' },
          { label: 'Assist. Hospitalar', value: 'Reembolso até 80%' }
        ]
      }
    ]
  },
  {
    id: 'responsabilidade-civil',
    name: 'Responsabilidade Civil',
    icon: 'ShieldAlert',
    description: 'Proteja o património e a reputação do seu negócio. Coberturas completas para fazer face a indemnizações por danos causados a terceiros ou ao ambiente.',
    commercialPitch: 'Garanta a conformidade legal, proteja a sua equipa de gestão de D&O, previna riscos ambientais severos, ou proteja-se contra os imprevistos da era digital com o Cyber Risks.',
    accentColor: '#8E419C', // Ageas Purple
    modalities: [
      {
        id: 'rc-geral',
        name: 'Responsabilidade Civil Geral',
        tagline: 'Proteção financeira integral contra reclamações de terceiros.',
        description: 'Salvaguarda a tesouraria e o património da sua empresa perante indemnizações por danos corporais, materiais ou patrimoniais causados a terceiros.',
        benefits: [
          'Solução ajustada para diferentes setores de atividade comercial ou industrial.',
          'Cobre custos de defesa jurídica e honorários de advogados associados a processos.',
          'Protege a empresa contra erros e falhas profissionais de colaboradores.',
          'Válido em Portugal Continental e Regiões Autónomas.'
        ],
        coverages: [
          { name: 'RC Exploração', detail: 'Danos ocorridos no decurso da atividade normal, incluindo uso de máquinas e instalações.' },
          { name: 'RC Produtos', detail: 'Danos causados por falha ou defeito do produto após entrega ou comercialização.' },
          { name: 'RC Profissional', detail: 'Proteção contra erros e omissões profissionais cometidos no exercício de consultoria/serviços.' },
          { name: 'RC Construção Civil', detail: 'Garante danos a terceiros ocorridos durante trabalhos de escavação e construção.' }
        ],
        exclusions: [
          'Atos ou omissões manifestamente dolosos ou intencionais do tomador de seguro.',
          'Danos decorrentes de amianto, chumbo ou outras substâncias proibidas por lei.'
        ],
        highlights: [
          { label: 'Modalidades RC', value: '4 Opções' },
          { label: 'Defesa Jurídica', value: 'Incluída' },
          { label: 'Franquias', value: 'Ajustáveis' }
        ]
      },
      {
        id: 'rc-ecosfera',
        name: 'Ecosfera (Responsabilidade Ambiental)',
        tagline: 'Proteção financeira ajustada ao regime legal de responsabilidade ambiental.',
        description: 'Uma solução vital para empresas com atividades potencialmente poluidoras, garantindo a prevenção, minimização e reparação de danos causados ao ambiente.',
        benefits: [
          'Garante a conformidade com o regime jurídico de responsabilidade ambiental (Decreto-Lei 147/2008).',
          'Cobre custos imediatos com medidas de urgência e contenção de danos.',
          'Proteção financeira contra agressões acidentais à água, solo e habitats protegidos.',
          'Contratos anuais com prazos flexíveis de 12 meses.'
        ],
        coverages: [
          { name: 'Agressões ao Ambiente', detail: 'Responsabilidade administrativa por danos ou ameaça de danos ao solo, água ou biodiversidade.' },
          { name: 'Medidas de Urgência', detail: 'Custo de operações imediatas para minimizar ou conter danos ecológicos severos.' },
          { name: 'Descontaminação Solo/Água', detail: 'Cobertura opcional para remover ou tratar contaminantes.', isOptional: true },
          { name: 'Perdas de Exploração', detail: 'Cobre lucros cessantes resultantes de paragem forçada por incidente ambiental.', isOptional: true }
        ],
        exclusions: [
          'Danos ambientais decorrentes de emissões autorizadas ou poluição contínua conhecida.',
          'Atos deliberados de incumprimento de normas de conservação ambiental.'
        ],
        highlights: [
          { label: 'Diploma Legal', value: 'DL 147/2008' },
          { label: 'Âmbito', value: 'Nacional + EEE' },
          { label: 'Duração', value: '12 Meses' }
        ]
      },
      {
        id: 'rc-dand-o',
        name: 'Administradores e Gestores (D&O)',
        tagline: 'Proteja o seu património pessoal perante decisões de gestão empresarial.',
        description: 'Seguro essencial que protege o património pessoal de administradores, diretores e gerentes contra processos e reclamações judiciais de terceiros.',
        benefits: [
          'Protege os bens pessoais dos dirigentes e dos seus familiares diretos.',
          'Âmbito de cobertura mundial (exceto reclamações apresentadas nos EUA e Canadá).',
          'Cobre custos de defesa jurídica, processos de investigação e cauções pecuniárias.',
          'Inclui responsabilidade tributária subsidiária dos gerentes.'
        ],
        coverages: [
          { name: 'Responsabilidade das Pessoas Seguras', detail: 'Indemnizações por erros ou omissões de gestão que causem prejuízos financeiros.' },
          { name: 'Reembolso à Sociedade', detail: 'Reembolsa a empresa pelas indemnizações que esta tenha pago em nome do administrador.' },
          { name: 'Custos de Investigação', detail: 'Cobre honorários de peritos e assessores associados a investigações oficiais.' },
          { name: 'Gestão de Crise', detail: 'Apoio de relações públicas para conter danos reputacionais à imagem do administrador.', isOptional: true }
        ],
        exclusions: [
          'Atos comprovadamente dolosos, fraudulentos ou com obtenção de benefício pessoal indevido.',
          'Danos corporais ou materiais diretos (devem ser cobertos por apólices de RC Geral).'
        ],
        highlights: [
          { label: 'Âmbito', value: 'Mundial (excl. EUA)' },
          { label: 'Segurados', value: 'Todos os Administradores' },
          { label: 'Custos Defesa', value: 'Incluídos' }
        ]
      },
      {
        id: 'rc-cyber',
        name: 'Cyber Risks Empresas',
        tagline: 'Prevenção, assistência e proteção financeira contra incidentes informáticos.',
        description: 'A salvaguarda digital definitiva para pequenas e médias empresas, oferecendo assistência técnica especializada 24h e recuperação face a ciberataques.',
        benefits: [
          'Contratação simples e rápida, sem questionários informáticos complexos.',
          'Assistência técnica remota especializada ativa 24 horas por dia.',
          'Cobre custos de recuperação de dados e restauro de sistemas infetados.',
          'Suporte à gestão de crises informáticas, incluindo consultoria forense.',
          'Desenhado para empresas com até 50 colaboradores.'
        ],
        coverages: [
          { name: 'Custos de Recuperação', detail: 'Recuperação de dados e reparação de malware, ransomware ou ataques de negação de serviço.' },
          { name: 'Responsabilidade Civil Digital', detail: 'Garante indemnizações a terceiros por perda ou fuga de dados pessoais confidenciais.' },
          { name: 'Apoio em Extorsão Cibernética', detail: 'Consultoria e assessoria especializada face a ameaças de ransomware.' },
          { name: 'Perdas de Exploração', detail: 'Cobre prejuízos financeiros causados pela paragem total do sistema da empresa.', isOptional: true }
        ],
        exclusions: [
          'Ataques decorrentes da utilização de software sem licença oficial válida.',
          'Danos em equipamentos de uso exclusivamente pessoal não declarados.'
        ],
        highlights: [
          { label: 'Parceiro Técnico', value: 'Lazarus 24h' },
          { label: 'Capitais', value: 'Até 300.000€' },
          { label: 'Dimensão Empresa', value: 'Até 50 Empregados' }
        ]
      }
    ]
  },
  {
    id: 'patrimonio',
    name: 'Património',
    icon: 'Building',
    description: 'Garanta a integridade física do seu negócio. Soluções inovadoras para proteger as suas instalações, equipamentos, mercadorias e a continuidade da produção.',
    commercialPitch: 'Do multirriscos comércio ao "todos os riscos" para construção e montagem, oferecemos a mais robusta proteção patrimonial adaptada à sua atividade.',
    accentColor: '#33D9EC', // Ageas Turquoise
    modalities: [
      {
        id: 'segurtrade',
        name: 'Segurtrade (Comércio e Serviços)',
        tagline: 'A solução multirriscos flexível para mais de 400 atividades comerciais.',
        description: 'Protege o edifício, o recheio e os equipamentos do seu comércio ou escritório, oferecendo garantias específicas para interrupção de serviços e proteção jurídica.',
        benefits: [
          'Mais de 400 atividades de comércio e serviços exemplificadas e cobertas.',
          'Reforço de capital em épocas festivas gratuito (ex: floristas e comércio de moda).',
          'Proteção Jurídica Mais: Apoio na cobrança extrajudicial ou judicial de faturas em atraso.',
          'Garante indemnizações por quebra de serviços públicos (eletricidade, água, gás).',
          'Desconto de até 15% para instalação de sistemas de alarme ativos.'
        ],
        coverages: [
          { name: 'Incêndio e Danos Físicos', detail: 'Cobre edifícios, recheio e responsabilidade civil da exploração.' },
          { name: 'Danos por Água e Canalizações', detail: 'Proteção contra rotura de tubagens e pesquisa de avarias.' },
          { name: 'Furto ou Roubo', detail: 'Cobre valores roubados do interior da loja ou cofre.' },
          { name: 'Responsabilidade Civil Exploração', detail: 'Garante danos a clientes causados acidentalmente no estabelecimento.' },
          { name: 'Danos Estéticos', detail: 'Restabelece a harmonia visual da loja após sinistros cobertos.' },
          { name: 'Perdas de Exploração / Perda de Rendas', detail: 'Compensação financeira por paragem forçada da atividade.', isOptional: true }
        ],
        exclusions: [
          'Danos causados por infiltrações graduais resultantes de falta de manutenção regular.',
          'Furtos cometidos sem indícios físicos de arrombamento ou coação.'
        ],
        highlights: [
          { label: 'Atividades Cobertas', value: '+400 Atividades' },
          { label: 'Cobrança Faturas', value: 'Proteção Jurídica' },
          { label: 'Desconto Alarme', value: 'Até 15%' }
        ]
      },
      {
        id: 'mr-industria',
        name: 'Multirriscos Indústria',
        tagline: 'Segurança total e integrada para as suas unidades de produção industrial.',
        description: 'Uma solução robusta que combina seguros de danos materiais, responsabilidade civil e engenharia para proteger as suas fábricas, armazéns e equipamentos produtivos.',
        benefits: [
          'Excelente leque de coberturas flexíveis ajustadas à indústria metalomecânica, têxtil ou alimentar.',
          'Preço reduzido em função do nível de franquias contratado e sistemas de prevenção.',
          'Possibilidade de combinar seguros de engenharia e perdas de exploração no mesmo plano.',
          'Descontos acumulados de até 15% por meios de prevenção de incêndio ativos.'
        ],
        coverages: [
          { name: 'Incêndio e Danos Materiais', detail: 'Edifícios industriais, existências, recheio e mercadorias.' },
          { name: 'RC Exploração Industrial', detail: 'Cobre incidentes ocorridos no local onde os produtos são fabricados.' },
          { name: 'Poluição Acidental', detail: 'Responsabilidade por poluição súbita no decurso da produção industrial.' },
          { name: 'Avaria de Máquinas', detail: 'Cobertura opcional para quebras mecânicas em equipamentos industriais.', isOptional: true },
          { name: 'Perdas de Exploração', detail: 'Compensação de custos fixos e lucros cessantes decorrentes de paragem por sinistro.', isOptional: true }
        ],
        exclusions: [
          'Doenças infectocontagiosas ou riscos de interrupção cibernética não declarados.',
          'Falta de manutenção manifesta das infraestruturas elétricas da fábrica.'
        ],
        highlights: [
          { label: 'Setores Cobertos', value: 'Minas, Têxtil, Alimentar, etc.' },
          { label: 'Desconto Prevenção', value: 'Até 15%' },
          { label: 'RC Poluição', value: 'Acidental Incluído' }
        ]
      },
      {
        id: 'avaria-maquinas',
        name: 'Avaria de Máquinas',
        tagline: 'A garantia de continuidade operacional para o seu parque de máquinas.',
        description: 'Seguro específico que cobre danos materiais em máquinas industriais fixas e montadas em funcionamento, decorrentes de quebras internas ou erros operacionais.',
        benefits: [
          'Garante a reposição ou reparação de máquinas danificadas durante o trabalho ou manutenção.',
          'Acompanhamento técnico especializado por engenheiros durante o processo de sinistro.',
          'Garante a proteção do equipamento mesmo em fases de limpeza ou desmontagem.',
          'Cálculo de indemnizações com base no valor de substituição por equipamento novo.'
        ],
        coverages: [
          { name: 'Defeitos de Projeto ou Fabrico', detail: 'Cobre falhas não detetáveis antes do início do contrato.' },
          { name: 'Erros de Manobra', detail: 'Danos por negligência, imperícia ou incompetência de operadores.' },
          { name: 'Queda e Choque Mecânico', detail: 'Danos por entrada de corpos estranhos ou colisão acidental.' },
          { name: 'Efeitos da Corrente Elétrica', detail: 'Curto-circuitos, sobretensão e arcos voltaicos nos motores.' },
          { name: 'Trabalho Extraordinário', detail: 'Cobre gastos adicionais com horas extra e frete aéreo para reparações urgentes.', isOptional: true }
        ],
        exclusions: [
          'Equipamentos em armazém que não se encontrem devidamente montados ou em funcionamento.',
          'Peças sujeitas a desgaste rápido natural (correias, lâminas, baterias, pneus).'
        ],
        highlights: [
          { label: 'Preço Ajustado', value: 'Segundo idade e turnos' },
          { label: 'Indemnização', value: 'Valor de Substituição' },
          { label: 'Âmbito', value: 'Máquinas Fixas' }
        ]
      },
      {
        id: 'equip-eletronico',
        name: 'Equipamento Eletrónico',
        tagline: 'Máxima proteção para a tecnologia vital do seu negócio.',
        description: 'Um seguro especializado para hardware, servidores, computadores, e equipamentos eletrónicos médicos ou de laboratório contra danos materiais e roubo.',
        benefits: [
          'Cobre acidentes ocorridos durante a montagem, desmontagem ou transferência de local.',
          'Garante o valor em novo para reposição de equipamentos tecnológicos.',
          'Sem limite de quantidade de equipamentos eletrónicos por apólice.',
          'Renovação automática anual por períodos iguais.'
        ],
        coverages: [
          { name: 'Danos Materiais', detail: 'Cobre incêndio, explosão, curto-circuitos, sobretensão, fumo e gases corrosivos.' },
          { name: 'Roubo e Furto', detail: 'Proteção contra subtração de computadores, servidores e centrais telefónicas.' },
          { name: 'Danos por Água e Humidade', detail: 'Danos em eletrónica por fugas de canalização.' },
          { name: 'Suportes Externos de Dados', detail: 'Garante o custo de reconstrução de dados informáticos perdidos.', isOptional: true },
          { name: 'Equipamentos Portáteis', detail: 'Cobre computadores portáteis e tablets fora do escritório.', isOptional: true }
        ],
        exclusions: [
          'Equipamentos que não se encontrem montados ou testados no local de risco.',
          'Falhas de software sem licença oficial ou danos provocados por vírus digitais.'
        ],
        highlights: [
          { label: 'Equipamentos', value: 'Computadores, Servidores, etc.' },
          { label: 'Valor Reposição', value: 'Valor em Novo' },
          { label: 'Carência', value: 'Isento' }
        ]
      },
      {
        id: 'maos-a-obra',
        name: 'Mãos à Obra (Todos os Riscos Construção)',
        tagline: 'O seguro completo obra a obra para empreiteiros e promotores.',
        description: 'Seguro de engenharia temporário que cobre todos os danos materiais ocorridos na empreitada durante a fase de construção e montagem, com opção de responsabilidade civil.',
        benefits: [
          'Subscrição flexível obra a obra, acompanhando exatamente a duração da construção.',
          'Cobre empreiteiros, subempreiteiros, donos de obra e entidades financiadoras.',
          'Garante a proteção de instalações temporárias (andaimes, ferramentas, estaleiros).',
          'Válido em Portugal Continental e Regiões Autónomas.'
        ],
        coverages: [
          { name: 'Danos Materiais da Empreitada', detail: 'Cobre perdas acidentais na obra causadas por incêndio, derrocadas e intempéries.' },
          { name: 'Trabalhos Defeituosos', detail: 'Cobre danos causados por imperícia ou negligência do pessoal do segurado.' },
          { name: 'Responsabilidade Civil Extracontratual', detail: 'Cobertura opcional para indemnizações por danos a terceiros associados aos trabalhos.', isOptional: true },
          { name: 'Equipamentos de Estaleiro', detail: 'Garante danos externos em andaimes, contentores e ferramentas auxiliares.', isOptional: true }
        ],
        exclusions: [
          'Multas contratuais, coimas por atrasos ou perdas indiretas por suspensão dos trabalhos.',
          'Danos preexistentes omitidos na proposta de seguro inicial.'
        ],
        highlights: [
          { label: 'Duração', value: 'Acompanha a Obra' },
          { label: 'Segurados', value: 'Promotor, Empreiteiro, etc.' },
          { label: 'RC Cruzada', value: 'Disponível' }
        ]
      }
    ]
  }
];

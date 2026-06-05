const questoes = [
  {
    "id": 1001,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em:",
    "alternativas": [
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional."
    ],
    "correta": 0,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1002,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Assinale a alternativa que apresenta fundamento da República Federativa do Brasil.",
    "alternativas": [
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania."
    ],
    "correta": 4,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1003,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são:",
    "alternativas": [
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo."
    ],
    "correta": 3,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1004,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de:",
    "alternativas": [
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite."
    ],
    "correta": 2,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1005,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito:",
    "alternativas": [
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada."
    ],
    "correta": 1,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1006,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Sobre a liberdade de manifestação do pensamento, é correto afirmar que:",
    "alternativas": [
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas."
    ],
    "correta": 0,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1007,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico:",
    "alternativas": [
      "LIMPA.",
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE."
    ],
    "correta": 4,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1008,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da:",
    "alternativas": [
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo."
    ],
    "correta": 3,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1009,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente:",
    "alternativas": [
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade."
    ],
    "correta": 2,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1010,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após:",
    "alternativas": [
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação."
    ],
    "correta": 1,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1011,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta.",
    "alternativas": [
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei."
    ],
    "correta": 0,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1012,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Segundo o art. 144 da Constituição Federal, a segurança pública é:",
    "alternativas": [
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos."
    ],
    "correta": 4,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1013,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à:",
    "alternativas": [
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades.",
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais."
    ],
    "correta": 3,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1014,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal.",
    "alternativas": [
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1015,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Assinale a alternativa correta.",
    "alternativas": [
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista."
    ],
    "correta": 1,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1016,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Assinale a alternativa correta.",
    "alternativas": [
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos."
    ],
    "correta": 0,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1017,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Assinale a alternativa correta.",
    "alternativas": [
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si."
    ],
    "correta": 4,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1018,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Assinale a alternativa correta.",
    "alternativas": [
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora."
    ],
    "correta": 3,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1019,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Assinale a alternativa correta.",
    "alternativas": [
      "À propriedade privada.",
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas."
    ],
    "correta": 2,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1020,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Assinale a alternativa correta.",
    "alternativas": [
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada."
    ],
    "correta": 1,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1021,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Assinale a alternativa correta.",
    "alternativas": [
      "LIMPE.",
      "LIMPA.",
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência."
    ],
    "correta": 0,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1022,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Assinale a alternativa correta.",
    "alternativas": [
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia."
    ],
    "correta": 4,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1023,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Assinale a alternativa correta.",
    "alternativas": [
      "Especialidade.",
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia."
    ],
    "correta": 3,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1024,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Assinale a alternativa correta.",
    "alternativas": [
      "Um ano da nomeação.",
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse."
    ],
    "correta": 2,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1025,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Assinale a alternativa correta.",
    "alternativas": [
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância."
    ],
    "correta": 1,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1026,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Segundo o art. 144 da Constituição Federal, a segurança pública é: Assinale a alternativa correta.",
    "alternativas": [
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle."
    ],
    "correta": 0,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1027,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Assinale a alternativa correta.",
    "alternativas": [
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades.",
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais."
    ],
    "correta": 4,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1028,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Assinale a alternativa correta.",
    "alternativas": [
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena."
    ],
    "correta": 3,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1029,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Marque a opção adequada.",
    "alternativas": [
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado."
    ],
    "correta": 2,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1030,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Marque a opção adequada.",
    "alternativas": [
      "Prevalência dos direitos humanos.",
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional."
    ],
    "correta": 1,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1031,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Marque a opção adequada.",
    "alternativas": [
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar."
    ],
    "correta": 0,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1032,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Marque a opção adequada.",
    "alternativas": [
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial."
    ],
    "correta": 4,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1033,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Marque a opção adequada.",
    "alternativas": [
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada.",
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto."
    ],
    "correta": 3,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1034,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Marque a opção adequada.",
    "alternativas": [
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito."
    ],
    "correta": 2,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1035,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Marque a opção adequada.",
    "alternativas": [
      "LIPME sem eficiência.",
      "LIMPE.",
      "LIMPA.",
      "MELIP.",
      "PALME."
    ],
    "correta": 1,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1036,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Marque a opção adequada.",
    "alternativas": [
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade."
    ],
    "correta": 0,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1037,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Marque a opção adequada.",
    "alternativas": [
      "Hierarquia.",
      "Especialidade.",
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade."
    ],
    "correta": 4,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1038,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Marque a opção adequada.",
    "alternativas": [
      "Cinco anos da posse.",
      "Um ano da nomeação.",
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício."
    ],
    "correta": 3,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1039,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Marque a opção adequada.",
    "alternativas": [
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação."
    ],
    "correta": 2,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1040,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Segundo o art. 144 da Constituição Federal, a segurança pública é: Marque a opção adequada.",
    "alternativas": [
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados."
    ],
    "correta": 1,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1041,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Marque a opção adequada.",
    "alternativas": [
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades.",
      "Fiscalização tributária."
    ],
    "correta": 0,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1042,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Marque a opção adequada.",
    "alternativas": [
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública."
    ],
    "correta": 4,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1043,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Marque a opção adequada.",
    "alternativas": [
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos."
    ],
    "correta": 3,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1044,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Marque a opção adequada.",
    "alternativas": [
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza."
    ],
    "correta": 2,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1045,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Marque a opção adequada.",
    "alternativas": [
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas."
    ],
    "correta": 1,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1046,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Marque a opção adequada.",
    "alternativas": [
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem."
    ],
    "correta": 0,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1047,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Marque a opção adequada.",
    "alternativas": [
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada.",
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral."
    ],
    "correta": 4,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1048,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Marque a opção adequada.",
    "alternativas": [
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia."
    ],
    "correta": 3,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1049,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Marque a opção adequada.",
    "alternativas": [
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE.",
      "LIMPA.",
      "MELIP."
    ],
    "correta": 2,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1050,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Marque a opção adequada.",
    "alternativas": [
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação."
    ],
    "correta": 1,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1051,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Marque a opção adequada.",
    "alternativas": [
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade.",
      "Continuidade.",
      "Autotutela."
    ],
    "correta": 0,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1052,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Marque a opção adequada.",
    "alternativas": [
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação.",
      "A aprovação no concurso.",
      "Três anos de efetivo exercício."
    ],
    "correta": 4,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1053,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Marque a opção adequada.",
    "alternativas": [
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata."
    ],
    "correta": 3,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1054,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Segundo o art. 144 da Constituição Federal, a segurança pública é: Marque a opção adequada.",
    "alternativas": [
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas."
    ],
    "correta": 2,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1055,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Marque a opção adequada.",
    "alternativas": [
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades."
    ],
    "correta": 1,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1056,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Marque a opção adequada.",
    "alternativas": [
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial."
    ],
    "correta": 0,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1057,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Indique a assertiva correta.",
    "alternativas": [
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito."
    ],
    "correta": 4,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1058,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Indique a assertiva correta.",
    "alternativas": [
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária."
    ],
    "correta": 3,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1059,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Indique a assertiva correta.",
    "alternativas": [
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público."
    ],
    "correta": 2,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1060,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Indique a assertiva correta.",
    "alternativas": [
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa."
    ],
    "correta": 1,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1061,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Indique a assertiva correta.",
    "alternativas": [
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada.",
      "À liberdade religiosa."
    ],
    "correta": 0,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1062,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Indique a assertiva correta.",
    "alternativas": [
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato."
    ],
    "correta": 4,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1063,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Indique a assertiva correta.",
    "alternativas": [
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE.",
      "LIMPA."
    ],
    "correta": 3,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1064,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Indique a assertiva correta.",
    "alternativas": [
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade."
    ],
    "correta": 2,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1065,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Indique a assertiva correta.",
    "alternativas": [
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade.",
      "Continuidade."
    ],
    "correta": 1,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1066,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Indique a assertiva correta.",
    "alternativas": [
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação.",
      "A aprovação no concurso."
    ],
    "correta": 0,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1067,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Indique a assertiva correta.",
    "alternativas": [
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa."
    ],
    "correta": 4,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1068,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Segundo o art. 144 da Constituição Federal, a segurança pública é: Indique a assertiva correta.",
    "alternativas": [
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União."
    ],
    "correta": 3,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1069,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Indique a assertiva correta.",
    "alternativas": [
      "Defesa civil em calamidades.",
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral."
    ],
    "correta": 2,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1070,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Indique a assertiva correta.",
    "alternativas": [
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional."
    ],
    "correta": 1,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1071,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Indique a assertiva correta.",
    "alternativas": [
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional."
    ],
    "correta": 0,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1072,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Indique a assertiva correta.",
    "alternativas": [
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania."
    ],
    "correta": 4,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1073,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Indique a assertiva correta.",
    "alternativas": [
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo."
    ],
    "correta": 3,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1074,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Indique a assertiva correta.",
    "alternativas": [
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite."
    ],
    "correta": 2,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1075,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Indique a assertiva correta.",
    "alternativas": [
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada."
    ],
    "correta": 1,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1076,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Indique a assertiva correta.",
    "alternativas": [
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas."
    ],
    "correta": 0,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1077,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Indique a assertiva correta.",
    "alternativas": [
      "LIMPA.",
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE."
    ],
    "correta": 4,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1078,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Indique a assertiva correta.",
    "alternativas": [
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo."
    ],
    "correta": 3,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1079,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Indique a assertiva correta.",
    "alternativas": [
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade."
    ],
    "correta": 2,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1080,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Indique a assertiva correta.",
    "alternativas": [
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação."
    ],
    "correta": 1,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1081,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Indique a assertiva correta.",
    "alternativas": [
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei."
    ],
    "correta": 0,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1082,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Segundo o art. 144 da Constituição Federal, a segurança pública é: Indique a assertiva correta.",
    "alternativas": [
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos."
    ],
    "correta": 4,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1083,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Indique a assertiva correta.",
    "alternativas": [
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades.",
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais."
    ],
    "correta": 3,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1084,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Indique a assertiva correta.",
    "alternativas": [
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1085,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista."
    ],
    "correta": 1,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1086,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos."
    ],
    "correta": 0,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1087,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si."
    ],
    "correta": 4,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1088,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora."
    ],
    "correta": 3,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1089,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "À propriedade privada.",
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas."
    ],
    "correta": 2,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1090,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada."
    ],
    "correta": 1,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1091,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "LIMPE.",
      "LIMPA.",
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência."
    ],
    "correta": 0,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1092,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia."
    ],
    "correta": 4,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1093,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Especialidade.",
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia."
    ],
    "correta": 3,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1094,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Um ano da nomeação.",
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse."
    ],
    "correta": 2,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1095,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância."
    ],
    "correta": 1,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1096,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Segundo o art. 144 da Constituição Federal, a segurança pública é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle."
    ],
    "correta": 0,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1097,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades.",
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais."
    ],
    "correta": 4,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1098,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena."
    ],
    "correta": 3,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1099,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado."
    ],
    "correta": 2,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1100,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Prevalência dos direitos humanos.",
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional."
    ],
    "correta": 1,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1101,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar."
    ],
    "correta": 0,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1102,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial."
    ],
    "correta": 4,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1103,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada.",
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto."
    ],
    "correta": 3,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1104,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito."
    ],
    "correta": 2,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1105,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "LIPME sem eficiência.",
      "LIMPE.",
      "LIMPA.",
      "MELIP.",
      "PALME."
    ],
    "correta": 1,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1106,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade."
    ],
    "correta": 0,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1107,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Hierarquia.",
      "Especialidade.",
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade."
    ],
    "correta": 4,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1108,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Cinco anos da posse.",
      "Um ano da nomeação.",
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício."
    ],
    "correta": 3,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1109,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação."
    ],
    "correta": 2,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1110,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Segundo o art. 144 da Constituição Federal, a segurança pública é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados."
    ],
    "correta": 1,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1111,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades.",
      "Fiscalização tributária."
    ],
    "correta": 0,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1112,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública."
    ],
    "correta": 4,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1113,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Identifique a alternativa correta.",
    "alternativas": [
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos."
    ],
    "correta": 3,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1114,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Identifique a alternativa correta.",
    "alternativas": [
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza."
    ],
    "correta": 2,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1115,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Identifique a alternativa correta.",
    "alternativas": [
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas."
    ],
    "correta": 1,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1116,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Identifique a alternativa correta.",
    "alternativas": [
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem."
    ],
    "correta": 0,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1117,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Identifique a alternativa correta.",
    "alternativas": [
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada.",
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral."
    ],
    "correta": 4,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1118,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Identifique a alternativa correta.",
    "alternativas": [
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia."
    ],
    "correta": 3,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1119,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Identifique a alternativa correta.",
    "alternativas": [
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE.",
      "LIMPA.",
      "MELIP."
    ],
    "correta": 2,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1120,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Identifique a alternativa correta.",
    "alternativas": [
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação."
    ],
    "correta": 1,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1121,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Identifique a alternativa correta.",
    "alternativas": [
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade.",
      "Continuidade.",
      "Autotutela."
    ],
    "correta": 0,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1122,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Identifique a alternativa correta.",
    "alternativas": [
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação.",
      "A aprovação no concurso.",
      "Três anos de efetivo exercício."
    ],
    "correta": 4,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1123,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Identifique a alternativa correta.",
    "alternativas": [
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa.",
      "Por decisão verbal da chefia imediata."
    ],
    "correta": 3,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1124,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Segundo o art. 144 da Constituição Federal, a segurança pública é: Identifique a alternativa correta.",
    "alternativas": [
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União.",
      "Atribuição exclusiva das Forças Armadas."
    ],
    "correta": 2,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1125,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Identifique a alternativa correta.",
    "alternativas": [
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral.",
      "Defesa civil em calamidades."
    ],
    "correta": 1,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1126,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Identifique a alternativa correta.",
    "alternativas": [
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional.",
      "A Polícia Penal exerce controle externo da atividade policial."
    ],
    "correta": 0,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1127,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Identifique a alternativa correta.",
    "alternativas": [
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional.",
      "Estado Democrático de Direito."
    ],
    "correta": 4,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1128,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Identifique a alternativa correta.",
    "alternativas": [
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania.",
      "Construção de uma sociedade livre, justa e solidária."
    ],
    "correta": 3,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1129,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Identifique a alternativa correta.",
    "alternativas": [
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo.",
      "Órgãos auxiliares do Ministério Público."
    ],
    "correta": 2,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1130,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Identifique a alternativa correta.",
    "alternativas": [
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite.",
      "Interesse da autoridade policial, sem justificativa."
    ],
    "correta": 1,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1131,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Identifique a alternativa correta.",
    "alternativas": [
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada.",
      "À liberdade religiosa."
    ],
    "correta": 0,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1132,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Identifique a alternativa correta.",
    "alternativas": [
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas.",
      "É livre, sendo vedado o anonimato."
    ],
    "correta": 4,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1133,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Identifique a alternativa correta.",
    "alternativas": [
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE.",
      "LIMPA."
    ],
    "correta": 3,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1134,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Identifique a alternativa correta.",
    "alternativas": [
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo.",
      "Moralidade e vitaliciedade."
    ],
    "correta": 2,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1135,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Identifique a alternativa correta.",
    "alternativas": [
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade.",
      "Continuidade."
    ],
    "correta": 1,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1136,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Identifique a alternativa correta.",
    "alternativas": [
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação.",
      "A aprovação no concurso."
    ],
    "correta": 0,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1137,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Servidor estável poderá perder o cargo nas hipóteses constitucionais. Assinale a alternativa correta. Identifique a alternativa correta.",
    "alternativas": [
      "Por decisão verbal da chefia imediata.",
      "Por mera conveniência administrativa, sem motivação.",
      "Automaticamente ao responder sindicância.",
      "Por reprovação em curso não previsto em lei.",
      "Mediante processo administrativo em que lhe seja assegurada ampla defesa."
    ],
    "correta": 4,
    "explicacao": "O servidor estável pode perder o cargo mediante sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica, na forma de lei complementar."
  },
  {
    "id": 1138,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Segundo o art. 144 da Constituição Federal, a segurança pública é: Identifique a alternativa correta.",
    "alternativas": [
      "Atribuição exclusiva das Forças Armadas.",
      "Responsabilidade apenas dos Estados.",
      "Atividade privada delegável sem controle.",
      "Dever do Estado, direito e responsabilidade de todos.",
      "Dever exclusivo da União."
    ],
    "correta": 3,
    "explicacao": "O art. 144 estabelece segurança pública como dever do Estado, direito e responsabilidade de todos."
  },
  {
    "id": 1139,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A Polícia Penal, incluída no art. 144 da Constituição Federal, destina-se especialmente à: Identifique a alternativa correta.",
    "alternativas": [
      "Defesa civil em calamidades.",
      "Fiscalização tributária.",
      "Segurança dos estabelecimentos penais.",
      "Investigação de crimes eleitorais.",
      "Policiamento ostensivo urbano em geral."
    ],
    "correta": 2,
    "explicacao": "As polícias penais vinculam-se à segurança dos estabelecimentos penais."
  },
  {
    "id": 1140,
    "materia": "Constituição Federal",
    "assunto": "Segurança Pública",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Em tema de segurança pública, assinale a alternativa correta conforme a Constituição Federal. Identifique a alternativa correta.",
    "alternativas": [
      "A Polícia Penal exerce controle externo da atividade policial.",
      "As polícias penais federal, estaduais e distrital integram os órgãos de segurança pública.",
      "A Polícia Penal substitui o Poder Judiciário na execução da pena.",
      "A segurança pública é dever exclusivo dos Municípios.",
      "As Forças Armadas exercem ordinariamente a segurança prisional."
    ],
    "correta": 1,
    "explicacao": "A Polícia Penal integra os órgãos de segurança pública previstos no art. 144."
  },
  {
    "id": 1141,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Fácil",
    "pergunta": "Segundo a Constituição Federal, a República Federativa do Brasil constitui-se em: Assinale a alternativa correta.",
    "alternativas": [
      "Estado Democrático de Direito.",
      "Confederação de Estados soberanos.",
      "Estado unitário descentralizado.",
      "Monarquia parlamentarista.",
      "Estado de exceção constitucional."
    ],
    "correta": 0,
    "explicacao": "O art. 1º da CF/88 define o Brasil como República Federativa constituída em Estado Democrático de Direito."
  },
  {
    "id": 1142,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Assinale a alternativa que apresenta fundamento da República Federativa do Brasil. Assinale a alternativa correta.",
    "alternativas": [
      "Construção de uma sociedade livre, justa e solidária.",
      "Erradicação da pobreza.",
      "Garantia do desenvolvimento nacional.",
      "Prevalência dos direitos humanos.",
      "Soberania."
    ],
    "correta": 4,
    "explicacao": "A soberania é fundamento previsto no art. 1º, I. As demais alternativas são objetivos ou princípios das relações internacionais."
  },
  {
    "id": 1143,
    "materia": "Constituição Federal",
    "assunto": "Princípios Fundamentais",
    "dificuldade": "Média",
    "pergunta": "A separação dos Poderes, na Constituição Federal, significa que Legislativo, Executivo e Judiciário são: Assinale a alternativa correta.",
    "alternativas": [
      "Órgãos auxiliares do Ministério Público.",
      "Subordinados às Forças Armadas.",
      "Dependentes de autorização judicial para atuar.",
      "Independentes e harmônicos entre si.",
      "Hierarquicamente subordinados ao Executivo."
    ],
    "correta": 3,
    "explicacao": "O art. 2º da CF prevê Legislativo, Executivo e Judiciário como Poderes independentes e harmônicos entre si."
  },
  {
    "id": 1144,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "A inviolabilidade de domicílio, prevista no art. 5º, admite ingresso na casa do indivíduo sem consentimento do morador em caso de: Assinale a alternativa correta.",
    "alternativas": [
      "Interesse da autoridade policial, sem justificativa.",
      "Fiscalização rotineira, independentemente de ordem.",
      "Flagrante delito, desastre, prestação de socorro ou, durante o dia, por determinação judicial.",
      "Determinação administrativa verbal, a qualquer hora.",
      "Suspeita genérica de irregularidade, durante a noite."
    ],
    "correta": 2,
    "explicacao": "A CF permite ingresso sem consentimento em flagrante delito, desastre, socorro ou, durante o dia, por ordem judicial."
  },
  {
    "id": 1145,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Difícil",
    "pergunta": "João foi impedido de acessar informações públicas de interesse coletivo, sem justificativa de sigilo legal. A negativa viola especialmente o direito: Assinale a alternativa correta.",
    "alternativas": [
      "À liberdade religiosa.",
      "De receber dos órgãos públicos informações de interesse particular, coletivo ou geral.",
      "Ao anonimato absoluto.",
      "À ampla defesa em processo judicial apenas.",
      "À propriedade privada."
    ],
    "correta": 1,
    "explicacao": "O art. 5º assegura o direito de receber informações públicas, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
  },
  {
    "id": 1146,
    "materia": "Constituição Federal",
    "assunto": "Direitos e Garantias Fundamentais",
    "dificuldade": "Média",
    "pergunta": "Sobre a liberdade de manifestação do pensamento, é correto afirmar que: Assinale a alternativa correta.",
    "alternativas": [
      "É livre, sendo vedado o anonimato.",
      "Depende de autorização administrativa prévia.",
      "É livre e admite anonimato irrestrito.",
      "Somente pode ocorrer por meio de imprensa registrada.",
      "É proibida em repartições públicas."
    ],
    "correta": 0,
    "explicacao": "O art. 5º, IV, estabelece que é livre a manifestação do pensamento, sendo vedado o anonimato."
  },
  {
    "id": 1147,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Fácil",
    "pergunta": "O caput do art. 37 da Constituição Federal prevê expressamente os princípios da Administração Pública conhecidos pelo mnemônico: Assinale a alternativa correta.",
    "alternativas": [
      "LIMPA.",
      "MELIP.",
      "PALME.",
      "LIPME sem eficiência.",
      "LIMPE."
    ],
    "correta": 4,
    "explicacao": "LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência."
  },
  {
    "id": 1148,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Média",
    "pergunta": "A exigência de concurso público para investidura em cargo ou emprego público decorre especialmente dos princípios da: Assinale a alternativa correta.",
    "alternativas": [
      "Moralidade e vitaliciedade.",
      "Eficiência e livre contratação.",
      "Hierarquia e informalidade.",
      "Impessoalidade e isonomia.",
      "Publicidade e sigilo."
    ],
    "correta": 3,
    "explicacao": "O concurso público concretiza a impessoalidade, igualdade de acesso e moralidade administrativa."
  },
  {
    "id": 1149,
    "materia": "Constituição Federal",
    "assunto": "Administração Pública",
    "dificuldade": "Difícil",
    "pergunta": "A Administração divulgou propaganda institucional com nome, símbolo e imagem de servidor, caracterizando promoção pessoal. A conduta viola principalmente: Assinale a alternativa correta.",
    "alternativas": [
      "Continuidade.",
      "Autotutela.",
      "Impessoalidade.",
      "Hierarquia.",
      "Especialidade."
    ],
    "correta": 2,
    "explicacao": "A publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal."
  },
  {
    "id": 1150,
    "materia": "Constituição Federal",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo efetivo em virtude de concurso público adquire estabilidade após: Assinale a alternativa correta.",
    "alternativas": [
      "A aprovação no concurso.",
      "Três anos de efetivo exercício.",
      "Dois anos de efetivo exercício.",
      "Cinco anos da posse.",
      "Um ano da nomeação."
    ],
    "correta": 1,
    "explicacao": "A estabilidade é adquirida após três anos de efetivo exercício, observada avaliação especial de desempenho."
  },
  {
    "id": 1151,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "No âmbito estadual, a Administração Pública deve observar princípios como:",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1152,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "A publicidade dos atos administrativos tem como finalidade compatível com a Constituição:",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1153,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente:",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1154,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "A regra de ingresso em cargo público efetivo estadual é:",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1155,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "A estabilidade do servidor público efetivo tem por finalidade:",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1156,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "A responsabilização do servidor público pode ocorrer:",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1157,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "A segurança pública estadual busca preservar:",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1158,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "A atuação dos órgãos de segurança deve respeitar:",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1159,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "A política penitenciária deve compatibilizar:",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1160,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "A ressocialização do condenado, no contexto da política penitenciária, representa:",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1161,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No âmbito estadual, a Administração Pública deve observar princípios como: Assinale a alternativa correta.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1162,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Assinale a alternativa correta.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1163,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Assinale a alternativa correta.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1164,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A regra de ingresso em cargo público efetivo estadual é: Assinale a alternativa correta.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1165,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A estabilidade do servidor público efetivo tem por finalidade: Assinale a alternativa correta.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1166,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A responsabilização do servidor público pode ocorrer: Assinale a alternativa correta.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1167,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A segurança pública estadual busca preservar: Assinale a alternativa correta.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1168,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A atuação dos órgãos de segurança deve respeitar: Assinale a alternativa correta.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1169,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A política penitenciária deve compatibilizar: Assinale a alternativa correta.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1170,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A ressocialização do condenado, no contexto da política penitenciária, representa: Assinale a alternativa correta.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1171,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No âmbito estadual, a Administração Pública deve observar princípios como: Marque a opção adequada.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1172,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Marque a opção adequada.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1173,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Marque a opção adequada.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1174,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A regra de ingresso em cargo público efetivo estadual é: Marque a opção adequada.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1175,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A estabilidade do servidor público efetivo tem por finalidade: Marque a opção adequada.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1176,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A responsabilização do servidor público pode ocorrer: Marque a opção adequada.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1177,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A segurança pública estadual busca preservar: Marque a opção adequada.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1178,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A atuação dos órgãos de segurança deve respeitar: Marque a opção adequada.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1179,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A política penitenciária deve compatibilizar: Marque a opção adequada.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1180,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A ressocialização do condenado, no contexto da política penitenciária, representa: Marque a opção adequada.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1181,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No âmbito estadual, a Administração Pública deve observar princípios como: Marque a opção adequada.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1182,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Marque a opção adequada.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1183,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Marque a opção adequada.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1184,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A regra de ingresso em cargo público efetivo estadual é: Marque a opção adequada.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1185,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A estabilidade do servidor público efetivo tem por finalidade: Marque a opção adequada.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1186,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A responsabilização do servidor público pode ocorrer: Marque a opção adequada.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1187,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A segurança pública estadual busca preservar: Marque a opção adequada.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1188,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A atuação dos órgãos de segurança deve respeitar: Marque a opção adequada.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1189,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A política penitenciária deve compatibilizar: Marque a opção adequada.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1190,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A ressocialização do condenado, no contexto da política penitenciária, representa: Marque a opção adequada.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1191,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No âmbito estadual, a Administração Pública deve observar princípios como: Indique a assertiva correta.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1192,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Indique a assertiva correta.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1193,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Indique a assertiva correta.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1194,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A regra de ingresso em cargo público efetivo estadual é: Indique a assertiva correta.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1195,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A estabilidade do servidor público efetivo tem por finalidade: Indique a assertiva correta.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1196,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A responsabilização do servidor público pode ocorrer: Indique a assertiva correta.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1197,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A segurança pública estadual busca preservar: Indique a assertiva correta.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1198,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A atuação dos órgãos de segurança deve respeitar: Indique a assertiva correta.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1199,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A política penitenciária deve compatibilizar: Indique a assertiva correta.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1200,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A ressocialização do condenado, no contexto da política penitenciária, representa: Indique a assertiva correta.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1201,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "No âmbito estadual, a Administração Pública deve observar princípios como: Indique a assertiva correta.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1202,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Indique a assertiva correta.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1203,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Indique a assertiva correta.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1204,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "A regra de ingresso em cargo público efetivo estadual é: Indique a assertiva correta.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1205,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "A estabilidade do servidor público efetivo tem por finalidade: Indique a assertiva correta.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1206,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "A responsabilização do servidor público pode ocorrer: Indique a assertiva correta.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1207,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "A segurança pública estadual busca preservar: Indique a assertiva correta.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1208,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "A atuação dos órgãos de segurança deve respeitar: Indique a assertiva correta.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1209,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "A política penitenciária deve compatibilizar: Indique a assertiva correta.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1210,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "A ressocialização do condenado, no contexto da política penitenciária, representa: Indique a assertiva correta.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1211,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No âmbito estadual, a Administração Pública deve observar princípios como: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1212,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1213,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1214,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A regra de ingresso em cargo público efetivo estadual é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1215,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A estabilidade do servidor público efetivo tem por finalidade: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1216,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A responsabilização do servidor público pode ocorrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1217,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A segurança pública estadual busca preservar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1218,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A atuação dos órgãos de segurança deve respeitar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1219,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A política penitenciária deve compatibilizar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1220,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A ressocialização do condenado, no contexto da política penitenciária, representa: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1221,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No âmbito estadual, a Administração Pública deve observar princípios como: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1222,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1223,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1224,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A regra de ingresso em cargo público efetivo estadual é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1225,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A estabilidade do servidor público efetivo tem por finalidade: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1226,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A responsabilização do servidor público pode ocorrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1227,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A segurança pública estadual busca preservar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1228,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A atuação dos órgãos de segurança deve respeitar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1229,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A política penitenciária deve compatibilizar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1230,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A ressocialização do condenado, no contexto da política penitenciária, representa: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1231,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No âmbito estadual, a Administração Pública deve observar princípios como: Identifique a alternativa correta.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1232,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Identifique a alternativa correta.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1233,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Identifique a alternativa correta.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1234,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A regra de ingresso em cargo público efetivo estadual é: Identifique a alternativa correta.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1235,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A estabilidade do servidor público efetivo tem por finalidade: Identifique a alternativa correta.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1236,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A responsabilização do servidor público pode ocorrer: Identifique a alternativa correta.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1237,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A segurança pública estadual busca preservar: Identifique a alternativa correta.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1238,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A atuação dos órgãos de segurança deve respeitar: Identifique a alternativa correta.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1239,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A política penitenciária deve compatibilizar: Identifique a alternativa correta.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1240,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A ressocialização do condenado, no contexto da política penitenciária, representa: Identifique a alternativa correta.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1241,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No âmbito estadual, a Administração Pública deve observar princípios como: Identifique a alternativa correta.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1242,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Identifique a alternativa correta.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1243,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Identifique a alternativa correta.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1244,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A regra de ingresso em cargo público efetivo estadual é: Identifique a alternativa correta.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1245,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A estabilidade do servidor público efetivo tem por finalidade: Identifique a alternativa correta.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1246,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A responsabilização do servidor público pode ocorrer: Identifique a alternativa correta.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1247,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A segurança pública estadual busca preservar: Identifique a alternativa correta.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1248,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A atuação dos órgãos de segurança deve respeitar: Identifique a alternativa correta.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1249,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A política penitenciária deve compatibilizar: Identifique a alternativa correta.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1250,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A ressocialização do condenado, no contexto da política penitenciária, representa: Identifique a alternativa correta.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1251,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "No âmbito estadual, a Administração Pública deve observar princípios como: Assinale a alternativa correta.",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1252,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Assinale a alternativa correta.",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1253,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Assinale a alternativa correta.",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1254,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "A regra de ingresso em cargo público efetivo estadual é: Assinale a alternativa correta.",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1255,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "A estabilidade do servidor público efetivo tem por finalidade: Assinale a alternativa correta.",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1256,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "A responsabilização do servidor público pode ocorrer: Assinale a alternativa correta.",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1257,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "A segurança pública estadual busca preservar: Assinale a alternativa correta.",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1258,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "A atuação dos órgãos de segurança deve respeitar: Assinale a alternativa correta.",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1259,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "A política penitenciária deve compatibilizar: Assinale a alternativa correta.",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1260,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "A ressocialização do condenado, no contexto da política penitenciária, representa: Assinale a alternativa correta.",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1261,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No âmbito estadual, a Administração Pública deve observar princípios como: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1262,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1263,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1264,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A regra de ingresso em cargo público efetivo estadual é: Assinale a alternativa correta. (114)",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1265,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A estabilidade do servidor público efetivo tem por finalidade: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1266,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A responsabilização do servidor público pode ocorrer: Assinale a alternativa correta. (116)",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1267,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A segurança pública estadual busca preservar: Assinale a alternativa correta. (117)",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1268,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A atuação dos órgãos de segurança deve respeitar: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1269,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A política penitenciária deve compatibilizar: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1270,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A ressocialização do condenado, no contexto da política penitenciária, representa: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1271,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No âmbito estadual, a Administração Pública deve observar princípios como: Marque a opção adequada. (121)",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1272,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Marque a opção adequada. (122)",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1273,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Marque a opção adequada. (123)",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1274,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A regra de ingresso em cargo público efetivo estadual é: Marque a opção adequada. (124)",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1275,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A estabilidade do servidor público efetivo tem por finalidade: Marque a opção adequada. (125)",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1276,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A responsabilização do servidor público pode ocorrer: Marque a opção adequada. (126)",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1277,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A segurança pública estadual busca preservar: Marque a opção adequada. (127)",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1278,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A atuação dos órgãos de segurança deve respeitar: Marque a opção adequada. (128)",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1279,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A política penitenciária deve compatibilizar: Marque a opção adequada. (129)",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1280,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A ressocialização do condenado, no contexto da política penitenciária, representa: Marque a opção adequada. (130)",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1281,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No âmbito estadual, a Administração Pública deve observar princípios como: Marque a opção adequada. (131)",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1282,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Marque a opção adequada. (132)",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1283,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Marque a opção adequada. (133)",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1284,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A regra de ingresso em cargo público efetivo estadual é: Marque a opção adequada. (134)",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1285,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A estabilidade do servidor público efetivo tem por finalidade: Marque a opção adequada. (135)",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1286,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A responsabilização do servidor público pode ocorrer: Marque a opção adequada. (136)",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1287,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A segurança pública estadual busca preservar: Marque a opção adequada. (137)",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1288,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A atuação dos órgãos de segurança deve respeitar: Marque a opção adequada. (138)",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1289,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A política penitenciária deve compatibilizar: Marque a opção adequada. (139)",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1290,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A ressocialização do condenado, no contexto da política penitenciária, representa: Marque a opção adequada. (140)",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1291,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No âmbito estadual, a Administração Pública deve observar princípios como: Indique a assertiva correta. (141)",
    "alternativas": [
      "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      "Pessoalidade, sigilo, conveniência, informalidade e privilégio.",
      "Hierarquia, segredo, parcialidade, vantagem e dispensa de controle.",
      "Livre escolha, pessoalidade, publicidade seletiva e informalidade.",
      "Exclusividade, reserva, pessoalidade e promoção institucional."
    ],
    "correta": 0,
    "explicacao": "Os princípios constitucionais administrativos vinculam também a Administração Pública estadual."
  },
  {
    "id": 1292,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A publicidade dos atos administrativos tem como finalidade compatível com a Constituição: Indique a assertiva correta. (142)",
    "alternativas": [
      "Promover pessoalmente o agente público.",
      "Impedir fiscalização externa.",
      "Tornar o sigilo regra geral.",
      "Substituir a motivação dos atos.",
      "Permitir transparência e controle social."
    ],
    "correta": 4,
    "explicacao": "Publicidade garante transparência, controle e conhecimento dos atos públicos."
  },
  {
    "id": 1293,
    "materia": "Constituição Estadual RS",
    "assunto": "Administração Pública Estadual",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A nomeação de parente para cargo sem observância de critérios republicanos e impessoais viola especialmente: Indique a assertiva correta. (143)",
    "alternativas": [
      "Continuidade e autotutela.",
      "Centralização e avocação.",
      "Hierarquia e subordinação.",
      "Moralidade e impessoalidade.",
      "Especialidade e delegação."
    ],
    "correta": 3,
    "explicacao": "Favorecimentos pessoais afrontam impessoalidade e moralidade administrativa."
  },
  {
    "id": 1294,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A regra de ingresso em cargo público efetivo estadual é: Indique a assertiva correta. (144)",
    "alternativas": [
      "A escolha por parentesco.",
      "A nomeação sem processo seletivo.",
      "A aprovação em concurso público.",
      "A indicação política direta.",
      "A contratação verbal."
    ],
    "correta": 2,
    "explicacao": "O concurso público é a regra para ingresso em cargo efetivo."
  },
  {
    "id": 1295,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A estabilidade do servidor público efetivo tem por finalidade: Indique a assertiva correta. (145)",
    "alternativas": [
      "Assegurar vitaliciedade a todo servidor.",
      "Proteger a atuação imparcial e a continuidade administrativa.",
      "Impedir qualquer responsabilização.",
      "Garantir promoção automática.",
      "Eliminar avaliação funcional."
    ],
    "correta": 1,
    "explicacao": "A estabilidade não é imunidade; busca proteger a função pública contra perseguições indevidas."
  },
  {
    "id": 1296,
    "materia": "Constituição Estadual RS",
    "assunto": "Servidores Públicos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A responsabilização do servidor público pode ocorrer: Indique a assertiva correta. (146)",
    "alternativas": [
      "Nas esferas administrativa, civil e penal, conforme o ato praticado.",
      "Apenas na esfera penal.",
      "Somente após demissão.",
      "Exclusivamente por decisão política.",
      "Nunca, se o servidor for estável."
    ],
    "correta": 0,
    "explicacao": "O servidor pode responder em diferentes esferas, conforme a natureza da conduta."
  },
  {
    "id": 1297,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A segurança pública estadual busca preservar: Indique a assertiva correta. (147)",
    "alternativas": [
      "A arrecadação tributária estadual.",
      "Somente os bens pertencentes ao Estado.",
      "A política agrícola.",
      "A atividade econômica privada.",
      "A ordem pública e a incolumidade das pessoas e do patrimônio."
    ],
    "correta": 4,
    "explicacao": "Segurança pública visa ordem pública e proteção das pessoas e patrimônio."
  },
  {
    "id": 1298,
    "materia": "Constituição Estadual RS",
    "assunto": "Segurança Pública",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A atuação dos órgãos de segurança deve respeitar: Indique a assertiva correta. (148)",
    "alternativas": [
      "Critérios pessoais do agente.",
      "Sigilo absoluto e permanente.",
      "Ausência de controle.",
      "Direitos e garantias fundamentais.",
      "Interesses políticos momentâneos."
    ],
    "correta": 3,
    "explicacao": "Toda atuação estatal deve respeitar direitos fundamentais."
  },
  {
    "id": 1299,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A política penitenciária deve compatibilizar: Indique a assertiva correta. (149)",
    "alternativas": [
      "Disciplina e arbitrariedade.",
      "Custódia e ausência de fiscalização.",
      "Segurança, legalidade e dignidade humana.",
      "Apenas contenção física.",
      "Economia de recursos e supressão de direitos."
    ],
    "correta": 2,
    "explicacao": "A execução penal deve respeitar a legalidade e a dignidade humana, sem afastar a segurança."
  },
  {
    "id": 1300,
    "materia": "Constituição Estadual RS",
    "assunto": "Política Penitenciária",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A ressocialização do condenado, no contexto da política penitenciária, representa: Indique a assertiva correta. (150)",
    "alternativas": [
      "Medida incompatível com segurança pública.",
      "Objetivo relacionado à execução penal.",
      "Benefício sem previsão jurídica.",
      "Atividade exclusiva da família.",
      "Competência exclusiva do Legislativo."
    ],
    "correta": 1,
    "explicacao": "A execução penal busca também a reintegração social do condenado."
  },
  {
    "id": 1301,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 8.429/1992 disciplina, em linhas gerais:",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1302,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra:",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1303,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Constitui ato de improbidade que importa enriquecimento ilícito:",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1304,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar:",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1305,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Ato de improbidade que causa dano ao erário pressupõe:",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1306,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como:",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1307,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "A violação aos princípios administrativos, para configurar improbidade, deve estar associada:",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1308,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Favorecer interessado em processo administrativo por amizade pessoal viola principalmente:",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1309,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Entre as sanções possíveis por improbidade administrativa está:",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1310,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "A aplicação das sanções por improbidade deve observar:",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1311,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 8.429/1992 disciplina, em linhas gerais: Assinale a alternativa correta.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1312,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Assinale a alternativa correta.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1313,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Constitui ato de improbidade que importa enriquecimento ilícito: Assinale a alternativa correta.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1314,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Assinale a alternativa correta.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1315,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Ato de improbidade que causa dano ao erário pressupõe: Assinale a alternativa correta.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1316,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Assinale a alternativa correta.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1317,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Assinale a alternativa correta.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1318,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Assinale a alternativa correta.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1319,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Entre as sanções possíveis por improbidade administrativa está: Assinale a alternativa correta.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1320,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A aplicação das sanções por improbidade deve observar: Assinale a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1321,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 8.429/1992 disciplina, em linhas gerais: Marque a opção adequada.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1322,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Marque a opção adequada.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1323,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Constitui ato de improbidade que importa enriquecimento ilícito: Marque a opção adequada.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1324,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Marque a opção adequada.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1325,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Ato de improbidade que causa dano ao erário pressupõe: Marque a opção adequada.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1326,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Marque a opção adequada.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1327,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Marque a opção adequada.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1328,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Marque a opção adequada.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1329,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Entre as sanções possíveis por improbidade administrativa está: Marque a opção adequada.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1330,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A aplicação das sanções por improbidade deve observar: Marque a opção adequada.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1331,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 8.429/1992 disciplina, em linhas gerais: Marque a opção adequada.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1332,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Marque a opção adequada.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1333,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Constitui ato de improbidade que importa enriquecimento ilícito: Marque a opção adequada.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1334,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Marque a opção adequada.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1335,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Ato de improbidade que causa dano ao erário pressupõe: Marque a opção adequada.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1336,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Marque a opção adequada.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1337,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Marque a opção adequada.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1338,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Marque a opção adequada.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1339,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Entre as sanções possíveis por improbidade administrativa está: Marque a opção adequada.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1340,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A aplicação das sanções por improbidade deve observar: Marque a opção adequada.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1341,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 8.429/1992 disciplina, em linhas gerais: Indique a assertiva correta.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1342,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Indique a assertiva correta.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1343,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Constitui ato de improbidade que importa enriquecimento ilícito: Indique a assertiva correta.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1344,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Indique a assertiva correta.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1345,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Ato de improbidade que causa dano ao erário pressupõe: Indique a assertiva correta.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1346,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Indique a assertiva correta.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1347,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Indique a assertiva correta.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1348,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Indique a assertiva correta.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1349,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Entre as sanções possíveis por improbidade administrativa está: Indique a assertiva correta.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1350,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A aplicação das sanções por improbidade deve observar: Indique a assertiva correta.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1351,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 8.429/1992 disciplina, em linhas gerais: Indique a assertiva correta.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1352,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Indique a assertiva correta.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1353,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Constitui ato de improbidade que importa enriquecimento ilícito: Indique a assertiva correta.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1354,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Indique a assertiva correta.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1355,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Ato de improbidade que causa dano ao erário pressupõe: Indique a assertiva correta.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1356,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Indique a assertiva correta.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1357,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Indique a assertiva correta.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1358,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Indique a assertiva correta.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1359,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Entre as sanções possíveis por improbidade administrativa está: Indique a assertiva correta.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1360,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "A aplicação das sanções por improbidade deve observar: Indique a assertiva correta.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1361,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 8.429/1992 disciplina, em linhas gerais: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1362,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1363,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Constitui ato de improbidade que importa enriquecimento ilícito: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1364,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1365,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Ato de improbidade que causa dano ao erário pressupõe: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1366,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1367,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1368,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1369,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Entre as sanções possíveis por improbidade administrativa está: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1370,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A aplicação das sanções por improbidade deve observar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1371,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 8.429/1992 disciplina, em linhas gerais: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1372,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1373,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Constitui ato de improbidade que importa enriquecimento ilícito: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1374,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1375,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Ato de improbidade que causa dano ao erário pressupõe: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1376,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1377,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1378,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1379,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Entre as sanções possíveis por improbidade administrativa está: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1380,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A aplicação das sanções por improbidade deve observar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1381,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 8.429/1992 disciplina, em linhas gerais: Identifique a alternativa correta.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1382,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Identifique a alternativa correta.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1383,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Constitui ato de improbidade que importa enriquecimento ilícito: Identifique a alternativa correta.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1384,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Identifique a alternativa correta.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1385,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Ato de improbidade que causa dano ao erário pressupõe: Identifique a alternativa correta.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1386,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Identifique a alternativa correta.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1387,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Identifique a alternativa correta.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1388,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Identifique a alternativa correta.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1389,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Entre as sanções possíveis por improbidade administrativa está: Identifique a alternativa correta.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1390,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A aplicação das sanções por improbidade deve observar: Identifique a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1391,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 8.429/1992 disciplina, em linhas gerais: Identifique a alternativa correta.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1392,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Identifique a alternativa correta.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1393,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Constitui ato de improbidade que importa enriquecimento ilícito: Identifique a alternativa correta.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1394,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Identifique a alternativa correta.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1395,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Ato de improbidade que causa dano ao erário pressupõe: Identifique a alternativa correta.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1396,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Identifique a alternativa correta.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1397,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Identifique a alternativa correta.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1398,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Identifique a alternativa correta.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1399,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Entre as sanções possíveis por improbidade administrativa está: Identifique a alternativa correta.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1400,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A aplicação das sanções por improbidade deve observar: Identifique a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1401,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 8.429/1992 disciplina, em linhas gerais: Assinale a alternativa correta.",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1402,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Assinale a alternativa correta.",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1403,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Constitui ato de improbidade que importa enriquecimento ilícito: Assinale a alternativa correta.",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1404,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Assinale a alternativa correta.",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1405,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Ato de improbidade que causa dano ao erário pressupõe: Assinale a alternativa correta.",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1406,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Assinale a alternativa correta.",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1407,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Assinale a alternativa correta.",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1408,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Assinale a alternativa correta.",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1409,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Entre as sanções possíveis por improbidade administrativa está: Assinale a alternativa correta.",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1410,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "A aplicação das sanções por improbidade deve observar: Assinale a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1411,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 8.429/1992 disciplina, em linhas gerais: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1412,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1413,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Constitui ato de improbidade que importa enriquecimento ilícito: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1414,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Assinale a alternativa correta. (114)",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1415,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Ato de improbidade que causa dano ao erário pressupõe: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1416,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Assinale a alternativa correta. (116)",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1417,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Assinale a alternativa correta. (117)",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1418,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1419,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Entre as sanções possíveis por improbidade administrativa está: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1420,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A aplicação das sanções por improbidade deve observar: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1421,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 8.429/1992 disciplina, em linhas gerais: Marque a opção adequada. (121)",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1422,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Marque a opção adequada. (122)",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1423,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Constitui ato de improbidade que importa enriquecimento ilícito: Marque a opção adequada. (123)",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1424,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Marque a opção adequada. (124)",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1425,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Ato de improbidade que causa dano ao erário pressupõe: Marque a opção adequada. (125)",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1426,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Marque a opção adequada. (126)",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1427,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Marque a opção adequada. (127)",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1428,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Marque a opção adequada. (128)",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1429,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Entre as sanções possíveis por improbidade administrativa está: Marque a opção adequada. (129)",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1430,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A aplicação das sanções por improbidade deve observar: Marque a opção adequada. (130)",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1431,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 8.429/1992 disciplina, em linhas gerais: Marque a opção adequada. (131)",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1432,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Marque a opção adequada. (132)",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1433,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Constitui ato de improbidade que importa enriquecimento ilícito: Marque a opção adequada. (133)",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1434,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Marque a opção adequada. (134)",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1435,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Ato de improbidade que causa dano ao erário pressupõe: Marque a opção adequada. (135)",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1436,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Marque a opção adequada. (136)",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1437,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Marque a opção adequada. (137)",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1438,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Marque a opção adequada. (138)",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1439,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Entre as sanções possíveis por improbidade administrativa está: Marque a opção adequada. (139)",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1440,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A aplicação das sanções por improbidade deve observar: Marque a opção adequada. (140)",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1441,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 8.429/1992 disciplina, em linhas gerais: Indique a assertiva correta. (141)",
    "alternativas": [
      "Atos de improbidade administrativa e respectivas sanções.",
      "Crimes contra a vida e penas privativas de liberdade.",
      "Normas gerais de licitação exclusivamente.",
      "Direitos do consumidor.",
      "Processo penal militar."
    ],
    "correta": 0,
    "explicacao": "A Lei de Improbidade Administrativa regula atos ímprobos e sanções aplicáveis."
  },
  {
    "id": 1442,
    "materia": "Improbidade Administrativa",
    "assunto": "Lei 8.429/1992",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Após as alterações da Lei nº 14.230/2021, a responsabilização por improbidade administrativa exige, em regra: Indique a assertiva correta. (142)",
    "alternativas": [
      "Mera culpa simples em qualquer caso.",
      "Responsabilidade objetiva irrestrita.",
      "Dano moral presumido sempre.",
      "Apenas irregularidade formal.",
      "Conduta dolosa."
    ],
    "correta": 4,
    "explicacao": "A reforma da LIA reforçou a exigência de dolo para configuração do ato de improbidade."
  },
  {
    "id": 1443,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Constitui ato de improbidade que importa enriquecimento ilícito: Indique a assertiva correta. (143)",
    "alternativas": [
      "Cumprir ordem legal expressa.",
      "Prestar contas no prazo.",
      "Atuar sem qualquer benefício patrimonial.",
      "Receber vantagem patrimonial indevida em razão do exercício do cargo.",
      "Publicar portaria administrativa regular."
    ],
    "correta": 3,
    "explicacao": "Enriquecimento ilícito envolve vantagem patrimonial indevida ligada à função pública."
  },
  {
    "id": 1444,
    "materia": "Improbidade Administrativa",
    "assunto": "Enriquecimento Ilícito",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Servidor recebe comissão clandestina para facilitar contrato administrativo. A conduta tende a configurar: Indique a assertiva correta. (144)",
    "alternativas": [
      "Exclusivamente infração eleitoral.",
      "Apenas responsabilidade trabalhista.",
      "Improbidade por enriquecimento ilícito.",
      "Mera falha formal sem sanção.",
      "Ato regular se não houver dano imediato."
    ],
    "correta": 2,
    "explicacao": "O recebimento de vantagem indevida em razão do cargo caracteriza enriquecimento ilícito."
  },
  {
    "id": 1445,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Ato de improbidade que causa dano ao erário pressupõe: Indique a assertiva correta. (145)",
    "alternativas": [
      "Atividade administrativa regular sem prejuízo.",
      "Prejuízo ao patrimônio público decorrente de conduta ilícita.",
      "Apenas discordância política.",
      "Simples atraso sem dano e sem dolo.",
      "Cumprimento de decisão judicial."
    ],
    "correta": 1,
    "explicacao": "Dano ao erário envolve lesão ao patrimônio público."
  },
  {
    "id": 1446,
    "materia": "Improbidade Administrativa",
    "assunto": "Dano ao Erário",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Autorizar pagamento por serviço não executado, causando prejuízo ao ente público, enquadra-se em tese como: Indique a assertiva correta. (146)",
    "alternativas": [
      "Ato de improbidade por dano ao erário.",
      "Ato de enriquecimento lícito do Estado.",
      "Conduta irrelevante, se houver nota fiscal.",
      "Exercício regular sem controle.",
      "Direito adquirido do contratado."
    ],
    "correta": 0,
    "explicacao": "Pagamento por serviço não realizado pode causar dano ao erário."
  },
  {
    "id": 1447,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A violação aos princípios administrativos, para configurar improbidade, deve estar associada: Indique a assertiva correta. (147)",
    "alternativas": [
      "A qualquer erro material sem relevância.",
      "A mero atraso involuntário sempre punível como improbidade.",
      "A responsabilidade objetiva automática.",
      "A opinião política do agente.",
      "A conduta dolosa que atente contra deveres de honestidade, imparcialidade ou legalidade."
    ],
    "correta": 4,
    "explicacao": "A improbidade por violação de princípios exige conduta dolosa e relevante."
  },
  {
    "id": 1448,
    "materia": "Improbidade Administrativa",
    "assunto": "Princípios Administrativos",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Favorecer interessado em processo administrativo por amizade pessoal viola principalmente: Indique a assertiva correta. (148)",
    "alternativas": [
      "Delegação e avocação.",
      "Continuidade e autotutela.",
      "Especialidade e territorialidade.",
      "Impessoalidade e moralidade.",
      "Publicidade e eficiência exclusivamente."
    ],
    "correta": 3,
    "explicacao": "Favorecimento pessoal afronta impessoalidade e moralidade."
  },
  {
    "id": 1449,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Entre as sanções possíveis por improbidade administrativa está: Indique a assertiva correta. (149)",
    "alternativas": [
      "Aumento de vencimentos.",
      "Estabilidade especial.",
      "Ressarcimento do dano, quando houver prejuízo ao erário.",
      "Promoção funcional obrigatória.",
      "Anistia automática."
    ],
    "correta": 2,
    "explicacao": "A LIA prevê sanções como ressarcimento, multa civil, perda da função e suspensão de direitos políticos, conforme o caso."
  },
  {
    "id": 1450,
    "materia": "Improbidade Administrativa",
    "assunto": "Sanções",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A aplicação das sanções por improbidade deve observar: Indique a assertiva correta. (150)",
    "alternativas": [
      "Sigilo absoluto sem defesa.",
      "Devido processo legal, contraditório e ampla defesa.",
      "Decisão verbal da chefia imediata.",
      "Punição automática sem processo.",
      "Vontade exclusiva do denunciante."
    ],
    "correta": 1,
    "explicacao": "As sanções dependem de processo regular e garantias de defesa."
  },
  {
    "id": 1451,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 12.527/2011 estabelece como diretriz:",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1452,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Transparência ativa consiste em:",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1453,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Transparência passiva ocorre quando:",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1454,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Não sendo possível conceder acesso imediato, a LAI prevê resposta em até:",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1455,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "A classificação de informação como sigilosa deve ocorrer:",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1456,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Informações pessoais protegidas pela LAI são aquelas relativas:",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1457,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Se o acesso à informação for negado, o interessado:",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1458,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "O pedido de acesso à informação deve conter:",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1459,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "O sigilo na LAI deve ser interpretado como:",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1460,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "A Lei de Acesso à Informação fortalece:",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1461,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 12.527/2011 estabelece como diretriz: Assinale a alternativa correta.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1462,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Transparência ativa consiste em: Assinale a alternativa correta.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1463,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Transparência passiva ocorre quando: Assinale a alternativa correta.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1464,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Assinale a alternativa correta.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1465,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A classificação de informação como sigilosa deve ocorrer: Assinale a alternativa correta.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1466,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Informações pessoais protegidas pela LAI são aquelas relativas: Assinale a alternativa correta.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1467,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se o acesso à informação for negado, o interessado: Assinale a alternativa correta.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1468,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O pedido de acesso à informação deve conter: Assinale a alternativa correta.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1469,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O sigilo na LAI deve ser interpretado como: Assinale a alternativa correta.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1470,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei de Acesso à Informação fortalece: Assinale a alternativa correta.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1471,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 12.527/2011 estabelece como diretriz: Marque a opção adequada.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1472,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Transparência ativa consiste em: Marque a opção adequada.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1473,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Transparência passiva ocorre quando: Marque a opção adequada.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1474,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Marque a opção adequada.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1475,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A classificação de informação como sigilosa deve ocorrer: Marque a opção adequada.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1476,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Informações pessoais protegidas pela LAI são aquelas relativas: Marque a opção adequada.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1477,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Se o acesso à informação for negado, o interessado: Marque a opção adequada.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1478,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, O pedido de acesso à informação deve conter: Marque a opção adequada.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1479,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O sigilo na LAI deve ser interpretado como: Marque a opção adequada.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1480,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei de Acesso à Informação fortalece: Marque a opção adequada.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1481,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 12.527/2011 estabelece como diretriz: Marque a opção adequada.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1482,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Transparência ativa consiste em: Marque a opção adequada.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1483,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Transparência passiva ocorre quando: Marque a opção adequada.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1484,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Marque a opção adequada.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1485,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A classificação de informação como sigilosa deve ocorrer: Marque a opção adequada.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1486,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Informações pessoais protegidas pela LAI são aquelas relativas: Marque a opção adequada.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1487,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Se o acesso à informação for negado, o interessado: Marque a opção adequada.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1488,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, O pedido de acesso à informação deve conter: Marque a opção adequada.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1489,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O sigilo na LAI deve ser interpretado como: Marque a opção adequada.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1490,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei de Acesso à Informação fortalece: Marque a opção adequada.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1491,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 12.527/2011 estabelece como diretriz: Indique a assertiva correta.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1492,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Transparência ativa consiste em: Indique a assertiva correta.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1493,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Transparência passiva ocorre quando: Indique a assertiva correta.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1494,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Indique a assertiva correta.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1495,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A classificação de informação como sigilosa deve ocorrer: Indique a assertiva correta.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1496,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Informações pessoais protegidas pela LAI são aquelas relativas: Indique a assertiva correta.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1497,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Se o acesso à informação for negado, o interessado: Indique a assertiva correta.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1498,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, O pedido de acesso à informação deve conter: Indique a assertiva correta.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1499,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O sigilo na LAI deve ser interpretado como: Indique a assertiva correta.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1500,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei de Acesso à Informação fortalece: Indique a assertiva correta.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1501,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 12.527/2011 estabelece como diretriz: Indique a assertiva correta.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1502,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Transparência ativa consiste em: Indique a assertiva correta.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1503,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Transparência passiva ocorre quando: Indique a assertiva correta.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1504,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Indique a assertiva correta.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1505,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "A classificação de informação como sigilosa deve ocorrer: Indique a assertiva correta.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1506,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Informações pessoais protegidas pela LAI são aquelas relativas: Indique a assertiva correta.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1507,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Se o acesso à informação for negado, o interessado: Indique a assertiva correta.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1508,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "O pedido de acesso à informação deve conter: Indique a assertiva correta.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1509,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "O sigilo na LAI deve ser interpretado como: Indique a assertiva correta.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1510,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "A Lei de Acesso à Informação fortalece: Indique a assertiva correta.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1511,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 12.527/2011 estabelece como diretriz: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1512,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Transparência ativa consiste em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1513,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Transparência passiva ocorre quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1514,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1515,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A classificação de informação como sigilosa deve ocorrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1516,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Informações pessoais protegidas pela LAI são aquelas relativas: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1517,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se o acesso à informação for negado, o interessado: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1518,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O pedido de acesso à informação deve conter: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1519,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O sigilo na LAI deve ser interpretado como: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1520,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei de Acesso à Informação fortalece: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1521,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 12.527/2011 estabelece como diretriz: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1522,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Transparência ativa consiste em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1523,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Transparência passiva ocorre quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1524,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1525,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A classificação de informação como sigilosa deve ocorrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1526,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Informações pessoais protegidas pela LAI são aquelas relativas: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1527,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Se o acesso à informação for negado, o interessado: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1528,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, O pedido de acesso à informação deve conter: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1529,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O sigilo na LAI deve ser interpretado como: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1530,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei de Acesso à Informação fortalece: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1531,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 12.527/2011 estabelece como diretriz: Identifique a alternativa correta.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1532,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Transparência ativa consiste em: Identifique a alternativa correta.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1533,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Transparência passiva ocorre quando: Identifique a alternativa correta.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1534,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Identifique a alternativa correta.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1535,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A classificação de informação como sigilosa deve ocorrer: Identifique a alternativa correta.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1536,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Informações pessoais protegidas pela LAI são aquelas relativas: Identifique a alternativa correta.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1537,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Se o acesso à informação for negado, o interessado: Identifique a alternativa correta.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1538,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, O pedido de acesso à informação deve conter: Identifique a alternativa correta.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1539,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O sigilo na LAI deve ser interpretado como: Identifique a alternativa correta.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1540,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei de Acesso à Informação fortalece: Identifique a alternativa correta.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1541,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 12.527/2011 estabelece como diretriz: Identifique a alternativa correta.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1542,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Transparência ativa consiste em: Identifique a alternativa correta.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1543,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Transparência passiva ocorre quando: Identifique a alternativa correta.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1544,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Identifique a alternativa correta.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1545,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A classificação de informação como sigilosa deve ocorrer: Identifique a alternativa correta.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1546,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Informações pessoais protegidas pela LAI são aquelas relativas: Identifique a alternativa correta.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1547,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Se o acesso à informação for negado, o interessado: Identifique a alternativa correta.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1548,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, O pedido de acesso à informação deve conter: Identifique a alternativa correta.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1549,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O sigilo na LAI deve ser interpretado como: Identifique a alternativa correta.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1550,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei de Acesso à Informação fortalece: Identifique a alternativa correta.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1551,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 12.527/2011 estabelece como diretriz: Assinale a alternativa correta.",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1552,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Transparência ativa consiste em: Assinale a alternativa correta.",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1553,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Transparência passiva ocorre quando: Assinale a alternativa correta.",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1554,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Assinale a alternativa correta.",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1555,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "A classificação de informação como sigilosa deve ocorrer: Assinale a alternativa correta.",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1556,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Informações pessoais protegidas pela LAI são aquelas relativas: Assinale a alternativa correta.",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1557,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Se o acesso à informação for negado, o interessado: Assinale a alternativa correta.",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1558,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "O pedido de acesso à informação deve conter: Assinale a alternativa correta.",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1559,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "O sigilo na LAI deve ser interpretado como: Assinale a alternativa correta.",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1560,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "A Lei de Acesso à Informação fortalece: Assinale a alternativa correta.",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1561,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 12.527/2011 estabelece como diretriz: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1562,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Transparência ativa consiste em: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1563,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Transparência passiva ocorre quando: Assinale a alternativa correta. (113)",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1564,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Assinale a alternativa correta. (114)",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1565,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A classificação de informação como sigilosa deve ocorrer: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1566,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Informações pessoais protegidas pela LAI são aquelas relativas: Assinale a alternativa correta. (116)",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1567,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se o acesso à informação for negado, o interessado: Assinale a alternativa correta. (117)",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1568,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O pedido de acesso à informação deve conter: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1569,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O sigilo na LAI deve ser interpretado como: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1570,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei de Acesso à Informação fortalece: Assinale a alternativa correta. (120)",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1571,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 12.527/2011 estabelece como diretriz: Marque a opção adequada. (121)",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1572,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Transparência ativa consiste em: Marque a opção adequada. (122)",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1573,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Transparência passiva ocorre quando: Marque a opção adequada. (123)",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1574,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Marque a opção adequada. (124)",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1575,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A classificação de informação como sigilosa deve ocorrer: Marque a opção adequada. (125)",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1576,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Informações pessoais protegidas pela LAI são aquelas relativas: Marque a opção adequada. (126)",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1577,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Se o acesso à informação for negado, o interessado: Marque a opção adequada. (127)",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1578,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, O pedido de acesso à informação deve conter: Marque a opção adequada. (128)",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1579,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O sigilo na LAI deve ser interpretado como: Marque a opção adequada. (129)",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1580,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei de Acesso à Informação fortalece: Marque a opção adequada. (130)",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1581,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 12.527/2011 estabelece como diretriz: Marque a opção adequada. (131)",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1582,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Transparência ativa consiste em: Marque a opção adequada. (132)",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1583,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Transparência passiva ocorre quando: Marque a opção adequada. (133)",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1584,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Marque a opção adequada. (134)",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1585,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A classificação de informação como sigilosa deve ocorrer: Marque a opção adequada. (135)",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1586,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Informações pessoais protegidas pela LAI são aquelas relativas: Marque a opção adequada. (136)",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1587,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Se o acesso à informação for negado, o interessado: Marque a opção adequada. (137)",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1588,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, O pedido de acesso à informação deve conter: Marque a opção adequada. (138)",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1589,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O sigilo na LAI deve ser interpretado como: Marque a opção adequada. (139)",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1590,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei de Acesso à Informação fortalece: Marque a opção adequada. (140)",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1591,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Lei 12.527/2011",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 12.527/2011 estabelece como diretriz: Indique a assertiva correta. (141)",
    "alternativas": [
      "Publicidade como regra e sigilo como exceção.",
      "Sigilo como regra absoluta.",
      "Acesso restrito a servidores efetivos.",
      "Obrigatoriedade de justificar todo pedido com motivo pessoal.",
      "Resposta apenas mediante decisão judicial."
    ],
    "correta": 0,
    "explicacao": "A LAI consagra a publicidade como regra e o sigilo como exceção."
  },
  {
    "id": 1592,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Ativa",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Transparência ativa consiste em: Indique a assertiva correta. (142)",
    "alternativas": [
      "Resposta apenas após requerimento individual.",
      "Negativa automática de informações administrativas.",
      "Classificação de todo documento como sigiloso.",
      "Divulgação exclusiva por meio impresso.",
      "Divulgação de informações públicas independentemente de solicitação."
    ],
    "correta": 4,
    "explicacao": "Transparência ativa é a divulgação espontânea de informações de interesse público."
  },
  {
    "id": 1593,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Transparência Passiva",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Transparência passiva ocorre quando: Indique a assertiva correta. (143)",
    "alternativas": [
      "O servidor nega o pedido sem análise.",
      "A informação é destruída após solicitação.",
      "A resposta depende sempre de ordem judicial.",
      "O órgão público responde a pedido de informação formulado pelo interessado.",
      "A Administração publica dados sem provocação."
    ],
    "correta": 3,
    "explicacao": "Na transparência passiva, há solicitação do cidadão e resposta do Poder Público."
  },
  {
    "id": 1594,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Prazos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Não sendo possível conceder acesso imediato, a LAI prevê resposta em até: Indique a assertiva correta. (144)",
    "alternativas": [
      "90 dias, sem justificativa.",
      "1 ano, se houver interesse público.",
      "20 dias, prorrogáveis por mais 10 mediante justificativa.",
      "5 dias, sem prorrogação.",
      "60 dias, prorrogáveis indefinidamente."
    ],
    "correta": 2,
    "explicacao": "A LAI prevê prazo de 20 dias, prorrogável por 10 mediante justificativa expressa."
  },
  {
    "id": 1595,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Sigilosa",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A classificação de informação como sigilosa deve ocorrer: Indique a assertiva correta. (145)",
    "alternativas": [
      "Sem possibilidade de revisão.",
      "Com fundamento legal e pelo tempo estritamente necessário.",
      "Por mera conveniência de qualquer servidor.",
      "Sempre que houver crítica ao governo.",
      "De forma automática para todo processo administrativo."
    ],
    "correta": 1,
    "explicacao": "O sigilo exige base legal, motivação e prazo definido."
  },
  {
    "id": 1596,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Informação Pessoal",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Informações pessoais protegidas pela LAI são aquelas relativas: Indique a assertiva correta. (146)",
    "alternativas": [
      "À intimidade, vida privada, honra e imagem.",
      "A qualquer dado orçamentário público.",
      "A contratos administrativos em execução.",
      "A licitações concluídas.",
      "A relatórios de despesas públicas sem identificação pessoal."
    ],
    "correta": 0,
    "explicacao": "A LAI protege informações pessoais ligadas à intimidade, vida privada, honra e imagem."
  },
  {
    "id": 1597,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Recurso",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Se o acesso à informação for negado, o interessado: Indique a assertiva correta. (147)",
    "alternativas": [
      "Não possui qualquer meio de impugnação.",
      "Deve aguardar 5 anos obrigatoriamente.",
      "Só pode recorrer se for servidor público.",
      "Deve apresentar ação penal privada.",
      "Pode apresentar recurso nos termos da LAI."
    ],
    "correta": 4,
    "explicacao": "A LAI prevê mecanismos recursais contra negativa de acesso."
  },
  {
    "id": 1598,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Pedido de Acesso",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, O pedido de acesso à informação deve conter: Indique a assertiva correta. (148)",
    "alternativas": [
      "Comprovação de interesse econômico.",
      "Procuração judicial em todos os casos.",
      "Pagamento antecipado de multa.",
      "Identificação do requerente e especificação da informação requerida.",
      "Justificativa política obrigatória."
    ],
    "correta": 3,
    "explicacao": "O pedido deve identificar o requerente e especificar a informação, sem exigência de motivação."
  },
  {
    "id": 1599,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Sigilo",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O sigilo na LAI deve ser interpretado como: Indique a assertiva correta. (149)",
    "alternativas": [
      "Forma de impedir controle social.",
      "Obrigatório para qualquer documento público.",
      "Exceção justificada por hipótese legal.",
      "Regra geral da Administração.",
      "Faculdade sem motivação do gestor."
    ],
    "correta": 2,
    "explicacao": "Na LAI, o sigilo é exceção e deve ser justificado."
  },
  {
    "id": 1600,
    "materia": "Lei de Acesso à Informação",
    "assunto": "Controle Social",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei de Acesso à Informação fortalece: Indique a assertiva correta. (150)",
    "alternativas": [
      "A ausência de prestação de contas.",
      "A transparência e o controle social.",
      "O sigilo estatal permanente.",
      "A restrição de dados públicos.",
      "A publicidade pessoal de agentes."
    ],
    "correta": 1,
    "explicacao": "A LAI amplia transparência e fiscalização social."
  },
  {
    "id": 1601,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 9.784/1999 regula:",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1602,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "O processo administrativo deve observar, entre outros, os princípios de:",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1603,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "É direito do administrado no processo administrativo:",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1604,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "A motivação dos atos administrativos consiste em:",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1605,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "O recurso administrativo tem por finalidade:",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1606,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "A competência administrativa, em regra:",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1607,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "No processo administrativo, deve ser considerado impedido o servidor que:",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1608,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "A Administração deve anular seus próprios atos quando:",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1609,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "A revogação de ato administrativo ocorre por motivo de:",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1610,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "No processo administrativo, os prazos e formas devem ser observados para garantir:",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1611,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 9.784/1999 regula: Assinale a alternativa correta.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1612,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O processo administrativo deve observar, entre outros, os princípios de: Assinale a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1613,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É direito do administrado no processo administrativo: Assinale a alternativa correta.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1614,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A motivação dos atos administrativos consiste em: Assinale a alternativa correta.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1615,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O recurso administrativo tem por finalidade: Assinale a alternativa correta.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1616,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A competência administrativa, em regra: Assinale a alternativa correta.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1617,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No processo administrativo, deve ser considerado impedido o servidor que: Assinale a alternativa correta.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1618,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Administração deve anular seus próprios atos quando: Assinale a alternativa correta.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1619,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A revogação de ato administrativo ocorre por motivo de: Assinale a alternativa correta.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1620,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No processo administrativo, os prazos e formas devem ser observados para garantir: Assinale a alternativa correta.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1621,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 9.784/1999 regula: Marque a opção adequada.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1622,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O processo administrativo deve observar, entre outros, os princípios de: Marque a opção adequada.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1623,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, É direito do administrado no processo administrativo: Marque a opção adequada.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1624,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A motivação dos atos administrativos consiste em: Marque a opção adequada.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1625,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O recurso administrativo tem por finalidade: Marque a opção adequada.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1626,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A competência administrativa, em regra: Marque a opção adequada.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1627,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, No processo administrativo, deve ser considerado impedido o servidor que: Marque a opção adequada.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1628,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A Administração deve anular seus próprios atos quando: Marque a opção adequada.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1629,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A revogação de ato administrativo ocorre por motivo de: Marque a opção adequada.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1630,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No processo administrativo, os prazos e formas devem ser observados para garantir: Marque a opção adequada.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1631,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 9.784/1999 regula: Marque a opção adequada.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1632,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O processo administrativo deve observar, entre outros, os princípios de: Marque a opção adequada.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1633,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, É direito do administrado no processo administrativo: Marque a opção adequada.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1634,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A motivação dos atos administrativos consiste em: Marque a opção adequada.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1635,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O recurso administrativo tem por finalidade: Marque a opção adequada.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1636,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A competência administrativa, em regra: Marque a opção adequada.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1637,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, No processo administrativo, deve ser considerado impedido o servidor que: Marque a opção adequada.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1638,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Administração deve anular seus próprios atos quando: Marque a opção adequada.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1639,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A revogação de ato administrativo ocorre por motivo de: Marque a opção adequada.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1640,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No processo administrativo, os prazos e formas devem ser observados para garantir: Marque a opção adequada.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1641,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 9.784/1999 regula: Indique a assertiva correta.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1642,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O processo administrativo deve observar, entre outros, os princípios de: Indique a assertiva correta.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1643,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, É direito do administrado no processo administrativo: Indique a assertiva correta.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1644,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A motivação dos atos administrativos consiste em: Indique a assertiva correta.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1645,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O recurso administrativo tem por finalidade: Indique a assertiva correta.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1646,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A competência administrativa, em regra: Indique a assertiva correta.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1647,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, No processo administrativo, deve ser considerado impedido o servidor que: Indique a assertiva correta.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1648,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A Administração deve anular seus próprios atos quando: Indique a assertiva correta.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1649,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A revogação de ato administrativo ocorre por motivo de: Indique a assertiva correta.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1650,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No processo administrativo, os prazos e formas devem ser observados para garantir: Indique a assertiva correta.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1651,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 9.784/1999 regula: Indique a assertiva correta.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1652,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "O processo administrativo deve observar, entre outros, os princípios de: Indique a assertiva correta.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1653,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "É direito do administrado no processo administrativo: Indique a assertiva correta.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1654,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "A motivação dos atos administrativos consiste em: Indique a assertiva correta.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1655,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "O recurso administrativo tem por finalidade: Indique a assertiva correta.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1656,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "A competência administrativa, em regra: Indique a assertiva correta.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1657,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "No processo administrativo, deve ser considerado impedido o servidor que: Indique a assertiva correta.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1658,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "A Administração deve anular seus próprios atos quando: Indique a assertiva correta.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1659,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "A revogação de ato administrativo ocorre por motivo de: Indique a assertiva correta.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1660,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "No processo administrativo, os prazos e formas devem ser observados para garantir: Indique a assertiva correta.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1661,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 9.784/1999 regula: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1662,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O processo administrativo deve observar, entre outros, os princípios de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1663,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É direito do administrado no processo administrativo: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1664,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A motivação dos atos administrativos consiste em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1665,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O recurso administrativo tem por finalidade: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1666,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A competência administrativa, em regra: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1667,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No processo administrativo, deve ser considerado impedido o servidor que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1668,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Administração deve anular seus próprios atos quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1669,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A revogação de ato administrativo ocorre por motivo de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1670,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No processo administrativo, os prazos e formas devem ser observados para garantir: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1671,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 9.784/1999 regula: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1672,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O processo administrativo deve observar, entre outros, os princípios de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1673,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, É direito do administrado no processo administrativo: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1674,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A motivação dos atos administrativos consiste em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1675,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O recurso administrativo tem por finalidade: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1676,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A competência administrativa, em regra: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1677,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, No processo administrativo, deve ser considerado impedido o servidor que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1678,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A Administração deve anular seus próprios atos quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1679,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A revogação de ato administrativo ocorre por motivo de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1680,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No processo administrativo, os prazos e formas devem ser observados para garantir: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1681,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 9.784/1999 regula: Identifique a alternativa correta.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1682,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O processo administrativo deve observar, entre outros, os princípios de: Identifique a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1683,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, É direito do administrado no processo administrativo: Identifique a alternativa correta.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1684,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A motivação dos atos administrativos consiste em: Identifique a alternativa correta.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1685,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O recurso administrativo tem por finalidade: Identifique a alternativa correta.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1686,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A competência administrativa, em regra: Identifique a alternativa correta.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1687,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, No processo administrativo, deve ser considerado impedido o servidor que: Identifique a alternativa correta.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1688,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Administração deve anular seus próprios atos quando: Identifique a alternativa correta.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1689,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A revogação de ato administrativo ocorre por motivo de: Identifique a alternativa correta.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1690,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No processo administrativo, os prazos e formas devem ser observados para garantir: Identifique a alternativa correta.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1691,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 9.784/1999 regula: Identifique a alternativa correta.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1692,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O processo administrativo deve observar, entre outros, os princípios de: Identifique a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1693,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, É direito do administrado no processo administrativo: Identifique a alternativa correta.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1694,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A motivação dos atos administrativos consiste em: Identifique a alternativa correta.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1695,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O recurso administrativo tem por finalidade: Identifique a alternativa correta.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1696,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A competência administrativa, em regra: Identifique a alternativa correta.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1697,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, No processo administrativo, deve ser considerado impedido o servidor que: Identifique a alternativa correta.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1698,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A Administração deve anular seus próprios atos quando: Identifique a alternativa correta.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1699,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A revogação de ato administrativo ocorre por motivo de: Identifique a alternativa correta.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1700,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No processo administrativo, os prazos e formas devem ser observados para garantir: Identifique a alternativa correta.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1701,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 9.784/1999 regula: Assinale a alternativa correta.",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1702,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "O processo administrativo deve observar, entre outros, os princípios de: Assinale a alternativa correta.",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1703,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "É direito do administrado no processo administrativo: Assinale a alternativa correta.",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1704,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "A motivação dos atos administrativos consiste em: Assinale a alternativa correta.",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1705,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "O recurso administrativo tem por finalidade: Assinale a alternativa correta.",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1706,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "A competência administrativa, em regra: Assinale a alternativa correta.",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1707,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "No processo administrativo, deve ser considerado impedido o servidor que: Assinale a alternativa correta.",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1708,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "A Administração deve anular seus próprios atos quando: Assinale a alternativa correta.",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1709,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "A revogação de ato administrativo ocorre por motivo de: Assinale a alternativa correta.",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1710,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "No processo administrativo, os prazos e formas devem ser observados para garantir: Assinale a alternativa correta.",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1711,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 9.784/1999 regula: Assinale a alternativa correta. (111)",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1712,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O processo administrativo deve observar, entre outros, os princípios de: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1713,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É direito do administrado no processo administrativo: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1714,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A motivação dos atos administrativos consiste em: Assinale a alternativa correta. (114)",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1715,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O recurso administrativo tem por finalidade: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1716,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A competência administrativa, em regra: Assinale a alternativa correta. (116)",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1717,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No processo administrativo, deve ser considerado impedido o servidor que: Assinale a alternativa correta. (117)",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1718,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Administração deve anular seus próprios atos quando: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1719,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A revogação de ato administrativo ocorre por motivo de: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1720,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No processo administrativo, os prazos e formas devem ser observados para garantir: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1721,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 9.784/1999 regula: Marque a opção adequada. (121)",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1722,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O processo administrativo deve observar, entre outros, os princípios de: Marque a opção adequada. (122)",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1723,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, É direito do administrado no processo administrativo: Marque a opção adequada. (123)",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1724,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A motivação dos atos administrativos consiste em: Marque a opção adequada. (124)",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1725,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O recurso administrativo tem por finalidade: Marque a opção adequada. (125)",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1726,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A competência administrativa, em regra: Marque a opção adequada. (126)",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1727,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, No processo administrativo, deve ser considerado impedido o servidor que: Marque a opção adequada. (127)",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1728,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A Administração deve anular seus próprios atos quando: Marque a opção adequada. (128)",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1729,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A revogação de ato administrativo ocorre por motivo de: Marque a opção adequada. (129)",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1730,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No processo administrativo, os prazos e formas devem ser observados para garantir: Marque a opção adequada. (130)",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1731,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 9.784/1999 regula: Marque a opção adequada. (131)",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1732,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O processo administrativo deve observar, entre outros, os princípios de: Marque a opção adequada. (132)",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1733,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, É direito do administrado no processo administrativo: Marque a opção adequada. (133)",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1734,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A motivação dos atos administrativos consiste em: Marque a opção adequada. (134)",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1735,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O recurso administrativo tem por finalidade: Marque a opção adequada. (135)",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1736,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A competência administrativa, em regra: Marque a opção adequada. (136)",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1737,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, No processo administrativo, deve ser considerado impedido o servidor que: Marque a opção adequada. (137)",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1738,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Administração deve anular seus próprios atos quando: Marque a opção adequada. (138)",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1739,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A revogação de ato administrativo ocorre por motivo de: Marque a opção adequada. (139)",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1740,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No processo administrativo, os prazos e formas devem ser observados para garantir: Marque a opção adequada. (140)",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1741,
    "materia": "Processo Administrativo",
    "assunto": "Lei 9.784/1999",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 9.784/1999 regula: Indique a assertiva correta. (141)",
    "alternativas": [
      "O processo administrativo no âmbito da Administração Pública Federal.",
      "O processo penal comum.",
      "A execução penal.",
      "A lei de licitações exclusivamente.",
      "A Constituição Estadual."
    ],
    "correta": 0,
    "explicacao": "A Lei 9.784/1999 disciplina o processo administrativo federal."
  },
  {
    "id": 1742,
    "materia": "Processo Administrativo",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O processo administrativo deve observar, entre outros, os princípios de: Indique a assertiva correta. (142)",
    "alternativas": [
      "Sigilo absoluto e ausência de defesa.",
      "Livre convencimento sem motivação.",
      "Oralidade obrigatória e inexistência de recurso.",
      "Pessoalidade e informalidade total.",
      "Legalidade, finalidade, motivação, razoabilidade e ampla defesa."
    ],
    "correta": 4,
    "explicacao": "A lei prevê princípios como legalidade, finalidade, motivação, razoabilidade, proporcionalidade, ampla defesa e contraditório."
  },
  {
    "id": 1743,
    "materia": "Processo Administrativo",
    "assunto": "Direitos dos Administrados",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, É direito do administrado no processo administrativo: Indique a assertiva correta. (143)",
    "alternativas": [
      "Não conhecer decisões administrativas.",
      "Ser julgado sem contraditório.",
      "Ser excluído do processo sem ciência.",
      "Ter ciência da tramitação dos processos em que tenha interesse.",
      "Ser impedido de apresentar documentos."
    ],
    "correta": 3,
    "explicacao": "A lei assegura ao administrado ciência da tramitação, vista dos autos e apresentação de documentos."
  },
  {
    "id": 1744,
    "materia": "Processo Administrativo",
    "assunto": "Motivação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A motivação dos atos administrativos consiste em: Indique a assertiva correta. (144)",
    "alternativas": [
      "Dispensa de razões quando houver recurso.",
      "Escolha política sem controle.",
      "Indicação dos fundamentos de fato e de direito da decisão.",
      "Decisão secreta sem explicação.",
      "Justificativa apenas verbal e informal."
    ],
    "correta": 2,
    "explicacao": "A motivação permite controle e compreensão das razões da decisão administrativa."
  },
  {
    "id": 1745,
    "materia": "Processo Administrativo",
    "assunto": "Recursos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O recurso administrativo tem por finalidade: Indique a assertiva correta. (145)",
    "alternativas": [
      "Substituir a competência legal.",
      "Possibilitar reexame da decisão administrativa.",
      "Criar direito adquirido automaticamente.",
      "Eliminar o contraditório.",
      "Impedir controle judicial."
    ],
    "correta": 1,
    "explicacao": "O recurso permite a revisão administrativa da decisão."
  },
  {
    "id": 1746,
    "materia": "Processo Administrativo",
    "assunto": "Competência",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A competência administrativa, em regra: Indique a assertiva correta. (146)",
    "alternativas": [
      "É irrenunciável, mas pode ser delegada ou avocada nos casos permitidos.",
      "É sempre renunciável livremente.",
      "Pode ser transferida verbalmente sem limites.",
      "Pertence ao particular interessado.",
      "Jamais admite delegação."
    ],
    "correta": 0,
    "explicacao": "A competência é irrenunciável, mas pode admitir delegação e avocação nos termos legais."
  },
  {
    "id": 1747,
    "materia": "Processo Administrativo",
    "assunto": "Impedimento",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, No processo administrativo, deve ser considerado impedido o servidor que: Indique a assertiva correta. (147)",
    "alternativas": [
      "Tenha apenas conhecimento técnico sobre o assunto.",
      "Atue no órgão competente.",
      "Tenha estabilidade funcional.",
      "Esteja em exercício regular.",
      "Tenha interesse direto ou indireto na matéria."
    ],
    "correta": 4,
    "explicacao": "O impedimento protege imparcialidade da decisão."
  },
  {
    "id": 1748,
    "materia": "Processo Administrativo",
    "assunto": "Anulação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A Administração deve anular seus próprios atos quando: Indique a assertiva correta. (148)",
    "alternativas": [
      "Forem úteis ao interesse público.",
      "Houver mudança de gestão sem ilegalidade.",
      "O particular solicitar sem fundamento.",
      "Eivados de ilegalidade.",
      "Apenas forem inconvenientes, ainda que legais."
    ],
    "correta": 3,
    "explicacao": "Atos ilegais devem ser anulados; atos inconvenientes podem ser revogados, se discricionários."
  },
  {
    "id": 1749,
    "materia": "Processo Administrativo",
    "assunto": "Revogação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A revogação de ato administrativo ocorre por motivo de: Indique a assertiva correta. (149)",
    "alternativas": [
      "Vício insanável de competência.",
      "Ausência de interesse do particular.",
      "Conveniência e oportunidade, quando cabível.",
      "Ilegalidade obrigatória.",
      "Ordem judicial sempre."
    ],
    "correta": 2,
    "explicacao": "Revogação atinge ato válido por razões de mérito administrativo."
  },
  {
    "id": 1750,
    "materia": "Processo Administrativo",
    "assunto": "Prazos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No processo administrativo, os prazos e formas devem ser observados para garantir: Indique a assertiva correta. (150)",
    "alternativas": [
      "Punição sem processo.",
      "Segurança jurídica e regularidade processual.",
      "Arbitrariedade decisória.",
      "Sigilo permanente.",
      "Ausência de defesa."
    ],
    "correta": 1,
    "explicacao": "Prazos e formas processuais garantem regularidade, previsibilidade e segurança jurídica."
  },
  {
    "id": 1751,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 14.133/2021 disciplina:",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1752,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "A licitação busca, entre outros objetivos:",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1753,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "É modalidade prevista na Lei nº 14.133/2021:",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1754,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "A fase preparatória da licitação envolve principalmente:",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1755,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "A dispensa de licitação ocorre quando:",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1756,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "A inexigibilidade de licitação decorre de:",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1757,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Os contratos administrativos devem ser:",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1758,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "O contratado que descumpre obrigações contratuais pode sofrer:",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1759,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Os critérios de julgamento na nova lei incluem:",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1760,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "O agente de contratação, na Lei nº 14.133/2021, atua na condução:",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1761,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 14.133/2021 disciplina: Assinale a alternativa correta.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1762,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A licitação busca, entre outros objetivos: Assinale a alternativa correta.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1763,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É modalidade prevista na Lei nº 14.133/2021: Assinale a alternativa correta.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1764,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A fase preparatória da licitação envolve principalmente: Assinale a alternativa correta.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1765,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A dispensa de licitação ocorre quando: Assinale a alternativa correta.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1766,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A inexigibilidade de licitação decorre de: Assinale a alternativa correta.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1767,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os contratos administrativos devem ser: Assinale a alternativa correta.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1768,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O contratado que descumpre obrigações contratuais pode sofrer: Assinale a alternativa correta.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1769,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os critérios de julgamento na nova lei incluem: Assinale a alternativa correta.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1770,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Assinale a alternativa correta.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1771,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 14.133/2021 disciplina: Marque a opção adequada.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1772,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A licitação busca, entre outros objetivos: Marque a opção adequada.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1773,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, É modalidade prevista na Lei nº 14.133/2021: Marque a opção adequada.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1774,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A fase preparatória da licitação envolve principalmente: Marque a opção adequada.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1775,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A dispensa de licitação ocorre quando: Marque a opção adequada.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1776,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A inexigibilidade de licitação decorre de: Marque a opção adequada.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1777,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Os contratos administrativos devem ser: Marque a opção adequada.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1778,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O contratado que descumpre obrigações contratuais pode sofrer: Marque a opção adequada.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1779,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Os critérios de julgamento na nova lei incluem: Marque a opção adequada.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1780,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Marque a opção adequada.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1781,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 14.133/2021 disciplina: Marque a opção adequada.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1782,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A licitação busca, entre outros objetivos: Marque a opção adequada.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1783,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, É modalidade prevista na Lei nº 14.133/2021: Marque a opção adequada.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1784,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A fase preparatória da licitação envolve principalmente: Marque a opção adequada.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1785,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A dispensa de licitação ocorre quando: Marque a opção adequada.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1786,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A inexigibilidade de licitação decorre de: Marque a opção adequada.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1787,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Os contratos administrativos devem ser: Marque a opção adequada.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1788,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O contratado que descumpre obrigações contratuais pode sofrer: Marque a opção adequada.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1789,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Os critérios de julgamento na nova lei incluem: Marque a opção adequada.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1790,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Marque a opção adequada.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1791,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 14.133/2021 disciplina: Indique a assertiva correta.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1792,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A licitação busca, entre outros objetivos: Indique a assertiva correta.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1793,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, É modalidade prevista na Lei nº 14.133/2021: Indique a assertiva correta.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1794,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A fase preparatória da licitação envolve principalmente: Indique a assertiva correta.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1795,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A dispensa de licitação ocorre quando: Indique a assertiva correta.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1796,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A inexigibilidade de licitação decorre de: Indique a assertiva correta.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1797,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Os contratos administrativos devem ser: Indique a assertiva correta.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1798,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O contratado que descumpre obrigações contratuais pode sofrer: Indique a assertiva correta.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1799,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Os critérios de julgamento na nova lei incluem: Indique a assertiva correta.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1800,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Indique a assertiva correta.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1801,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 14.133/2021 disciplina: Indique a assertiva correta.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1802,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "A licitação busca, entre outros objetivos: Indique a assertiva correta.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1803,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "É modalidade prevista na Lei nº 14.133/2021: Indique a assertiva correta.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1804,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "A fase preparatória da licitação envolve principalmente: Indique a assertiva correta.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1805,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "A dispensa de licitação ocorre quando: Indique a assertiva correta.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1806,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "A inexigibilidade de licitação decorre de: Indique a assertiva correta.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1807,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Os contratos administrativos devem ser: Indique a assertiva correta.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1808,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "O contratado que descumpre obrigações contratuais pode sofrer: Indique a assertiva correta.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1809,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Os critérios de julgamento na nova lei incluem: Indique a assertiva correta.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1810,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "O agente de contratação, na Lei nº 14.133/2021, atua na condução: Indique a assertiva correta.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1811,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 14.133/2021 disciplina: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1812,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A licitação busca, entre outros objetivos: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1813,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É modalidade prevista na Lei nº 14.133/2021: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1814,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A fase preparatória da licitação envolve principalmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1815,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A dispensa de licitação ocorre quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1816,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A inexigibilidade de licitação decorre de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1817,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os contratos administrativos devem ser: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1818,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O contratado que descumpre obrigações contratuais pode sofrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1819,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os critérios de julgamento na nova lei incluem: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1820,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1821,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 14.133/2021 disciplina: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1822,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A licitação busca, entre outros objetivos: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1823,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, É modalidade prevista na Lei nº 14.133/2021: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1824,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A fase preparatória da licitação envolve principalmente: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1825,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A dispensa de licitação ocorre quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1826,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A inexigibilidade de licitação decorre de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1827,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Os contratos administrativos devem ser: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1828,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O contratado que descumpre obrigações contratuais pode sofrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1829,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Os critérios de julgamento na nova lei incluem: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1830,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1831,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 14.133/2021 disciplina: Identifique a alternativa correta.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1832,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A licitação busca, entre outros objetivos: Identifique a alternativa correta.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1833,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, É modalidade prevista na Lei nº 14.133/2021: Identifique a alternativa correta.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1834,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A fase preparatória da licitação envolve principalmente: Identifique a alternativa correta.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1835,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A dispensa de licitação ocorre quando: Identifique a alternativa correta.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1836,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A inexigibilidade de licitação decorre de: Identifique a alternativa correta.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1837,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Os contratos administrativos devem ser: Identifique a alternativa correta.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1838,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O contratado que descumpre obrigações contratuais pode sofrer: Identifique a alternativa correta.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1839,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Os critérios de julgamento na nova lei incluem: Identifique a alternativa correta.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1840,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Identifique a alternativa correta.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1841,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 14.133/2021 disciplina: Identifique a alternativa correta.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1842,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A licitação busca, entre outros objetivos: Identifique a alternativa correta.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1843,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, É modalidade prevista na Lei nº 14.133/2021: Identifique a alternativa correta.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1844,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A fase preparatória da licitação envolve principalmente: Identifique a alternativa correta.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1845,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A dispensa de licitação ocorre quando: Identifique a alternativa correta.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1846,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A inexigibilidade de licitação decorre de: Identifique a alternativa correta.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1847,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Os contratos administrativos devem ser: Identifique a alternativa correta.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1848,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O contratado que descumpre obrigações contratuais pode sofrer: Identifique a alternativa correta.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1849,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Os critérios de julgamento na nova lei incluem: Identifique a alternativa correta.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1850,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Identifique a alternativa correta.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1851,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "A Lei nº 14.133/2021 disciplina: Assinale a alternativa correta.",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1852,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "A licitação busca, entre outros objetivos: Assinale a alternativa correta.",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1853,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "É modalidade prevista na Lei nº 14.133/2021: Assinale a alternativa correta.",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1854,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "A fase preparatória da licitação envolve principalmente: Assinale a alternativa correta.",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1855,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "A dispensa de licitação ocorre quando: Assinale a alternativa correta.",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1856,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "A inexigibilidade de licitação decorre de: Assinale a alternativa correta.",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1857,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Os contratos administrativos devem ser: Assinale a alternativa correta.",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1858,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "O contratado que descumpre obrigações contratuais pode sofrer: Assinale a alternativa correta.",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1859,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Os critérios de julgamento na nova lei incluem: Assinale a alternativa correta.",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1860,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "O agente de contratação, na Lei nº 14.133/2021, atua na condução: Assinale a alternativa correta.",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1861,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei nº 14.133/2021 disciplina: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1862,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A licitação busca, entre outros objetivos: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1863,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É modalidade prevista na Lei nº 14.133/2021: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1864,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A fase preparatória da licitação envolve principalmente: Assinale a alternativa correta. (114)",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1865,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A dispensa de licitação ocorre quando: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1866,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A inexigibilidade de licitação decorre de: Assinale a alternativa correta. (116)",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1867,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os contratos administrativos devem ser: Assinale a alternativa correta. (117)",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1868,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O contratado que descumpre obrigações contratuais pode sofrer: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1869,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os critérios de julgamento na nova lei incluem: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1870,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1871,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei nº 14.133/2021 disciplina: Marque a opção adequada. (121)",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1872,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A licitação busca, entre outros objetivos: Marque a opção adequada. (122)",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1873,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, É modalidade prevista na Lei nº 14.133/2021: Marque a opção adequada. (123)",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1874,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A fase preparatória da licitação envolve principalmente: Marque a opção adequada. (124)",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1875,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A dispensa de licitação ocorre quando: Marque a opção adequada. (125)",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1876,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A inexigibilidade de licitação decorre de: Marque a opção adequada. (126)",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1877,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Os contratos administrativos devem ser: Marque a opção adequada. (127)",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1878,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O contratado que descumpre obrigações contratuais pode sofrer: Marque a opção adequada. (128)",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1879,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Os critérios de julgamento na nova lei incluem: Marque a opção adequada. (129)",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1880,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Marque a opção adequada. (130)",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1881,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei nº 14.133/2021 disciplina: Marque a opção adequada. (131)",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1882,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A licitação busca, entre outros objetivos: Marque a opção adequada. (132)",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1883,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, É modalidade prevista na Lei nº 14.133/2021: Marque a opção adequada. (133)",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1884,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A fase preparatória da licitação envolve principalmente: Marque a opção adequada. (134)",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1885,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A dispensa de licitação ocorre quando: Marque a opção adequada. (135)",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1886,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A inexigibilidade de licitação decorre de: Marque a opção adequada. (136)",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1887,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Os contratos administrativos devem ser: Marque a opção adequada. (137)",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1888,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O contratado que descumpre obrigações contratuais pode sofrer: Marque a opção adequada. (138)",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1889,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Os critérios de julgamento na nova lei incluem: Marque a opção adequada. (139)",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1890,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Marque a opção adequada. (140)",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1891,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei nº 14.133/2021 disciplina: Indique a assertiva correta. (141)",
    "alternativas": [
      "Licitações e contratos administrativos.",
      "Execução penal.",
      "Improbidade administrativa exclusivamente.",
      "Acesso à informação.",
      "Processo penal."
    ],
    "correta": 0,
    "explicacao": "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos Administrativos."
  },
  {
    "id": 1892,
    "materia": "Lei 14.133/2021",
    "assunto": "Princípios",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A licitação busca, entre outros objetivos: Indique a assertiva correta. (142)",
    "alternativas": [
      "Favorecer fornecedor indicado.",
      "Dispensar competição em todos os casos.",
      "Garantir contratação verbal.",
      "Impedir planejamento.",
      "Selecionar a proposta apta a gerar o resultado de contratação mais vantajoso."
    ],
    "correta": 4,
    "explicacao": "A nova lei busca contratação vantajosa, isonomia e justa competição."
  },
  {
    "id": 1893,
    "materia": "Lei 14.133/2021",
    "assunto": "Modalidades",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, É modalidade prevista na Lei nº 14.133/2021: Indique a assertiva correta. (143)",
    "alternativas": [
      "Convite.",
      "Concorrência simplificada informal.",
      "Cotação verbal.",
      "Pregão.",
      "Tomada de preços."
    ],
    "correta": 3,
    "explicacao": "A lei prevê pregão, concorrência, concurso, leilão e diálogo competitivo."
  },
  {
    "id": 1894,
    "materia": "Lei 14.133/2021",
    "assunto": "Fases",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A fase preparatória da licitação envolve principalmente: Indique a assertiva correta. (144)",
    "alternativas": [
      "Julgamento criminal.",
      "Dispensa de estudos técnicos.",
      "Planejamento da contratação e definição do objeto.",
      "Assinatura automática do contrato.",
      "Execução penal do contratado."
    ],
    "correta": 2,
    "explicacao": "A fase preparatória abrange planejamento, estudo técnico e definição da necessidade administrativa."
  },
  {
    "id": 1895,
    "materia": "Lei 14.133/2021",
    "assunto": "Dispensa",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A dispensa de licitação ocorre quando: Indique a assertiva correta. (145)",
    "alternativas": [
      "Sempre há fornecedor exclusivo.",
      "A competição é possível, mas a lei autoriza a contratação direta.",
      "A competição é inviável por natureza.",
      "O gestor simplesmente prefere contratar diretamente.",
      "Não existe previsão legal."
    ],
    "correta": 1,
    "explicacao": "Na dispensa, a licitação seria possível, mas a lei permite contratação direta."
  },
  {
    "id": 1896,
    "materia": "Lei 14.133/2021",
    "assunto": "Inexigibilidade",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A inexigibilidade de licitação decorre de: Indique a assertiva correta. (146)",
    "alternativas": [
      "Inviabilidade de competição.",
      "Pequeno valor sempre, sem limite legal.",
      "Urgência presumida em qualquer caso.",
      "Vontade do gestor.",
      "Ausência de planejamento."
    ],
    "correta": 0,
    "explicacao": "Inexigibilidade ocorre quando não há competição viável."
  },
  {
    "id": 1897,
    "materia": "Lei 14.133/2021",
    "assunto": "Contratos",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Os contratos administrativos devem ser: Indique a assertiva correta. (147)",
    "alternativas": [
      "Sempre verbais.",
      "Sigilosos em todos os casos.",
      "Sem cláusulas obrigatórias.",
      "Sem possibilidade de sanção.",
      "Formalizados e fiscalizados conforme a lei."
    ],
    "correta": 4,
    "explicacao": "A lei prevê formalização, cláusulas necessárias, fiscalização e regime jurídico próprio."
  },
  {
    "id": 1898,
    "materia": "Lei 14.133/2021",
    "assunto": "Sanções",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O contratado que descumpre obrigações contratuais pode sofrer: Indique a assertiva correta. (148)",
    "alternativas": [
      "Imunidade contratual.",
      "Dispensa de responsabilidade.",
      "Renovação obrigatória.",
      "Sanções administrativas previstas na Lei nº 14.133/2021.",
      "Promoção contratual automática."
    ],
    "correta": 3,
    "explicacao": "A lei prevê sanções como advertência, multa, impedimento e declaração de inidoneidade, conforme o caso."
  },
  {
    "id": 1899,
    "materia": "Lei 14.133/2021",
    "assunto": "Julgamento",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Os critérios de julgamento na nova lei incluem: Indique a assertiva correta. (149)",
    "alternativas": [
      "Indicação política.",
      "Ordem de chegada das propostas.",
      "Menor preço, maior desconto, técnica e preço, entre outros.",
      "Somente sorteio.",
      "Preferência pessoal do gestor."
    ],
    "correta": 2,
    "explicacao": "A lei prevê critérios de julgamento definidos no edital, como menor preço, maior desconto, técnica e preço etc."
  },
  {
    "id": 1900,
    "materia": "Lei 14.133/2021",
    "assunto": "Agente de Contratação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O agente de contratação, na Lei nº 14.133/2021, atua na condução: Indique a assertiva correta. (150)",
    "alternativas": [
      "Da fiscalização tributária.",
      "Do procedimento licitatório, observadas as competências legais.",
      "Da execução penal.",
      "De processo judicial criminal.",
      "Da classificação de informações sigilosas."
    ],
    "correta": 1,
    "explicacao": "O agente de contratação conduz a licitação, conforme atribuições legais."
  },
  {
    "id": 1901,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "A Lei de Execução Penal é a:",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1902,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "A execução penal tem por objetivo:",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1903,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "É direito do preso previsto na LEP:",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1904,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Constitui dever do preso:",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1905,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Os regimes de cumprimento de pena privativa de liberdade são:",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1906,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "A assistência educacional compreende:",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1907,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "O trabalho do condenado possui finalidade:",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1908,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "A remição da pena pode ocorrer:",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1909,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "A Polícia Penal tem atuação especialmente vinculada à:",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1910,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "O regime disciplinar no sistema prisional deve observar:",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1911,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei de Execução Penal é a: Assinale a alternativa correta.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1912,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A execução penal tem por objetivo: Assinale a alternativa correta.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1913,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É direito do preso previsto na LEP: Assinale a alternativa correta.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1914,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Constitui dever do preso: Assinale a alternativa correta.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1915,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os regimes de cumprimento de pena privativa de liberdade são: Assinale a alternativa correta.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1916,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A assistência educacional compreende: Assinale a alternativa correta.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1917,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O trabalho do condenado possui finalidade: Assinale a alternativa correta.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1918,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A remição da pena pode ocorrer: Assinale a alternativa correta.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1919,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Polícia Penal tem atuação especialmente vinculada à: Assinale a alternativa correta.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1920,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O regime disciplinar no sistema prisional deve observar: Assinale a alternativa correta.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1921,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei de Execução Penal é a: Marque a opção adequada.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1922,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A execução penal tem por objetivo: Marque a opção adequada.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1923,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, É direito do preso previsto na LEP: Marque a opção adequada.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1924,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Constitui dever do preso: Marque a opção adequada.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1925,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Os regimes de cumprimento de pena privativa de liberdade são: Marque a opção adequada.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1926,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A assistência educacional compreende: Marque a opção adequada.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1927,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O trabalho do condenado possui finalidade: Marque a opção adequada.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1928,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A remição da pena pode ocorrer: Marque a opção adequada.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1929,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A Polícia Penal tem atuação especialmente vinculada à: Marque a opção adequada.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1930,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O regime disciplinar no sistema prisional deve observar: Marque a opção adequada.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1931,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei de Execução Penal é a: Marque a opção adequada.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1932,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A execução penal tem por objetivo: Marque a opção adequada.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1933,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, É direito do preso previsto na LEP: Marque a opção adequada.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1934,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Constitui dever do preso: Marque a opção adequada.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1935,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Os regimes de cumprimento de pena privativa de liberdade são: Marque a opção adequada.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1936,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A assistência educacional compreende: Marque a opção adequada.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1937,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O trabalho do condenado possui finalidade: Marque a opção adequada.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1938,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A remição da pena pode ocorrer: Marque a opção adequada.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1939,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A Polícia Penal tem atuação especialmente vinculada à: Marque a opção adequada.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1940,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O regime disciplinar no sistema prisional deve observar: Marque a opção adequada.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1941,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei de Execução Penal é a: Indique a assertiva correta.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1942,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A execução penal tem por objetivo: Indique a assertiva correta.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1943,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, É direito do preso previsto na LEP: Indique a assertiva correta.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1944,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Constitui dever do preso: Indique a assertiva correta.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1945,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Os regimes de cumprimento de pena privativa de liberdade são: Indique a assertiva correta.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1946,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A assistência educacional compreende: Indique a assertiva correta.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1947,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O trabalho do condenado possui finalidade: Indique a assertiva correta.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1948,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A remição da pena pode ocorrer: Indique a assertiva correta.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1949,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A Polícia Penal tem atuação especialmente vinculada à: Indique a assertiva correta.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1950,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O regime disciplinar no sistema prisional deve observar: Indique a assertiva correta.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1951,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "A Lei de Execução Penal é a: Indique a assertiva correta.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1952,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "A execução penal tem por objetivo: Indique a assertiva correta.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1953,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "É direito do preso previsto na LEP: Indique a assertiva correta.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1954,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Constitui dever do preso: Indique a assertiva correta.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1955,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Os regimes de cumprimento de pena privativa de liberdade são: Indique a assertiva correta.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1956,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "A assistência educacional compreende: Indique a assertiva correta.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1957,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "O trabalho do condenado possui finalidade: Indique a assertiva correta.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1958,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "A remição da pena pode ocorrer: Indique a assertiva correta.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1959,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "A Polícia Penal tem atuação especialmente vinculada à: Indique a assertiva correta.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1960,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "O regime disciplinar no sistema prisional deve observar: Indique a assertiva correta.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1961,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei de Execução Penal é a: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1962,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A execução penal tem por objetivo: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1963,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É direito do preso previsto na LEP: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1964,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Constitui dever do preso: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1965,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os regimes de cumprimento de pena privativa de liberdade são: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1966,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A assistência educacional compreende: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1967,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O trabalho do condenado possui finalidade: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1968,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A remição da pena pode ocorrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1969,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Polícia Penal tem atuação especialmente vinculada à: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1970,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O regime disciplinar no sistema prisional deve observar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1971,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei de Execução Penal é a: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1972,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A execução penal tem por objetivo: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1973,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, É direito do preso previsto na LEP: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1974,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Constitui dever do preso: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1975,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Os regimes de cumprimento de pena privativa de liberdade são: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1976,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A assistência educacional compreende: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1977,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O trabalho do condenado possui finalidade: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1978,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A remição da pena pode ocorrer: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1979,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A Polícia Penal tem atuação especialmente vinculada à: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1980,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O regime disciplinar no sistema prisional deve observar: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1981,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei de Execução Penal é a: Identifique a alternativa correta.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1982,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A execução penal tem por objetivo: Identifique a alternativa correta.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1983,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, É direito do preso previsto na LEP: Identifique a alternativa correta.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1984,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Constitui dever do preso: Identifique a alternativa correta.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1985,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Os regimes de cumprimento de pena privativa de liberdade são: Identifique a alternativa correta.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1986,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A assistência educacional compreende: Identifique a alternativa correta.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1987,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O trabalho do condenado possui finalidade: Identifique a alternativa correta.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1988,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A remição da pena pode ocorrer: Identifique a alternativa correta.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1989,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A Polícia Penal tem atuação especialmente vinculada à: Identifique a alternativa correta.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 1990,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O regime disciplinar no sistema prisional deve observar: Identifique a alternativa correta.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 1991,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei de Execução Penal é a: Identifique a alternativa correta.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 1992,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A execução penal tem por objetivo: Identifique a alternativa correta.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 1993,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, É direito do preso previsto na LEP: Identifique a alternativa correta.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 1994,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Constitui dever do preso: Identifique a alternativa correta.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 1995,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Os regimes de cumprimento de pena privativa de liberdade são: Identifique a alternativa correta.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 1996,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A assistência educacional compreende: Identifique a alternativa correta.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 1997,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O trabalho do condenado possui finalidade: Identifique a alternativa correta.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 1998,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A remição da pena pode ocorrer: Identifique a alternativa correta.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 1999,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A Polícia Penal tem atuação especialmente vinculada à: Identifique a alternativa correta.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 2000,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O regime disciplinar no sistema prisional deve observar: Identifique a alternativa correta.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 2001,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "A Lei de Execução Penal é a: Assinale a alternativa correta.",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 2002,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "A execução penal tem por objetivo: Assinale a alternativa correta.",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 2003,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "É direito do preso previsto na LEP: Assinale a alternativa correta.",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 2004,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Constitui dever do preso: Assinale a alternativa correta.",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 2005,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Os regimes de cumprimento de pena privativa de liberdade são: Assinale a alternativa correta.",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 2006,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "A assistência educacional compreende: Assinale a alternativa correta.",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 2007,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "O trabalho do condenado possui finalidade: Assinale a alternativa correta.",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 2008,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "A remição da pena pode ocorrer: Assinale a alternativa correta.",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 2009,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "A Polícia Penal tem atuação especialmente vinculada à: Assinale a alternativa correta.",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 2010,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "O regime disciplinar no sistema prisional deve observar: Assinale a alternativa correta.",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 2011,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Lei de Execução Penal é a: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 2012,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A execução penal tem por objetivo: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 2013,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, É direito do preso previsto na LEP: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 2014,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Constitui dever do preso: Assinale a alternativa correta. (114)",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 2015,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Os regimes de cumprimento de pena privativa de liberdade são: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 2016,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A assistência educacional compreende: Assinale a alternativa correta. (116)",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 2017,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O trabalho do condenado possui finalidade: Assinale a alternativa correta. (117)",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 2018,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A remição da pena pode ocorrer: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 2019,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A Polícia Penal tem atuação especialmente vinculada à: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 2020,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, O regime disciplinar no sistema prisional deve observar: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 2021,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A Lei de Execução Penal é a: Marque a opção adequada. (121)",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 2022,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A execução penal tem por objetivo: Marque a opção adequada. (122)",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 2023,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, É direito do preso previsto na LEP: Marque a opção adequada. (123)",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 2024,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Constitui dever do preso: Marque a opção adequada. (124)",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 2025,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Os regimes de cumprimento de pena privativa de liberdade são: Marque a opção adequada. (125)",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 2026,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A assistência educacional compreende: Marque a opção adequada. (126)",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 2027,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, O trabalho do condenado possui finalidade: Marque a opção adequada. (127)",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 2028,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A remição da pena pode ocorrer: Marque a opção adequada. (128)",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 2029,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A Polícia Penal tem atuação especialmente vinculada à: Marque a opção adequada. (129)",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 2030,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, O regime disciplinar no sistema prisional deve observar: Marque a opção adequada. (130)",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 2031,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A Lei de Execução Penal é a: Marque a opção adequada. (131)",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 2032,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A execução penal tem por objetivo: Marque a opção adequada. (132)",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 2033,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, É direito do preso previsto na LEP: Marque a opção adequada. (133)",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 2034,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Constitui dever do preso: Marque a opção adequada. (134)",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 2035,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Os regimes de cumprimento de pena privativa de liberdade são: Marque a opção adequada. (135)",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 2036,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A assistência educacional compreende: Marque a opção adequada. (136)",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 2037,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, O trabalho do condenado possui finalidade: Marque a opção adequada. (137)",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 2038,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A remição da pena pode ocorrer: Marque a opção adequada. (138)",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 2039,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A Polícia Penal tem atuação especialmente vinculada à: Marque a opção adequada. (139)",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 2040,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, O regime disciplinar no sistema prisional deve observar: Marque a opção adequada. (140)",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 2041,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A Lei de Execução Penal é a: Indique a assertiva correta. (141)",
    "alternativas": [
      "Lei nº 7.210/1984.",
      "Lei nº 8.112/1990.",
      "Lei nº 8.429/1992.",
      "Lei nº 14.133/2021.",
      "Lei nº 12.527/2011."
    ],
    "correta": 0,
    "explicacao": "A Lei nº 7.210/1984 é a Lei de Execução Penal."
  },
  {
    "id": 2042,
    "materia": "Sistema Prisional",
    "assunto": "LEP",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A execução penal tem por objetivo: Indique a assertiva correta. (142)",
    "alternativas": [
      "Substituir o Código Penal.",
      "Criar novos crimes.",
      "Impedir assistência ao preso.",
      "Regular apenas concursos públicos.",
      "Efetivar as disposições da sentença e proporcionar condições para integração social."
    ],
    "correta": 4,
    "explicacao": "A LEP busca cumprir a decisão criminal e favorecer a integração social do condenado."
  },
  {
    "id": 2043,
    "materia": "Sistema Prisional",
    "assunto": "Direitos do Preso",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, É direito do preso previsto na LEP: Indique a assertiva correta. (143)",
    "alternativas": [
      "Recusar toda disciplina.",
      "Não cumprir a sentença.",
      "Ser dispensado de deveres.",
      "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      "Escolher livremente o estabelecimento penal."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê diversas assistências ao preso."
  },
  {
    "id": 2044,
    "materia": "Sistema Prisional",
    "assunto": "Deveres do Preso",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Constitui dever do preso: Indique a assertiva correta. (144)",
    "alternativas": [
      "Escolher a própria pena.",
      "Recusar identificação.",
      "Comportamento disciplinado e cumprimento fiel da sentença.",
      "Desobedecer ordens legais.",
      "Impedir fiscalização."
    ],
    "correta": 2,
    "explicacao": "A LEP estabelece deveres como disciplina, obediência e respeito."
  },
  {
    "id": 2045,
    "materia": "Sistema Prisional",
    "assunto": "Regimes",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Os regimes de cumprimento de pena privativa de liberdade são: Indique a assertiva correta. (145)",
    "alternativas": [
      "Comum, especial e privado.",
      "Fechado, semiaberto e aberto.",
      "Administrativo, civil e penal.",
      "Preventivo, cautelar e definitivo.",
      "Interno, externo e político."
    ],
    "correta": 1,
    "explicacao": "Os regimes são fechado, semiaberto e aberto."
  },
  {
    "id": 2046,
    "materia": "Sistema Prisional",
    "assunto": "Assistências",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A assistência educacional compreende: Indique a assertiva correta. (146)",
    "alternativas": [
      "Instrução escolar e formação profissional.",
      "Somente lazer.",
      "Apenas visitas familiares.",
      "Exclusivamente assistência religiosa.",
      "Suspensão de atividades escolares."
    ],
    "correta": 0,
    "explicacao": "A assistência educacional inclui instrução escolar e formação profissional."
  },
  {
    "id": 2047,
    "materia": "Sistema Prisional",
    "assunto": "Trabalho Prisional",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, O trabalho do condenado possui finalidade: Indique a assertiva correta. (147)",
    "alternativas": [
      "Exclusivamente punitiva.",
      "Facultativa em qualquer hipótese.",
      "Recreativa apenas.",
      "Vedada em regime fechado.",
      "Educativa e produtiva."
    ],
    "correta": 4,
    "explicacao": "A LEP atribui finalidade educativa e produtiva ao trabalho prisional."
  },
  {
    "id": 2048,
    "materia": "Sistema Prisional",
    "assunto": "Remição",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A remição da pena pode ocorrer: Indique a assertiva correta. (148)",
    "alternativas": [
      "Por pagamento de taxa.",
      "Por pedido verbal ao servidor.",
      "Por sorteio administrativo.",
      "Pelo trabalho ou estudo, conforme a lei.",
      "Apenas por bom comportamento sem previsão."
    ],
    "correta": 3,
    "explicacao": "A LEP prevê remição pelo trabalho e pelo estudo."
  },
  {
    "id": 2049,
    "materia": "Sistema Prisional",
    "assunto": "Polícia Penal",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A Polícia Penal tem atuação especialmente vinculada à: Indique a assertiva correta. (149)",
    "alternativas": [
      "Investigação eleitoral.",
      "Defesa aérea.",
      "Segurança dos estabelecimentos penais.",
      "Fiscalização de trânsito.",
      "Diplomacia internacional."
    ],
    "correta": 2,
    "explicacao": "A Polícia Penal atua na segurança dos estabelecimentos penais."
  },
  {
    "id": 2050,
    "materia": "Sistema Prisional",
    "assunto": "Disciplina",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, O regime disciplinar no sistema prisional deve observar: Indique a assertiva correta. (150)",
    "alternativas": [
      "Decisão informal sem controle.",
      "Legalidade, proporcionalidade e devido processo, quando cabível.",
      "Arbitrariedade administrativa.",
      "Punição sem previsão normativa.",
      "Ausência de registro."
    ],
    "correta": 1,
    "explicacao": "A disciplina prisional deve respeitar a legalidade e garantias mínimas."
  },
  {
    "id": 2051,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "No Windows, o Explorador de Arquivos é utilizado para:",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2052,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "A extensão de arquivo geralmente indica:",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2053,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "No Word, o recurso 'Controlar Alterações' serve para:",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2054,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Margens, orientação e tamanho do papel são configurados geralmente na guia:",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2055,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "No Excel, a função SOMA serve para:",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2056,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "A função SE é usada para:",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2057,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "A função CONT.SE permite:",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2058,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "PROCV ou PROCX são funções utilizadas principalmente para:",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2059,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Navegadores são programas usados para:",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2060,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Phishing é uma técnica de:",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2061,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Windows, o Explorador de Arquivos é utilizado para: Assinale a alternativa correta.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2062,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A extensão de arquivo geralmente indica: Assinale a alternativa correta.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2063,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Word, o recurso 'Controlar Alterações' serve para: Assinale a alternativa correta.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2064,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Margens, orientação e tamanho do papel são configurados geralmente na guia: Assinale a alternativa correta.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2065,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Excel, a função SOMA serve para: Assinale a alternativa correta.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2066,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A função SE é usada para: Assinale a alternativa correta.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2067,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A função CONT.SE permite: Assinale a alternativa correta.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2068,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, PROCV ou PROCX são funções utilizadas principalmente para: Assinale a alternativa correta.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2069,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Navegadores são programas usados para: Assinale a alternativa correta.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2070,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Phishing é uma técnica de: Assinale a alternativa correta.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2071,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Windows, o Explorador de Arquivos é utilizado para: Marque a opção adequada.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2072,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A extensão de arquivo geralmente indica: Marque a opção adequada.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2073,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Word, o recurso 'Controlar Alterações' serve para: Marque a opção adequada.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2074,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Margens, orientação e tamanho do papel são configurados geralmente na guia: Marque a opção adequada.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2075,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Excel, a função SOMA serve para: Marque a opção adequada.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2076,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A função SE é usada para: Marque a opção adequada.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2077,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A função CONT.SE permite: Marque a opção adequada.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2078,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, PROCV ou PROCX são funções utilizadas principalmente para: Marque a opção adequada.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2079,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Navegadores são programas usados para: Marque a opção adequada.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2080,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Phishing é uma técnica de: Marque a opção adequada.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2081,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Windows, o Explorador de Arquivos é utilizado para: Marque a opção adequada.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2082,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A extensão de arquivo geralmente indica: Marque a opção adequada.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2083,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Word, o recurso 'Controlar Alterações' serve para: Marque a opção adequada.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2084,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Margens, orientação e tamanho do papel são configurados geralmente na guia: Marque a opção adequada.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2085,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Excel, a função SOMA serve para: Marque a opção adequada.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2086,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A função SE é usada para: Marque a opção adequada.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2087,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A função CONT.SE permite: Marque a opção adequada.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2088,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, PROCV ou PROCX são funções utilizadas principalmente para: Marque a opção adequada.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2089,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Navegadores são programas usados para: Marque a opção adequada.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2090,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Phishing é uma técnica de: Marque a opção adequada.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2091,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Windows, o Explorador de Arquivos é utilizado para: Indique a assertiva correta.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2092,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A extensão de arquivo geralmente indica: Indique a assertiva correta.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2093,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Word, o recurso 'Controlar Alterações' serve para: Indique a assertiva correta.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2094,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Margens, orientação e tamanho do papel são configurados geralmente na guia: Indique a assertiva correta.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2095,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Excel, a função SOMA serve para: Indique a assertiva correta.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2096,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A função SE é usada para: Indique a assertiva correta.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2097,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A função CONT.SE permite: Indique a assertiva correta.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2098,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, PROCV ou PROCX são funções utilizadas principalmente para: Indique a assertiva correta.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2099,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Navegadores são programas usados para: Indique a assertiva correta.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2100,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Phishing é uma técnica de: Indique a assertiva correta.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2101,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "No Windows, o Explorador de Arquivos é utilizado para: Indique a assertiva correta.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2102,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "A extensão de arquivo geralmente indica: Indique a assertiva correta.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2103,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "No Word, o recurso 'Controlar Alterações' serve para: Indique a assertiva correta.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2104,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Margens, orientação e tamanho do papel são configurados geralmente na guia: Indique a assertiva correta.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2105,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "No Excel, a função SOMA serve para: Indique a assertiva correta.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2106,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "A função SE é usada para: Indique a assertiva correta.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2107,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "A função CONT.SE permite: Indique a assertiva correta.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2108,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "PROCV ou PROCX são funções utilizadas principalmente para: Indique a assertiva correta.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2109,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Navegadores são programas usados para: Indique a assertiva correta.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2110,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Phishing é uma técnica de: Indique a assertiva correta.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2111,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Windows, o Explorador de Arquivos é utilizado para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2112,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A extensão de arquivo geralmente indica: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2113,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Word, o recurso 'Controlar Alterações' serve para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2114,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Margens, orientação e tamanho do papel são configurados geralmente na guia: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2115,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Excel, a função SOMA serve para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2116,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A função SE é usada para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2117,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A função CONT.SE permite: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2118,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, PROCV ou PROCX são funções utilizadas principalmente para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2119,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Navegadores são programas usados para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2120,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Phishing é uma técnica de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2121,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Windows, o Explorador de Arquivos é utilizado para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2122,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A extensão de arquivo geralmente indica: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2123,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Word, o recurso 'Controlar Alterações' serve para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2124,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Margens, orientação e tamanho do papel são configurados geralmente na guia: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2125,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Excel, a função SOMA serve para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2126,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A função SE é usada para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2127,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A função CONT.SE permite: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2128,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, PROCV ou PROCX são funções utilizadas principalmente para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2129,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Navegadores são programas usados para: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2130,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Phishing é uma técnica de: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2131,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Windows, o Explorador de Arquivos é utilizado para: Identifique a alternativa correta.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2132,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A extensão de arquivo geralmente indica: Identifique a alternativa correta.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2133,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Word, o recurso 'Controlar Alterações' serve para: Identifique a alternativa correta.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2134,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Margens, orientação e tamanho do papel são configurados geralmente na guia: Identifique a alternativa correta.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2135,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Excel, a função SOMA serve para: Identifique a alternativa correta.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2136,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A função SE é usada para: Identifique a alternativa correta.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2137,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A função CONT.SE permite: Identifique a alternativa correta.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2138,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, PROCV ou PROCX são funções utilizadas principalmente para: Identifique a alternativa correta.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2139,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Navegadores são programas usados para: Identifique a alternativa correta.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2140,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Phishing é uma técnica de: Identifique a alternativa correta.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2141,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Windows, o Explorador de Arquivos é utilizado para: Identifique a alternativa correta.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2142,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A extensão de arquivo geralmente indica: Identifique a alternativa correta.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2143,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Word, o recurso 'Controlar Alterações' serve para: Identifique a alternativa correta.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2144,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Margens, orientação e tamanho do papel são configurados geralmente na guia: Identifique a alternativa correta.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2145,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Excel, a função SOMA serve para: Identifique a alternativa correta.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2146,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A função SE é usada para: Identifique a alternativa correta.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2147,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A função CONT.SE permite: Identifique a alternativa correta.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2148,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, PROCV ou PROCX são funções utilizadas principalmente para: Identifique a alternativa correta.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2149,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Navegadores são programas usados para: Identifique a alternativa correta.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2150,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Phishing é uma técnica de: Identifique a alternativa correta.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2151,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "No Windows, o Explorador de Arquivos é utilizado para: Assinale a alternativa correta.",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2152,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "A extensão de arquivo geralmente indica: Assinale a alternativa correta.",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2153,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "No Word, o recurso 'Controlar Alterações' serve para: Assinale a alternativa correta.",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2154,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Margens, orientação e tamanho do papel são configurados geralmente na guia: Assinale a alternativa correta.",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2155,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "No Excel, a função SOMA serve para: Assinale a alternativa correta.",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2156,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "A função SE é usada para: Assinale a alternativa correta.",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2157,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "A função CONT.SE permite: Assinale a alternativa correta.",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2158,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "PROCV ou PROCX são funções utilizadas principalmente para: Assinale a alternativa correta.",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2159,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Navegadores são programas usados para: Assinale a alternativa correta.",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2160,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Phishing é uma técnica de: Assinale a alternativa correta.",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2161,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Windows, o Explorador de Arquivos é utilizado para: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2162,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A extensão de arquivo geralmente indica: Assinale a alternativa correta. (112)",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2163,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Word, o recurso 'Controlar Alterações' serve para: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2164,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Margens, orientação e tamanho do papel são configurados geralmente na guia: Assinale a alternativa correta. (114)",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2165,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, No Excel, a função SOMA serve para: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2166,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A função SE é usada para: Assinale a alternativa correta. (116)",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2167,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A função CONT.SE permite: Assinale a alternativa correta. (117)",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2168,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, PROCV ou PROCX são funções utilizadas principalmente para: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2169,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Navegadores são programas usados para: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2170,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Phishing é uma técnica de: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2171,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Windows, o Explorador de Arquivos é utilizado para: Marque a opção adequada. (121)",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2172,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A extensão de arquivo geralmente indica: Marque a opção adequada. (122)",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2173,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Word, o recurso 'Controlar Alterações' serve para: Marque a opção adequada. (123)",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2174,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Margens, orientação e tamanho do papel são configurados geralmente na guia: Marque a opção adequada. (124)",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2175,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, No Excel, a função SOMA serve para: Marque a opção adequada. (125)",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2176,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A função SE é usada para: Marque a opção adequada. (126)",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2177,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A função CONT.SE permite: Marque a opção adequada. (127)",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2178,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, PROCV ou PROCX são funções utilizadas principalmente para: Marque a opção adequada. (128)",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2179,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Navegadores são programas usados para: Marque a opção adequada. (129)",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2180,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Phishing é uma técnica de: Marque a opção adequada. (130)",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2181,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Windows, o Explorador de Arquivos é utilizado para: Marque a opção adequada. (131)",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2182,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A extensão de arquivo geralmente indica: Marque a opção adequada. (132)",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2183,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Word, o recurso 'Controlar Alterações' serve para: Marque a opção adequada. (133)",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2184,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Margens, orientação e tamanho do papel são configurados geralmente na guia: Marque a opção adequada. (134)",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2185,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, No Excel, a função SOMA serve para: Marque a opção adequada. (135)",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2186,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A função SE é usada para: Marque a opção adequada. (136)",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2187,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A função CONT.SE permite: Marque a opção adequada. (137)",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2188,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, PROCV ou PROCX são funções utilizadas principalmente para: Marque a opção adequada. (138)",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2189,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Navegadores são programas usados para: Marque a opção adequada. (139)",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2190,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Phishing é uma técnica de: Marque a opção adequada. (140)",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2191,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Windows, o Explorador de Arquivos é utilizado para: Indique a assertiva correta. (141)",
    "alternativas": [
      "Gerenciar arquivos e pastas.",
      "Criar fórmulas do Excel.",
      "Enviar sentenças judiciais.",
      "Substituir antivírus.",
      "Executar licitações."
    ],
    "correta": 0,
    "explicacao": "O Explorador de Arquivos gerencia arquivos, pastas e unidades."
  },
  {
    "id": 2192,
    "materia": "Informática",
    "assunto": "Windows",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A extensão de arquivo geralmente indica: Indique a assertiva correta. (142)",
    "alternativas": [
      "A senha do usuário.",
      "O tamanho exato da memória RAM.",
      "A data de compra do computador.",
      "A velocidade da internet.",
      "O tipo ou formato do arquivo."
    ],
    "correta": 4,
    "explicacao": "Extensões como .docx, .xlsx e .pdf indicam formato/tipo de arquivo."
  },
  {
    "id": 2193,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Word, o recurso 'Controlar Alterações' serve para: Indique a assertiva correta. (143)",
    "alternativas": [
      "Criar fórmulas condicionais.",
      "Proteger contra vírus.",
      "Compactar arquivos.",
      "Registrar modificações realizadas no documento.",
      "Calcular médias."
    ],
    "correta": 3,
    "explicacao": "Controlar Alterações registra edições e revisões."
  },
  {
    "id": 2194,
    "materia": "Informática",
    "assunto": "Word",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Margens, orientação e tamanho do papel são configurados geralmente na guia: Indique a assertiva correta. (144)",
    "alternativas": [
      "Correspondências penais.",
      "Segurança.",
      "Layout.",
      "Fórmulas.",
      "Dados."
    ],
    "correta": 2,
    "explicacao": "Configurações de página ficam na guia Layout."
  },
  {
    "id": 2195,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, No Excel, a função SOMA serve para: Indique a assertiva correta. (145)",
    "alternativas": [
      "Compactar arquivos.",
      "Adicionar valores.",
      "Contar palavras automaticamente.",
      "Criar slides.",
      "Excluir vírus."
    ],
    "correta": 1,
    "explicacao": "SOMA adiciona valores numéricos."
  },
  {
    "id": 2196,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A função SE é usada para: Indique a assertiva correta. (146)",
    "alternativas": [
      "Testar uma condição e retornar valores conforme verdadeiro ou falso.",
      "Somar todos os textos.",
      "Abrir navegador.",
      "Criar índice remissivo.",
      "Proteger o sistema operacional."
    ],
    "correta": 0,
    "explicacao": "SE realiza teste lógico condicional."
  },
  {
    "id": 2197,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A função CONT.SE permite: Indique a assertiva correta. (147)",
    "alternativas": [
      "Calcular apenas médias ponderadas.",
      "Pesquisar imagens na internet.",
      "Criar mala direta.",
      "Formatar disco rígido.",
      "Contar células que atendem a um critério."
    ],
    "correta": 4,
    "explicacao": "CONT.SE conta ocorrências conforme critério."
  },
  {
    "id": 2198,
    "materia": "Informática",
    "assunto": "Excel",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, PROCV ou PROCX são funções utilizadas principalmente para: Indique a assertiva correta. (148)",
    "alternativas": [
      "Corrigir ortografia.",
      "Detectar vírus.",
      "Criar apresentações.",
      "Pesquisar valores em tabelas.",
      "Compactar arquivos."
    ],
    "correta": 3,
    "explicacao": "PROCV/PROCX fazem buscas em intervalos/tabelas."
  },
  {
    "id": 2199,
    "materia": "Informática",
    "assunto": "Internet",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Navegadores são programas usados para: Indique a assertiva correta. (149)",
    "alternativas": [
      "Formatar computadores.",
      "Substituir firewalls.",
      "Acessar páginas e serviços web.",
      "Editar planilhas exclusivamente.",
      "Executar pena criminal."
    ],
    "correta": 2,
    "explicacao": "Browsers como Chrome, Edge e Firefox acessam a web."
  },
  {
    "id": 2200,
    "materia": "Informática",
    "assunto": "Segurança da Informação",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Phishing é uma técnica de: Indique a assertiva correta. (150)",
    "alternativas": [
      "Formatação segura.",
      "Fraude para obter dados sensíveis.",
      "Aceleração de processador.",
      "Cópia de segurança local.",
      "Impressão remota."
    ],
    "correta": 1,
    "explicacao": "Phishing tenta enganar usuários para obter senhas, dados bancários etc."
  },
  {
    "id": 2201,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Uma proposição lógica é uma sentença que:",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2202,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Na conjunção 'p e q', o resultado é verdadeiro quando:",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2203,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "A negação de 'todos os servidores estudam' é:",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2204,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "20% de 250 corresponde a:",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2205,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam:",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2206,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Na sequência 2, 4, 8, 16, o próximo termo é:",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2207,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que:",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2208,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "A proposição 'se estudo, então aprovo' é falsa quando:",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2209,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Um produto de R$ 200,00 teve aumento de 10%. O novo valor é:",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2210,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "A negação de 'p e q' é equivalente a:",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2211,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Uma proposição lógica é uma sentença que: Assinale a alternativa correta.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2212,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na conjunção 'p e q', o resultado é verdadeiro quando: Assinale a alternativa correta.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2213,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A negação de 'todos os servidores estudam' é: Assinale a alternativa correta.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2214,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, 20% de 250 corresponde a: Assinale a alternativa correta.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2215,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Assinale a alternativa correta.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2216,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na sequência 2, 4, 8, 16, o próximo termo é: Assinale a alternativa correta.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2217,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Assinale a alternativa correta.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2218,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A proposição 'se estudo, então aprovo' é falsa quando: Assinale a alternativa correta.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2219,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Assinale a alternativa correta.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2220,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A negação de 'p e q' é equivalente a: Assinale a alternativa correta.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2221,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Uma proposição lógica é uma sentença que: Marque a opção adequada.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2222,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na conjunção 'p e q', o resultado é verdadeiro quando: Marque a opção adequada.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2223,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A negação de 'todos os servidores estudam' é: Marque a opção adequada.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2224,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, 20% de 250 corresponde a: Marque a opção adequada.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2225,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Marque a opção adequada.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2226,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na sequência 2, 4, 8, 16, o próximo termo é: Marque a opção adequada.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2227,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Marque a opção adequada.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2228,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A proposição 'se estudo, então aprovo' é falsa quando: Marque a opção adequada.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2229,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Marque a opção adequada.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2230,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A negação de 'p e q' é equivalente a: Marque a opção adequada.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2231,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Uma proposição lógica é uma sentença que: Marque a opção adequada.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2232,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na conjunção 'p e q', o resultado é verdadeiro quando: Marque a opção adequada.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2233,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A negação de 'todos os servidores estudam' é: Marque a opção adequada.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2234,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, 20% de 250 corresponde a: Marque a opção adequada.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2235,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Marque a opção adequada.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2236,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na sequência 2, 4, 8, 16, o próximo termo é: Marque a opção adequada.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2237,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Marque a opção adequada.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2238,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A proposição 'se estudo, então aprovo' é falsa quando: Marque a opção adequada.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2239,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Marque a opção adequada.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2240,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A negação de 'p e q' é equivalente a: Marque a opção adequada.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2241,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Uma proposição lógica é uma sentença que: Indique a assertiva correta.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2242,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na conjunção 'p e q', o resultado é verdadeiro quando: Indique a assertiva correta.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2243,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A negação de 'todos os servidores estudam' é: Indique a assertiva correta.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2244,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, 20% de 250 corresponde a: Indique a assertiva correta.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2245,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Indique a assertiva correta.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2246,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na sequência 2, 4, 8, 16, o próximo termo é: Indique a assertiva correta.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2247,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Indique a assertiva correta.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2248,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A proposição 'se estudo, então aprovo' é falsa quando: Indique a assertiva correta.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2249,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Indique a assertiva correta.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2250,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A negação de 'p e q' é equivalente a: Indique a assertiva correta.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2251,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Uma proposição lógica é uma sentença que: Indique a assertiva correta.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2252,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Na conjunção 'p e q', o resultado é verdadeiro quando: Indique a assertiva correta.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2253,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "A negação de 'todos os servidores estudam' é: Indique a assertiva correta.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2254,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "20% de 250 corresponde a: Indique a assertiva correta.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2255,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Indique a assertiva correta.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2256,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Na sequência 2, 4, 8, 16, o próximo termo é: Indique a assertiva correta.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2257,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Indique a assertiva correta.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2258,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "A proposição 'se estudo, então aprovo' é falsa quando: Indique a assertiva correta.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2259,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Indique a assertiva correta.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2260,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "A negação de 'p e q' é equivalente a: Indique a assertiva correta.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2261,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Uma proposição lógica é uma sentença que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2262,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na conjunção 'p e q', o resultado é verdadeiro quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2263,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A negação de 'todos os servidores estudam' é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2264,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, 20% de 250 corresponde a: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2265,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2266,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na sequência 2, 4, 8, 16, o próximo termo é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2267,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2268,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A proposição 'se estudo, então aprovo' é falsa quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2269,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2270,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A negação de 'p e q' é equivalente a: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2271,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Uma proposição lógica é uma sentença que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2272,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na conjunção 'p e q', o resultado é verdadeiro quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2273,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A negação de 'todos os servidores estudam' é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2274,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, 20% de 250 corresponde a: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2275,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2276,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na sequência 2, 4, 8, 16, o próximo termo é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2277,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2278,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A proposição 'se estudo, então aprovo' é falsa quando: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2279,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2280,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A negação de 'p e q' é equivalente a: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2281,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Uma proposição lógica é uma sentença que: Identifique a alternativa correta.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2282,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na conjunção 'p e q', o resultado é verdadeiro quando: Identifique a alternativa correta.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2283,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A negação de 'todos os servidores estudam' é: Identifique a alternativa correta.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2284,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, 20% de 250 corresponde a: Identifique a alternativa correta.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2285,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Identifique a alternativa correta.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2286,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na sequência 2, 4, 8, 16, o próximo termo é: Identifique a alternativa correta.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2287,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Identifique a alternativa correta.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2288,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A proposição 'se estudo, então aprovo' é falsa quando: Identifique a alternativa correta.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2289,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Identifique a alternativa correta.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2290,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A negação de 'p e q' é equivalente a: Identifique a alternativa correta.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2291,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Uma proposição lógica é uma sentença que: Identifique a alternativa correta.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2292,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na conjunção 'p e q', o resultado é verdadeiro quando: Identifique a alternativa correta.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2293,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A negação de 'todos os servidores estudam' é: Identifique a alternativa correta.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2294,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, 20% de 250 corresponde a: Identifique a alternativa correta.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2295,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Identifique a alternativa correta.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2296,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na sequência 2, 4, 8, 16, o próximo termo é: Identifique a alternativa correta.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2297,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Identifique a alternativa correta.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2298,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A proposição 'se estudo, então aprovo' é falsa quando: Identifique a alternativa correta.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2299,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Identifique a alternativa correta.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2300,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A negação de 'p e q' é equivalente a: Identifique a alternativa correta.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2301,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Uma proposição lógica é uma sentença que: Assinale a alternativa correta.",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2302,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Na conjunção 'p e q', o resultado é verdadeiro quando: Assinale a alternativa correta.",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2303,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "A negação de 'todos os servidores estudam' é: Assinale a alternativa correta.",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2304,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "20% de 250 corresponde a: Assinale a alternativa correta.",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2305,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Assinale a alternativa correta.",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2306,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Na sequência 2, 4, 8, 16, o próximo termo é: Assinale a alternativa correta.",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2307,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Assinale a alternativa correta.",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2308,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "A proposição 'se estudo, então aprovo' é falsa quando: Assinale a alternativa correta.",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2309,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Assinale a alternativa correta.",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2310,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "A negação de 'p e q' é equivalente a: Assinale a alternativa correta.",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2311,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Uma proposição lógica é uma sentença que: Assinale a alternativa correta. (111)",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2312,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na conjunção 'p e q', o resultado é verdadeiro quando: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2313,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A negação de 'todos os servidores estudam' é: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2314,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, 20% de 250 corresponde a: Assinale a alternativa correta. (114)",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2315,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Assinale a alternativa correta. (115)",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2316,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na sequência 2, 4, 8, 16, o próximo termo é: Assinale a alternativa correta. (116)",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2317,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Assinale a alternativa correta. (117)",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2318,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A proposição 'se estudo, então aprovo' é falsa quando: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2319,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Assinale a alternativa correta. (119)",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2320,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A negação de 'p e q' é equivalente a: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2321,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Uma proposição lógica é uma sentença que: Marque a opção adequada. (121)",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2322,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na conjunção 'p e q', o resultado é verdadeiro quando: Marque a opção adequada. (122)",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2323,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, A negação de 'todos os servidores estudam' é: Marque a opção adequada. (123)",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2324,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, 20% de 250 corresponde a: Marque a opção adequada. (124)",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2325,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Marque a opção adequada. (125)",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2326,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na sequência 2, 4, 8, 16, o próximo termo é: Marque a opção adequada. (126)",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2327,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Marque a opção adequada. (127)",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2328,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A proposição 'se estudo, então aprovo' é falsa quando: Marque a opção adequada. (128)",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2329,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Marque a opção adequada. (129)",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2330,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, A negação de 'p e q' é equivalente a: Marque a opção adequada. (130)",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2331,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Uma proposição lógica é uma sentença que: Marque a opção adequada. (131)",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2332,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na conjunção 'p e q', o resultado é verdadeiro quando: Marque a opção adequada. (132)",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2333,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, A negação de 'todos os servidores estudam' é: Marque a opção adequada. (133)",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2334,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, 20% de 250 corresponde a: Marque a opção adequada. (134)",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2335,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Marque a opção adequada. (135)",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2336,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na sequência 2, 4, 8, 16, o próximo termo é: Marque a opção adequada. (136)",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2337,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Marque a opção adequada. (137)",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2338,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A proposição 'se estudo, então aprovo' é falsa quando: Marque a opção adequada. (138)",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2339,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Marque a opção adequada. (139)",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2340,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, A negação de 'p e q' é equivalente a: Marque a opção adequada. (140)",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2341,
    "materia": "Raciocínio Lógico",
    "assunto": "Proposições",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Uma proposição lógica é uma sentença que: Indique a assertiva correta. (141)",
    "alternativas": [
      "Pode ser classificada como verdadeira ou falsa.",
      "É sempre uma pergunta.",
      "Nunca possui valor lógico.",
      "É sempre uma ordem.",
      "É somente uma exclamação."
    ],
    "correta": 0,
    "explicacao": "Proposição é sentença declarativa com valor lógico."
  },
  {
    "id": 2342,
    "materia": "Raciocínio Lógico",
    "assunto": "Tabela Verdade",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na conjunção 'p e q', o resultado é verdadeiro quando: Indique a assertiva correta. (142)",
    "alternativas": [
      "Apenas p é verdadeira.",
      "Apenas q é verdadeira.",
      "Ambas são falsas.",
      "Sempre é verdadeiro.",
      "p e q são verdadeiras."
    ],
    "correta": 4,
    "explicacao": "Conjunção só é verdadeira quando ambas são verdadeiras."
  },
  {
    "id": 2343,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, A negação de 'todos os servidores estudam' é: Indique a assertiva correta. (143)",
    "alternativas": [
      "Todos os servidores não estudam.",
      "Alguns servidores estudam necessariamente.",
      "Todo estudante é servidor.",
      "Algum servidor não estuda.",
      "Nenhum servidor estuda."
    ],
    "correta": 3,
    "explicacao": "A negação de universal afirmativa é particular negativa."
  },
  {
    "id": 2344,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, 20% de 250 corresponde a: Indique a assertiva correta. (144)",
    "alternativas": [
      "75.",
      "100.",
      "50.",
      "25.",
      "20."
    ],
    "correta": 2,
    "explicacao": "20% de 250 = 0,20 × 250 = 50."
  },
  {
    "id": 2345,
    "materia": "Raciocínio Lógico",
    "assunto": "Razão e Proporção",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Se 3 servidores analisam 30 processos, mantendo a proporção, 6 servidores analisam: Indique a assertiva correta. (145)",
    "alternativas": [
      "10 processos.",
      "60 processos.",
      "15 processos.",
      "30 processos.",
      "90 processos."
    ],
    "correta": 1,
    "explicacao": "Dobrar servidores dobra a quantidade de processos, mantendo a proporção."
  },
  {
    "id": 2346,
    "materia": "Raciocínio Lógico",
    "assunto": "Sequências",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na sequência 2, 4, 8, 16, o próximo termo é: Indique a assertiva correta. (146)",
    "alternativas": [
      "32.",
      "20.",
      "24.",
      "30.",
      "18."
    ],
    "correta": 0,
    "explicacao": "A sequência dobra a cada termo."
  },
  {
    "id": 2347,
    "materia": "Raciocínio Lógico",
    "assunto": "Problemas Lógicos",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Se todo agente é servidor e alguns servidores são estudantes, é necessariamente correto que: Indique a assertiva correta. (147)",
    "alternativas": [
      "Todo estudante é agente.",
      "Nenhum servidor é agente.",
      "Todo servidor é estudante.",
      "Algum estudante é agente.",
      "Todo agente é servidor."
    ],
    "correta": 4,
    "explicacao": "A informação universal dada garante que todo agente é servidor."
  },
  {
    "id": 2348,
    "materia": "Raciocínio Lógico",
    "assunto": "Condicional",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A proposição 'se estudo, então aprovo' é falsa quando: Indique a assertiva correta. (148)",
    "alternativas": [
      "Não estudo e não aprovo.",
      "Estudo e aprovo.",
      "Aprovo e estudo.",
      "Estudo e não aprovo.",
      "Não estudo e aprovo."
    ],
    "correta": 3,
    "explicacao": "Condicional só é falsa quando antecedente é verdadeiro e consequente é falso."
  },
  {
    "id": 2349,
    "materia": "Raciocínio Lógico",
    "assunto": "Porcentagem",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Um produto de R$ 200,00 teve aumento de 10%. O novo valor é: Indique a assertiva correta. (149)",
    "alternativas": [
      "R$ 180,00.",
      "R$ 240,00.",
      "R$ 220,00.",
      "R$ 210,00.",
      "R$ 200,10."
    ],
    "correta": 2,
    "explicacao": "10% de 200 é 20; novo valor = 220."
  },
  {
    "id": 2350,
    "materia": "Raciocínio Lógico",
    "assunto": "Equivalências",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, A negação de 'p e q' é equivalente a: Indique a assertiva correta. (150)",
    "alternativas": [
      "Não p implica q.",
      "Não p ou não q.",
      "Não p e não q.",
      "p ou q.",
      "p e não q."
    ],
    "correta": 1,
    "explicacao": "Pela lei de De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q."
  },
  {
    "id": 2351,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Em texto argumentativo, a tese é:",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2352,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Uma inferência textual consiste em:",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2353,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é:",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2354,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Assinale a frase correta quanto à concordância verbal:",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2355,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Assinale a alternativa correta quanto à regência:",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2356,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Há uso correto da crase em:",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2357,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Assinale a frase corretamente pontuada:",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2358,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por:",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2359,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Mantém-se o sentido de 'Embora estivesse cansado, estudou' em:",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2360,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Assinale a alternativa corretamente grafada:",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2361,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Em texto argumentativo, a tese é: Assinale a alternativa correta.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2362,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Uma inferência textual consiste em: Assinale a alternativa correta.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2363,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Assinale a alternativa correta.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2364,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a frase correta quanto à concordância verbal: Assinale a alternativa correta.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2365,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa correta quanto à regência: Assinale a alternativa correta.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2366,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Há uso correto da crase em: Assinale a alternativa correta.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2367,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a frase corretamente pontuada: Assinale a alternativa correta.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2368,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Assinale a alternativa correta.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2369,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Assinale a alternativa correta.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2370,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa corretamente grafada: Assinale a alternativa correta.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2371,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Em texto argumentativo, a tese é: Marque a opção adequada.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2372,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Uma inferência textual consiste em: Marque a opção adequada.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2373,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Marque a opção adequada.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2374,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a frase correta quanto à concordância verbal: Marque a opção adequada.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2375,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa correta quanto à regência: Marque a opção adequada.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2376,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Há uso correto da crase em: Marque a opção adequada.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2377,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Assinale a frase corretamente pontuada: Marque a opção adequada.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2378,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Marque a opção adequada.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2379,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Marque a opção adequada.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2380,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa corretamente grafada: Marque a opção adequada.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2381,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Em texto argumentativo, a tese é: Marque a opção adequada.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2382,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Uma inferência textual consiste em: Marque a opção adequada.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2383,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Marque a opção adequada.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2384,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a frase correta quanto à concordância verbal: Marque a opção adequada.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2385,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa correta quanto à regência: Marque a opção adequada.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2386,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Há uso correto da crase em: Marque a opção adequada.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2387,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a frase corretamente pontuada: Marque a opção adequada.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2388,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Marque a opção adequada.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2389,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Marque a opção adequada.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2390,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa corretamente grafada: Marque a opção adequada.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2391,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Em texto argumentativo, a tese é: Indique a assertiva correta.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2392,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Uma inferência textual consiste em: Indique a assertiva correta.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2393,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Indique a assertiva correta.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2394,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a frase correta quanto à concordância verbal: Indique a assertiva correta.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2395,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a alternativa correta quanto à regência: Indique a assertiva correta.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2396,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Há uso correto da crase em: Indique a assertiva correta.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2397,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Assinale a frase corretamente pontuada: Indique a assertiva correta.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2398,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Indique a assertiva correta.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2399,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Indique a assertiva correta.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2400,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Assinale a alternativa corretamente grafada: Indique a assertiva correta.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2401,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Em texto argumentativo, a tese é: Indique a assertiva correta.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2402,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Uma inferência textual consiste em: Indique a assertiva correta.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2403,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Indique a assertiva correta.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2404,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Assinale a frase correta quanto à concordância verbal: Indique a assertiva correta.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2405,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Assinale a alternativa correta quanto à regência: Indique a assertiva correta.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2406,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Há uso correto da crase em: Indique a assertiva correta.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2407,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Assinale a frase corretamente pontuada: Indique a assertiva correta.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2408,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Indique a assertiva correta.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2409,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Indique a assertiva correta.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2410,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Assinale a alternativa corretamente grafada: Indique a assertiva correta.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2411,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Em texto argumentativo, a tese é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2412,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Uma inferência textual consiste em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2413,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2414,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a frase correta quanto à concordância verbal: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2415,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa correta quanto à regência: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2416,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Há uso correto da crase em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2417,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a frase corretamente pontuada: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2418,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2419,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2420,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa corretamente grafada: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2421,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Em texto argumentativo, a tese é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2422,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Uma inferência textual consiste em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2423,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2424,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a frase correta quanto à concordância verbal: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2425,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa correta quanto à regência: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2426,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Há uso correto da crase em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2427,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Assinale a frase corretamente pontuada: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2428,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2429,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2430,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa corretamente grafada: Escolha a alternativa compatível com a disciplina.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2431,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Em texto argumentativo, a tese é: Identifique a alternativa correta.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2432,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Uma inferência textual consiste em: Identifique a alternativa correta.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2433,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Identifique a alternativa correta.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2434,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a frase correta quanto à concordância verbal: Identifique a alternativa correta.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2435,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa correta quanto à regência: Identifique a alternativa correta.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2436,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Há uso correto da crase em: Identifique a alternativa correta.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2437,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a frase corretamente pontuada: Identifique a alternativa correta.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2438,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Identifique a alternativa correta.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2439,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Identifique a alternativa correta.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2440,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa corretamente grafada: Identifique a alternativa correta.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2441,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Em texto argumentativo, a tese é: Identifique a alternativa correta.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2442,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Uma inferência textual consiste em: Identifique a alternativa correta.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2443,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Identifique a alternativa correta.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2444,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a frase correta quanto à concordância verbal: Identifique a alternativa correta.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2445,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a alternativa correta quanto à regência: Identifique a alternativa correta.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2446,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Há uso correto da crase em: Identifique a alternativa correta.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2447,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Assinale a frase corretamente pontuada: Identifique a alternativa correta.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2448,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Identifique a alternativa correta.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2449,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Identifique a alternativa correta.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2450,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Assinale a alternativa corretamente grafada: Identifique a alternativa correta.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2451,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Em texto argumentativo, a tese é: Assinale a alternativa correta.",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2452,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Uma inferência textual consiste em: Assinale a alternativa correta.",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2453,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Assinale a alternativa correta.",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2454,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Assinale a frase correta quanto à concordância verbal: Assinale a alternativa correta.",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2455,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Assinale a alternativa correta quanto à regência: Assinale a alternativa correta.",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2456,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Há uso correto da crase em: Assinale a alternativa correta.",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2457,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Assinale a frase corretamente pontuada: Assinale a alternativa correta.",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2458,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Assinale a alternativa correta.",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2459,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Assinale a alternativa correta.",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2460,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Assinale a alternativa corretamente grafada: Assinale a alternativa correta.",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2461,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Em texto argumentativo, a tese é: Assinale a alternativa correta. (111)",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2462,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Uma inferência textual consiste em: Assinale a alternativa correta. (112)",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2463,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Assinale a alternativa correta. (113)",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2464,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a frase correta quanto à concordância verbal: Assinale a alternativa correta. (114)",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2465,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa correta quanto à regência: Assinale a alternativa correta. (115)",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2466,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Há uso correto da crase em: Assinale a alternativa correta. (116)",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2467,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a frase corretamente pontuada: Assinale a alternativa correta. (117)",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2468,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Assinale a alternativa correta. (118)",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2469,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Assinale a alternativa correta. (119)",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2470,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Considerando o conteúdo cobrado em concursos públicos, Assinale a alternativa corretamente grafada: Assinale a alternativa correta. (120)",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2471,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Em texto argumentativo, a tese é: Marque a opção adequada. (121)",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2472,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Uma inferência textual consiste em: Marque a opção adequada. (122)",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2473,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Marque a opção adequada. (123)",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2474,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a frase correta quanto à concordância verbal: Marque a opção adequada. (124)",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2475,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa correta quanto à regência: Marque a opção adequada. (125)",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2476,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Há uso correto da crase em: Marque a opção adequada. (126)",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2477,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, Assinale a frase corretamente pontuada: Marque a opção adequada. (127)",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2478,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Em situação hipotética de prova, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Marque a opção adequada. (128)",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2479,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Em situação hipotética de prova, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Marque a opção adequada. (129)",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2480,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Em situação hipotética de prova, Assinale a alternativa corretamente grafada: Marque a opção adequada. (130)",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2481,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Em texto argumentativo, a tese é: Marque a opção adequada. (131)",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2482,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Uma inferência textual consiste em: Marque a opção adequada. (132)",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2483,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Marque a opção adequada. (133)",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2484,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a frase correta quanto à concordância verbal: Marque a opção adequada. (134)",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2485,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa correta quanto à regência: Marque a opção adequada. (135)",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2486,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Há uso correto da crase em: Marque a opção adequada. (136)",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2487,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a frase corretamente pontuada: Marque a opção adequada. (137)",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2488,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "À luz do edital da Polícia Penal RS, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Marque a opção adequada. (138)",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2489,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "À luz do edital da Polícia Penal RS, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Marque a opção adequada. (139)",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2490,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "À luz do edital da Polícia Penal RS, Assinale a alternativa corretamente grafada: Marque a opção adequada. (140)",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  },
  {
    "id": 2491,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Em texto argumentativo, a tese é: Indique a assertiva correta. (141)",
    "alternativas": [
      "A ideia central defendida pelo autor.",
      "Apenas o título.",
      "Sempre o último parágrafo.",
      "Um exemplo secundário.",
      "A pontuação principal."
    ],
    "correta": 0,
    "explicacao": "Tese é o ponto de vista central defendido."
  },
  {
    "id": 2492,
    "materia": "Português",
    "assunto": "Interpretação de Texto",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Uma inferência textual consiste em: Indique a assertiva correta. (142)",
    "alternativas": [
      "Cópia literal de uma frase.",
      "Erro de interpretação obrigatório.",
      "Título do texto.",
      "Sinônimo de pontuação.",
      "Conclusão obtida a partir de pistas do texto."
    ],
    "correta": 4,
    "explicacao": "Inferir é concluir algo não dito diretamente, mas sustentado pelo texto."
  },
  {
    "id": 2493,
    "materia": "Português",
    "assunto": "Classes Gramaticais",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Na frase 'Os candidatos estudam diariamente', o termo 'diariamente' é: Indique a assertiva correta. (143)",
    "alternativas": [
      "Artigo.",
      "Pronome.",
      "Conjunção.",
      "Advérbio.",
      "Substantivo."
    ],
    "correta": 3,
    "explicacao": "Diariamente modifica o verbo e indica circunstância de tempo/frequência."
  },
  {
    "id": 2494,
    "materia": "Português",
    "assunto": "Concordância",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a frase correta quanto à concordância verbal: Indique a assertiva correta. (144)",
    "alternativas": [
      "Existe muitas vagas.",
      "Ocorrerá mudanças.",
      "Houve muitos problemas.",
      "Houveram muitos problemas.",
      "Fazem dois anos."
    ],
    "correta": 2,
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular."
  },
  {
    "id": 2495,
    "materia": "Português",
    "assunto": "Regência",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Assinale a alternativa correta quanto à regência: Indique a assertiva correta. (145)",
    "alternativas": [
      "Visou o cargo sem preposição, no sentido de almejar.",
      "Obedeceu ao regulamento.",
      "Obedeceu o regulamento.",
      "Assistiu o filme, no sentido de ver, sem preposição.",
      "Preferiu mais estudar do que sair."
    ],
    "correta": 1,
    "explicacao": "Obedecer exige preposição 'a'."
  },
  {
    "id": 2496,
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Há uso correto da crase em: Indique a assertiva correta. (146)",
    "alternativas": [
      "Entreguei o documento à diretora.",
      "Vou à pé.",
      "Refiro-me à João.",
      "Começou à chover.",
      "Dirigi-me à Vossa Senhoria."
    ],
    "correta": 0,
    "explicacao": "Há crase pela fusão da preposição 'a' com artigo feminino 'a'."
  },
  {
    "id": 2497,
    "materia": "Português",
    "assunto": "Pontuação",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, Assinale a frase corretamente pontuada: Indique a assertiva correta. (147)",
    "alternativas": [
      "João porém não compareceu.",
      "João porém, não compareceu.",
      "João, porém não compareceu.",
      "João porém não, compareceu.",
      "João, porém, não compareceu."
    ],
    "correta": 4,
    "explicacao": "Conjunção intercalada deve ficar entre vírgulas."
  },
  {
    "id": 2498,
    "materia": "Português",
    "assunto": "Semântica",
    "dificuldade": "Fácil",
    "pergunta": "Para fins de revisão, A palavra 'célebre' pode ser substituída, sem prejuízo básico de sentido, por: Indique a assertiva correta. (148)",
    "alternativas": [
      "Desconhecido.",
      "Lento.",
      "Inútil.",
      "Famoso.",
      "Oculto."
    ],
    "correta": 3,
    "explicacao": "Célebre significa famoso, notável."
  },
  {
    "id": 2499,
    "materia": "Português",
    "assunto": "Reescrita",
    "dificuldade": "Média",
    "pergunta": "Para fins de revisão, Mantém-se o sentido de 'Embora estivesse cansado, estudou' em: Indique a assertiva correta. (149)",
    "alternativas": [
      "Se estava cansado, estudou.",
      "Logo estava cansado, estudou.",
      "Apesar de estar cansado, estudou.",
      "Porque estava cansado, estudou.",
      "Quando estava cansado, estudou."
    ],
    "correta": 2,
    "explicacao": "Embora e apesar de expressam concessão."
  },
  {
    "id": 2500,
    "materia": "Português",
    "assunto": "Ortografia e Acentuação",
    "dificuldade": "Difícil",
    "pergunta": "Para fins de revisão, Assinale a alternativa corretamente grafada: Indique a assertiva correta. (150)",
    "alternativas": [
      "Exseção.",
      "Exceção.",
      "Excessão.",
      "Eceção.",
      "Esceção."
    ],
    "correta": 1,
    "explicacao": "A forma correta é 'exceção'."
  }
];

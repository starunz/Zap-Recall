/*
const deckReact = [
  {
    id: 1,
    question: 'O que é JSX?',
    answer: 'Uma extensão de linguagem do JavaScript',
  },
  {
    id: 2,
    question: 'O React é __ ',
    answer: 'uma biblioteca JavaScript para construção de interfaces',
  },
  {
    id: 3,
    question: 'Componentes devem iniciar com __ ',
    answer: 'letra maiúscula',
  },
  {
    id: 4,
    question: 'Podemos colocar __ dentro do JSX',
    answer: 'expressões',
  },
  {
    id: 5,
    question: 'O ReactDOM nos ajuda __',
    answer: 'interagindo com a DOM para colocar componentes React na mesma',
  },
  {
    id: 6,
    question: 'Usamos o npm para __ ',
    answer: 'gerenciar os pacotes necessários e suas dependências',
  },
  {
    id: 7,
    question: 'Usamos props para __ ',
    answer: 'passar diferentes informações para componentes',
  },
  {
    id: 8,
    question: 'Usamos estado (state) para __',
    answer:
      'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
  },
];
*/

const deckReact = [
  {
    id: 1,
    question: 'O que é yarn ?',
    answer: 'é um gerenciador de pacotes que faz a instalação, alteração e exclusão de recursos em aplicações web.',
  },
  {
    id: 2,
    question: 'Por que o yarn foi criado ? ',
    answer: 'surgiu para suprir algumas necessidades que o seu principal concorrente, o NPM apresenta, entre elas a lentidão e a impossibilidade de instalar pacotes de forma offline.',
  },
  {
    id: 3,
    question: 'Por que o yarn não é mais necessário ?',
    answer: 'A versão 5 do NPM já cria um arquivo de lock chamado package-lock.json automaticamente, é capaz de instalar dependências a partir do cache e a velocicade aumentou cerca de 5x comparada com a anterior.',
  },
  {
    id: 4,
    question: 'O que é o package.json ?',
    answer: '	Ele é um repositório central de configurações de ferramentas, por exemplo. Ele também é onde npm armazena os nomes e versões dos pacotes instalados.O arquivo package.json também pode hospedar configurações de comandos específicos, por exemplo Babel, ESLint, e muito mais.',
  },
  {
    id: 5,
    question: 'qual sua estrutura do package.json ?',
    answer: 'Não existem exigências fixas do que deve estar em um arquivo package.json para uma aplicação. O único requisito é que ele respeite o formato JSON, de outra maneira ele não poderá ser lido pelos programas que tentarem acessar suas propriedades programaticamente.',
  },
  {
    id: 6,
    question: 'Como o package.json é alterado ao instalar uma biblioteca?',
    answer: 'Cada vez que se instala ou desistala uma biblioteca, irá constar no package.json, seu nome e sua respectiva versão',
  },
  {
    id: 7,
    question: 'O que é o NPM Semantic Version ?',
    answer: 'Um conjunto simples de regras e requisitos que ditam como os números das versões são atribuídos e incrementados.',
  },
  {
    id: 8,
    question: 'Qual a diferença de Patch Releases, Minor Releases e Major Releases?',
    answer: 'formato de versão X.Y.Z (Maior.Menor.Correção). Correção de falhas (bug fixes) que não afetam a API, incrementa a versão de Correção, adições/alterações compatíveis com as versões anteriores da API incrementa a versão Menor, e alterações incompatíveis com as versões anteriores da API incrementa a versão Maior.',
  },
  {
    id: 9,
    question: 'Como especificar no package.json a política de update das bibliotecas (1.2.3 vs ~1.2.3 vs ^1.2.3 vs *)?',
    answer: 'O til garante que o pacote seja sempre carregado  respeitando o número do meio da versão. Ex: ˜1.2.3 pega o pacote mais recente da versão 1.2.x, mas não vai atualizar para 1.3. Geralmente garante que correções de bugs sejam atualizados no seu pacote.O circunflexo garante que o pacote seja sempre carregado respeitando o primeiro número da versão. Ex: ˆ1.2.3 pega o pacote mais recente da versão 1.x, mas não vai atualizar para 2.0. Garante que bugs e novas funcionalidades do seu pacote sejam atualizados, mas não novas versões “major” dele. Agora se você não tiver símbolo algum, aí o pacote deve ser sempre carregado usando a versão especificada. O * quer dizer qualquer versão do pacote',
  },
  {
    id: 10,
    question: 'Que problema o arquivo package-lock.json resolve e o que ele contém?',
    answer: 'No arquivo package-lock.json a versão exata da dependência é armazenada, garantindo que todas as instalações são iguais. Isso resolve o problema de dependências que não possuíam a mesma versão em diversas máquinas.',
  },
  {
    id: 11,
    question: ' O que é o comando npx e quando usá-lo no lugar de npm install?',
    answer: 'NPX é um package runner do NPM. Ele executa as bibliotecas. Às vezes, você pode querer apenas experimentar uma lista de pacotes, pois pode não saber exatamente o que precisa.Nesses casos, em vez de instalar localmente ou globalmente, você pode ir direto para a execução desses pacotes com NPX.',
  },
  {
    id: 12,
    question: 'O que é uma instalação global de biblioteca no npm? (npm install ... -g)',
    answer: 'Instalar globalmente, ou seja, a biblioteca é instalada na pasta do usuário local da máquina. Ao fazer isso terá acesso ao recurso em toda a máquina, por exemplo, para utilizar o recurso em um projeto, basta adicioná-lo com o comando require no código JavaScript.',
  },
  {
    id: 13,
    question: 'Pra que serve o comando npm audit?',
    answer: 'Esse comando nos permite fazer verificações de segurança diretamente do console utilizando npm.',
  },
];

export { deckReact };
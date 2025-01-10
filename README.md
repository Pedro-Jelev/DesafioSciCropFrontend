# Desafio SciCrop Frontend - Mini Sistema de Blog

## Resumo do Projeto

Este projeto consiste no desenvolvimento de um mini sistema de blog que deve cumprir com os requisitos pormenorizados em [Funcionalidades](#funcionalidades-implementadas). O objetivo é demonstrar habilidades no desenvolvimento de sistemas web utilizando uma arquitetura completa que inclui backend, banco de dados e frontend.

### Estrutura do Projeto

- **Backend**: Desenvolvido com Express.js, um framework para Node.js que proporciona flexibilidade e simplicidade na criação de APIs. Acesse o repositório do Backend [clicando aqui](https://github.com/Pedro-Jelev/DesafioSciCropBackend).
- **Banco de Dados**: SQLite, um banco de dados leve e eficiente, ideal para aplicações de pequeno porte.
- **Frontend**: Construído com Vue.js, por meio do Vite para inicializar o projeto, proporcionando uma interface dinâmica e responsiva.

## Funcionalidades Implementadas

### 1. **Listagem de Posts**

- Página que lista todos os posts disponíveis no blog.
- Cada post é exibido com seu título, funcionando como link para a exibição do conteúdo completo.
- Posts ordenados por data de publicação (mais recentes primeiro).
- **Status**: Atendido em sua totalidade.

### 2. **Criação de Post**

- Formulário para criação de novos posts com campos para título e corpo do texto.
- Após submissão, o post é salvo no banco de dados e o usuário é redirecionado para a listagem.
- **Status**: Atendido em sua totalidade.

### 3. **Exibição de Post Selecionado**

- Página dedicada para exibir o título e o conteúdo completo do post selecionado.
- Navegação via link da listagem de posts.
- **Status**: Atendido em sua totalidade.

### 4. **Extras (Opcional)**

- Adiconar as funcionalidade de editar e excluir posts;
- **Status**: Implementado parcialmente: funcionalidade excluir permite soft delete.
- Estilização com uso de frameworks de CSS como Bootstrap ou Tailwind.
- **Status**: Não implementado.
- Uso de Vue.js ou outro framework frontend visando proporcionar experiência dinâmica;
- **Status**: Implementado em sua totalidade: Uso de Vue.js em 100% do frontend para aprimorar a interatividade e responsividade da aplicação.

## Tecnologias Utilizadas

- **[Vite](https://vite.dev/)**
- **[Axios](https://axios-http.com/)**
- **[Vue.js](https://vuejs.org/)**
- **[Vue Router](https://router.vuejs.org/)**
- **[Ionicons](https://ionic.io/ionicons)**
- **[TypeScript](https://www.typescriptlang.org/)**

## Instruções para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/Pedro-Jelev/DesafioSciCropFrontend
   ```

2. Dentro da pasta desafiofront, instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor (porta 5173):

   ```bash
   npm run dev
   ```

4. Observações Importantes:
   Visando mitigar possíveis complexidades do projeto não utilizei variáveis de ambiente, portanto, o servidor sempre será executado na porta 5173. Você poderá modificar a porta de execução alterando as configurações de servidor do vite, oriento consultar a [documentação](https://vite.dev/config/server-options.html) para maiores detalhes.

## Resumo de Aprendizado

Este projeto foi uma grande oportunidade para expandir meus conhecimentos e enfrentar novos desafios no desenvolvimento web. Durante a sua execução, tive meu primeiro contato com a tecnologia **Vue.js**, o que me levou a estudar sobre a seus fundamentos e estruturas. Essa experiência exigiu uma imersão profunda na documentação oficial e na prática constante para entender conceitos como **Vue Router**.

Minhas dificuldades iniciais se apresentaram antes mesmo de começar a escrever o código, uma vez que era necessário escolher entre as abordagens da **Composition API** e **Options API** para manter um padrão de projeto. Após compreender e comparar as vantagens e limitações de cada abordagem, optei por seguir com a Composition API devido a sua maior organização das linhas de código e, portanto, facilitando muito na identificação de erros.

Outro ponto que me exigiu bastante esforço foi o uso de algoritmos com o **v-bind**, onde precisei me distânciar do código mais uma vez para estudar seu papel na vinculação dinâmica de dados aos atributos dos elementos DOM. Esforço adicional foi necessário para "desvendar" o funcionamento da passagem de dados oriundos de um array de objetos para os elementos filhos, que após solucionado o problema pareceu bobo, todavia, havendo um distanciamento significativo das características do framework React (o qual estou habituado).

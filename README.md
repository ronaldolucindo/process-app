# Process App

Aplicação desenvolvida em React para a gestão de processos, onde é possível pesquisar, adicionar, remover e editar processos.

## Tecnologias usadas

* React (incluindo novos recursos, como hooks, React lazy, entre outros)

* PropTypes

* Material UI

* Axios

## Como rodar

Para rodar basta entrar no diretório do projeto e executar os seguintes comandos:

### `npm install`

Instala as dependências necessárias

### `npm start`

Executa a aplicação em modo de desenvolvimento.<br />
Abrirá a url: [http://localhost:3000](http://localhost:3000) para que a aplicação seja visualizada no browser.


### `npm run build`

Realiza o build  da aplicação para produção no diretório `build` .<br />

A aplicação estará pronta para ser feito o deploy


## Integração com backend

Como o foco da aplicação era desenvolver apenas o frontend, foi usando um serviço que simula o backend através de dados mockados (mock api). <br />

Dessa forma para alterar a url base da api ou para alterar o caminho dos endpoint basta editar o arquivo `process-app.js` disponível em `src/services/process-app.js`
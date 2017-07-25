# Configuração #

1. Instalar nodejs: https://nodejs.org/en/
2. Entrar no diretório html
5. Executar o comando: npm install
6. Executar o comando: npm start

A aplicação montará um servidor nodejs no endereço: http://localhost:3000, e abrirá uma janela no navegador, com este endereço.

Após utilizar a primeira vez, para rodar novamente o build, utilize o comando: gulp


# Otimizar para Deploy #
1. Utilizar o comando: gulp build

# Possíveis problemas #

O Windows não adicionar o npm a variável PATH na hora da instalação do NodeJs.
   - Instalar novamente, reiniciar a maquina, verificar a variável de ambiente, caso não contenha o caminho do npm, adicionar o mesmo a variável path do windows.


# Principais funções #

- Integração handlesbar, podemos criar páginas, partials e componentes reutilizáveis em todo projeto, cada um destes pode ter um json de dados atribuído para si, sendo possível reaproveitamento da estrutura HTML, trocando apenas os dados.
- Stylus css preprocessor, que também interpreta funções básicas do sass se necessário.
- Sprites para assets, como ícones por exemplo.
- Jshint, stylus lint.
- Imagemin para imagens.
- BrowserSync para rodar o projeto, monta um server e faz sync dos navegadores em diferentes dispositivos, para melhor debug durante dev com responsividade.
- Minifica css e js para deploy.
- Integração com Bower





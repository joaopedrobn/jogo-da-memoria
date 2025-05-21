# 🧠 Jogo da Memória - Rick and Morty

![logo](https://github.com/user-attachments/assets/e619a985-b5a2-4ad1-a71b-d094514de111)

Acesse o projeto (e também jogue) [aqui](https://jogo-da-memoria-steel-one.vercel.app/).

## Sumário

- [📌 Descrição](#-descrição)
- [🖼️ Screenshots do Jogo](#️-screenshots-do-jogo)
- [🛠️ Funcionalidades](#️-funcionalidades)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🕹️ Como Jogar](#️-como-jogar)
- [🔊 Observações](#-observações)
- [🙌 Créditos](#-créditos)
- [🔧 Detalhes Técnicos](#-detalhes-técnicos)
- [📊 Status do Projeto](#-status-do-projeto)
- [🤝 Contribuindo](#-contribuindo)
- [📜 Licença](#-licença)

## 📌 Descrição

Bem-vindo ao **Jogo da Memória - Rick and Morty**, um jogo divertido e nostálgico baseado no universo da famosa animação! 🚀🛸  
Teste sua memória combinando pares de personagens ao som do tema da série, que embala cada partida. Quanto mais rápido, melhor!

## 🖼️ Screenshots do Jogo

Aqui você pode ter uma ideia de como é o jogo:

![Gameplay Screenshot](caminho/para/seu/screenshot.png)
*Legenda: Tela principal do jogo em ação.*

### Animação das Cartas

Veja a animação fluida ao virar as cartas:

![Card Flip Animation GIF](caminho/para/seu/animacao.gif)
*Legenda: Demonstração da animação de virar as cartas.*

## 🛠️ Funcionalidades

- 🧩 **Cartas embaralhadas** com personagens da série
- 👁️‍🗨️ **Animação ao virar as cartas**
- ✅ **Pares corretos permanecem revelados**
- ⏱️ **Contador de tempo em segundos**
- 🎉 **Mensagem personalizada ao finalizar o jogo**
- 🔁 **Botão "Jogar Novamente" ao fim**
- 🔇🎵 **Botão para mutar/desmutar a música de fundo**
- 💾 **Preferência de som (mudo/ativo) salva entre as sessões**

## 💻 Tecnologias Utilizadas

- **HTML** → Estrutura da aplicação e elementos do jogo
- **CSS** → Estilização visual, responsividade e animações
- **JavaScript** → Lógica do jogo, timer, controle de som e interações com o DOM

## 🔧 Detalhes Técnicos

- **Salvamento do Estado de Som:** A preferência de som (mudo/ativo) para a música de fundo é salva no `localStorage` do navegador. Quando o jogador clica no botão de som, o estado atual (música ativa ou silenciada) é armazenado. Ao recarregar a página ou reiniciar o jogo, o script verifica o `localStorage` e aplica a preferência de som salva anteriormente, garantindo que a escolha do usuário persista entre as sessões.
- **Lógica do Jogo:**
    - As cartas são embaralhadas utilizando o algoritmo Fisher-Yates, garantindo uma distribuição aleatória a cada nova partida.
    - A verificação dos pares é realizada comparando o atributo `data-character` das cartas viradas.
    - O contador de tempo, implementado com `setInterval`, atualiza a interface do jogo a cada segundo.
- **Manipulação do DOM:**
    - A criação dinâmica das cartas e a atualização de seus estados (viradas, combinadas) são realizadas através da manipulação direta dos elementos HTML.
    - Classes CSS são dinamicamente adicionadas e removidas para gerenciar a aparência e as animações das cartas.

## 🕹️ Como Jogar

1. Primeiro, acesse a tela de login e informe seu nome.
2. Clique em **Jogar** para iniciar o desafio.
3. Clique nas cartas para revelá-las e tente encontrar os pares correspondentes.
4. Ao acertar um par, as cartas correspondentes permanecem visíveis e destacadas.
5. Ao encontrar todos os pares, o jogo exibe uma mensagem de parabéns.
6. Clique em **"Jogar Novamente"** para reiniciar.
7. Utilize o botão 🎵/🔇 para controlar a música de fundo da série Rick and Morty.

## 🔊 Observações

- A música de fundo está configurada para **volume em 30%** e **loop infinito**.
- O botão de som **salva o estado** mesmo após reiniciar o jogo.
- Para o correto funcionamento do áudio, o arquivo `rickandmorty.mp3` deve ser colocado na pasta `/sounds/`.

## 🙌 Créditos

Este projeto foi desenvolvido por inspiração de jogos de memória clássicos, com tema da série **Rick and Morty** para fins educacionais e de entretenimento.  
Todos os personagens são propriedades de seus respectivos autores.
Este projeto teve como base os ensinamentos do canal Manual do Dev no YouTube, com implementações e modificações adicionais.

## 📊 Status do Projeto

**Status:** Completo ✔️

O jogo encontra-se totalmente funcional e atende a todos os requisitos propostos para esta versão.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estes passos:

1. Faça um Fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/sua-feature`).
3. Faça suas alterações.
4. Faça commit das suas alterações (`git commit -m 'Adiciona alguma feature'`).
5. Faça push para a branch (`git push origin feature/sua-feature`).
6. Abra um Pull Request.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

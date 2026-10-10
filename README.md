# Around The U.S. (Projeto 8)

## 📌 Sobre o Projeto

Este projeto é a oitava etapa do desenvolvimento da aplicação web **Around The U.S.**. Trata-se de uma página web responsiva e interativa voltada para o compartilhamento de fotos de viagens e locais favoritos.

Nesta fase final de front-end, a aplicação ganhou vida interativa completa com JavaScript, permitindo a manipulação dinâmica do DOM: renderização de cartões a partir de um template HTML, adição de novos locais via formulário modal, interações de curtir, exclusão de cartões e visualização de imagens ampliadas.

---

## 🚀 Funcionalidades

* **Renderização Dinâmica de Cartões:** Os cartões iniciais são gerados automaticamente a partir de um array de dados e de um elemento `<template>` do HTML.


* **Tratamento de Dados Incompletos:** Uso de parâmetros padrão na criação de cartões para evitar erros caso falte nome ou imagem (utilizando imagem padrão *placeholder* e texto "Lugar sem nome").


* **Modais Interativos:** Abertura e fechamento dinâmico de pop-ups ("Editar Perfil", "Novo Local" e "Ampliar Imagem") utilizando funções reutilizáveis (`openModal` e `closeModal`).


* **Adição de Novos Locais:** Formulário para inserção de novos cartões personalizados que aparecem instantaneamente no início do container.


* **Curtir Cartões:** Botões de curtir em formato de coração que mudam de cor ao serem clicados.


* **Exclusão de Cartões:** Botões de lixeira que removem o cartão selecionado diretamente do DOM.


* **Zoom de Imagens:** Clique na imagem de qualquer cartão para abri-la em tamanho ampliado em um pop-up dedicado.



---

## 🛠️ Tecnologias e Conceitos Utilizados

* **HTML5** e **CSS3** (Flexbox, Grid, Responsividade e animações de modais).
* **JavaScript (ES6+)**:
* Manipulação avançada do DOM.
* Funções utilitárias e manipulação de formulários (`submit`).
* Tratamento de eventos (`addEventListener`).
* Uso de arrays, loops (`forEach`) e templates HTML.


* **Metodologia BEM (Block, Element, Modifier)** para a organização do CSS na pasta `blocks`.
* **Git e GitHub** para versionamento de código e deploy via **GitHub Pages**.

---

## 📁 Estrutura de Pastas

```text
├── blocks/          # Estilos CSS organizados por blocos (Metodologia BEM)
├── images/          # Imagens, ícones e placeholders do projeto
├── scripts/         # Arquivos JavaScript (index.js)[cite: 2]
├── index.html       # Arquivo principal da estrutura HTML
└── README.md        # Documentação do projeto

```

---

## 🌐 Link de Acesso

Você pode acessar a aplicação em funcionamento através do link do GitHub Pages:
🔗 [Visualizar o Projeto Online (GitHub Pages)](https://naomimoon6.github.io/web_project_around_pt/)

---

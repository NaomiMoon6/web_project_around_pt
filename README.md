# Around The U.S. (Projeto 8, 9 & 10)

## 📌 Sobre o Projeto

O **Around The U.S.** é uma aplicação web interativa e responsiva voltada para o compartilhamento de fotos de viagens e locais favoritos. 

Nas etapas 8 e 9 do desenvolvimento, a aplicação ganhou vida interativa completa com **JavaScript (ES6+)**. Além da manipulação dinâmica do DOM (renderização, adição, exclusão de cartões e zoom de imagens), o projeto agora conta com **validação nativa de formulários em tempo real** e **melhorias de acessibilidade e experiência do usuário (UX)** no fechamento de pop-ups.

---

## 🚀 Funcionalidades

### 📸 Cartões e Manipulação do DOM (Projeto 8)
- **Renderização Dinâmica:** Os cartões são gerados dinamicamente a partir de um array de dados inicial e de um elemento `<template>` HTML.
- **Adição de Novos Locais:** Formulário interativo para inserção de novos cartões personalizados que aparecem no início da página.
- **Interatividade:** Botões de curtir em formato de coração com alternância de estado e botão de lixeira para remoção direta do DOM.
- **Zoom de Imagens:** Visualização ampliada de qualquer imagem em um pop-up dedicado ao clicar sobre ela.

### 🛡️ Validação de Formulários & UX (Projeto 9)
- **Validação de Formulário em Tempo Real:** 
  - **Editar Perfil:** OBRIGATÓRIO — Nome (2 a 40 caracteres) e Sobre Mim (2 a 200 caracteres).
  - **Novo Local:** OBRIGATÓRIO — Título (2 a 30 caracteres) e Link da Imagem (formato URL válido via `type="url"`).
- **Mensagens de Erro Personalizadas:** Mensagens do navegador estilizadas com classes dedicadas (`.popup__error_visible`, `.popup__input_type_error`) abaixo de cada campo.
- **Gerenciamento do Botão de Envio:** O botão "Salvar" ou "Criar" permanece desativado (`.popup__button_disabled`) enquanto os campos contiverem dados inválidos.
- **Acessibilidade & UX no Fechamento de Modais:**
  - Fechamento ao clicar na sobreposição (*overlay* / área externa ao modal).
  - Fechamento ao pressionar a tecla **`Esc`**.

---

### 🗂️ Refatoração e Modularização (Projeto 10)

- #### Programação Orientada a Objeto:

  - Classe ```Card```: Responsável por criar os elementos dos cartões, gerenciar sua estrutura HTML e manipular eventos (curtir, deletar e expandir imagem).
  - Classe ```FormValidator:``` Responsável por gerenciar a validação dinâmica dos campos dos formulários, controlar o estado do botão Submit e exibir mensagens de erro.

- #### Arquitetura de Módulos (ES6 Modules):
  - ```Card.js```: Contém a exportação da classe Card.
  - ```FormValidator.js```: Contém a exportação da classe FormValidator.
  - ```utils.js```: Armazena funções utilitárias para abertura, fechamento e manipuladores das janelas modais.
  - ```index.js```: Ponto de entrada da aplicação, onde os módulos são importados e as instâncias das classes são inicializadas.

## 🛠️ Tecnologias e Conceitos Utilizados

- **HTML5** (Semântica, atributos de validação como `required`, `minlength`, `maxlength`, `type="url"`, `novalidate` e `<template>`).
- **CSS3** (Flexbox, Grid, Responsividade, posicionamento relativo/absoluto para mensagens e estados `:disabled`).
- **JavaScript (ES6+)**:
  - Manipulação avançada do DOM e escutadores de eventos (`addEventListener`, eventos `input`, `submit`, `click` e `keydown`).
  - Lógica de validação iterativa e gerenciamento de estado do botão de envio.
  - Funções de propósito único (Clean Code) para abertura, fechamento e controle de modais.
- **Metodologia BEM (Block, Element, Modifier)** para a organização do CSS na pasta `blocks/`.
- **Git & GitHub** para controle de versão e deploy continuo.

---

## 📁 Estrutura de Pastas

```text
├── blocks/          # Estilos CSS organizados por blocos (Metodologia BEM)
├── images/          # Imagens, ícones e placeholders do projeto
├── scripts/         # Arquivos JavaScript (index.js)
├── index.html       # Arquivo principal da estrutura HTML
└── README.md        # Documentação do projeto

```

---

## 🌐 Link de Acesso

Você pode acessar a aplicação em funcionamento através do link do GitHub Pages:
🔗 [Visualizar o Projeto Online (GitHub Pages)](https://naomimoon6.github.io/web_project_around_pt/)

---

# Tela de Login & Cadastro Interativo | React + Vite

Aplicação web desenvolvida em React e Vite, focada em experiência do usuário (UX/UI), componentes modulares, estilização em estilo Glassmorphism e personalização de tema de cores em tempo real via CSS dinâmico.

---

## Funcionalidades

- **Personalização de Tema em Tempo Real:** Slider interativo que altera a matriz de cor (Hue) de toda a interface dinamicamente via variáveis CSS.
- **Design Glassmorphism:** Efeito de transparência e desfoque (backdrop-filter) com gradientes no fundo.
- **Navegação SPA (Single Page Application):** Alternância entre a tela de formulário e a tela principal gerenciada por estados (useState), sem recarregamento de página (event.preventDefault()).
- **Componentização Modular:** Estrutura limpa e desacoplada em componentes reutilizáveis (Logo, Campos, Botoes, Formulario, PaginaPrincipal).
- **Microinterações e Feedback Visual:** Animações de clique (:active), foco (:focus) e deslocamento ao passar o mouse (:hover).

---

## Tecnologias Utilizadas

- **React** — Biblioteca para construção de interfaces.
- **Vite** — Build tool para desenvolvimento front-end.
- **JavaScript (ES6+)** — Lógica e manipulação de estado.
- **CSS3** — Custom Properties (Variáveis CSS), Flexbox, Animações e Glassmorphism.

---

## Estrutura do Projeto

```text
src/
├── formulario/
│   ├── botoes/
│   │   └── Botoes.jsx
│   ├── campos/
│   │   └── Campos.jsx
│   ├── logo/
│   │   └── Logo.jsx
│   └── Formulario.jsx
├── static/                  # Imagens e ativos estáticos
├── App.css                  # Estilos globais e variáveis de tema HSL
├── App.jsx                  # Gerenciador de navegação e controlador de telas
├── index.css                # Reset CSS global
├── main.jsx                 # Ponto de entrada da aplicação
└── TelaPrincipal.jsx        # Tela pós-cadastro
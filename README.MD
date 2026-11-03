# 🌸 Projeto Por Elas - Sistema de Atendimento

O **Por Elas Atendimento** é um sistema de painel de gestão e recepção criado para facilitar o fluxo de atendimento de serviços de beleza e cuidados para mulheres. 

Nosso maior objetivo é proporcionar uma interface **simples, agradável, acolhedora e extremamente fácil de usar**, tanto para as profissionais que gerenciam a fila quanto para as mulheres que aguardam seu momento de autocuidado.

---

## 🎯 Objetivo do Projeto
Acabar com a confusão de filas de espera e agendas de papel. O sistema exibe de forma clara quem está em atendimento no momento e quais são as próximas mulheres da fila, garantindo transparência e organização através de uma identidade visual elegante baseada em tons terrosos e pastéis.

## 🏗️ Arquitetura e Tecnologias
O projeto foi construído utilizando uma arquitetura moderna de **Micro-frontends (MFE)** estruturada em um **Monorepo** (via npm workspaces).

**Stack Principal:**
- **[Next.js 14](https://nextjs.org/) & [React 18](https://react.dev/):** Framework base da aplicação.
- **[Material UI (MUI)](https://mui.com/):** Biblioteca de componentes acessíveis e tipografia.
- **[Styled Components](https://styled-components.com/):** Estilização de componentes avançada.
- **[React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/):** Gerenciamento e validação de formulários seguros.
- **[Webpack Module Federation]:** Para o compartilhamento de componentes entre as aplicações.
- **[Storybook](https://storybook.js.org/):** Documentação interativa dos componentes de UI.
- **[Jest](https://jestjs.io/):** Framework para testes unitários.

---

## 📦 Estrutura do Monorepo

O projeto está dividido em 3 pacotes principais:

- 📂 `apps/admin`: Sistema da recepção/administração. Possui login seguro e formulário para cadastro de novas clientes e seleção de serviços.
- 📂 `apps/client`: Painel de visualização (Lista de Espera). Fica em exibição para as clientes acompanharem a fila de atendimento em tempo real.
- 📂 `packages/shared-ui`: Biblioteca de componentes visuais, tema global (cores, fontes e ícones) e tipografia compartilhada entre os apps.

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado na sua máquina.

### 1. Instalação
No terminal, certifique-se de estar na raiz do projeto e instale as dependências:
```bash
npm install

2. Rodando a aplicação
O projeto está configurado com o concurrently para subir o Admin e o Client ao mesmo tempo com um único comando na raiz:
npm run dev

📚 Documentação de Componentes (Storybook)
A biblioteca shared-ui possui o Storybook configurado para você visualizar, testar e documentar os componentes isoladamente (como o HighlightCard), sem precisar rodar a aplicação inteira.

Para iniciar o ambiente do Storybook:
cd packages/shared-ui
npm run storybook

🧪 Testes (Jest)
O ecossistema está preparado para testes unitários garantindo a qualidade e o funcionamento das regras de negócio e da renderização dos componentes.

Para executar os testes em todos os pacotes, rode o comando na raiz do projeto:
npm test

🎨 Identidade Visual
O design system foi pensado para o público feminino, utilizando a biblioteca de fontes do Google Fonts (Playfair Display para títulos elegantes e Inter para leitura clara), aliados a uma paleta com foco em marrom terroso e rosa/pêssego suave, transmitindo calma, elegância e segurança.

👨‍💻 Autor
Muryllo Soares

Desenvolvido com carinho para facilitar o cuidado com quem mais importa. ✨

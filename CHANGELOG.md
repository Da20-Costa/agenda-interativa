# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2026-04-10

### Adicionado

- **CRUD Completo:** Capacidade de criar, ler, atualizar e deletar compromissos com integração Full-Stack (React + Next.js API).
- **Status de Conclusão:** Checkbox interativo para marcar tarefas como concluídas, com persistência real de estado no banco de dados.
- **Interface Sanfona (Accordion):** Cards expansíveis para exibição de descrições detalhadas sem poluir a interface principal.
- **Atalhos de Teclado (UX):** Suporte nativo à tecla `Enter` para salvar formulários rapidamente e `Shift+Enter` para pular linhas.
- **Banco de Dados Relacional:** Estrutura inicial e script de setup em SQLite (`agenda.db`).
- **Testes Automatizados (QA):** Implementação de testes de integração com `Jest` cobrindo o banco de dados e todas as rotas da API (GET, POST, PUT, DELETE).
- **Integração Contínua (CI):** Pipelines configuradas no GitHub Actions (`tests.yml` e `linting.yml`) para garantia de qualidade a cada commit.
- **Qualidade de Código:** Padronização rigorosa implementada com `ESLint` e `Prettier`.
- **Licenciamento:** Adoção da licença Open Source `MIT`.
- **Guia de Contribuição:** Adição do arquivo `CONTRIBUTING.md` para orientar novos desenvolvedores.

### Corrigido

- Alinhamento do Flexbox para textos longos nos cards (prevenção de esmagamento de botões e quebra de layout).
- Tratamento de quebra de palavras (word-wrap) para evitar fatiamento incorreto de strings longas.

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

## [1.1.0] - 2026-05-15

### Adicionado

- Integração com APIs Externas: Implementação de frases motivacionais dinâmicas utilizando a Advice Slip API com tradução automática via MyMemory API.

- Hook Customizado (useFraseMotivacional): Refatoração da lógica de busca de dados para um Custom Hook, isolando a responsabilidade de rede do componente visual.

- Persistência em Nuvem (Neon): Migração do banco de dados local (SQLite) para PostgreSQL em nuvem via Neon.tech, permitindo persistência real em ambientes serverless.

Suporte a Variáveis de Ambiente: Implementação de .env para gestão segura de credenciais de banco de dados e integração com GitHub Secrets.

### Alterado

- Arquitetura Assíncrona: Refatoração completa dos Models e rotas da API para suporte a async/await, garantindo a comunicação correta com o banco de dados remoto.

- Suíte de Testes (QA): Atualização de todos os testes de integração para o ambiente @jest-environment node, com suporte a operações assíncronas e timeouts ajustados para rede.

- Tipagem de Dados: Transição de estados booleanos de inteiros (0/1) para tipos nativos do PostgreSQL (true/false).

### Corrigido

- Persistência no Deploy: Resolvido o erro de leitura/escrita (Read-only file system) que ocorria no deploy da Vercel ao tentar utilizar bancos de dados baseados em arquivos.

- Execução de Testes (Jest): Corrigido o erro setImmediate is not defined através da reconfiguração do ambiente de execução do Jest.

- Script de Setup: Atualização do setup.mjs para garantir a criação automática de tabelas no esquema público do PostgreSQL.

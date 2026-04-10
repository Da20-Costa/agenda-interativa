# 📅 Agenda Interativa

![Tests Status](https://github.com/Da20-Costa/agenda-interativa/actions/workflows/tests.yml/badge.svg)
![Linting Status](https://github.com/Da20-Costa/agenda-interativa/actions/workflows/linting.yml/badge.svg)
![License](https://img.shields.io/github/license/Da20-Costa/agenda-interativa)

<br>
<img width="1599" height="899" alt="Captura de tela 2026-04-10 151247" src="https://github.com/user-attachments/assets/76ee3370-9191-4f47-8523-bb7334558880" />

## 📖 Sobre o Projeto

* **Nome do Projeto:** Agenda Interativa
* **Versão Atual:** v1.0.0
* **Autor:** Davi de Sousa Costa
* **Link do Repositório Público:** [https://github.com/Da20-Costa/agenda-interativa](https://github.com/Da20-Costa/agenda-interativa)

### 🚨 O Problema Real
A desorganização de tarefas semanais e o esquecimento de compromissos importantes levam à perda de produtividade, acumulação de prazos e aumento do stress na rotina agitada de estudos e trabalho. Eu mesmo sempre tive problema para organizar meu dia e, sinceramente, escrever de forma organizada as tarefas sempre ajudou.

### 💡 Proposta da Solução
Uma aplicação web leve, de resposta imediata e interface limpa que permite registrar, organizar e dar baixa em compromissos diários com persistência local de dados. A ferramenta foi projetada para focar na facilidade de uso, evitando a complexidade desnecessária de softwares empresariais pesados.

### 🎯 Público-Alvo
Estudantes universitários, profissionais em início de carreira, programadores e qualquer pessoa que procure uma ferramenta objetiva, rápida e focada em produtividade para gerir a própria rotina.

---

## ✨ Funcionalidades Principais

* **Gestão Completa (CRUD):** Capacidade de criar, ler, atualizar e remover compromissos da agenda.
* **Status de Conclusão:** Checkbox interativa para marcar tarefas como concluídas, alterando o feedback visual e persistindo a informação na base de dados.
* **Interface Expansível (Sanfona):** Cards que revelam descrições detalhadas apenas quando clicados, mantendo o ecrã organizado.
  
---

## 🛠️ Tecnologias Utilizadas

* **Front-end:** React.js, Next.js, CSS Modules
* **Back-end:** Next.js API Routes (Node.js)
* **Base de Dados:** SQLite
* **Qualidade e DevOps:** Jest (Testes de Integração), ESLint (Padronização), Prettier (Formatação), EditorConfig(Formatação) e GitHub Actions (CI/CD)

---

## 💻 Instruções de Instalação e Uso

Siga os passos abaixo para testar o projeto localmente na sua máquina.

### Pré-requisitos
* Node.js (versão 18 ou superior)
* Git instalado

### 1. Instalação
Clone o repositório e aceda à pasta:
```bash
git clone https://github.com/Da20-Costa/agenda-interativa.git
cd agenda-interativa
```

Instale as dependências do projeto:
```bash
npm install
```

Inicialize e popule o banco de dados local:
```bash
npm run setup
```

### 2. Instruções de Execução

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra o navegador e acesse: http://localhost:3000

## 🧪 Qualidade de Código (Testes e Lint)
Este projeto possui rotinas rigorosas de qualidade de software.

### Instruções para rodar os Testes Automatizados:
Verifica se todas as rotas da API e integrações com o banco de dados estão funcionando corretamente.

```bash
npm test
```

### Instruções para rodar o Lint:
Verifica se o código está seguindo as regras de formatação e padronização estabelecidas.

```bash
npm run lint
```

## 🤝 Contribuição e Licença
Este projeto possui documentação de apoio para desenvolvedores:

[Como Contribuir](CONTRIBUTING.md)

[Histórico de Mudanças](CHANGELOG.md)

Este projeto é de código aberto e está sob a licença [MIT](LICENSE).

# Fase 3 - Projetar a avaliação


## Plano de avaliação 

Avaliar a manutenibilidade do sistema AGROMART com base em métricas de modularidade, legibilidade e testabilidade, visando identificar pontos de melhoria e garantir que o código seja sustentável, compreensível e testável.

## 1. Método de Avaliação
Será utilizada uma abordagem quantitativa baseada em métricas de código, com ferramentas automatizadas e revisão manual quando necessário.

| **Dimensão**         | **Questão**                         | **Métrica**                             | **Ferramenta**     | **Como utilizar**                                                             |
| -------------------- | ----------------------------------- | --------------------------------------- | ------------------ | ----------------------------------------------------------------------------- |
| **Manutenibilidade** | Q1: Quão modular está o código?     | M1. Linhas por arquivo                  | ESLint             | Habilitar a regra `max-lines` para alertar arquivos com excesso de linhas.    |
|                      |                                     | M2. Linhas por função                   | ESLint             | Usar `max-lines-per-function` para limitar funções extensas.                  |
|                      |                                     | M3. Complexidade Ciclomática por função | ESLint, SonarQube  | Configurar `complexity` no ESLint e analisar alertas no SonarQube.            |
|                      | Q2: Quão fácil é entender o código? | M4. % de módulos documentados           | Verificação manual | Conferir documentação técnica (Swagger, README, Notion) por módulo/endpoint.  |
|                      | Q3: Como está a testabilidade?      | M5. Cobertura de testes                 | Jest               | Executar `jest --coverage` e verificar o percentual global e por módulo.      |
|                      |                                     | M6. Tempo médio de execução dos testes  | Jest               | Executar `jest --json` ou `--runInBand` e calcular o tempo médio por arquivo. |

<!-- | **Segurança**        | Q4: Existem vulnerabilidades conhecidas?        | M7. Vulnerabilidades por dependência       | npm audit, SonarQube          | Rodar `npm audit` e revisar alertas críticos e altos no Sonar.                |
|                      | Q5: Existem falhas de autenticação/autorização? | M8. Cobertura de testes em rotas sensíveis | Jest (testes de integração)   | Validar se há testes cobrindo permissões de acesso e autenticação.            |
| **Confiabilidade**   | Q6: O sistema lida bem com erros?               | M9. Cobertura de tratamento de exceções    | Verificação manual, SonarQube | Analisar se há `try/catch`, tratamento de falhas e logging consistente.       | -->


### 2. Recursos Necessários
| Recurso   | Descrição                                                             |
| --------- | --------------------------------------------------------------------- |
| ESLint    | Com plugins para regras de estilo e complexidade                      |
| SonarQube | Para análise estática de código, incluindo complexidade               |
| Jest      | Framework de testes do JavaScript com relatórios de cobertura e tempo |

### 3. Cronograma de Ações
| Etapa                                       | Responsável      | Prazo Estimado |
| ------------------------------------------- | ---------------- | -------------- |
| Configuração do ESLint                      | Caua + Maria     | Dia 1          |
| Execução da análise de complexidade (Sonar) | Jóse F.+ Gabriel | Dia 2          |
| Verificação da documentação dos módulos     | Maria + Caua     | Dias 2–3       |
| Execução do Jest com cobertura e tempo      | Caua             | Dia 3          |
| Coleta e organização dos dados              | Caua             | Dia 4          |
| Análise dos resultados e conclusão          | Caua             | Dia 5          |


### 4.Documentos e Registros de Apoio à Avaliação


Além da coleta automática e análise estática, os seguintes documentos e ferramentas também serão utilizados como fontes formais de evidência:

| **Fonte**                 | **Local/Ferramenta** | **Uso**                                                            | **Avaliação Esperada**                                                        |
| ------------------------- | -------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Board de Issues           | Miro                 | Acompanhamento de entregas, descrição de atividades e responsáveis | Verificar se as tarefas estão devidamente descritas, atribuídas e atualizadas |
| Calendário (Planejamento) | Miro                 | Comparação entre o planejamento e a execução real                  | Identificar atrasos, replanejamentos frequentes, riscos                       |


<br>

<img src="/image/projetarAvaliacao/bord.png" alt="Board de Issues" width="600px" />

<img src="/image/projetarAvaliacao/calendar1.png" alt="Calendário - Parte 1" width="600px" />

<img src="/image/projetarAvaliacao/calendar2.png" alt="Calendário - Parte 2" width="600px" />


## Histórico de Versão

|    Data    | Versão |          Descrição          |                    Autor(es)                    | Data de revisão |              Revisor(es)               |
| :--------: | :----: | :-------------------------: | :---------------------------------------------: | :-------------: | :------------------------------------: |
| 06/07/2025 |  1.0   | Versão inicial de documento | [Maria Luisa](https://github.com/marialuisa214) |   06/07/2025    | [Caua](https://github.com/CauaMatheus) |
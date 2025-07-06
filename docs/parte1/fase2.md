# Fase 2 - Especificar a avaliação

## Objetivo de Negócio do AGROMART

**Melhorar a manutenibilidade do sistema AGROMART**, com foco especial na redução da complexidade do código e na testabilidade, garantindo que a equipe de desenvolvimento (incluindo novos membros) possa realizar modificações, correções e expansões com autonomia, eficiência e baixo risco de introdução de erros.

---

## Objetivo de Medição 1: Verificar manutenibilidade do AGROMART

| Elemento           | Descrição                           |
| ------------------ | ----------------------------------- |
| **Analisar**       | AGROMART                            |
| **Propósito**      | AVALIAR                             |
| **Respeito a**     | MANUTENIBILIDADE                    |
| **Ponto de Vista** | EQUIPE DE DESENVOLVIMENTO           |
| **Contexto**       | DISCIPLINA DE QUALIDADE DE SOFTWARE |

### Questões e Hipóteses

| Questão (Q)                             | Hipótese Associada                                                 |
| --------------------------------------- | ------------------------------------------------------------------ |
| **Q1:** Quão modular está o código?     | Velocidade de refatoração e melhoria de teste.                     |
| **Q2:** Quão fácil é entender o código? | Tempo de desenvolvimento e integração com o time.                  |
| **Q3:** Como está a testabilidade?      | Quanto maior a testabilidade, menor a chance de erros em produção. |

### Métricas

| Métrica (M)                                            | Critérios                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **M1:** Linhas por arquivo                             | **✅ Bom:** M1 <= 200 <br/> **⚠️ Aceitável:** 200 < M1 <= 300 <br/> **❌ Crítico:** M1 > 300   |
| **M2:** Linhas por função                              | **✅ Bom:** M2 <= 30 <br/> **⚠️ Aceitável:** 30 < M2 <= 50 <br/> **❌ Crítico:** M2 > 50       |
| **M3:** Complexidade Ciclomática por função            | **✅ Bom:** M3 <= 3 <br/> **⚠️ Aceitável:** 3 < M3 <= 5 <br/> **❌ Crítico:** M3 > 5           |
| **M4:** Porcentagem de módulos documentados            | **✅ Bom:** M4 >= 80% <br/> **⚠️ Aceitável:** 60% <= M4 < 80%  <br/> **❌ Crítico:** M4 < 60%  |
| **M5:** Cobertura de testes                            | **✅ Bom:** M5 >= 80% <br/> **⚠️ Aceitável:** 70% <= M5 < 80%  <br/> **❌ Crítico:** M5 < 70%  |
| **M6:** Tempo médio de execução dos testes por arquivo | **✅ Bom:** M6 <= 500ms <br/> **⚠️ Aceitável:** 500ms < M6 <= 1s <br/> **❌ Crítico:** M6 > 1s |

## Folha de Abstração

| Campo                               | Descrição                                                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Objeto**                          | Código-fonte do sistema AGROMART                                                                                                                                                                  |
| **Propósito**                       | Avaliar a capacidade de manutenção e evolução do código                                                                                                                                           |
| **Ponto de Vista**                  | Equipe de desenvolvimento (incluindo novos membros)                                                                                                                                               |
| **Foco da Qualidade**               | - **Modularidade**: Nº de módulos independentes e acoplamento<br>- **Legibilidade**: Complexidade ciclomática e documentação<br>- **Testabilidade**: Cobertura de testes e tempo para criar novos |
| **Hipóteses de Referência**         | - Módulos bem definidos reduzem 30% do tempo de refatoração<br>- Complexidade < 5 diminui 50% dos erros de lógica<br>- Cobertura > 80% reduz falhas em 40%                                        |
| **Fatores de Variação**             | - Experiência da equipe<br>- Ferramentas (SonarQube, ESLint)<br>- Frequência de revisões<br>- Tempo de refatoração                                                                                |
| **Impacto dos Fatores de Variação** | - Revisões semanais: -25% retrabalho<br>- Ferramentas: +40% detecção de bugs<br>- Onboarding: -35% tempo de adaptação                                                                             |

## Diagrama GQM

!!! info
    Dê zoom com o scroll do mouse no diagrama para ver melhor. Caso prefira, abra em tela cheia.<br/>
    Você também mode mover o diagrama com o mouse.

``` mermaid
graph TD
  BussinessObjective[Objetivo de Negócio: Melhorar Manutenibilidade do AGROMART] --> Objective1[Objetivo de Medição 1: Avaliar Qualidade do Código];

  Objective1 --> Question1[Q1: Modularidade?]
    Question1 --> AvgQtdRowsByFile[M1: Linhas por arquivo]
    Question1 --> QtdRowsByFunction[M2: Linhas por função]
    Question1 --> Complexity[M3: Complexidade Ciclomática por função]
  
  Objective1 --> Question2[Q2: Legibilidade?]
    Question2 --> Complexity
    Question2 --> documentedModules[M4: Porcentagem de módulos documentados]
  
  Objective1 --> Question3[Q3: Testabilidade?]
    Question3 --> Metric5[M5: Cobertura de testes]
    Question3 --> Metric6[M6: Tempo médio de execução dos testes por arquivo]
```

## Histórico de Versão

|    Data    | Versão |          Descrição          |                  Autor(es)                   | Data de revisão |                  Revisor(es)                  |
| :--------: | :----: | :-------------------------: | :------------------------------------------: | :-------------: | :-------------------------------------------: |
| 19/05/2025 |  1.0   | Versão inicial de documento | [José Filipi](https://github.com/JoseFilipi) |   19/05/2025    | [Cauã Corrêa](https://github.com/CauaMatheus) |

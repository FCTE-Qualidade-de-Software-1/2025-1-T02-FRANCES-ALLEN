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

| Questão (Q)                             | Hipótese Associada                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Q1:** Quão modular está o código?     | Códigos modulares aceleram a refatoração e criação de testes, além de diminuir a complexidade.                     |
| **Q2:** Quão fácil é entender o código? | Tempo de desenvolvimento e integração com o time é menor quando se tem um código mais legível e fácil de entender. |
| **Q3:** Como está a testabilidade?      | Quanto maior a testabilidade, menor a chance de erros em produção.                                                 |

### Métricas

| Métrica (M)                                                   | Critérios                                                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **M1:** Linhas por arquivo                                    | **✅ Bom:** M1 <= 200 <br/> **⚠️ Aceitável:** 200 < M1 <= 300 <br/> **❌ Crítico:** M1 > 300   |
| **M2:** Linhas por função                                     | **✅ Bom:** M2 <= 30 <br/> **⚠️ Aceitável:** 30 < M2 <= 50 <br/> **❌ Crítico:** M2 > 50       |
| **M3:** Complexidade Ciclomática por função                   | **✅ Bom:** M3 <= 3 <br/> **⚠️ Aceitável:** 3 < M3 <= 5 <br/> **❌ Crítico:** M3 > 5           |
| **M4:** Porcentagem de módulos documentados                   | **✅ Bom:** M4 >= 80% <br/> **⚠️ Aceitável:** 60% <= M4 < 80%  <br/> **❌ Crítico:** M4 < 60%  |
| **M5:** Cobertura de testes                                   | **✅ Bom:** M5 >= 80% <br/> **⚠️ Aceitável:** 70% <= M5 < 80%  <br/> **❌ Crítico:** M5 < 70%  |
| **M6:** Tempo médio de execução dos testes por arquivo        | **✅ Bom:** M6 <= 500ms <br/> **⚠️ Aceitável:** 500ms < M6 <= 1s <br/> **❌ Crítico:** M6 > 1s |
| **M7:** Porcentagem de linhas de código duplicadas no projeto | **✅ Bom:** M7 <= 3% <br/> **⚠️ Aceitável:** 3% < M7 <= 5% <br/> **❌ Crítico:** M7 > 5%       |
| **M8:** Blocos de código duplicados                           | **✅ Bom:** 1 <= M8 <= 2 <br/> **⚠️ Aceitável:** M8 = 3 <br/> **❌ Crítico:** M8 > 3           |
| **M9:** Arquivos duplicados                                   | **✅ Bom:** 1 <= M9 <= 2 <br/> **⚠️ Aceitável:** M9 = 3 <br/> **❌ Crítico:** M9 > 3           |
| **M10:** Complexidade cognitiva                               | **✅ Bom:** M10 < 10 <br/> **⚠️ Aceitável:** 15 >= M10 >= 10 <br/> **❌ Crítico:** M10 > 15    |

## Folha de Abstração

| Campo                               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Objeto**                          | Código-fonte do sistema AGROMART                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Propósito**                       | Avaliar a capacidade de manutenção e evolução do código                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Ponto de Vista**                  | Equipe de desenvolvimento (incluindo novos membros)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Foco da Qualidade**               | - **Modularidade**:  <br/> M1: Linhas por arquivo <br/> M2: Linhas por função <br/> M7: Linhas duplicadas <br/> M8: Blocos de código duplicados <br/> M9: Arquivos duplicados <br/> M3: Complexidade Ciclomática por função <br/> <br/> - **Legibilidade**: Complexidade ciclomática e documentação <br/> M4: Porcentagem de módulos documentados<br/> M10: Complexidade cognitiva <br> <br> - **Testabilidade**: Cobertura de testes e tempo para criar novos <br/> M5: Cobertura de testes <br/> M6: Tempo médio de execução dos testes por arquivo                                                                                                                                                                                                                                     |
| **Hipóteses de Referência**         | - Módulos bem definidos reduzem 30% do tempo de refatoração<br>- Complexidade < 5 diminui 50% dos erros de lógica<br>- Cobertura > 80% reduz falhas em 40%                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Fatores de Variação**             | - Experiência da equipe<br>- Ferramentas (SonarQube, ESLint)<br>- Frequência de revisões<br>- Tempo de refatoração                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Impacto dos Fatores de Variação** | - A experiência da equipe tende a variar bastante tanto a qualidade, como a velocidade do time ao elaborar soluções, refatorar e encontrar problemas. <br/> - Uso de ferramentas pode tanto acelerar o trabalho da equipe, coletando métricas e ajudando a evitar erros, mas também pode piorar a velocidade da equipe caso não tenham familiaridade ou se o projeto não se adequa ao uso dessa ferramenta. <br/> - Revisões frequentes pode diminuir a velocidade inicialmente da equipe, mas ajuda a  diversificar o conhecimento e manter a qualidade do código <br/> - A refatoração constante pode fazer o time se sentir mais lento e com a sensação de sempre estar refazendo algo, mas isso afeta diretamente a qualidade do projeto e as equipes tendem a esquecer a refatoração |

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
    Question1 --> Density[M7: Linhas duplicadas]
    Question1 --> DuplCode[M8: Blocos de código duplicados]
    Question1 --> DuplFiles[M9: Arquivos duplicados]
    Question1 --> Complexity[M3: Complexidade Ciclomática por função]
  
  Objective1 --> Question2[Q2: Legibilidade?]
    Question2 --> Complexity
    Question2 --> documentedModules[M4: Porcentagem de módulos documentados]
    Question2 --> CognitiveC[M10: Complexidade cognitiva]
  
  Objective1 --> Question3[Q3: Testabilidade?]
    Question3 --> Metric5[M5: Cobertura de testes]
    Question3 --> Metric6[M6: Tempo médio de execução dos testes por arquivo]
```

## Histórico de Versão

|    Data    | Versão |          Descrição          |                  Autor(es)                   | Data de revisão |                  Revisor(es)                  |
| :--------: | :----: | :-------------------------: | :------------------------------------------: | :-------------: | :-------------------------------------------: |
| 19/05/2025 |  1.0   | Versão inicial de documento | [José Filipi](https://github.com/JoseFilipi) |   19/05/2025    | [Cauã Corrêa](https://github.com/CauaMatheus) |

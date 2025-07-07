## Cycle Time, Team Velocity e Cumulative Flow

Os gráficos a seguir apresentam três métricas importantes para avaliar a produtividade da equipe:



<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

### Cycle Time

Este gráfico mostra quantas atividades foram entregues por dia e o percentual acumulado dessas entregas ao longo do tempo. 

- Permite observar picos, dias de baixa atividade, progresso cumulativo do projeto.

<canvas id="cycleTimeChart" width="800" height="400"></canvas>

### Team Velocity

Este gráfico compara a quantidade de entregas por dia com a velocidade da equipe ao longo do tempo.


<canvas id="teamVelocityChart" width="800" height="400"></canvas>

### Cumulative Flow Diagram

Este gráfico mostra o fluxo acumulado de tarefas nas diferentes fases do processo.

- Permite visualizar o volume de trabalho em cada etapa ao longo do tempo.
- Ajuda a identificar gargalos e a estabilidade do fluxo de trabalho.

<canvas id="cumulativeFlowChart" width="800" height="400"></canvas>

Os gráficos apresentados fornecem uma visão ampla sobre a consistência, ritmo e fluxo de trabalho da equipe durante o ciclo de desenvolvimento.

<script src="../charts/desempenhoDosProcessos.js"></script>
<script src="../charts/cumulativoFlow.js"></script>

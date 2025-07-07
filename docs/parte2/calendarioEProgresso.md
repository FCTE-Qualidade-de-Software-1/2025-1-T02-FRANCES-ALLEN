# Burndown Chart - Fases Restantes por Semana

O gráfico Burndown representa a evolução do trabalho ao longo das semanas da sprint. 

<!-- - A linha Ideal mostra como o progresso deveria acontecer, reduzindo as tarefas de forma constante até finalizar todo o projeto.
- A linha Real mostra de fato como está o andamento da equipe, permitindo comparar o ritmo planejado com o executado. -->

Este gráfico é útil para identificar atrasos, necessidade de ajustes no planejamento. Ele mede quantas fases ou tarefas restam a cada semana, sendo um indicador direto da velocidade de entrega e consistência do time ao longo do tempo.

<div class="chart-container">
  <canvas id="burndownChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../charts/calendarioEProgresso.js"></script>

### Committed vs Completed

Este gráfico compara o número de tarefas comprometidas com a equipe no início do período (Committed) com as efetivamente concluídas (Completed).

- Ajuda a identificar discrepâncias entre planejamento e entrega.
- É útil para avaliar a precisão da equipe no cumprimento das metas estabelecidas.

<canvas id="committedCompletedChart" width="800" height="400"></canvas>

<script src="../charts/commitadoVsComplet.js"></script>
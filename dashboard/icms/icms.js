
/*Botao de voltar para o painel*/

function voltar() {
  window.history.back();
}

/*Gráfico*/

 
        // Dados iniciais
        var dadosPorAno = {
            '2022': [12, 19, 20, 5, 2, 3, 9, 10, 3, 4, 3, 11],
            '2023': [15, 22, 18, 8, 6, 4, 12, 14, 6, 7, 5, 16],
            '2024': [10, 16, 22, 4, 7, 8, 13, 15, 5, 8, 9, 14]
            // Adicione mais dados para outros anos conforme necessário
        };

        // Inicializar gráfico com dados do ano inicial
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets: [{
                    label: 'Valores',
                    data: dadosPorAno['2022'],
                    backgroundColor: 'rgba(10, 17, 95, 0.550)',
                    borderColor: 'rgba(78, 218, 13, 0.534)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            font: {
                                family: 'Arial',
                                size: 13,
                                weight: 'bold',
                                color: 'black'
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: 'Arial',
                                size: 12,
                                weight: 'bold',
                                color: 'black'
                            }
                        }
                    }
                }
            }
        });

        
        // Função para atualizar o gráfico quando o ano é alterado
        function atualizarGrafico() {
            var anoSelecionado = document.getElementById('selectAno').value;
            myChart.data.datasets[0].data = dadosPorAno[anoSelecionado];
            myChart.update();
        }


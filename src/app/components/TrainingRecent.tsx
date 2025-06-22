function TrainingRecent() {
    return(
        <div className="recentTraining">
            <div className="cardHeader">
                <h2>Treinos Recentes</h2>
                <a href="#" className="btn">Ver todos</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Treino</td>
                        <td>Duração</td>
                        <td>Intensidade</td>
                        <td>Progresso</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Treino de Peito</td>
                        <td>45 min</td>
                        <td>Alta</td>
                        <td>
                            <span className="status delivered">Concluído</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Treino de Costas</td>
                        <td>50 min</td>
                        <td>Média</td>
                        <td>
                            <span className="status pending">Pendente</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Cardio HIIT</td>
                        <td>30 min</td>
                        <td>Alta</td>
                        <td>
                            <span className="status delivered">Pendente</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Perna Intensa</td>
                        <td>60 min</td>
                        <td>Alta</td>
                        <td>
                            <span className="status pending">Pendente</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Abdômen</td>
                        <td>20 min</td>
                        <td>Leve</td>
                        <td>
                            <span className="status delivered">Pendente</span>
                        </td>
                    </tr>

                    <tr>
                        <td>Treino Funcional</td>
                        <td>40 min</td>
                        <td>Média</td>
                        <td>
                            <span className="status pending">Pendente</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    );
}

export default TrainingRecent;
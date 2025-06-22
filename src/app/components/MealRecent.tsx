function MealRecent() {
    return(
          <div className="recentCustomers">
            <div className="cardHeader">
                <h2>Refeições Recentes</h2>
            </div>
            <table>
                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Café com Ovos <br/><span>Café da Manhã</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Frango com Arroz <br/><span>Almoço</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Panquecas com Frutas <br/><span>Lanche da Tarde</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Salada de Atum <br/><span>Jantar</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Iogurte com Granola <br/><span>Lanche Noturno</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Torrada Integral <br/><span>Café da Manhã</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/meal-default.png" />
                        </div>
                    </td>
                    <td><h4>Shake Proteico <br/><span>Pós-Treino</span></h4></td>
                </tr>
            </table>
        </div>
    );
}

export default MealRecent;
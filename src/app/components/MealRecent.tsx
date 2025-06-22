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
                            <img src="https://img.freepik.com/fotos-gratis/cafe-da-manha-balanceado-com-ovos-pao-e-legumes_23-2148303795.jpg" />
                        </div>
                    </td>
                    <td><h4>Café com Ovos <br/><span>Café da Manhã</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="https://img.freepik.com/fotos-gratis/prato-de-arroz-com-frango-e-legumes_1339-2054.jpg" />
                        </div>
                    </td>
                    <td><h4>Frango com Arroz <br/><span>Almoço</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="https://img.freepik.com/fotos-gratis/panquecas-com-mel-e-frutas_2829-14250.jpg" />
                        </div>
                    </td>
                    <td><h4>Panquecas com Frutas <br/><span>Lanche da Tarde</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="https://img.freepik.com/fotos-gratis/salada-de-atum-com-tomate-e-alface_1339-3417.jpg" />
                        </div>
                    </td>
                    <td><h4>Salada de Atum <br/><span>Jantar</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="https://img.freepik.com/fotos-gratis/iogurte-com-frutas-e-granola-em-uma-mesa-de-madeira_1150-45591.jpg" />
                        </div>
                    </td>
                    <td><h4>Iogurte com Granola <br/><span>Lanche Noturno</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="https://img.freepik.com/fotos-gratis/vista-superior-da-mesa-de-cafe-da-manha-saudavel-com-torradas-e-frutas_23-2148297071.jpg" />
                        </div>
                    </td>
                    <td><h4>Torrada Integral <br/><span>Café da Manhã</span></h4></td>
                </tr>

                <tr>
                    <td width={60}>
                        <div className="imgBx">
                            <img src="assets/img/user-default.png" />
                        </div>
                    </td>
                    <td><h4>Shake Proteico <br/><span>Pós-Treino</span></h4></td>
                </tr>
            </table>
        </div>
    );
}

export default MealRecent;
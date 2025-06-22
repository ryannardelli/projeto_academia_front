import { Clock, Dumbbell, Flame, Users } from "lucide-react";
import "/public/styles/card.css";

function CardStats() {
    return(
        <div>
            <div className="cardBox">
                <div className="card">
                    <div className="numbers">320</div>
                    <div className="cardName">Alunos Ativos</div>
                    <div className="iconBx">
                    <Users className="h-12 w-12" />
                    </div>
                </div>

                <div className="card">
                    <div className="numbers">1.250</div>
                    <div className="cardName">Treinos Concluídos</div>
                    <div className="iconBx">
                    <Dumbbell className="h-12 w-12" />
                    </div>
                </div>

                <div className="card">
                    <div className="numbers">87.500</div>
                    <div className="cardName">Calorias Queimadas</div>
                    <div className="iconBx">
                    <Flame className="h-12 w-12" />
                    </div>
                </div>

                <div className="card">
                    <div className="numbers">146h</div>
                    <div className="cardName">Horas de Treino</div>
                    <div className="iconBx">
                    <Clock className="h-12 w-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardStats;
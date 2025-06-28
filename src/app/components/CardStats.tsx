import { LucideIcon } from "lucide-react";
import "/public/styles/card.css";

type CardItem = {
  numbers: string;
  cardName: string;
  icon: LucideIcon;
};

type CardStatsProps = {
  cards: CardItem[];
};

function CardStats({ cards }: CardStatsProps) {
  return (
    <div className="cardBox">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="numbers">{card.numbers}</div>
          <div className="cardName">{card.cardName}</div>
          <div className="iconBx">
            <card.icon className="h-12 w-12" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardStats;
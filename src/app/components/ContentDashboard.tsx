"use client";

import CardStats from "./CardStats";
import DetailsList from "./DetailsList";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Users, Dumbbell, ListChecks, Salad, UtensilsCrossed } from "lucide-react";

type JwtPayload = {
  id: number;
  role: string;
};

function ContentDashboard() {
  const token = Cookies.get("token");

  if (!token) {
    console.error("Token não encontrado");
    return null;
  }

  const decoded: JwtPayload = jwtDecode(token);
  const role = decoded.role;
  console.log(role);

  // Cards para ADM
    const cardsADM = [
        { numbers: "320", cardName: "Alunos Ativos", icon: Users },
        { numbers: "12", cardName: "Treinadores Cadastrados", icon: Dumbbell },
        { numbers: "28", cardName: "Dietas Disponíveis", icon: Salad },
        { numbers: "150", cardName: "Exercícios no Sistema", icon: ListChecks }
    ];


    // Cards para Aluno
    const cardsAluno = [
        { numbers: "15", cardName: "Treinos Concluídos", icon: Dumbbell },
        { numbers: "3", cardName: "Dietas Ativas", icon: Salad },
        { numbers: "24", cardName: "Refeições Registradas", icon: UtensilsCrossed },
        { numbers: "40", cardName: "Exercícios Realizados", icon: ListChecks },
    ];

  const cards = role === "Administrador" ? cardsADM : cardsAluno;

  return (
    <div>
      <CardStats cards={cards} />
      <DetailsList />
    </div>
  );
}

export default ContentDashboard;

"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { WorkoutCard } from "./WorkoutCard";

type JwtPayload = {
  id: number; // ID do usuário
};

type Training = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
};

type TrainingResponse = {
  idTrainingProfile: number;
  training: {
    id_training: number;
    name: string;
    dateBeginTraining: string;
    dateEndTraining: string;
  };
};

export function AvailableWorkouts() {
  const [workouts, setWorkouts] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTrainings = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("Token não encontrado");
          setLoading(false);
          return;
        }

        const decoded = jwtDecode<JwtPayload>(token);
        const userId = decoded.id;

        // 1. Buscar perfil associado ao usuário
        const profileRes = await fetch(`http://localhost:8080/manageusers/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileData = await profileRes.json();

        // 2. Buscar treinos associados ao perfil
        const trainingsRes = await fetch(`http://localhost:8080/profile/${profileData.profile.id}/training`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const trainingData: TrainingResponse[] = await trainingsRes.json();

        // 3. Mapear os treinos
        const formatted = trainingData.map((item) => ({
          id: item.training.id_training,
          title: item.training.name,
          level: "Ganho de Massa",
          startDate: item.training.dateBeginTraining,
          endDate: item.training.dateEndTraining,
        }));

        setWorkouts(formatted);
      } catch (error) {
        console.error("Erro ao buscar treinos do usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserTrainings();
  }, []);

 return (
  <section>
    <h2 className="text-xl font-semibold mb-4">Treinos Disponíveis</h2>

    {loading ? (
      <div className="text-center text-gray-500 py-10">Carregando treinos...</div>
    ) : workouts.length === 0 ? (
      <div className="text-center text-gray-500 py-10">
        Nenhum treino associado ao seu perfil ainda.
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            title={workout.title}
            startDate={workout.startDate}
            endDate={workout.endDate}
          />
        ))}
      </div>
    )}
  </section>
);
}


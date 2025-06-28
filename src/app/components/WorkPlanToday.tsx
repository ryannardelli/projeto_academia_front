import React, { useState } from "react";

type Workout = {
  name: string;
  time: string;
  description: string;
  icon: string;
};

interface WorkoutPlanTodayProps {
  workouts?: Workout[];
  note?: string;
}

const defaultWorkouts: Workout[] = [
  {
    name: "Treino de Peito",
    time: "08:00",
    description: "Supino reto, supino inclinado, crucifixo",
    icon: "🏋️‍♂️",
  },
  {
    name: "Cardio",
    time: "09:00",
    description: "20 minutos de esteira + 10 minutos de bicicleta",
    icon: "🏃‍♂️",
  },
  {
    name: "Alongamento",
    time: "09:30",
    description: "Alongamento geral e respiração guiada",
    icon: "🧘‍♂️",
  },
];

const WorkoutPlanToday: React.FC<WorkoutPlanTodayProps> = ({
  workouts = defaultWorkouts,
  note,
}) => {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleCompleted = (index: number) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const hasWorkouts = workouts && workouts.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        Plano de Treino de Hoje
      </h3>

      {hasWorkouts ? (
        <ul className="space-y-4">
          {workouts.map((workout, index) => {
            const isDone = completed.includes(index);
            return (
              <li
                key={index}
                className={`flex items-start space-x-3 p-2 rounded-md ${
                  isDone ? "bg-green-50" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggleCompleted(index)}
                  className="mt-1 accent-green-600"
                />
                <div className="text-2xl">{workout.icon}</div>
                <div className="flex-1">
                  <p
                    className={`font-semibold text-gray-800 ${
                      isDone ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {workout.name}{" "}
                    <span className="text-sm text-gray-500">
                      ({workout.time})
                    </span>
                  </p>
                  <p
                    className={`text-sm ${
                      isDone ? "text-gray-400 line-through" : "text-gray-600"
                    }`}
                  >
                    {workout.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="text-gray-600 text-sm italic mt-2">
          Nenhum treino planejado para hoje. Aproveite para descansar ou fazer
          um alongamento leve!
        </div>
      )}

      {note && (
        <div className="mt-4 p-3 border-l-4 border-blue-400 bg-blue-50 text-sm text-gray-800">
          <strong>Dica do dia:</strong> {note}
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanToday;

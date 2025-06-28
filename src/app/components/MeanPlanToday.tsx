import React, { useState } from "react";

type Meal = {
  name: string;
  time: string;
  description: string;
  icon: string;
};

interface MealPlanTodayProps {
  meals?: Meal[];
  note?: string;
}

const defaultMeals: Meal[] = [
  {
    name: "Café da manhã",
    time: "07:30",
    description: "Aveia com banana",
    icon: "🥣",
  },
  {
    name: "Almoço",
    time: "12:30",
    description: "Frango grelhado e arroz integral",
    icon: "🍗",
  },
  {
    name: "Jantar",
    time: "19:00",
    description: "Salada com atum",
    icon: "🥗",
  },
];

const MealPlanToday: React.FC<MealPlanTodayProps> = ({ meals = defaultMeals, note }) => {
  const [completedMeals, setCompletedMeals] = useState<number[]>([]);

  const toggleMealDone = (index: number) => {
    setCompletedMeals((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const hasMeals = meals && meals.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full ">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Plano Alimentar de Hoje</h3>

      {hasMeals ? (
        <ul className="space-y-4">
          {meals.map((meal, index) => {
            const isDone = completedMeals.includes(index);
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
                  onChange={() => toggleMealDone(index)}
                  className="mt-1 accent-green-600"
                />
                <div className="text-2xl">{meal.icon}</div>
                <div className="flex-1">
                  <p
                    className={`font-semibold text-gray-800 ${
                      isDone ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {meal.name}{" "}
                    <span className="text-sm text-gray-500">({meal.time})</span>
                  </p>
                  <p
                    className={`text-sm ${
                      isDone ? "text-gray-400 line-through" : "text-gray-600"
                    }`}
                  >
                    {meal.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="text-gray-600 text-sm italic mt-2">
          Nenhuma refeição planejada para hoje.
        </div>
      )}

      {note && (
        <div className="mt-4 p-3 border-l-4 border-yellow-400 bg-yellow-50 text-sm text-gray-800">
          <strong>Observação:</strong> {note}
        </div>
      )}
    </div>
  );
};

export default MealPlanToday;

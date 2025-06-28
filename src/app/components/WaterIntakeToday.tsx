import React, { useState } from "react";

interface WaterIntakeTodayProps {
  totalCups?: number; // número total de copos de água no dia
  cupSize?: number;   // tamanho de cada copo em ml
}

const WaterIntakeToday: React.FC<WaterIntakeTodayProps> = ({
  totalCups = 8,
  cupSize = 250,
}) => {
  const [drank, setDrank] = useState<boolean[]>(Array(totalCups).fill(false));

  const toggleCup = (index: number) => {
    setDrank((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const cupsDrunk = drank.filter(Boolean).length;
  const allDrunk = cupsDrunk === totalCups;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">Hidratação do Dia</h3>
      <p className="text-gray-600 mb-4 text-sm">
        Meta: {totalCups} copos de {cupSize}ml = {(totalCups * cupSize) / 1000}L
      </p>

      <ul className="grid grid-cols-4 gap-3 mb-4">
        {drank.map((cup, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={cup}
              onChange={() => toggleCup(index)}
              className="accent-blue-600"
            />
            <span className={`text-lg ${cup ? "text-blue-500" : "text-gray-700"}`}>
              💧 {index + 1}
            </span>
          </li>
        ))}
      </ul>

      <div className="text-sm text-gray-700">
        Você já bebeu <strong>{cupsDrunk}</strong> de <strong>{totalCups}</strong> copos hoje.
      </div>

      {allDrunk && (
        <div className="mt-4 p-3 border-l-4 border-blue-500 bg-blue-50 text-sm text-blue-800 rounded">
          🥳 Parabéns! Você atingiu sua meta de hidratação hoje!
        </div>
      )}
    </div>
  );
};

export default WaterIntakeToday;

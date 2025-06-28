import React from "react";

function WorkoutCalendar() {
  const month = "Junho 2025";
  const daysInMonth = 30;
  const workoutDays = [2, 4, 7, 10, 14, 17, 21, 24, 28];

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl w-full mx-auto">
      <h2 className="text-2xl font-bold text-center mb-1">Calendário de Treinos</h2>
      <p className="text-center text-gray-500 mb-4">Dias de treino estão destacados em verde</p>
      <h3 className="text-xl font-semibold text-center mb-4">{month}</h3>
      
      <div className="grid grid-cols-7 gap-3 text-center text-sm text-gray-700">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
          <div key={d} className="font-semibold text-gray-500">
            {d}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`h-10 flex items-center justify-center rounded-lg 
              ${
                workoutDays.includes(day)
                  ? "bg-green-500 text-white font-bold"
                  : "bg-gray-100"
              }`}
            aria-label={`Dia ${day}${workoutDays.includes(day) ? " - treino" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutCalendar;


import React from "react";

function WorkoutCalendar() {
  const month = "Junho 2025";
  const daysInMonth = 30;
  const workoutDays = [2, 4, 7, 10, 14, 17, 21, 24, 28];

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">{month}</h2>
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
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutCalendar;

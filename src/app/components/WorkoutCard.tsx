"use client";

import { CalendarDays, Dumbbell } from "lucide-react";

type WorkoutCardProps = {
  title: string;
  level: string;
  startDate: string;
  endDate: string;
};

export function WorkoutCard({ title, startDate, endDate }: WorkoutCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <Dumbbell className="text-indigo-600 w-6 h-6" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>

      <div className="flex items-center text-sm text-gray-600 gap-2 mb-1">
        <CalendarDays className="w-4 h-4 text-gray-500" />
        Início: {new Date(startDate).toLocaleDateString()}
      </div>
      <div className="flex items-center text-sm text-gray-600 gap-2">
        <CalendarDays className="w-4 h-4 text-gray-500" />
        Fim: {new Date(endDate).toLocaleDateString()}
      </div>

      <div className="mt-4 text-right">
        <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
import { AvailableWorkouts } from "./AvailableWorkouts";
import WorkoutFilterHeader from "./WorkoutFilterHeader";

export default function WorkoutsDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Área de Treinos</h1>
      <WorkoutFilterHeader /> 
      <AvailableWorkouts />
    </div>
  );
}

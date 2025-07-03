import { WorkoutCard } from "./WorkoutCard";

const myWorkouts = [
  { id: 101, title: "Treino de Segunda", level: "Intermediário" },
  { id: 102, title: "Treino Personalizado A", level: "Avançado" },
];

export function WorkoutUser() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Meus Treinos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            title={workout.title}
            level={workout.level}
            editable
            onEdit={() => alert(`Editar treino: ${workout.title}`)}
          />
        ))}
      </div>
    </section>
  );
}

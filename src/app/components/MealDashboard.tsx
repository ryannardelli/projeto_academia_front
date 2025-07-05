import FilterMeal from "./FilterMeal";
import MealCard from "./MealCard";

export default function MealDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Área de Refeições</h1>
      <div className="flex flex-col gap-14">
          <FilterMeal />
           <MealCard />
      </div>
    </div>
  );
}

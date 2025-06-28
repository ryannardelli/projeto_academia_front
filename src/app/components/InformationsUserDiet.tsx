import MealPlanToday from "./MeanPlanToday";
import WaterIntakeToday from "./WaterIntakeToday";
import WorkoutCalendar from "./WorkoutCalendar";
import WorkoutPlanToday from "./WorkPlanToday";

function InformationsUserDiet() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg::grid-cols-[1fr_1fr_1fr_1fr] 2xl:grid-cols-[1fr_1fr_1fr_1fr] gap-4 p-4">
             <WorkoutCalendar />
             <MealPlanToday />
             <WorkoutPlanToday />
            <WaterIntakeToday />
        </div>
    );
}

export default InformationsUserDiet;
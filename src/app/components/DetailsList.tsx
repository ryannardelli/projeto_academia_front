import MealRecent from "./MealRecent";
import TrainingRecent from "./TrainingRecent";
import "/public/styles/details.css";

function DetailsList() {
    return(
        <div className="details">
            <TrainingRecent />
            <MealRecent />
        </div>
    );
}

export default DetailsList;
import ObjectiveUser from "./ObjectiveUser";
import ResumeGeneralDiet from "./ResumeGeneralDiet";

function ResumeAndProgressUser() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResumeGeneralDiet />
            <ObjectiveUser />
        </div>
    );
}

export default ResumeAndProgressUser;
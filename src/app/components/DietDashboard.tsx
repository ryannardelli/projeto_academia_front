import DietCards from "./DietCards";
import ResumeAndProgressUser from "./ResumeAndProgressUser";

export default function DietDashboard() {
    return(
        <div className="flex flex-col gap-8 p-6">
            <h1 className="text-2xl font-bold mb-6">Área de Dietas</h1>
            <ResumeAndProgressUser />
            <div>
                <h1 className="text-2xl font-bold mb-6 p-4">Suas Dietas</h1>
                <DietCards />
            </div>
        </div>
    );
}
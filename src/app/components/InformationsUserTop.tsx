import { FaHandshake, FaUtensils } from "react-icons/fa";
import AlertMessage from "./AlertMessage";
import "/public/styles/details.css";


function InformationsUserTop() {
     return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-4">
      <AlertMessage
        icon={<FaHandshake className="w-10 h-10" />}
        title="Olá, Alex Johnson!"
        message="Hoje é segunda-feira, 12 de janeiro. Você tem 3 treinos planejados, sua próxima refeição será em 2 horas, e você precisa beber mais 1 litro de água hoje."
        extra="Continue assim!"
        bgColor="bg-blue-500"
        textColor="text-white"
      />

       <AlertMessage
        icon={<FaUtensils className="w-10 h-10" />}
        title="Foco na dieta!"
        message="Lembre-se de seguir sua alimentação conforme o plano nutricional. A consistência na dieta é tão importante quanto o treino."
        extra="Evite pular refeições e mantenha sua hidratação em dia."
        bgColor="bg-green-500"
        textColor="text-white"
      />
    </div>
  );
}

export default InformationsUserTop;
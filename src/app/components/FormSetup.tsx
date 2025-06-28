"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type JwtPayload = {
  id: number;
  profileConfigured: boolean;
  sub: string;
  role: string;
};


function FormSetup() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    goal: "",
  });

  type ObjectiveOption = {
    label: string;
    value: string;
  }


  const [goals, setGoals] = useState<ObjectiveOption[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch("http://localhost:8080/metadata/objectives");
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error("Erro ao buscar objetivos:", error);
      }
    };

    fetchGoals();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const token = Cookies.get("token");

    if (!token) {
      toast.error("Token não encontrado");
      return;
    }

    const decoded: JwtPayload = jwtDecode(token);

    // 1. Criar perfil
    const profileRes = await fetch("http://localhost:8080/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        height: formData.height,
        weight: formData.weight,
        objective: formData.goal,
      }),
    });

    if (!profileRes.ok) {
      toast.error("Erro ao cadastrar perfil");
      return;
    }

    const createdProfile = await profileRes.json();
    const profileId = createdProfile.id;
    const userId = decoded.id;

    // 2. Associar perfil ao usuário
    const linkRes = await fetch(`http://localhost:8080/user/${userId}/profile/${profileId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!linkRes.ok) {
      toast.error("Erro ao associar perfil ao usuário");
      return;
    }

    // 3. Atualizar profileConfigured = true
    const updateRes = await fetch(`http://localhost:8080/manageusers/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        profileConfigured: true,
      }),
    });

    if (!updateRes.ok) {
      toast.error("Erro ao atualizar o perfil");
      return;
    }

    router.push("/dashboard");

  } catch (e) {
    console.log(e);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md animate-fade-in"
      >
        <p className="mb-6 text-center text-lg text-blue-600 dark:text-blue-400 font-semibold">
          Seja bem-vindo! Vamos definir seu perfil para começar sua jornada.
        </p>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Altura (cm)</span>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Ex: 180"
            className="mt-1 w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Peso (kg)</span>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Ex: 75"
            className="mt-1 w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </label>

       <label className="block mb-6">
        <span className="text-gray-700 dark:text-gray-300 font-medium">Objetivo</span>
        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <option value="">Selecione um objetivo</option>
          {goals.map((goal) => (
            <option key={goal.value} value={goal.value}>
              {goal.label}
            </option>
          ))}
        </select>
    </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-xl"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormSetup;
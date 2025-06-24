"use client";
import { useState } from "react";

function FormSetup() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do perfil:", formData);
    // Aqui você pode enviar para sua API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-black px-4">
  <form
    onSubmit={handleSubmit}
    className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md animate-fade-in"
  >
    {/* Mensagem de boas-vindas */}
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
        <option value="perder_peso">Perder peso</option>
        <option value="ganhar_massa">Ganhar massa</option>
        <option value="manter">Manter forma</option>
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
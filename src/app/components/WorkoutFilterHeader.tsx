export default function WorkoutFilterHeader() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
      
      <input
        type="text"
        placeholder="Buscar treino por nome..."
        className="w-full md:w-1/3 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Todos os níveis</option>
        <option value="iniciante">Iniciante</option>
        <option value="intermediario">Intermediário</option>
        <option value="avancado">Avançado</option>
      </select>

      <select
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Todos os grupos</option>
        <option value="peito">Peito</option>
        <option value="perna">Perna</option>
        <option value="costas">Costas</option>
        <option value="ombro">Ombro</option>
        <option value="braço">Braço</option>
        <option value="core">Core</option>
      </select>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-red-600"
      >
        Limpar
      </button>
    </div>
  );
}

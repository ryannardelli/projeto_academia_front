// components/MealFilterHeader.tsx
export default function FilterMeal() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-xl shadow">
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar refeição por nome..."
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Filtro por tipo */}
      <select className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
        <option value="">Todos os tipos</option>
        <option value="café">Café da Manhã</option>
        <option value="almoço">Almoço</option>
        <option value="jantar">Jantar</option>
        <option value="lanche">Lanche</option>
      </select>

      {/* Filtro por horário */}
      <select className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
        <option value="">Todos os horários</option>
        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>

      {/* Botão limpar */}
      <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        Limpar
      </button>
    </div>
  );
}

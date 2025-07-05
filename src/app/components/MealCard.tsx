export default function MealCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Café da Manhã Proteico</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Ovos mexidos, aveia com banana e café sem açúcar.
        </p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="mr-2">⏰</span>
          <span>08:00</span>
        </div>
        <button className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition">
          Ver Detalhes
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Almoço Equilibrado</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Arroz integral, frango grelhado, legumes cozidos e salada.
        </p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="mr-2">⏰</span>
          <span>12:30</span>
        </div>
        <button className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition">
          Ver Detalhes
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Jantar Leve</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Sopa de legumes com peito de frango desfiado.
        </p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="mr-2">⏰</span>
          <span>19:30</span>
        </div>
        <button className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

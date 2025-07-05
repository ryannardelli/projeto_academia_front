export default function DietCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Card de Dieta */}
      <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Dieta Hiperproteica</h3>
        <p className="text-gray-600 text-sm mb-4">
          Foco no aumento da ingestão de proteínas para ganho de massa muscular.
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>💪 2200 kcal</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Musculação</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Dieta Low Carb</h3>
        <p className="text-gray-600 text-sm mb-4">
          Redução dos carboidratos para estimular a queima de gordura corporal.
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>🔥 1800 kcal</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Emagrecimento</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Dieta Mediterrânea</h3>
        <p className="text-gray-600 text-sm mb-4">
          Rica em frutas, azeite, grãos e peixes, promove saúde e bem-estar.
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>🌿 2000 kcal</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Manutenção</span>
        </div>
      </div>

       <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Dieta Mediterrânea</h3>
        <p className="text-gray-600 text-sm mb-4">
          Rica em frutas, azeite, grãos e peixes, promove saúde e bem-estar.
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>🌿 2000 kcal</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Manutenção</span>
        </div>
      </div>
    </div>
  );
}

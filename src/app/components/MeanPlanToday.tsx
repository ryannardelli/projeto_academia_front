function MealPlanToday() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
      <h3 className="text-xl font-bold mb-4">Plano Alimentar de Hoje</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>🥣 Café da manhã: Aveia com banana</li>
        <li>🍗 Almoço: Frango grelhado e arroz integral</li>
        <li>🥗 Jantar: Salada com atum</li>
      </ul>
    </div>
  );
}

export default MealPlanToday;
function ResumeGeneralDiet() {
    return(
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6 w-full">
        <h2 className="text-2xl font-semibold text-gray-800">Resumo Geral da Dieta</h2>

        <div>
            <p className="text-gray-700 mb-1 font-medium">Calorias consumidas</p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-green-500 h-4 rounded-full text-white text-xs text-center leading-4" style={{ width: "75%" }}
>
                1500 / 2000 kcal
            </div>
            </div>
        </div>

        <div>
            <p className="text-gray-700 mb-2 font-medium">Macronutrientes</p>
            <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-100 rounded-lg p-4">
                <p className="text-blue-700 font-bold text-xl">120g</p>
                <p className="text-sm text-gray-700">Proteínas</p>
                <p className="text-xs text-gray-500">30%</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4">
                <p className="text-yellow-700 font-bold text-xl">200g</p>
                <p className="text-sm text-gray-700">Carboidratos</p>
                <p className="text-xs text-gray-500">50%</p>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
                <p className="text-pink-700 font-bold text-xl">60g</p>
                <p className="text-sm text-gray-700">Gorduras</p>
                <p className="text-xs text-gray-500">20%</p>
            </div>
            </div>
        </div>

        <div>
            <p className="text-gray-700 mb-1 font-medium">Consumo de Água</p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-blue-500 h-4 rounded-full text-white text-xs text-center leading-4" style={{ width: "50%" }}>
                1.5 L / 3 L
            </div>
            </div>
        </div>
    </div>
    );
}

export default ResumeGeneralDiet;
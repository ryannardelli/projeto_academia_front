function ObjectiveUser() {
    return(
        <div className="bg-white rounded-xl shadow-md p-6 w-full space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Metas e Progresso</h2>

            <div className="space-y-1">
                <p className="text-gray-700 font-medium">Meta de peso:</p>
                <p className="text-gray-900 text-lg">Perder 3kg (de 72kg para 69kg)</p>
            </div>

            <div className="space-y-3">
                <p className="text-gray-700 font-medium">
                Peso atual: <span className="font-semibold text-gray-900">70.5 kg</span>
                </p>
                <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 italic text-sm">
                Gráfico de linha do histórico de peso
                </div>
            </div>

            <div className="space-y-1">
                <p className="text-gray-700 font-medium">Progresso:</p>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                    className="bg-green-500 h-4 text-white text-xs text-center leading-4 rounded-full"
                    style={{ width: "50%" }}
                >
                    50%
                </div>
                </div>
            </div>
        </div>
    );
}

export default ObjectiveUser;
function FormRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4">
      <div className="w-full max-w-4xl max-sm:max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-12">
          <img src="assets/img/logo.png" alt="logo" className="w-44 mx-auto" />
          <h4 className="text-gray-300 text-base mt-6">Crie sua conta</h4>
        </div>

        <form>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Nome</label>
              <input
                name="name"
                type="text"
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Sobrenome</label>
              <input
                name="lname"
                type="text"
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu sobrenome"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">E-mail</label>
              <input
                name="email"
                type="email"
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Celular</label>
              <input
                name="number"
                type="tel"
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu número"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Senha</label>
              <input
                name="password"
                type="password"
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite sua senha"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Confirmar senha</label>
              <input
                name="cpassword"
                type="password"
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Confirme sua senha"
              />
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="mx-auto block w-full sm:w-auto py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
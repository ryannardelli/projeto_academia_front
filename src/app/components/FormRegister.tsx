"use client";

import { useState } from "react";
import { toast } from "react-toastify";

function FormRegister() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
  })

   const handleChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(formData.password !== formData.cpassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    try {
        const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.fname,
          lastName: formData.lname,
          email: formData.email,
          phone: formData.number,
          password: formData.password,
          role: "Aluno"
        }),
        });

        if(response.ok) {
          toast.success("Cadastro realizado com sucesso!");
          setFormData({
            fname: "",
            lname: "",
            email: "",
            number: "",
            password: "",
            cpassword: "",
        });
        } else {
        toast.error("Ocorreu um erro ao cadastrar. Tente novamente mais.");
      }
    } catch(e) {
      toast.error("Ocorreu um erro ao cadastrar. Tente novamente mais.");
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4">
      <div className="w-full max-w-4xl max-sm:max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-12">
          <img src="assets/img/logo.png" alt="logo" className="w-44 mx-auto" />
          <h4 className="text-gray-300 text-base mt-6">Crie sua conta</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Nome</label>
              <input
                name="fname"
                type="text"
                value={formData.fname}
                onChange={handleChange}
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Sobrenome</label>
              <input
                name="lname"
                type="text"
                value={formData.lname}
                onChange={handleChange}
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">E-mail</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Celular</label>
              <input
                name="number"
                type="tel"
                value={formData.number}
                onChange={handleChange}
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite seu número"
                required
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Senha</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">Confirmar senha</label>
              <input
                name="cpassword"
                type="password"
                value={formData.cpassword}
                onChange={handleChange}
                className="bg-gray-700 w-full text-white text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Confirme sua senha"
                required
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
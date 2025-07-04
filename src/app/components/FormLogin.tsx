"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    type JwtPayload = {
      sub: string;
      id: number;
      role: string;
      profileConfigured: string;
    };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const err = await res.json();
      toast.error(err.message || "Erro ao fazer login");
      return;
    }

    const data = await res.json();
    const token = data.token;

    Cookies.set("token", token, {
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    if(token) {
      toast.success("Login realizado com sucesso!");
      const decoded: JwtPayload = jwtDecode(token);
      console.log(decoded.profileConfigured);

      if(decoded.profileConfigured) {
        router.push("/dashboard");
        return;
      }

      router.push("/profile-setup");
    }
  } catch (err) {
    toast.error("Algo deu errado. Verifique seus dados e tente novamente.");
    console.log(err);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="py-6 px-4 bg-gray-800 rounded-xl shadow-lg">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-gray-700 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(0,0,0,0.6)] max-lg:mx-auto bg-gray-900">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="mb-12 text-center">
                <h1 className="text-white text-3xl font-bold">Bem-vindo de volta 💪</h1>
                <p className="text-gray-400 text-[15px] mt-4 leading-relaxed">
                  Faça login para acessar seus treinos personalizados e acompanhar sua evolução!
                </p>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">E-mail</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm text-white bg-gray-700 border border-gray-600 pl-4 pr-10 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Digite seu e-mail"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#aaa" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13 20 6.01V6H4zm0 12h16V8l-8 5-8-5v10z"/>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Senha</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full text-sm text-white bg-gray-700 border border-gray-600 pl-4 pr-10 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Digite sua senha"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#aaa" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-800"
                  />
                  <label htmlFor="remember-me" className="ml-3 text-sm text-gray-300">
                    Lembrar de mim
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-blue-500 hover:underline font-medium">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="http://localhost:8080/oauth2/authorization/google"
                  className="w-full py-2.5 px-4 cursor-pointer text-[15px] font-medium rounded-lg flex items-center justify-center gap-2 border border-gray-600 text-white hover:bg-gray-700 transition duration-200"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google icon"
                    className="w-5 h-5"
                  />
                  Continuar com Google
                </a>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-[15px] font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
                >
                  Entrar
                </button>
                <p className="text-sm mt-6 text-center text-gray-400">
                  Ainda não tem conta?
                  <a href="/register" className="text-blue-500 font-medium hover:underline ml-1">
                    Cadastre-se aqui
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="max-lg:mt-8">
            <img src="assets/img/screen-login.svg" alt="Imagem de login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;

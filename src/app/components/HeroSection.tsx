import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-primary text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transforme sua saúde com <br className="hidden md:block" />
          nossa academia online
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Descubra um novo jeito de se exercitar e cuidar da sua alimentação.
          Nossa plataforma oferece treinos personalizados, dietas equilibradas e
          acompanhamento profissional para você alcançar seus objetivos.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Saiba Mais
          </button>
          <button className="border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
            Inscreva-se
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
        {[
          "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://c.pxhere.com/photos/11/14/dumbbell_sport_weights_strength_training_weight_lifting_muscles_muscle_training_train-1376234.jpg!s",
          "https://images.pexels.com/videos/4754030/pexels-photo-4754030.jpeg?cs=srgb&dl=pexels-cottonbro-4754030.jpg&fm=jpg",
          "https://images.pexels.com/photos/4164519/pexels-photo-4164519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

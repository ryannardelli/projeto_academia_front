import React from "react";
import { LayoutGrid, Timer, BarChart3 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <LayoutGrid size={40} className="mx-auto mb-4" />,
      title: "Treinos personalizados",
      subtitle:
        "Treinos personalizados para atender às suas necessidades e objetivos específicos.",
      description:
        "Ajuste seu plano de treino com base no seu progresso e feedback.",
    },
    {
      icon: <Timer size={40} className="mx-auto mb-4" />,
      title: "Acompanhamento nutricional",
      subtitle:
        "Acompanhamento nutricional para otimizar sua dieta e resultados.",
      description:
        "Receba orientações de nutricionistas para uma alimentação equilibrada e saudável.",
    },
    {
      icon: <BarChart3 size={40} className="mx-auto mb-4" />,
      title: "Monitoramento de progresso",
      subtitle:
        "Monitore seu progresso e alcance suas metas de forma eficaz.",
      description:
        "Visualize seu desempenho e faça ajustes para melhorar continuamente.",
    },
  ];

  return (
    <section className="bg-neutral-900 text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Explore os recursos que transformam sua <br className="hidden md:block" />
          experiência de treino online.
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-2">{feature.subtitle}</p>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <a href="#" className="text-white font-semibold hover:underline">
                Saiba Mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

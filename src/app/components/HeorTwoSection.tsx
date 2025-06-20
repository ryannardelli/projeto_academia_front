function HeroTwoSection() {
 return(
    <section
        className="relative w-full h-auto md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 lg:px-16 py-16 md:py-32">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/12/313233-quais-treinos-de-academia-sao-recomendados-para-voce.jpg')"
            }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative flex flex-col gap-6 z-10 text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme sua rotina de treino
            </h1>
            <p className="text-lg md:text-xl">
                Cadastre-se agora e descubra como alcançar seus objetivos de forma prática e eficiente!
            </p>
           <div className="flex justify-center gap-4">
            <button className="border border-white bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-transparent hover:text-white transition duration-300">
                Inscreva-se
            </button>

            <button className="bg-transparent border border-white hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                Demonstração
            </button>
        </div>
        </div>
    </section>
 );
}

export default HeroTwoSection;
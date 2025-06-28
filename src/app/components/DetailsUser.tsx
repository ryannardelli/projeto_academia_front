function DetailsUser() {
  return (
<div className=" bg-blue-100 rounded-xl shadow-md p-4 text-center">
  <img
    src="https://storyblok-cdn.photoroom.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp"
    alt="Profile"
    className="w-20 h-20 mx-auto rounded-xl object-cover mb-2"
  />
  <h2 className="text-lg font-semibold text-gray-800">Alex Johnson</h2>

  <div className="border-t border-gray-300 my-4"></div>

  <div className="flex justify-around text-sm text-gray-700 font-medium">
    <div>
      <p className="text-xs text-gray-500">Altura</p>
      <p>180 <span className="text-gray-500">cm</span></p>
    </div>
    <div>
      <p className="text-xs text-gray-500">Peso</p>
      <p>75 <span className="text-gray-500">kg</span></p>
    </div>
    <div>
      <p className="text-xs text-gray-500">IMC</p>
      <p>23.1</p>
    </div>
  </div>

  <div className="border-t border-gray-300 my-4"></div>

  <p className="text-sm text-gray-700">
    <span className="text-xs text-gray-500 block">Objetivo</span>
    Ganhar massa muscular
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <p className="text-sm text-gray-700">
    <span className="text-xs text-gray-500 block">Classificação</span>
    Peso normal
  </p>
</div>

  );
}
export default DetailsUser;

const Presents = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1040px] w-full pt-[60px] pb-45 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col gap-10 mx-auto w-full justify-center">
          
          <div className="bg-black p-6 flex flex-col justify-start max-w-md">
            <h1 className="text-4xl text-white font-extrabold mb-5">
              Подарункові сертифікати
            </h1>
            <p className="bg-white p-4 mb-6 text-[17px]">
              Ви можете зробити чудовий подарунок для близької людини - допомогти
              відкрити її творчі здібності та втілити в життя її мрію.
              Придбайте подарунковий сертифікат на заняття з вокальної майстерності.
            </p>
            <button className="w-full text-center bg-[#ff00be] pt-3 pb-3 text-black font-semibold hover:bg-white transition duration-300">
              Придбати сертифікат
            </button>
          </div>

          <div className="bg-white p-5 flex flex-col items-center justify-center max-w-md">
            <img
              src="/present.webp"
              alt="Подарунковий сертифікат Вокал Кемп"
              className="max-h-85 object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presents;
const Presents = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1040px] w-ful flex flex-col pt-[60px] pb-45 mx-auto">
        <div className="flex flex-row gap-10 mx-auto">
          <div className="bg-white h-100 w-100 flex flex-col">
            <img
              src="/present.png"
              alt="Photo of the vocal teacher"
              className="h-85 object-cover mr-5 pt-5 pl-5"
            />
          </div>
          <div className="bg-black h-100 w-100 flex flex-col">
            <h1 className="text-4xl text-white font-extrabold pt-4 ml-10 mb-3">
              Подарункові сертифікати
            </h1>
            <p className="bg-white w-80 h-auto ml-10 mb-5 p-4 text-[17px]">
              Ви можете зробити чудовий подарунок для близької людини - допомогти
              відкрити її творчі здібності та втілити в життя її мрію.
              Придбайте подарунковий сертифікат на заняття з вокальної майстерності.
            </p>
            <button className="w-80 text-center bg-[#ff00be] pt-1 pb-1 text-black ml-10 hover:bg-white transition duration-300">
              Придбати сертифікат
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Presents;

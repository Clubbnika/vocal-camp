const Events = () => {
  return (
    <div className="w-ful h-full bg-gradient-to-b to-transparent from-black/70">
      <div className="max-w-[1040px] w-full flex flex-col pt-35 pb-35 mx-auto">
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-8 pt-5">
          Які заходи ми організовуємо?
        </h1>

        <div className="flex flex-row justify-center">
          <img
            src="/jekis.png"
            alt=""
            className="h-70 w-70 mt-3 ml-3 mr-10 border-6 border-white"
            />

          <img
            src="/kv.jpg"
            alt=""
            className="h-70 w-70 mt-3 ml-3 mr-10 border-6 border-white"
            />

          <img
            src="/street.png"
            alt=""
            className="h-70 w-70 mt-3 ml-3 mr-3 border-6 border-white"
            />

        </div>

        <div className="flex flex-row justify-center">
            <p className="w-70 text-black bg-white p-5 text-center mr-13">Виступи в закладах.</p>
          <p className="w-70 text-black bg-white p-5 text-center mr-13">Тематичні квартирники в нашій студії.</p>
          <p className="w-70 text-black bg-white p-5 text-center">Заняття та виступи під відкритим небом.</p>
        </div>
      </div>
    </div>
  );
};
export default Events;
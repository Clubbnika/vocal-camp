const Events = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black/65 to-transparent h-full">
      <div className="max-w-[1040px] w-full flex flex-col pt-35 pb-35 mx-auto">
        <h1 className="text-white font-extrabold text-4xl text-center mb-8">
          Які заходи ми організовуємо?
        </h1>

        <div className="flex flex-row justify-center">
          <img
            src="/jekis.png"
            alt=""
            className="h-70 w-70 m-3 mr-7 border-6 border-black"
            />

          <img
            src="/kv.jpg"
            alt=""
            className="h-70 w-70 m-3 border-6 border-black"
            />

          <img
            src="/street.png"
            alt=""
            className="h-70 w-70 m-3 mr-7 border-6 border-black"
            />

        </div>

        <div className="flex flex-row justify-center">
            <p className="w-70 text-white text-center mr-11 bg-black p-5">Виступи в закладах.</p>
          <p className="w-70 text-white text-center mr-11 bg-black p-5">Тематичні квартирники в нашій студії, на котрих учні можуть запросити друзів на свій виступ та вперше представити свої авторські пісні перед аудиторією.</p>
          <p className="w-70 text-white text-center bg-black p-5">Заняття та виступи під відкритим небом.</p>
        </div>
      </div>
    </div>
  );
};
export default Events;
const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-[1040px] w-full mx-auto overflow-x-hidden" style={{ marginTop: '1rem' }}>
      <div className="bg-black/70 pb-4 mb-6 flex flex-col items-center p-4">
        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Виступи наших учнів</h1>
        <div className="flex flex-col md:flex-row w-full mx-auto justify-center pr-4 pl-4 gap-4">
          <iframe
            src="https://www.youtube.com/embed/LASgA6FLTFM?si=thq_LwWOCRuVjiCm"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="https://www.youtube.com/embed/e73GfUXs70g?si=yVRwNlfiu3Qkg2eY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="https://www.youtube.com/embed/LWJOfSRnAx8?si=4THUvgxAQ9lTu9_Q"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px]"
          />
        </div>

        <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Пісні наших учнів</h1>
        <div className="flex flex-col md:flex-row w-full mx-auto justify-center pr-4 pl-4 gap-4 mb-4">
          <iframe
            src="https://www.youtube.com/embed/x08qh2KgO4g?si=pboSztda4e750CRt"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="https://www.youtube.com/embed/8CUN9F40ssc?si=zB7skyhXUUhvkQSp"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="https://www.youtube.com/embed/LeQuaHkKgvE?si=_r4PlolmoHZuMlEn"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px]"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full mx-auto justify-center pr-4 pl-4 gap-4">
          <iframe
            src="https://www.youtube.com/embed/oEq1VTqhWAI?si=qwBBfbw-yiy4iHVq"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="//www.youtube.com/embed/wdGEk00_WYI?si=asOduNQkVGQxjx5N"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
        </div>

      <h1 className="text-white font-extrabold text-4xl text-center mb-4 pt-4">Мюзикли, поставлені нашими учнями</h1>
        <div className="flex flex-col md:flex-row w-full mx-auto justify-center pr-4 pl-4 gap-4">
          <iframe
            src="//www.youtube.com/embed/ORQGY3T4AS8?si=Ajjm95udjowxwfDt"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="//www.youtube.com/embed/5uVoLDR-oK4?si=MLb7YLTBmns67rwA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px] mr-4"
          />
          <iframe
            src="//www.youtube.com/embed/rJtoYWTs3Ns?si=JetgljDo9Q7w3ain"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-1/3 h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

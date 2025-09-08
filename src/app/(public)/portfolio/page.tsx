const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-1040 w-full mx-auto">
      <div className="bg-black/70 pb-6 mb-35 flex flex-col items-center">
        <h1 className="text-white font-extrabold text-4xl text-center mb-8 pt-5">
          Виступи наших учнів
        </h1>
        <div className="flex flex-row w-full mx-auto justify-center pr-5 pl-5">
          <iframe
            src="https://www.youtube.com/embed/LASgA6FLTFM?si=thq_LwWOCRuVjiCm"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mr-8"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/e73GfUXs70g?si=yVRwNlfiu3Qkg2eY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mr-8"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/LWJOfSRnAx8?si=4THUvgxAQ9lTu9_Q"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="text-white font-extrabold text-4xl text-center mb-8 pt-5">
          Пісні наших учнів
        </h1>
        <div className="flex flex-row w-full mx-auto justify-center pr-5 pl-5 mb-5">
          <iframe
            src="https://www.youtube.com/embed/x08qh2KgO4g?si=pboSztda4e750CRt"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mr-8"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/8CUN9F40ssc?si=zB7skyhXUUhvkQSp"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mr-8"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/LeQuaHkKgvE?si=_r4PlolmoHZuMlEn"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className=""
          ></iframe>
        </div>

        <div className="flex flex-row w-full mx-auto justify-center pr-5 pl-5">
          <iframe
            src="https://www.youtube.com/embed/KXN4D68wydA?si=p8ds9pRr0gd0yadx"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mr-8"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/0IyHCxieY7A?si=5LlZSAbK065NLgb5"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mr-8"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/paVsNqfrIa8?si=w-hRcdcb4SfvHR1r"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[url('/phone.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="max-w-[1040px] w-full flex flex-col mt-35 items-center">
          <img
            src="/logo.png"
            alt="Vocal Camp logo"
            className="w-[300px]"
          />
          <button className="inline-block text-black bg-white px-4 py-2 rounded-3xl mb-80 mt-2 font-bold hover:shadow shadow-[#ff00be]">
            ЗАПИСАТИСЯ НА БЕЗКОШТОВНИЙ МАЙСТЕР-КЛАС!
          </button>

          <div
            className="text-white text-5xl font-extrabold text-center mt-[60px] mb-10"
            style={{ textShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}
          >
            Vocal Camp - більше ніж уроки вокалу
          </div>

          <p
            className="text-white/60 text-[16px] text-left self-start mb-80"
            style={{ textShadow: '0 0px 10px rgba(0, 0, 0, 1)' }}
          >
            На нашому курсі ти: <br />
            • звільнишся від внутрішніх бар’єрів, які заважають співати; <br />
            • працюватимеш над розширенням свого голосового діапазону; <br />
            • освоїш корисні вправи для вдосконалення вокальних навичок; <br />
            • навчишся виконувати популярні пісні; <br />
            • отримаєш справжнє задоволення від процесу співу!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
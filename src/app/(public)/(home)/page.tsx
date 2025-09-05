import About from "../about/page";

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
            className="text-white text-5xl font-extrabold self-start mt-[60px] mb-10"
            style={{ textShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}
          >
            Vocal Camp - більше ніж уроки вокалу
          </div>

          <p
            className="text-white text-[16px] text-left self-start mb-80"
            style={{ textShadow: '0 0px 10px rgba(0, 0, 0, 1)' }}
          >
            Навчання у нас - це: <br />
            • індивідуальні або групові заняття з вокалу; <br />
            • публічні виступи, квартирники та мюзикли; <br />
            • звільнення від внутрішніх бар’єрів, які заважають співати; <br />
            • праця над розширенням голосового діапазону; <br />
            • освоєння корисних вправ для вдосконалення вокальних навичок; <br />
            • справжнє задоволення від процесу співу!
          </p>

          <div className="mb-60">
            <p className="text-white text-2xl bg-black/60 p-3"
              style={{ textShadow: '0 0px 10px rgba(0, 0, 0, 1)' }}
            >
              Запрошуємо тебе на <span className="text-[#ff00be]">безкоштовний</span> пробний майстер-клас з вокалу.
              Наш формат - це не просто “музичні заняття з репетитором”, а можливість відкрити свою душу та здібності, які далеко заховані за буденними справами та проблемами.
            </p>

            <p className="text-white/70 text-lg mt-10 bg-black/60 p-3">
              Тут ти зможеш на власному досвіді відчути всю свою унікальність та дізнатися, що робить тебе кращим за інших, адже у нас немає ніяких рамок для творчості та у нас кожен може стати героєм своєї історії.
              Заняття триває півтори години. Ти зможеш спробувати унікальні методи та техніки, розроблені нашим викладачем, який є автором власної методики через яку пройшли вже більше 1000 учнів.
              Після заняття ти отримаєш результати, які тебе здивують, і захочеш залишитися з нами ще надовго.
              А ще майстер-клас з вокалу - це чудова можливість провести вечір з цікавими людьми або зі своєю парою, розважитися та відволіктися від буденних справ :)
            </p>
          </div>


        </div>
      </div>
<About />
    </div>
  );
};

export default HomePage;
const Production = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1040px] w-ful flex flex-col pt-[60px] pb-45 mx-auto">
        <h1 className="text-white inline-block font-extrabold text-4xl text-center mb-5 pt-5">
          Production
        </h1>

        <p className="text-white text-center pb-10">
          Наша команда професіоналів допоможе вам пройти весь шлях від написання першої пісні до її просування,
          ми пропонуємо повний цикл послуг, який допоможе вам досягти успіху в музичній індустрії.
          Довірте нам свої музичні ідеї, і ми допоможемо вам втілити їх у життя.
        </p>

        <div className="flex flex-row gap-10 mx-auto text-white">
          <p className="max-w-100">
          
            <span className="font-bold text-[#ff00be]">
              Написання пісень на замовлення: <br />
            </span>
            Наші досвідчені автори та композитори допоможуть вам створити пісню, яка ідеально підходить саме вам і вашому стилю. <br />
<br />
            <span className="font-bold text-[#ff00be]">
              Аранжування на будь-який смак: <br />
            </span>
            Від класичних до експериментальних стилів – ми знайдемо ідеальне звучання для вашої музики. <br />
<br />
            <span className="font-bold text-[#ff00be]">
              Запис і саунд-продюсування: <br />
            </span>
            Зведемо ваш трек до ідеального звучання, яке зачарує слухачів. <br />
<br />
            <span className="font-bold text-[#ff00be]">
              Комплексна маркетингова стратегія: <br />
            </span>
            Створимо ефективну кампанію та дамо вам практичні поради щодо просування вашої музики. <br />
<br />           
            <span className="font-bold text-[#ff00be]">
              Просування та дистриб&apos;юція: <br />
            </span>
            Публікація вашого треку на стримінгові сервіси. Розкрутка на музичних платформах.
          
          </p>

          <form className="h-100 w-100 flex flex-col bg-white text-black">
            <p>Якщо бажаєте дізнатися деталі, заповніть будь ласка анкету та ми надішлемо вам додаткову інформацію :)</p>
            <input type="text" name="Name" id="1" className="border-1" />
          </form>
        </div>

      </div>
    </div>
  );
};
export default Production;
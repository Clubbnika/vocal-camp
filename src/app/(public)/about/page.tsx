const About = () => {
  return (
    <div className="bg-white w-full">
      <div className="bg-white max-w-[1040px] w-full flex flex-col mt-[35px] mx-auto">
        <div className="flex flex-row w-full items-center justify-center mt-20">
      <img
        src="/35.jpg"
        alt="Photo of the vocal teacher"
        className="h-100 object-cover mr-5"
        />

        <div className="bg-black h-100 w-100 flex flex-col">
          <h1 className="text-3xl text-white font-extrabold pt-4 ml-10 mb-2">Для кого підходить наш курс?</h1>
          <p className="bg-white w-80 h-auto ml-10 mb-4 p-4 text-sm">
            - Для тих, хто хоче по декілька годин натиждень весело проводити час в компанії цікавих людей; <br />
          - Для тих, кому подобається співати; <br />
          - Для тих, хто мріє побудувати вокальну кар’єру; <br />
          - Для тих, хто завжди мріяв співати, але вважав, щодля цього потрібні особливі здібності (спойлер: це не так, потрібен лише хороший викладач, велике бажання та багато практики).
        </p>
      </div>

        </div>
        <div className="flex flex-row w-full items-center justify-center">
          <div className="bg-gradient-to-b to-transparent from-[#ff00be]/65 h-30 w-100 mr-5 flex flex-col"></div>
          <div className="bg-gradient-to-b to-transparent from-[#ff00be]/65 h-30 w-100 flex flex-col"></div>

        </div>
      </div>



<div className="bg-gradient-to-b h-full from-transparent to-[#ff00be]/50">
      <div className="flex flex-row w-full items-center justify-center pb-35">

          <div className="bg-black mt-40 mr-5 h-100 w-100 flex flex-col">
            <h1 className="text-3xl text-white font-extrabold pt-4 ml-10 mb-2">Про курс</h1>
            <p className="bg-white w-80 h-auto ml-10 mr-4 mb-4 p-4 text-sm">
              На заняттях ми робимо вправи, які не тільки допоможуть вам заспівати, а і розслабитись та почати почувати себе комфортно.
              Наш викладач даватиме вам цікаві інтерактивні завдання, які виявлять ваш потенціал та подарують цікавість до процесу.
              У нас супер неформальна та дружня атмосфера, ми всі спілкуємося на ти. Більшість учнів стають нашими друзями на довгий час і це ще більше робить нашу академію комфортним місцем для людей, які до нас приходять :)
            </p>
                      <button className="w-80 text-center bg-[#ff00be] pt-1 pb-1 text-black ml-10 hover:shadow shadow-[#fff]">
  Переглянути прайс
  </button>
          </div>

<div>

                  <img
            src="/8.jpg"
            alt="Photo of the vocal teacher"
            className="h-100 object-cover mt-40"
          />

        </div>
    </div >

</div>
    </div>
  );
};
export default About;
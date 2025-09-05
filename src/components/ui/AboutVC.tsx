const AboutVC = () => {
  return (
    <div className="bg-black w-full">
      <div className="max-w-[1040px] w-full flex flex-col p-10 mx-auto items-center">
      <div
        className="text-[#ff00be] text-5xl font-extrabold self-start mt-[60px] mb-10"
        style={{ textShadow: '0 0px 20px rgba(0, 0, 0, 1)' }}
        >
        Vocal Camp - більше ніж уроки вокалу
      </div>

      <p
        className="text-white text-[16px] text-left self-start mb-10"
        style={{ textShadow: '0 0px 10px rgba(0, 0, 0, 1)' }}
      >
        Навчання у нас - це: <br />
        - ㅤіндивідуальні або групові заняття з вокалу; <br />
        - ㅤпублічні виступи, квартирники та мюзикли; <br />
        - ㅤзвільнення від внутрішніх бар’єрів, які заважають співати; <br />
        - ㅤпраця над розширенням голосового діапазону; <br />
        - ㅤосвоєння корисних вправ для вдосконалення вокальних навичок; <br />
        - ㅤсправжнє задоволення від процесу співу!
      </p>
    </div>
        </div>
  );
}

export default AboutVC;
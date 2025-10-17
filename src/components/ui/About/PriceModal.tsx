import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PriceModalProps {
  onClose: () => void;
}

const PriceModal = ({ onClose }: PriceModalProps) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-4/5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ціни</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-950"
          >
            <X />
          </button>
        </div>

        <div className="flex w-full bg-gray-200 relative mb-4 max-w-1100 mx-auto">
          <button
            onClick={() => handleTabChange(1)}
            className={`flex-1 py-2 px-4 text-lg font-semibold`}
          >
            Групові заняття
          </button>
          <button
            onClick={() => handleTabChange(2)}
            className={`flex-1 py-2 px-4 text-lg font-semibold`}
          >
            Індивідуальні заняття
          </button>
          <div
            className={`absolute bottom-0 left-0 w-1/2 h-[3px] bg-[#ff00be] transition-all duration-300 ${selectedTab === 1 ? 'left-0' : 'left-1/2'}`}
          />
        </div>

        {selectedTab === 1 && (
          <div className='flex flex-col mx-10'>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col'>
                <p className='font-bold'>Курс групових занять<br /> (12 тижнів / до 48 занять)<br /></p>
                <p className='text-sm mt-2'>Заняття тривають по дві години та проводяться
                  4 рази на тиждень.</p>
                <span className='text-gray-400 text-sm mt-2'>Знижка діє при покупці курсу
                  в день
                  пробного майстер-класу*</span>
              </div>

              <div>
                <p className='font-bold line-through text-gray-400'>15 000 грн</p>
                <p className='font-bold'>10 000 грн</p>
              </div>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>


            <div className='flex flex-row justify-between items-center mt-2'>
              <div className='flex flex-col'>
                <p className='font-bold'>Місяць групових занять<br /> (4 тижні / до 16 занять)<br /></p>
                <p className='text-sm mt-2'>Заняття тривають по дві години та проводяться
                  4 рази на тиждень.</p>
                <span className='text-gray-400 text-sm mt-2'>Знижка діє при покупці курсу
                  в день
                  пробного майстер-класу*</span>
              </div>

              <div>
                <p className='font-bold line-through text-gray-400'>5 000 грн</p>
                <p className='font-bold'>3 300 грн</p>
              </div>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>
            <div className='flex flex-row justify-between items-center'>
              <p className='mt-2 font-bold'>Завжди пропонуємо додаткові знижки для військових</p>
              <p className='font-bold'>від 10%</p>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>

            <div className='flex flex-row justify-between items-center'>
              <p className='mt-2'>Протягом курсу проводимо тематичні квартирники та виступи.</p>
            </div>
            
          </div>
        )}
        {selectedTab === 2 && (
          <div className='mx-10 flex flex-col'>

            <p className='font-bold'>Вокальний майстер:</p>

            <div className='flex flex-row justify-between mt-2'>
              <p>1 година індивідуального заняття</p>
              <p className='font-bold'>1 500 грн</p>
            </div>

            <div className='flex flex-row justify-between mt-2'>
              <p>Абонемент на 5 індивідуальних занять</p>
              <p className='font-bold'>7 000 грн</p>
            </div>


            <div className='flex flex-row justify-between mt-2'>
              <p>Абонемент на 10 індивідуальних занять</p>
              <p className='font-bold'>10 000 грн</p>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>

            <p className='font-bold mt-2'>Звичайний викладач:</p>

            <div className='flex flex-row justify-between mt-2'>
              <p>1 година індивідуального заняття</p>
              <p className='font-bold'>1 000 грн</p>
            </div>

            <div className='flex flex-row justify-between mt-2'>
              <p>Абонемент на 5 індивідуальних занять</p>
              <p className='font-bold'>4 500 грн</p>
            </div>


            <div className='flex flex-row justify-between mt-2'>
              <p>Абонемент на 10 індивідуальних занять</p>
              <p className='font-bold'>7 000 грн</p>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>

            <div className='flex flex-row justify-between items-center'>
              <p className='mt-2 font-bold'>Завжди пропонуємо додаткові знижки для військових.</p>
              <p className='font-bold'>від 10%</p>
            </div>

            <div className='w-full h-[1px] bg-gray-200 mt-2'></div>

            <div className='flex flex-row justify-between items-center'>
              <p className='mt-2'>Зручний для вас час та тривалість (одна або дві години) занять ви обираєте самостійно з викладачем.</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default PriceModal;
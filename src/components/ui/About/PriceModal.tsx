import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PriceModalProps {
  onClose: () => void;
}

const PriceModal = ({ onClose }: PriceModalProps) => {
  const [selectedTab, setSelectedTab] = useState(1); // Стан для вибору вкладки

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

        {/* Кнопки вкладок */}
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

        {/* Контент вкладки */}
        {selectedTab === 1 && (
          <div className='flex flex-col mx-10'>

            <div className='flex flex-row justify-between items-center'>
              <p>Курс групових занять (3 місяці)</p>
              <div>
                <p className='font-bold line-through text-gray-400'>15 000 грн</p>
                <p className='font-bold'>10 000 грн</p>
              </div>
            </div>

            <div>
              <p>Знижка діє при покупці курсу<br />
              в день пробного майстер-класу*</p>

              <p className='mt-2'>Завжди пропонуємо додаткові знижки для <span className='font-bold'>військових*</span></p>
            </div>
          </div>
        )}
        {selectedTab === 2 && (
          <div>
            <p>Тут можна додати інформацію про додаткові опції...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceModal;
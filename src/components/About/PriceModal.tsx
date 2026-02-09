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
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-3 sm:p-0 overflow-y-auto custom-scrollbar">
      <div className="bg-white p-5 sm:p-6 rounded-lg w-full sm:w-4/5 max-w-5xl max-h-[96vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">ПРАЙС</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-950 p-1"
            aria-label="Закрити"
          >
            <X size={28} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex w-full bg-gray-200 relative mb-4 sm:mb-5 max-w-[1100px] mx-auto">
          <button
            onClick={() => handleTabChange(1)}
            className={`flex-1 py-4 sm:py-5 px-3 sm:px-4 text-base sm:text-lg font-semibold transition-colors ${
              selectedTab === 1 ? 'text-[#ff00be]' : 'text-gray-700'
            }`}
          >
            Групові заняття
          </button>
          <button
            onClick={() => handleTabChange(2)}
            className={`flex-1 py-4 sm:py-5 px-3 sm:px-4 text-base sm:text-lg font-semibold transition-colors ${
              selectedTab === 2 ? 'text-[#ff00be]' : 'text-gray-700'
            }`}
          >
            Індивідуальні заняття
          </button>
          <div
            className={`absolute bottom-0 h-[3px] bg-[#ff00be] transition-all duration-300 ${
              selectedTab === 1 ? 'left-0 w-1/2' : 'left-1/2 w-1/2'
            }`}
          />
        </div>

        {/* Content */}
        {selectedTab === 1 && (
          <div className="flex flex-col space-y-2 sm:space-y-3"> {/* ← зменшено з 3-4 до 2-3 */}
            {/* 12 тижнів */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/4 p-5 sm:p-7 rounded gap-4">
              <div className="flex flex-col">
                <p className="font-bold text-base sm:text-lg">
                  Курс групових занять<br className="sm:hidden" /> (12 тижнів / до 48 занять)
                </p>
                <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  Знижка діє при покупці курсу в день безкоштовного пробного майстер-класу*
                </span>
              </div>
              <div className="text-right sm:text-right whitespace-nowrap">
                <p className="font-bold line-through text-gray-400 text-base sm:text-lg">15 000 грн</p>
                <p className="font-bold text-xl sm:text-2xl text-[#ff00be]">10 000 грн</p>
              </div>
            </div>

            {/* Місяць */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/4 p-5 sm:p-7 rounded gap-4">
              <div className="flex flex-col">
                <p className="font-bold text-base sm:text-lg">
                  Місяць групових занять<br className="sm:hidden" /> (4 тижні / до 16 занять)
                </p>
                <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  Знижка діє при покупці курсу в день пробного майстер-класу*
                </span>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="font-bold line-through text-gray-400 text-base sm:text-lg">5 000 грн</p>
                <p className="font-bold text-xl sm:text-2xl text-[#ff00be]">3 500 грн</p>
              </div>
            </div>

            {/* Знижки для військових */}
            <div className="flex justify-between items-center bg-black/4 p-5 sm:p-7 rounded">
              <p className="font-bold text-base sm:text-lg">Завжди пропонуємо додаткові знижки для військових</p>
              <p className="text-2xl sm:text-3xl font-black text-[#ff00be]">%</p>
            </div>

            <div className="py-4 sm:py-6 px-2 sm:px-5 text-xs sm:text-sm text-gray-400"> {/* ← зменшено py-7 → py-6 */}
              <ul className="space-y-1.5"> {/* ← зменшено space-y-2 → 1.5 */}
                <li><strong>Розклад групових занять:</strong></li>
                <li>
                  Четвер — 19:00, П&apos;ятниця — 17:00, Субота — 19:00, Неділя — 19:00.
                </li>
                <li className="mt-2">• Кожне заняття триває дві години.</li>
                <li>• Основні заняття — раз на тиждень, але є бонус у вигляді можливості відвідування всіх днів (до 4 разів на тиждень).</li>
                <li>• Надаємо можливість приходити в студію на самостійні репетиції.</li>
                <li>• Протягом курсу проводимо тематичні квартирники та виступи.</li>
                <li>• Є можливість оплати частинами.</li>
              </ul>
            </div>
          </div>
        )}

        {selectedTab === 2 && (
          <div className="px-2 sm:px-10 flex flex-col space-y-4 sm:space-y-5 text-sm sm:text-base"> {/* ← зменшено з 6-7 до 4-5 */}
            <div>
              <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Вокальний майстер:</p> {/* ← зменшено mb-3 → mb-2/3 */}
              <div className="space-y-2 sm:space-y-3"> {/* ← зменшено з 3-4 */}
                <div className="flex justify-between">
                  <span>1 година індивідуального заняття</span>
                  <span className="font-bold">1 500 грн</span>
                </div>
                <div className="flex justify-between">
                  <span>Абонемент на 5 індивідуальних занять</span>
                  <span className="font-bold">7 000 грн</span>
                </div>
                <div className="flex justify-between">
                  <span>Абонемент на 10 індивідуальних занять</span>
                  <span className="font-bold">10 000 грн</span>
                </div>
              </div>
            </div>

<div className='bg-black/7 h-[1px]'></div>

            <div>
              <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Звичайний викладач:</p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between">
                  <span>1 година індивідуального заняття</span>
                  <span className="font-bold">1 000 грн</span>
                </div>
                <div className="flex justify-between">
                  <span>Абонемент на 5 індивідуальних занять</span>
                  <span className="font-bold">4 500 грн</span>
                </div>
                <div className="flex justify-between">
                  <span>Абонемент на 10 індивідуальних занять</span>
                  <span className="font-bold">7 000 грн</span>
                </div>
              </div>
            </div>

<div className='bg-black/7 h-[1px]'></div>

            <div className="flex justify-between items-center">
              <p className="font-bold">Завжди пропонуємо додаткові знижки для військових.</p>
              <p className="text-3xl font-black text-[#ff00be]">%</p>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm italic">
              Зручний для вас час та тривалість (одна або дві години) занять ви обираєте самостійно з викладачем.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceModal;
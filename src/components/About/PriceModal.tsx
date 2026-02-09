// PriceModal.tsx
import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import CartModal from '../ui/CartModal';

interface PriceModalProps {
  onClose: () => void;
}

const PriceModal = ({ onClose }: PriceModalProps) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items, addItem, decreaseItem, getItemCount } = useCartStore();

  const handleTabChange = (tab: number) => {
    setSelectedTab(tab);
  };

  const getQuantity = (id: string) => {
    return items.find((i) => i.id === id)?.quantity ?? 0;
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/70 flex justify-center items-center z-50 p-3 sm:p-0 overflow-y-auto custom-scrollbar">
        <div className="bg-white p-5 sm:p-6 rounded-lg w-full sm:w-4/5 max-w-5xl max-h-[96vh] sm:max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold">ПРАЙС</h2>
              {getItemCount() > 0 && (
                <div className="text-sm bg-[#ff00be]/10 text-[#ff00be] px-2.5 py-1 rounded-full font-medium">
                  У кошику: {getItemCount()}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-400 hover:text-[#ff00be] p-1 relative"
                aria-label="Перейти до кошика"
                suppressHydrationWarning
              >
                <ShoppingCart size={24} />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff00be] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-950 p-1"
                aria-label="Закрити"
              >
                <X size={28} />
              </button>
            </div>
          </div>

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

          {selectedTab === 1 && (
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/4 p-5 sm:p-6 rounded gap-4">
                <div className="flex flex-col">
                  <p className="font-bold text-base sm:text-lg">
                    Курс групових занять<br className="sm:hidden" /> (12 тижнів / до 48 занять)
                  </p>
                  <span className="text-gray-500 text-xs sm:text-sm mt-1">
                    Знижка діє при покупці в день пробного майстер-класу*
                  </span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-right whitespace-nowrap">
                    <p className="font-bold line-through text-gray-400 text-base sm:text-lg">15 000 грн</p>
                    <p className="font-bold text-xl sm:text-2xl text-[#ff00be]">10 000 грн</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {getQuantity('group-12w') > 0 && (
                      <button
                        onClick={() => decreaseItem('group-12w')}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                      >
                        <Minus size={18} />
                      </button>
                    )}

                    {getQuantity('group-12w') > 0 ? (
                      <span className="min-w-[36px] text-center font-semibold text-lg">
                        {getQuantity('group-12w')}
                      </span>
                    ) : (
                      <button
                        onClick={() => addItem({ id: 'group-12w', name: 'Курс 12 тижнів', price: 10000 })}
                        className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                      >
                        <Plus size={18} />
                        Додати
                      </button>
                    )}

                    {getQuantity('group-12w') > 0 && (
                      <button
                        onClick={() => addItem({ id: 'group-12w', name: 'Курс 12 тижнів', price: 10000 })}
                        className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                      >
                        <Plus size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/4 p-5 sm:p-6 rounded gap-4">
                <div className="flex flex-col">
                  <p className="font-bold text-base sm:text-lg">
                    Місяць групових занять<br className="sm:hidden" /> (4 тижні / до 16 занять)
                  </p>
                  <span className="text-gray-500 text-xs sm:text-sm mt-1">
                    Знижка діє при покупці в день пробного майстер-класу*
                  </span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-right whitespace-nowrap">
                    <p className="font-bold line-through text-gray-400 text-base sm:text-lg">5 000 грн</p>
                    <p className="font-bold text-xl sm:text-2xl text-[#ff00be]">3 500 грн</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {getQuantity('group-1m') > 0 && (
                      <button
                        onClick={() => decreaseItem('group-1m')}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                      >
                        <Minus size={18} />
                      </button>
                    )}

                    {getQuantity('group-1m') > 0 ? (
                      <span className="min-w-[36px] text-center font-semibold text-lg">
                        {getQuantity('group-1m')}
                      </span>
                    ) : (
                      <button
                        onClick={() => addItem({ id: 'group-1m', name: 'Місяць групових', price: 3500 })}
                        className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                      >
                        <Plus size={18} />
                        Додати
                      </button>
                    )}

                    {getQuantity('group-1m') > 0 && (
                      <button
                        onClick={() => addItem({ id: 'group-1m', name: 'Місяць групових', price: 3500 })}
                        className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                      >
                        <Plus size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-black/4 p-5 sm:p-6 rounded">
                <p className="font-bold text-base sm:text-lg">Завжди пропонуємо додаткові знижки для військових</p>
                <p className="text-2xl sm:text-3xl font-black text-[#ff00be]">%</p>
              </div>

              <div className="py-4 sm:py-6 px-2 sm:px-5 text-xs sm:text-sm text-gray-500">
                <ul className="space-y-1.5">
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
            <div className="px-2 sm:px-10 flex flex-col space-y-5 text-sm sm:text-base">
              <div>
                <p className="font-bold text-lg sm:text-xl mb-3">Вокальний майстер:</p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span>1 година індивідуального заняття</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold whitespace-nowrap">1 500 грн</span>

                      <div className="flex items-center gap-2">
                        {getQuantity('master-1h') > 0 && (
                          <button
                            onClick={() => decreaseItem('master-1h')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                        )}

                        {getQuantity('master-1h') > 0 ? (
                          <span className="min-w-[36px] text-center font-semibold text-lg">
                            {getQuantity('master-1h')}
                          </span>
                        ) : (
                          <button
                            onClick={() => addItem({ id: 'master-1h', name: '1 год — Вокальний майстер', price: 1500 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                            Додати
                          </button>
                        )}

                        {getQuantity('master-1h') > 0 && (
                          <button
                            onClick={() => addItem({ id: 'master-1h', name: '1 год — Вокальний майстер', price: 1500 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span>Абонемент на 5 індивідуальних занять</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold whitespace-nowrap">7 000 грн</span>

                      <div className="flex items-center gap-2">
                        {getQuantity('master-5') > 0 && (
                          <button
                            onClick={() => decreaseItem('master-5')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                        )}

                        {getQuantity('master-5') > 0 ? (
                          <span className="min-w-[36px] text-center font-semibold text-lg">
                            {getQuantity('master-5')}
                          </span>
                        ) : (
                          <button
                            onClick={() => addItem({ id: 'master-5', name: 'Абонемент 5 — Вокальний майстер', price: 7000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                            Додати
                          </button>
                        )}

                        {getQuantity('master-5') > 0 && (
                          <button
                            onClick={() => addItem({ id: 'master-5', name: 'Абонемент 5 — Вокальний майстер', price: 7000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span>Абонемент на 10 індивідуальних занять</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold whitespace-nowrap">10 000 грн</span>

                      <div className="flex items-center gap-2">
                        {getQuantity('master-10') > 0 && (
                          <button
                            onClick={() => decreaseItem('master-10')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                        )}

                        {getQuantity('master-10') > 0 ? (
                          <span className="min-w-[36px] text-center font-semibold text-lg">
                            {getQuantity('master-10')}
                          </span>
                        ) : (
                          <button
                            onClick={() => addItem({ id: 'master-10', name: 'Абонемент 10 — Вокальний майстер', price: 10000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                            Додати
                          </button>
                        )}

                        {getQuantity('master-10') > 0 && (
                          <button
                            onClick={() => addItem({ id: 'master-10', name: 'Абонемент 10 — Вокальний майстер', price: 10000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/7 h-[1px]" />

              <div>
                <p className="font-bold text-lg sm:text-xl mb-3">Звичайний викладач:</p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span>1 година індивідуального заняття</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold whitespace-nowrap">1 000 грн</span>

                      <div className="flex items-center gap-2">
                        {getQuantity('regular-1h') > 0 && (
                          <button
                            onClick={() => decreaseItem('regular-1h')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                        )}

                        {getQuantity('regular-1h') > 0 ? (
                          <span className="min-w-[36px] text-center font-semibold text-lg">
                            {getQuantity('regular-1h')}
                          </span>
                        ) : (
                          <button
                            onClick={() => addItem({ id: 'regular-1h', name: '1 год — Звичайний викладач', price: 1000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                            Додати
                          </button>
                        )}

                        {getQuantity('regular-1h') > 0 && (
                          <button
                            onClick={() => addItem({ id: 'regular-1h', name: '1 год — Звичайний викладач', price: 1000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span>Абонемент на 5 індивідуальних занять</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold whitespace-nowrap">4 500 грн</span>

                      <div className="flex items-center gap-2">
                        {getQuantity('regular-5') > 0 && (
                          <button
                            onClick={() => decreaseItem('regular-5')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                        )}

                        {getQuantity('regular-5') > 0 ? (
                          <span className="min-w-[36px] text-center font-semibold text-lg">
                            {getQuantity('regular-5')}
                          </span>
                        ) : (
                          <button
                            onClick={() => addItem({ id: 'regular-5', name: 'Абонемент 5 — Звичайний викладач', price: 4500 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                            Додати
                          </button>
                        )}

                        {getQuantity('regular-5') > 0 && (
                          <button
                            onClick={() => addItem({ id: 'regular-5', name: 'Абонемент 5 — Звичайний викладач', price: 4500 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span>Абонемент на 10 індивідуальних занять</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold whitespace-nowrap">7 000 грн</span>

                      <div className="flex items-center gap-2">
                        {getQuantity('regular-10') > 0 && (
                          <button
                            onClick={() => decreaseItem('regular-10')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                        )}

                        {getQuantity('regular-10') > 0 ? (
                          <span className="min-w-[36px] text-center font-semibold text-lg">
                            {getQuantity('regular-10')}
                          </span>
                        ) : (
                          <button
                            onClick={() => addItem({ id: 'regular-10', name: 'Абонемент 10 — Звичайний викладач', price: 7000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                            Додати
                          </button>
                        )}

                        {getQuantity('regular-10') > 0 && (
                          <button
                            onClick={() => addItem({ id: 'regular-10', name: 'Абонемент 10 — Звичайний викладач', price: 7000 })}
                            className="bg-[#ff00be] hover:bg-[#d900a3] text-white w-9 h-9 rounded flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/7 h-[1px]" />

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

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default PriceModal;
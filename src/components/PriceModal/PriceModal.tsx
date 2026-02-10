import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import CartModal from '../CartModal/CartModal';
import { GROUP_PLANS, INDIVIDUAL_PLANS, type BasePlan } from './priceData';
import { styles } from './PriceModal.styles';

const PriceModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { items, addItem, decreaseItem, getItemCount } = useCartStore();

  useEffect(() => setMounted(true), []);

  const getQty = (id: string) => items.find((i) => i.id === id)?.quantity ?? 0;
  const itemCount = mounted ? getItemCount() : 0;

  const ActionButtons = ({ item, isSmall = false }: { item: BasePlan; isSmall?: boolean }) => {
    const qty = getQty(item.id);
    if (qty > 0) {
      return (
        <div className="flex items-center gap-2">
          <button onClick={() => decreaseItem(item.id)} className={styles.qtyBtn}>
            <Minus size={18} />
          </button>
          <span className="min-w-[36px] text-center font-semibold text-lg">{qty}</span>
          <button onClick={() => addItem(item)} className={styles.primaryBtn}>
            <Plus size={isSmall ? 16 : 18} />
          </button>
        </div>
      );
    }
    return (
      <button onClick={() => addItem(item)} className={isSmall ? styles.addBtnSmall : styles.addBtn}>
        <Plus size={isSmall ? 16 : 18} /> Додати
      </button>
    );
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modalCard}>
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold uppercase">ПРАЙС</h2>
              {itemCount > 0 && (
                <div className="text-sm bg-[#ff00be]/10 text-[#ff00be] px-2.5 py-1 rounded-full font-medium">
                  У кошику: {itemCount}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsCartOpen(true)} className="text-gray-400 hover:text-[#ff00be] p-1 relative">
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff00be] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-950 p-1"><X size={28} /></button>
            </div>
          </div>

          <div className="flex w-full bg-gray-200 relative mb-4 sm:mb-5 max-w-[1100px] mx-auto">
            <button onClick={() => setSelectedTab(1)} className={styles.tabTrigger(selectedTab === 1)}>Групові заняття</button>
            <button onClick={() => setSelectedTab(2)} className={styles.tabTrigger(selectedTab === 2)}>Індивідуальні заняття</button>
            <div className={styles.tabUnderline(selectedTab)} />
          </div>

          {selectedTab === 1 && (
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {GROUP_PLANS.map((plan) => (
                <div key={plan.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-black/5 p-5 sm:p-6 rounded gap-4">
                  <div className="flex flex-col">
                    <p className="font-bold text-base sm:text-lg">
                      {plan.name}<br className="sm:hidden" /> {plan.id === 'group-12w' ? '(12 тижнів / до 48 занять)' : '(4 тижні / до 16 занять)'}
                    </p>
                    <span className="text-gray-500 text-xs sm:text-sm mt-1">Знижка діє при покупці в день пробного майстер-класу*</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-right whitespace-nowrap">
                      <p className="font-bold line-through text-gray-400 text-base sm:text-lg">{plan.oldPrice} грн</p>
                      <p className="font-bold text-xl sm:text-2xl text-[#ff00be]">{plan.price} грн</p>
                    </div>
                    <ActionButtons item={plan} />
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center bg-black/5 p-5 sm:p-6 rounded">
                <p className="font-bold text-base sm:text-lg">Завжди пропонуємо додаткові знижки для військових</p>
                <p className="text-2xl sm:text-3xl font-black text-[#ff00be]">%</p>
              </div>

              <div className="py-4 sm:py-6 px-2 sm:px-5 text-xs sm:text-sm text-gray-500">
                <ul className="space-y-1.5">
                  <li><strong>Розклад групових занять:</strong></li>
                  <li>Четвер — 19:00, П&apos;ятниця — 17:00, Субота — 19:00, Неділя — 19:00.</li>
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
              {INDIVIDUAL_PLANS.map((cat, idx) => (
                <React.Fragment key={cat.title}>
                  <div>
                    <p className="font-bold text-lg sm:text-xl mb-3">{cat.title}</p>
                    <div className="space-y-4">
                      {cat.items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <span>{item.label}</span>
                          <div className="flex items-center gap-3">
                            <span className="font-bold whitespace-nowrap">{item.price} грн</span>
                            <ActionButtons item={item} isSmall />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {idx === 0 && <div className="bg-black/10 h-[1px]" />}
                </React.Fragment>
              ))}
              <div className="bg-black/10 h-[1px]" />
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
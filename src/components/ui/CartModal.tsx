'use client';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, getTotal, getItemCount, removeItem } = useCartStore();

  if (!isOpen) return null;

  const total = getTotal();

  const handlePay = async () => {
    if (items.length === 0 || total <= 0) return;

    try {
      const response = await fetch('/api/wayforpay/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items, total }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        alert('Помилка підготовки платежу: ' + (result.error || 'Спробуйте пізніше'));
        console.error('WayForPay API error:', result.error);
        return;
      }

      const { data } = result as {
        success: boolean;
        data: Record<string, string | string[]>;
      };

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://secure.wayforpay.com/pay';

      const addField = (name: string, value: string | string[]) => {
        const values = Array.isArray(value) ? value : [value];
        values.forEach((val) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = val;
          form.appendChild(input);
        });
      };

      Object.entries(data).forEach(([key, value]) => {
        addField(key, value);
      });

      addField('language', 'UA');

      document.body.appendChild(form);
      form.submit();

      setTimeout(() => {
        document.body.removeChild(form);
      }, 500);
    } catch (error) {
      console.error('Помилка при створенні платежу:', error);
      alert('Не вдалося підключитися до WayForPay. Перевірте інтернет або спробуйте пізніше.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white flex justify-between items-center p-5 sm:p-6 border-b">
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} className="text-[#ff00be]" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Кошик {getItemCount() > 0 && `(${getItemCount()})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Закрити"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              <ShoppingCart size={64} className="mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">Кошик порожній</p>
              <p className="text-sm mt-2">Додайте заняття з прайсу, щоб продовжити</p>
            </div>
          ) : (
            <>
              <div className="space-y-5 mb-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b last:border-b-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Кількість: <span className="font-semibold">{item.quantity}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      <p className="font-bold text-[#ff00be] text-lg whitespace-nowrap">
                        {(item.price * item.quantity).toLocaleString('uk-UA')} грн
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                        aria-label="Видалити товар"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-xl font-bold mb-8 border-t pt-6">
                <span className="text-gray-900">Разом:</span>
                <span className="text-[#ff00be] text-2xl">
                  {total.toLocaleString('uk-UA')} грн
                </span>
              </div>

              <button
                onClick={handlePay}
                disabled={total <= 0}
                className="w-full bg-[#ff00be] hover:bg-[#d900a3] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff00be]/50"
              >
                Оплатити {total.toLocaleString('uk-UA')} грн
              </button>
            </>
          )}
        </div>

        <div className="p-5 sm:p-6 border-t text-center text-sm text-gray-500 bg-gray-50">
          Натисніть поза вікном або на хрестик, щоб закрити
        </div>
      </div>
    </div>
  );
}
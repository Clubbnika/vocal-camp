'use client';

import { X } from 'lucide-react';

type PolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PolicyModal({ isOpen, onClose }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6 overflow-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-black/95 text-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-gray-800/70"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закриття */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-4xl text-gray-400 hover:text-[#ff00be] transition-colors z-10 focus:outline-none"
          aria-label="Закрити"
        >
          <X size={32} strokeWidth={2.5} />
        </button>

        {/* Контент */}
        <div className="p-6 md:p-10 lg:p-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-[#ff00be]">
            ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ VOCAL CAMP
          </h1>
          <p className="text-center text-gray-400 italic mb-10">
            (Остання редакція: Грудень 2025 р.)
          </p>

          <div className="space-y-10 text-gray-200 leading-relaxed text-base">
            <p>
              Ця Політика конфіденційності (далі – ПК) регулює порядок збору, обробки та захисту персональних даних користувачів вебсайту <strong>vocalcamp.com</strong> (далі – «Сайт»).
            </p>

            <p>
              Ми поважаємо вашу конфіденційність та зобов&apos;язуємося захищати ваші персональні дані.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              1. Загальні Положення та Оператор Даних
            </h2>

            <h3 className="text-lg font-semibold mb-3">1.1. Оператор персональних даних</h3>
            <p className="mb-4">
              Оператором та власником цього вебсайту, а також відповідальною особою за збір та обробку ваших персональних даних є:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Фізична особа-підприємець Охтень Вероніка Сергіївна (далі – «Оператор» або «Академія»).</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">1.2. Юридичні основи</h3>
            <p>
              Обробка персональних даних здійснюється відповідно до вимог Закону України «Про захист персональних даних» та з урахуванням положень Загального регламенту про захист даних (GDPR) Європейського Союзу.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              2. Категорії Зібраних Даних
            </h2>

            <p className="mb-6">
              Ми збираємо два основні типи інформації: дані, які ви надаєте безпосередньо, та дані, зібрані автоматично.
            </p>

            <h3 className="text-lg font-semibold mb-4">2.1. Дані, які ви надаєте безпосередньо (для запису/зв&apos;язку)</h3>
            <p className="mb-4">
              Ці дані збираються, коли ви заповнюєте форми на нашому Сайті (наприклад, форму запису на пробний урок або консультацію):
            </p>

            <div className="overflow-x-auto mb-8 rounded-lg border border-gray-800">
              <table className="w-full min-w-[600px] text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="px-6 py-4 text-left font-medium uppercase tracking-wide text-[#ff00be] border-b border-gray-700">
                      Категорія даних
                    </th>
                    <th className="px-6 py-4 text-left font-medium uppercase tracking-wide text-[#ff00be] border-b border-gray-700">
                      Мета збору
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 bg-black/40">
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-5 border-r border-gray-800">Ім&apos;я</td>
                    <td className="px-6 py-5">Персоналізація спілкування.</td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-5 border-r border-gray-800">Контактний номер телефону</td>
                    <td className="px-6 py-5">
                      Здійснення дзвінка або зв&apos;язку через месенджери для організації уроку.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-5 border-r border-gray-800">
                      Ім&apos;я користувача / Профіль у Telegram
                    </td>
                    <td className="px-6 py-5">
                      Альтернативний канал зв&apos;язку для зручності користувача.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-4">2.2. Автоматично зібрані дані (Технічні та аналітичні)</h3>
            <p className="mb-4">
              Ці дані збираються автоматично під час використання Сайту за допомогою технології файлів Cookie та аналітичних сервісів:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP-адреса та географічне місце розташування.</li>
              <li>Тип браузера та операційної системи.</li>
              <li>Джерела трафіку (звідки ви прийшли на Сайт).</li>
              <li>Поведінка на Сайті (час перебування, переглянуті сторінки, кліки).</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              3. Мета Збору та Обробки Даних
            </h2>

            <p className="mb-4">
              Зібрані персональні дані використовуються виключно для таких цілей:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Надання послуг: Зв&apos;язок із вами для запису на пробний урок або консультацію, а також узгодження деталей та розкладу.</li>
              <li>Покращення Сайту: Аналіз трафіку та поведінки користувачів для оптимізації роботи Сайту, його швидкості та зручності.</li>
              <li>Маркетингова діяльність: Налаштування рекламних кампаній (ретаргетинг) на основі ваших інтересів (лише за допомогою автоматично зібраних даних та з вашою згодою на використання Cookie).</li>
              <li>Виконання юридичних зобов&apos;язань: Задоволення законних вимог державних органів.</li>
            </ol>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              4. Використання Cookie-файлів
            </h2>

            <h3 className="text-lg font-semibold mb-3">4.1. Що таке Cookie?</h3>
            <p className="mb-6">
              Cookie — це невеликі текстові файли, які зберігаються у вашому браузері. Вони допомагають Сайту «запам&apos;ятати» ваші налаштування та збирати технічну інформацію.
            </p>

            <h3 className="text-lg font-semibold mb-3">4.2. Як ми використовуємо Cookie?</h3>
            <p className="mb-4">
              Ми використовуємо функціональні, аналітичні та маркетингові Cookie. Зокрема:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Аналітика:</strong> Google Analytics для розуміння того, як відвідувачі використовують наш Сайт.</li>
              <li><strong>Реклама:</strong> Meta Pixel (Facebook Pixel) для показу вам релевантної реклами наших послуг після того, як ви покинули Сайт (ретаргетинг).</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">4.3. Керування Cookie</h3>
            <p>
              Ви можете налаштувати або відмовитися від Cookie-файлів через спливаюче вікно на нашому Сайті. Ви також можете змінити налаштування свого браузера, щоб повністю блокувати або видаляти Cookie. Зверніть увагу: відключення деяких Cookie може призвести до некоректної роботи деяких функцій Сайту.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              5. Передача Даних Третім Особам
            </h2>

            <p className="mb-6">
              Ми не продаємо, не передаємо в оренду та не обмінюємо ваші персональні дані третім особам, окрім випадків, зазначених нижче:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Партнери-провайдери послуг:</strong> Наші дані можуть бути передані надійно захищеним системам, які необхідні для нашої роботи (наприклад, CRM-системи, сервіси email-розсилок, хостинг). Ці треті сторони зобов&apos;язані використовувати ваші дані виключно для надання послуг нам.</li>
              <li><strong>Аналітичні та рекламні платформи:</strong> Дані про поведінку (IP-адреса, ідентифікатори пристроїв) передаються Google та Meta для аналізу та ретаргетингу.</li>
              <li><strong>Законні вимоги:</strong> Ми можемо розкрити дані, якщо цього вимагає чинне законодавство, судове рішення або запит державного органу.</li>
            </ol>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              6. Права Користувача
            </h2>

            <p className="mb-4">
              Ви, як суб&apos;єкт персональних даних, маєте такі права:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Право на доступ:</strong> Вимагати інформацію про те, які ваші дані ми обробляємо.</li>
              <li><strong>Право на виправлення:</strong> Вимагати виправлення неточних або неповних даних.</li>
              <li><strong>Право на видалення («Право на забуття»):</strong> Вимагати видалення своїх персональних даних, якщо вони більше не потрібні для цілей, для яких були зібрані.</li>
              <li><strong>Право на відкликання згоди:</strong> Будь-коли відкликати свою згоду на обробку даних для певних цілей (наприклад, відмовитися від email-розсилки).</li>
              <li><strong>Право на обмеження обробки:</strong> Обмежити нашу можливість обробляти ваші дані.</li>
            </ol>
            <p className="mt-4">
              Для реалізації будь-якого з цих прав, будь ласка, зв&apos;яжіться з нами, використовуючи контактні дані, розміщені на Сайті.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              7. Термін Зберігання Даних
            </h2>

            <p className="mb-4">
              Ми зберігаємо ваші персональні дані лише доти, доки це необхідно для досягнення цілей, зазначених у цій Політиці.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Дані, зібрані для запису на уроки (Ім&apos;я, Телефон, Telegram), зберігаються протягом терміну вашої взаємодії з Академією + 3 роки з моменту останньої взаємодії, або до моменту відкликання вашої згоди.</li>
              <li>Аналітичні дані зберігаються відповідно до політик Google та Meta, зазвичай не більше 26 місяців.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              8. Безпека Даних
            </h2>

            <p>
              Ми використовуємо сучасні технічні та організаційні заходи для захисту ваших даних від несанкціонованого доступу, зміни, розкриття або знищення. На нашому Сайті використовується протокол шифрування <strong>SSL</strong>.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#ff00be] mt-12 mb-6">
              9. Контактна Інформація
            </h2>

            <p>
              Якщо у вас є запитання або пропозиції щодо цієї Політики конфіденційності, будь ласка, зв&apos;яжіться з нами за контактами, що розміщені у розділі «Контакти» на нашому Сайті.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
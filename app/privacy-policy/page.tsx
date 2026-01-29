"use client";

import React from "react";

// Если у тебя уже есть свой Title — удали этот и импортни свой.
function Title({ text }: { text: string }) {
  return (
    <div className="py-6">
      <h1 className="sr-only">{text}</h1>
    </div>
  );
}

// Превращает ссылки вида https://... или www... в <a>
function withLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+|\bwww\.[^\s)]+)/g);

  return (
    <>
      {parts.map((part, idx) => {
        const isUrl =
          /^https?:\/\/[^\s)]+$/.test(part) || /^www\.[^\s)]+$/.test(part);

        if (!isUrl) return <React.Fragment key={idx}>{part}</React.Fragment>;

        const href = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="underline text-black hover:text-black focus:text-black visited:text-black"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

export default function PolicyPage() {
  // ======= Контент (один язык) =======
  const title = "Політика щодо обробки персональних даних";

  const sec1_title = "1. Загальні положення";
  const intro_1 =
    "Цю Політику складено відповідно до статті 8 Закону України «Про захист персональних даних» і вона визначає порядок обробки персональних даних та заходи із забезпечення їх безпеки, які застосовує Громадська організація «Iніціатива підтримки онкохворих дітей».";
  const intro_2 =
    "Політика застосовується до всієї інформації, яку Організація може отримати про відвідувачів вебсайту https://www.ccsi.org.ua (далі — «Вебсайт»). Організація виступає володільцем (контролером) персональних даних і забезпечує їхню обробку відповідно до чинного законодавства.";

  const sec2_title = "2. Терміни";
  const sec2_list = [
    "Персональні дані — будь-яка інформація про фізичну особу, яку ідентифіковано або можна ідентифікувати.",
    "Обробка персональних даних — будь-яка дія або сукупність дій із персональними даними (збирання, зберігання, використання, передача, видалення тощо).",
    "Інформаційна система персональних даних — сукупність баз даних і технічних засобів для їх обробки.",
    "Надання / поширення — дії з розкриття даних певній або невизначеній кількості осіб.",
    "Знеособлення / знищення — дії, що унеможливлюють ідентифікацію особи / безповоротно видаляють дані.",
    "Користувач — будь-який відвідувач Вебсайту.",
    "Обробник — постачальник послуг, який обробляє персональні дані від імені Організації на підставі договору.",
  ];

  const sec3_title = "3. Які дані ми обробляємо";
  const sec3_p1 = "Дані із форм зв’язку:";
  const sec3_list1 = [
    "ім’я, прізвище",
    "адреса електронної пошти",
    "номер телефону",
    "текст повідомлення (зміст звернення)",
    "інша інформація, яку ви добровільно зазначаєте у зверненні",
  ];
  const sec3_p2 = "Технічні файли cookie, необхідні для роботи Вебсайту:";
  const sec3_list2 = [
    "cookie зберігання вибраної мови інтерфейсу",
    "cookie для коректної роботи форм",
    "cookie для показу/приховування банера згоди на cookie",
  ];
  const sec3_note =
    "Ми не використовуємо інструменти вебаналітики (Google Analytics тощо), рекламні пікселі (Facebook Pixel тощо) чи будь-які маркетингові/ретаргетингові трекери.";

  const sec4_title = "4. Цілі обробки";
  const sec4_list = [
    "Відповідь на ваші звернення та подальша комунікація.",
    "Забезпечення роботи і безпеки Вебсайту (відображення мови, стабільність форм, банер згоди на cookie).",
    "Виконання вимог законодавства та обов’язків щодо звітності й архівування (за наявності таких вимог).",
  ];

  const sec5_title = "5. Правові підстави";
  const sec5_list = [
    "Згода — коли ви добровільно надсилаєте дані через форми.",
    "Законний інтерес Організації — опрацювання звернень, підтримка функціонування й безпеки Вебсайту, запобігання зловживанням.",
    "Виконання договірних зобов’язань — якщо наша взаємодія з вами передбачає укладання/виконання договору (оферти).",
    "Виконання юридичного обов’язку — коли цього прямо вимагає закон.",
  ];

  const sec6_title = "6. Збирання, зберігання, передача";
  const sec6_p1 =
    "Ми застосовуємо правові, організаційні та технічні заходи захисту персональних даних від несанкціонованого доступу, зміни, втрати або знищення.";
  const sec6_p2 =
    "Персональні дані можуть передаватися обробникам (лише в обсязі, необхідному для надання послуг Вебсайту/комунікацій) за договорами обробки даних.";
  const sec6_list_processors = [
    "хостинг/хмарні та інфраструктурні сервіси (провайдери розміщення/CDN)",
    "поштові провайдери (служби доставки електронних листів)",
    "системи керування контентом/бази даних (CMS)",
  ];
  const sec6_p3 =
    "Третім особам для їхніх власних цілей дані не передаємо, окрім випадків, прямо передбачених законом.";
  const sec6_p4 = "Строки зберігання:";
  const sec6_list_retention = [
    "звернення з форм — до 12 місяців з дати останньої взаємодії (або довше, якщо це необхідно для захисту прав/виконання обов’язків)",
    "cookie згоди — до 180 днів",
    "cookie мови — як правило, 6–12 місяців або до видалення у вашому браузері",
  ];
  const sec6_p5 =
    "Ви можете видалити cookie в налаштуваннях браузера. Вимкнення технічних cookie може вплинути на роботу форм і збереження вибору мови.";

  const sec7_title = "7. Транскордонна передача";
  const sec7_list = [
    "Дані можуть оброблятися обробниками, розміщеними за межами України/ЄС/ЄЕЗ, що може передбачати транскордонну передачу.",
    "У таких випадках ми забезпечуємо належні гарантії захисту (зокрема, стандартні договірні положення ЄС — SCCs) і передаємо дані лише постачальникам, які надають достатній рівень безпеки та конфіденційності.",
  ];

  const sec8_title = "8. Ваші права";
  const sec8_list = [
    "отримати підтвердження факту обробки та доступ до своїх персональних даних",
    "вимагати виправлення неточних або застарілих даних",
    "вимагати видалення даних у випадках, передбачених законом («право на забуття»)",
    "обмежити обробку",
    "заперечити проти обробки, якщо вона здійснюється на підставі законного інтересу",
    "відкликати згоду (це не впливає на законність обробки до відкликання)",
    "подати скаргу до уповноваженого органу з питань захисту персональних даних",
  ];
  const sec8_contact =
    "Для реалізації прав звертайтеся: ccsi.organization@gmail.com.";

  const sec9_title = "9. Контакти";
  const sec9_org =
    "Організація: Громадська організація «Iніціатива підтримки онкохворих дітей».";
  const sec9_site = "Вебсайт: https://www.ccsi.org.ua";

  const sec10_title = "10. Оновлення Політики";
  const sec10_list = [
    "Ми можемо періодично оновлювати цю Політику.",
    "Нова редакція набирає чинності з моменту публікації на сторінці: https://www.ccsi.org.ua/privacy-policy (та відповідних сторінках іншими мовами).",
    "Чинна версія доступна за вказаною адресою постійно.",
  ];

  const lastUpdated = "січень 2026";

  // mailto
  const emailLabel = "Електронна пошта:";
  const email = "ccsi.organization@gmail.com";
  const emailSubject = "Звернення щодо персональних даних";

  return (
    <div className="max-w-7xl mx-auto">
      <Title text={title} />

      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec1_title}</h2>
        <p className="mb-4">{withLinks(intro_1)}</p>
        <p className="mb-4">{withLinks(intro_2)}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec2_title}</h2>
        <ul className="list-disc pl-6 mb-4">
          {sec2_list.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec3_title}</h2>
        <p className="mb-2">{sec3_p1}</p>
        <ul className="list-disc pl-6 mb-4">
          {sec3_list1.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-2">{sec3_p2}</p>
        <ul className="list-disc pl-6 mb-4">
          {sec3_list2.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-4 text-gray-700">{sec3_note}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec4_title}</h2>
        <ul className="list-disc pl-6 mb-4">
          {sec4_list.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec5_title}</h2>
        <ul className="list-disc pl-6 mb-4">
          {sec5_list.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec6_title}</h2>
        <p className="mb-4">{sec6_p1}</p>
        <p className="mb-2">{sec6_p2}</p>
        <ul className="list-disc pl-6 mb-4">
          {sec6_list_processors.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-4">{sec6_p3}</p>
        <p className="mb-2">{sec6_p4}</p>
        <ul className="list-disc pl-6 mb-4">
          {sec6_list_retention.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-4">{sec6_p5}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec7_title}</h2>
        <ul className="list-disc pl-6 mb-4">
          {sec7_list.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec8_title}</h2>
        <ul className="list-disc pl-6 mb-4">
          {sec8_list.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-4">{sec8_contact}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec9_title}</h2>
        <p className="mb-1">{sec9_org}</p>

        {/* mailto */}
        <p className="mb-1">
          {emailLabel}{" "}
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              emailSubject,
            )}&body=${encodeURIComponent("")}`}
            className="underline text-black hover:text-black focus:text-black visited:text-black"
          >
            {email}
          </a>
        </p>

        <p className="mb-4">{withLinks(sec9_site)}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{sec10_title}</h2>
        <ul className="list-disc pl-6 mb-4">
          {sec10_list.map((item, i) => (
            <li key={i} className="mb-1">
              {withLinks(item)}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-gray-600">{lastUpdated}</p>
      </div>
    </div>
  );
}

// app/privacy-policy/page.tsx

import Link from "next/link";

function withLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+|\bwww\.[^\s)]+)/g);

  return (
    <>
      {parts.map((part, idx) => {
        const isUrl =
          /^https?:\/\/[^\s)]+$/.test(part) || /^www\.[^\s)]+$/.test(part);

        if (!isUrl) return <span key={idx}>{part}</span>;

        const href = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

export default function PrivacyPolicyPage() {
  const title = "Політика конфіденційності";

  const lastUpdated = "Останнє оновлення: 29 березня 2026";

  const sec1 = {
    title: "1. Загальні положення",
    paragraphs: [
      "Ця Політика конфіденційності пояснює, які персональні дані ми збираємо через сайт Foamix, з якою метою їх обробляємо, як зберігаємо та як ви можете реалізувати свої права.",
      "Ми обробляємо лише ті дані, які ви добровільно надаєте через форму зворотного зв’язку або під час прямого звернення до нас електронною поштою чи телефоном.",
    ],
  };

  const sec2 = {
    title: "2. Які дані ми можемо збирати",
    list: [
      "ім’я та прізвище",
      "номер телефону",
      "адресу електронної пошти",
      "текст повідомлення, яке ви надсилаєте через форму",
      "технічні дані, необхідні для коректної роботи сайту",
    ],
  };

  const sec3 = {
    title: "3. Для чого ми використовуємо ці дані",
    list: [
      "щоб зв’язатися з вами щодо вашої заявки",
      "щоб надати консультацію, розрахунок або комерційну пропозицію",
      "щоб відповідати на ваші запити",
      "щоб забезпечити стабільну та безпечну роботу сайту",
    ],
  };

  const sec4 = {
    title: "4. Правові підстави обробки",
    paragraphs: [
      "Ми обробляємо персональні дані на підставі вашого звернення, вашої згоди, а також нашого законного інтересу — вести комунікацію з потенційними клієнтами та забезпечувати роботу сайту.",
    ],
  };

  const sec5 = {
    title: "5. Кому можуть передаватися дані",
    paragraphs: [
      "Ми не продаємо і не передаємо ваші персональні дані третім особам для їхніх власних маркетингових цілей.",
      "Дані можуть оброблятися лише сервісами, які забезпечують технічну роботу сайту та електронної пошти, наприклад хостингом, поштовими сервісами або інфраструктурними платформами.",
    ],
  };

  const sec6 = {
    title: "6. Строк зберігання даних",
    paragraphs: [
      "Ми зберігаємо персональні дані не довше, ніж це потрібно для відповіді на ваше звернення, подальшої комунікації та виконання наших законних обов’язків.",
      "Якщо інше не вимагається законом, заявки з форми можуть зберігатися до 12 місяців з моменту останньої комунікації.",
    ],
  };

  const sec7 = {
    title: "7. Cookies",
    paragraphs: [
      "Сайт може використовувати лише технічні cookie, необхідні для його коректної роботи.",
      "Якщо в майбутньому на сайті буде підключено аналітичні інструменти, наприклад Google Analytics, ми оновимо цю Політику та механізм згоди на cookie. Для аналітичних cookies у ЄС згода зазвичай потрібна. У інших юрисдикціях це може залежати від конкретних законів про конфіденційність.",
    ],
  };

  const sec8 = {
    title: "8. Ваші права",
    list: [
      "отримати інформацію про обробку ваших персональних даних",
      "вимагати виправлення неточних даних",
      "вимагати видалення даних, якщо немає законних підстав для їх подальшої обробки",
      "звернутися до нас із питаннями щодо конфіденційності",
    ],
  };

  const sec9 = {
    title: "9. Контактна інформація",
    site: "foamix.com.ua",
    email: "Foamix2025@gmail.com",
    phone: "+38 077 012 0077",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>

      <p className="mt-4 text-sm text-gray-500">{lastUpdated}</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec1.title}</h2>
        <div className="mt-3 space-y-4 text-gray-700">
          {sec1.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec2.title}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          {sec2.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec3.title}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          {sec3.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec4.title}</h2>
        <div className="mt-3 space-y-4 text-gray-700">
          {sec4.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec5.title}</h2>
        <div className="mt-3 space-y-4 text-gray-700">
          {sec5.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec6.title}</h2>
        <div className="mt-3 space-y-4 text-gray-700">
          {sec6.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec7.title}</h2>
        <div className="mt-3 space-y-4 text-gray-700">
          {sec7.paragraphs.map((p, i) => (
            <p key={i}>{withLinks(p)}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec8.title}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          {sec8.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">{sec9.title}</h2>
        <div className="mt-3 space-y-3 text-gray-700">
          <p>
            Вебсайт:{" "}
            <a
              href={sec9.site}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
            >
              {sec9.site}
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${sec9.email}`}
              className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
            >
              {sec9.email}
            </a>
          </p>
          <p>
            Телефон:{" "}
            <a
              href="tel:+380770120077"
              className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
            >
              {sec9.phone}
            </a>
          </p>
        </div>
      </section>

      <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          Також рекомендуємо ознайомитися з{" "}
          <Link
            href="/cookies"
            className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
          >
            політикою cookie
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

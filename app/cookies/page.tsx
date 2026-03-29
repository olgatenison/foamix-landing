// app/cookies/page.tsx
"use client";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Політика cookie
      </h1>

      <p className="mt-4 text-sm text-gray-500">
        Останнє оновлення: 29 березня 2026
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          1. Що таке cookie
        </h2>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            Cookie — це невеликі текстові файли, які сайт зберігає на вашому
            пристрої під час перегляду сторінок. Вони допомагають сайту
            працювати коректно, запам’ятовувати окремі налаштування та
            покращувати взаємодію з користувачем.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          2. Які cookie ми використовуємо
        </h2>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            На сайті Foamix можуть використовуватися такі категорії cookie:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-medium text-gray-900">
                Необхідні cookie
              </span>{" "}
              — потрібні для базової роботи сайту, форми зворотного зв’язку,
              безпеки та збереження технічних налаштувань.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Функціональні cookie
              </span>{" "}
              — можуть використовуватися для збереження ваших виборів, якщо такі
              функції будуть доступні на сайті.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Аналітичні cookie
              </span>{" "}
              — можуть використовуватися лише після вашої згоди, якщо ми
              підключимо сервіси аналітики, наприклад Google Analytics.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          3. Для чого ми використовуємо cookie
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>для коректної роботи сайту</li>
          <li>для стабільної роботи форми заявки</li>
          <li>для збереження вашого вибору щодо cookie</li>
          <li>для аналізу відвідуваності сайту, якщо ви надали на це згоду</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          4. Аналітичні сервіси
        </h2>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            Наразі сайт може працювати без аналітичних cookie. Якщо в майбутньому
            ми підключимо Google Analytics або інші подібні інструменти, такі
            cookie будуть використовуватися лише після вашої згоди через банер
            cookie.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          5. Як керувати cookie
        </h2>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            Ви можете в будь-який момент змінити або видалити cookie у
            налаштуваннях свого браузера. Також ви можете відхилити необов’язкові
            cookie через банер cookie, якщо він відображається на сайті.
          </p>
          <p>
            Зверніть увагу: вимкнення необхідних cookie може вплинути на роботу
            окремих функцій сайту.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          6. Треті сторони
        </h2>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            У разі використання сторонніх сервісів, наприклад аналітики або
            вбудованих інструментів, окремі cookie можуть встановлюватися цими
            сервісами відповідно до їхніх власних політик конфіденційності та
            cookie.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          7. Оновлення цієї політики
        </h2>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            Ми можемо періодично оновлювати цю Політику cookie. Актуальна версія
            завжди буде доступна на цій сторінці.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          8. Контактна інформація
        </h2>
        <div className="mt-3 space-y-3 text-gray-700">
          <p>
            Вебсайт:{" "}
            <a
              href="https://foamix.com.ua"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
            >
             foamix.com.ua
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:Foamix2025@gmail.com"
              className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
            >
              Foamix2025@gmail.com
            </a>
          </p>
          <p>
            Телефон:{" "}
            <a
              href="tel:+380770120077"
              className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
            >
              +38 077 012 0077
            </a>
          </p>
        </div>
      </section>

      <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          Також перегляньте{" "}
          <Link
            href="/privacy-policy"
            className="font-medium underline underline-offset-4 hover:text-[#00a0e3]"
          >
            політику конфіденційності
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
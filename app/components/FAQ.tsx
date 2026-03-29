"use client";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question: "Скільки коштує утеплення пінополіуретаном?",
    answer:
      "Вартість залежить від площі, товщини шару, типу об'єкта та умов нанесення. Ціна на сайті вказана орієнтовно — для точного прорахунку залиште заявку або зв'яжіться з нами.",
  },
  {
    question: "Чому на сайті вказано ціну «від 345 грн/м²»?",
    answer:
      "Це базовий орієнтир. Фінальна вартість залежить від площі, необхідної товщини шару, типу поверхні, складності доступу до об'єкта та умов виконання робіт.",
  },
  {
    question: "Від чого залежить товщина шару ППУ?",
    answer:
      "Товщина підбирається індивідуально — залежно від типу конструкції, рівня тепловтрат, призначення приміщення та бажаного результату. Для дахів, стін, підлог і технічних об'єктів рішення можуть відрізнятися.",
  },
  {
    question: "Скільки часу займає утеплення?",
    answer:
      "Терміни залежать від площі та складності об'єкта, але більшість робіт виконується від 1 дня. Напилення ППУ не потребує довгого монтажу, демонтажу чи мокрих процесів.",
  },
  {
    question: "Що саме можна утеплювати пінополіуретаном?",
    answer:
      "ППУ підходить для утеплення будинків, дахів, мансард, перекриттів, фасадів, підвалів, ангарів, складів, холодильних камер, комерційних і промислових приміщень.",
  },
  {
    question: "Чи можна утеплювати ППУ взимку?",
    answer:
      "У багатьох випадках так, але можливість виконання робіт залежить від типу поверхні, погодних умов і технологічних вимог до нанесення. Ми підкажемо оптимальний варіант після консультації.",
  },
  {
    question: "Чи безпечний пінополіуретан для житлових приміщень?",
    answer:
      "Після правильного нанесення та повного застигання пінополіуретан є безпечним для використання в житлових приміщеннях. Ми використовуємо професійні системи та дотримуємося технології нанесення.",
  },
  {
    question: "Чи потрібно готувати об'єкт перед приїздом?",
    answer:
      "Зазвичай від клієнта потрібен доступ до об'єкта, можливість підключення до електромережі та вільний під'їзд. Решту умов ми уточнюємо під час консультації або огляду.",
  },
  {
    question: "Як замовити прорахунок утеплення?",
    answer:
      "Залиште заявку на сайті або зателефонуйте нам. Ми уточнимо параметри об'єкта, за потреби попросимо фото чи відео та підготуємо попередній розрахунок вартості.",
  },
];

function FaqItem({
  faq,
  index,
  openIndex,
  toggleItem,
}: {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  toggleItem: (index: number) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5">
      <button
        type="button"
        onClick={() => toggleItem(index)}
        className="flex w-full items-start justify-between gap-6 text-left text-gray-900"
      >
        <span className="text-base/7 font-semibold">{faq.question}</span>
        <span className="mt-1 flex h-7 items-center text-[#00a0e3]">
          {isOpen ? (
            <MinusSmallIcon aria-hidden="true" className="size-6" />
          ) : (
            <PlusSmallIcon aria-hidden="true" className="size-6" />
          )}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pr-12 text-base/7 text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftCol = faqs.filter((_, i) => i % 2 === 0);
  const rightCol = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="lg:mx-8 bg-blue-50 lg:rounded-[90px]">
      <div className="mx-auto max-w-7xl px-6 py-24  lg:px-8 ">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Поширені запитання
        </h2>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
          Зібрали відповіді на найчастіші питання про утеплення
          пінополіуретаном.
        </p>

        {/* Desktop: two independent columns */}
        <div className="mt-16 hidden gap-6 lg:flex">
          <div className="flex flex-1 flex-col gap-6 items-start *:w-full">
            {leftCol.map((faq) => {
              const index = faqs.indexOf(faq);
              return (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  openIndex={openIndex}
                  toggleItem={toggleItem}
                />
              );
            })}
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start *:w-full">
            {rightCol.map((faq) => {
              const index = faqs.indexOf(faq);
              return (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  openIndex={openIndex}
                  toggleItem={toggleItem}
                />
              );
            })}
          </div>
        </div>
        {/* Mobile: single column */}
        <div className="mt-16 flex flex-col gap-6 lg:hidden">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={index}
              openIndex={openIndex}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

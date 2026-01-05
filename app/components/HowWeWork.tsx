"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Step = {
  id: number;
  title: string;
  text: string;
};

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export default function HowWeWorkPinterest() {
  const steps: Step[] = useMemo(
    () => [
      {
        id: 1,
        title: "Консультація та аналіз потреб",
        text: "Уточнюємо задачу, конструкції та умови експлуатації. Пояснюємо різницю типів ППУ та рекомендації.",
      },
      {
        id: 2,
        title: "Огляд об’єкта та заміри",
        text: "Оцінюємо стан поверхні, вузли примикання, можливі містки холоду. Узгоджуємо товщину та зони утеплення.",
      },
      {
        id: 3,
        title: "Розрахунок і погодження кошторису",
        text: "Даємо точний прорахунок та фіксуємо в договорі. Погоджуємо терміни та підготовчі роботи.",
      },
      {
        id: 4,
        title: "Підготовка та напилення ППУ",
        text: "Готуємо основу, захищаємо вікна/двері. Наносимо ППУ професійним обладнанням високого тиску.",
      },
      {
        id: 5,
        title: "Контроль якості та здача",
        text: "Перевіряємо рівномірність шару та дотримання технології. Надаємо гарантію та рекомендації з експлуатації.",
      },
    ],
    []
  );

  // refs
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // линия прогресса внутри timeline
  const [lineTop, setLineTop] = useState<number>(0);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      // первая и последняя точки (li)
      const first = itemRefs.current[0];
      const last = itemRefs.current[itemRefs.current.length - 1];

      if (!first || !last) return;

      const wrapRect = wrap.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      // позиция линии (top) относительно wrap
      const topInsideWrap = firstRect.top - wrapRect.top + firstRect.height / 2;

      const bottomInsideWrap =
        lastRect.top - wrapRect.top + lastRect.height / 2;

      const full = Math.max(0, bottomInsideWrap - topInsideWrap);

      // прогресс по скроллу: когда середина экрана проходит по timeline
      const viewportMid = window.innerHeight * 0.5;

      // "текущая" точка прогресса: от верхней точки линии до нижней
      const current = clamp(
        viewportMid - (firstRect.top + firstRect.height / 2),
        0,
        full
      );

      setLineTop(topInsideWrap);
      setLineHeight(current);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT: title */}
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Як ми працюємо
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Покроковий алгоритм
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600 max-w-xl">
              Прозорий процес: від консультації й прорахунку — до якісного
              напилення та гарантії.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-50 px-5 py-4 ring-1 ring-black/5">
              <Image
                src="/avatar.webp"
                alt="Логотип"
                width={24}
                height={24}
                className="h-6 w-6 rounded-md object-cover"
                priority
              />
              <span className="text-sm font-medium text-gray-900">
                Безкоштовна консультація перед стартом
              </span>
            </div>
          </div>

          {/* RIGHT: timeline */}
          <div className="lg:col-span-7">
            <div ref={wrapRef} className="relative">
              {/* базовая серая линия */}
              <div
                aria-hidden="true"
                className="absolute left-4 top-0 bottom-0 w-px bg-gray-900/10"
              />

              {/* активная линия */}
              <div
                aria-hidden="true"
                className="absolute left-4 w-px bg-sky-500"
                style={{
                  top: lineTop,
                  height: lineHeight,
                }}
              />

              <ol className="space-y-6">
                {steps.map((step, i) => (
                  <li
                    key={step.id}
                    ref={(node) => {
                      itemRefs.current[i] = node;
                    }}
                    className="relative pl-12"
                  >
                    {/* точка */}
                    <div className="absolute left-4 top-6 -translate-x-1/2">
                      <div className="h-3 w-3 rounded-full bg-sky-500 ring-4 ring-white shadow-sm" />
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {step.text}
                          </p>

                          {/* маркеры внутри (как ты делала с avatar.webp) */}
                          <div className="mt-4 flex items-center gap-3">
                            <Image
                              src="/avatar.webp"
                              alt="Логотип"
                              width={24}
                              height={24}
                              className="h-6 w-6 rounded-md object-cover"
                              priority
                            />
                            <span className="text-sm text-gray-800">
                              Працюємо акуратно, без зайвого сміття
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

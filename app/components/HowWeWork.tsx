// "use client";

// import Image from "next/image";
// import React, { useEffect, useMemo, useRef, useState } from "react";

// type Step = {
//   id: number;
//   title: string;
//   text: string;
// };

// function clamp(n: number, min: number, max: number): number {
//   return Math.min(max, Math.max(min, n));
// }

// export default function HowWeWorkPinterest() {
//   const steps: Step[] = useMemo(
//     () => [
//       {
//         id: 1,
//         title: "Консультація та аналіз потреб",
//         text: "Уточнюємо задачу, конструкції та умови експлуатації. Пояснюємо різницю типів ППУ та рекомендації.",
//       },
//       {
//         id: 2,
//         title: "Огляд об’єкта та заміри",
//         text: "Оцінюємо стан поверхні, вузли примикання, можливі містки холоду. Узгоджуємо товщину та зони утеплення.",
//       },
//       {
//         id: 3,
//         title: "Розрахунок і погодження кошторису",
//         text: "Даємо точний прорахунок та фіксуємо в договорі. Погоджуємо терміни та підготовчі роботи.",
//       },
//       {
//         id: 4,
//         title: "Підготовка та напилення ППУ",
//         text: "Готуємо основу, захищаємо вікна/двері. Наносимо ППУ професійним обладнанням високого тиску.",
//       },
//       {
//         id: 5,
//         title: "Контроль якості та здача",
//         text: "Перевіряємо рівномірність шару та дотримання технології. Надаємо гарантію та рекомендації з експлуатації.",
//       },
//     ],
//     []
//   );

//   // refs
//   const wrapRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

//   // линия прогресса внутри timeline
//   const [lineTop, setLineTop] = useState<number>(0);
//   const [lineHeight, setLineHeight] = useState<number>(0);

//   useEffect(() => {
//     const update = () => {
//       const wrap = wrapRef.current;
//       if (!wrap) return;

//       // первая и последняя точки (li)
//       const first = itemRefs.current[0];
//       const last = itemRefs.current[itemRefs.current.length - 1];

//       if (!first || !last) return;

//       const wrapRect = wrap.getBoundingClientRect();
//       const firstRect = first.getBoundingClientRect();
//       const lastRect = last.getBoundingClientRect();

//       // позиция линии (top) относительно wrap
//       const topInsideWrap = firstRect.top - wrapRect.top + firstRect.height / 2;

//       const bottomInsideWrap =
//         lastRect.top - wrapRect.top + lastRect.height / 2;

//       const full = Math.max(0, bottomInsideWrap - topInsideWrap);

//       // прогресс по скроллу: когда середина экрана проходит по timeline
//       const viewportMid = window.innerHeight * 0.5;

//       // "текущая" точка прогресса: от верхней точки линии до нижней
//       const current = clamp(
//         viewportMid - (firstRect.top + firstRect.height / 2),
//         0,
//         full
//       );

//       setLineTop(topInsideWrap);
//       setLineHeight(current);
//     };

//     update();

//     window.addEventListener("scroll", update, { passive: true });
//     window.addEventListener("resize", update);

//     return () => {
//       window.removeEventListener("scroll", update);
//       window.removeEventListener("resize", update);
//     };
//   }, []);

//   return (
//     <section className="py-20 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
//           {/* LEFT: title */}
//           <div className="lg:col-span-5">
//             <div className="text-sm font-semibold uppercase tracking-wide text-sky-600">
//               Як ми працюємо
//             </div>
//             <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
//               Покроковий алгоритм
//             </h2>
//             <p className="mt-6 text-base leading-7 text-gray-600 max-w-xl">
//               Прозорий процес: від консультації й прорахунку — до якісного
//               напилення та гарантії.
//             </p>

//             <div className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-50 px-5 py-4 ring-1 ring-black/5">
//               <Image
//                 src="/avatar.webp"
//                 alt="Логотип"
//                 width={24}
//                 height={24}
//                 className="h-6 w-6 rounded-md object-cover"
//                 priority
//               />
//               <span className="text-sm font-medium text-gray-900">
//                 Безкоштовна консультація перед стартом
//               </span>
//             </div>
//           </div>

//           {/* RIGHT: timeline */}
//           <div className="lg:col-span-7">
//             <div ref={wrapRef} className="relative">
//               {/* базовая серая линия */}
//               <div
//                 aria-hidden="true"
//                 className="absolute left-4 top-0 bottom-0 w-px bg-gray-900/10"
//               />

//               {/* активная линия */}
//               <div
//                 aria-hidden="true"
//                 className="absolute left-4 w-px bg-sky-500"
//                 style={{
//                   top: lineTop,
//                   height: lineHeight,
//                 }}
//               />

//               <ol className="space-y-6">
//                 {steps.map((step, i) => (
//                   <li
//                     key={step.id}
//                     ref={(node) => {
//                       itemRefs.current[i] = node;
//                     }}
//                     className="relative pl-12"
//                   >
//                     {/* точка */}
//                     <div className="absolute left-4 top-6 -translate-x-1/2">
//                       <div className="h-3 w-3 rounded-full bg-sky-500 ring-4 ring-white shadow-sm" />
//                     </div>

//                     <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
//                       <div className="flex items-start gap-3">
//                         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">
//                           {String(i + 1).padStart(2, "0")}
//                         </div>

//                         <div className="min-w-0">
//                           <h3 className="text-base font-semibold text-gray-900">
//                             {step.title}
//                           </h3>
//                           <p className="mt-2 text-sm leading-6 text-gray-600">
//                             {step.text}
//                           </p>

//                           {/* маркеры внутри (как ты делала с avatar.webp) */}
//                           <div className="mt-4 flex items-center gap-3">
//                             <Image
//                               src="/avatar.webp"
//                               alt="Логотип"
//                               width={24}
//                               height={24}
//                               className="h-6 w-6 rounded-md object-cover"
//                               priority
//                             />
//                             <span className="text-sm text-gray-800">
//                               Працюємо акуратно, без зайвого сміття
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const BRAND = "#00a0e3";

const steps = [
  {
    title: "Консультація та прорахунок",
    text: `Залишаєте заявку на сайті або телефонуєте.
Наш спеціаліст уточнює площу, тип об’єкта (бажано виїзд на місце для заміру площі, уточнення підключення до електромережі та наявність під’їзду) та робить попередній розрахунок вартості утеплення ППУ.`,
  },
  {
    title: "Огляд об’єкта",
    text: `Проводимо огляд на місці або дистанційно (фото/відео).
Визначаємо оптимальну товщину пінополіуретану та фінальну ціну без прихованих доплат.`,
  },
  {
    title: "Договір і підготовка",
    text: `Узгоджуємо терміни, підписуємо договір і готуємо обладнання.
Від клієнта — лише доступ до об’єкта та електроживлення.`,
  },
  {
    title: "Напилення пінополіуретану",
    text: `Виконуємо утеплення ППУ без демонтажу і будівельного сміття.
Час робіт — від 1 дня залежно від площі.`,
  },
  {
    title: "Приймання та гарантія",
    text: `Перевіряємо якість разом із клієнтом, підписуємо акт виконаних робіт та надаємо гарантію.`,
  },
];

function Lines({ text }) {
  const lines = useMemo(() => text.split("\n").filter(Boolean), [text]);
  return (
    <div className="space-y-2 text-sm leading-relaxed text-gray-600">
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

export default function HowWeWorkPinterest() {
  const wrapRef = useRef(null);
  const timelineRef = useRef(null);

  const stepRefs = useRef([]); // <li>
  const badgeRefs = useRef([]); // кружки

  const [activeIndex, setActiveIndex] = useState(-1);

  // размеры линии: от центра 1 кружка до центра последнего
  const [lineTop, setLineTop] = useState(0); // px внутри timeline
  const [lineHeight, setLineHeight] = useState(0); // px
  const [fillHeight, setFillHeight] = useState(0); // px закраски

  useEffect(() => {
    const onScroll = () => {
      const tl = timelineRef.current;
      if (!tl) return;

      const tlRect = tl.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const first = badgeRefs.current[0];
      const last = badgeRefs.current[badgeRefs.current.length - 1];
      if (!first || !last) return;

      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      const firstCenterAbs = firstRect.top + firstRect.height / 2;
      const lastCenterAbs = lastRect.top + lastRect.height / 2;

      // линия только между первым и последним кружком
      const topPx = firstCenterAbs - tlRect.top;
      const heightPx = Math.max(0, lastCenterAbs - firstCenterAbs);

      setLineTop(topPx);
      setLineHeight(heightPx);

      // активный шаг по положению центра li относительно "середины" экрана
      const mid = vh * 0.55;
      let lastPassed = -1;
      stepRefs.current.forEach((node, i) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        const center = r.top + r.height / 2;
        if (center < mid) lastPassed = i;
      });
      setActiveIndex(lastPassed);

      // закраска линии по скроллу (до середины экрана), но не дальше последнего шага
      const progress = heightPx > 0 ? (mid - firstCenterAbs) / heightPx : 0;
      const clamped = Math.max(0, Math.min(1, progress));
      setFillHeight(heightPx * clamped);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="" ref={wrapRef}>
      <div className="px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 text-balance text-center max-w-2xl mx-auto">
              Як ми працюємо?
            </h2>
          </div>
          <div className="relative mt-10" ref={timelineRef}>
            {/* базовая линия (ограниченная по высоте между 1 и 5) */}
            <div
              className="pointer-events-none absolute left-5 w-px bg-[#00a0e3]/25 lg:left-1/2 lg:-translate-x-1/2"
              style={{ top: lineTop, height: lineHeight }}
            />
            {/* закраска линии (так же ограничена) */}
            <div
              className="pointer-events-none absolute left-5 w-px bg-[#00a0e3] lg:left-1/2 lg:-translate-x-1/2"
              style={{ top: lineTop, height: fillHeight }}
            />

            <ul className="space-y-2">
              {steps.map((s, idx) => {
                const isLeft = idx % 2 === 0;
                const n = idx + 1;
                const isActive = idx <= activeIndex;

                return (
                  <li
                    key={s.title}
                    ref={(node) => (stepRefs.current[idx] = node)}
                    className="relative"
                  >
                    <div className="grid grid-cols-[40px_1fr] gap-5 lg:grid-cols-[1fr_80px_1fr] ">
                      {/* LEFT side (desktop) */}
                      <div className="hidden lg:block">
                        {isLeft ? (
                          <div
                            className={[
                              "ml-auto max-w-130 rounded-3xl p-7 shadow-sm transition-colors duration-300",
                              isActive ? "bg-blue-50" : "bg-white",
                            ].join(" ")}
                          >
                            <div className="flex items-start justify-between gap-6">
                              <div className="max-w-90">
                                <div className="flex gap-3 pb-5">
                                  {" "}
                                  <Image
                                    src="/avatar.webp"
                                    alt="Логотип"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 rounded-md object-cover"
                                    priority
                                  />
                                  <h3 className="text-base font-semibold text-gray-900 ">
                                    {s.title}
                                  </h3>
                                </div>
                                <div className="text-gray-500 text-base border-t pt-2 border-gray-300 ">
                                  <Lines text={s.text} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>

                      {/* CENTER badge */}
                      <div className="relative flex justify-center">
                        <div
                          ref={(node) => (badgeRefs.current[idx] = node)}
                          className={[
                            "mt-2 flex h-10 w-10 items-center justify-center rounded-full shadow-sm ring-4 ring-white transition-colors duration-300",
                            isActive
                              ? "bg-[#00a0e3] text-white"
                              : "bg-white text-[#00a0e3]",
                          ].join(" ")}
                          style={
                            !isActive
                              ? { boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }
                              : undefined
                          }
                        >
                          <span className="text-sm font-semibold">{n}</span>
                        </div>
                      </div>

                      {/* RIGHT side + MOBILE card */}
                      <div>
                        {/* MOBILE */}
                        <div
                          className={[
                            "lg:hidden max-w-180 rounded-3xl p-6 shadow-sm transition-colors duration-300",
                            isActive ? "bg-blue-50" : "bg-white",
                          ].join(" ")}
                        >
                          <div className="flex items-start justify-between gap-5">
                            <div className="max-w-130">
                              <h3 className="text-base font-semibold text-gray-900">
                                {s.title}
                              </h3>
                              <div className="mt-3">
                                <Lines text={s.text} />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* DESKTOP right */}
                        <div className="hidden lg:block">
                          {!isLeft ? (
                            <div
                              className={[
                                "mr-auto max-w-130 rounded-3xl p-7 shadow-sm transition-colors duration-300",
                                isActive ? "bg-blue-50" : "bg-white",
                              ].join(" ")}
                            >
                              <div className="flex items-start justify-between gap-6">
                                <div className="max-w-90">
                                  <div className="flex gap-3 pb-5">
                                    {" "}
                                    <Image
                                      src="/avatar.webp"
                                      alt="Логотип"
                                      width={24}
                                      height={24}
                                      className="h-6 w-6 rounded-md object-cover"
                                      priority
                                    />
                                    <h3 className="text-base font-semibold text-gray-900 ">
                                      {s.title}
                                    </h3>
                                  </div>
                                  <div className="text-gray-500 text-base border-t pt-2 border-gray-300 ">
                                    <Lines text={s.text} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div />
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="bg-[#00a0e3] px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#028fcc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3] uppercase w-96 rounded-3xl text-center"
              >
                замовити прорахунок вашого проекту
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

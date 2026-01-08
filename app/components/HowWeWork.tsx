// "use client";
// import Image from "next/image";
// import { useEffect, useMemo, useRef, useState } from "react";

// const steps = [
//   {
//     title: "Консультація та прорахунок",
//     text: `Залишаєте заявку на сайті або телефонуєте.
// Наш спеціаліст уточнює площу, тип об’єкта (бажано виїзд на місце для заміру площі, уточнення підключення до електромережі та наявність під’їзду) та робить попередній розрахунок вартості утеплення ППУ.`,
//   },
//   {
//     title: "Огляд об’єкта",
//     text: `Проводимо огляд на місці або дистанційно (фото/відео).
// Визначаємо оптимальну товщину пінополіуретану та фінальну ціну без прихованих доплат.`,
//   },
//   {
//     title: "Договір і підготовка",
//     text: `Узгоджуємо терміни, підписуємо договір і готуємо обладнання.
// Від клієнта — лише доступ до об’єкта та електроживлення.`,
//   },
//   {
//     title: "Напилення пінополіуретану",
//     text: `Виконуємо утеплення ППУ без демонтажу і будівельного сміття.
// Час робіт — від 1 дня залежно від площі.`,
//   },
//   {
//     title: "Приймання та гарантія",
//     text: `Перевіряємо якість разом із клієнтом, підписуємо акт виконаних робіт та надаємо гарантію.`,
//   },
// ];

// function Lines({ text }) {
//   const lines = useMemo(() => text.split("\n").filter(Boolean), [text]);
//   return (
//     <div className="space-y-2 text-sm leading-relaxed text-gray-600">
//       {lines.map((line, i) => (
//         <p key={i}>{line}</p>
//       ))}
//     </div>
//   );
// }

// export default function HowWeWorkPinterest() {
//   const wrapRef = useRef(null);
//   const timelineRef = useRef(null);

//   const stepRefs = useRef([]); // <li>
//   const badgeRefs = useRef([]); // кружки

//   const [activeIndex, setActiveIndex] = useState(-1);

//   // размеры линии: от центра 1 кружка до центра последнего
//   const [lineTop, setLineTop] = useState(0); // px внутри timeline
//   const [lineHeight, setLineHeight] = useState(0); // px
//   const [fillHeight, setFillHeight] = useState(0); // px закраски

//   useEffect(() => {
//     const onScroll = () => {
//       const tl = timelineRef.current;
//       if (!tl) return;

//       const tlRect = tl.getBoundingClientRect();
//       const vh = window.innerHeight || 1;

//       const first = badgeRefs.current[0];
//       const last = badgeRefs.current[badgeRefs.current.length - 1];
//       if (!first || !last) return;

//       const firstRect = first.getBoundingClientRect();
//       const lastRect = last.getBoundingClientRect();

//       const firstCenterAbs = firstRect.top + firstRect.height / 2;
//       const lastCenterAbs = lastRect.top + lastRect.height / 2;

//       // линия только между первым и последним кружком
//       const topPx = firstCenterAbs - tlRect.top;
//       const heightPx = Math.max(0, lastCenterAbs - firstCenterAbs);

//       setLineTop(topPx);
//       setLineHeight(heightPx);

//       // активный шаг по положению центра li относительно "середины" экрана
//       const mid = vh * 0.55;
//       let lastPassed = -1;
//       stepRefs.current.forEach((node, i) => {
//         if (!node) return;
//         const r = node.getBoundingClientRect();
//         const center = r.top + r.height / 2;
//         if (center < mid) lastPassed = i;
//       });
//       setActiveIndex(lastPassed);

//       // закраска линии по скроллу (до середины экрана), но не дальше последнего шага
//       const progress = heightPx > 0 ? (mid - firstCenterAbs) / heightPx : 0;
//       const clamped = Math.max(0, Math.min(1, progress));
//       setFillHeight(heightPx * clamped);
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, []);

//   return (
//     <section className="" ref={wrapRef}>
//       <div className="px-6 py-12 sm:px-10 sm:py-14">
//         <div className="mx-auto max-w-4xl">
//           <div className="">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 text-balance text-center max-w-2xl mx-auto">
//               Як ми працюємо?
//             </h2>
//           </div>
//           <div className="relative mt-10" ref={timelineRef}>
//             {/* базовая линия (ограниченная по высоте между 1 и 5) */}
//             <div
//               className="pointer-events-none absolute left-5 w-px bg-[#00a0e3]/25 lg:left-1/2 lg:-translate-x-1/2"
//               style={{ top: lineTop, height: lineHeight }}
//             />
//             {/* закраска линии (так же ограничена) */}
//             <div
//               className="pointer-events-none absolute left-5 w-px bg-[#00a0e3] lg:left-1/2 lg:-translate-x-1/2"
//               style={{ top: lineTop, height: fillHeight }}
//             />

//             <ul className="space-y-2">
//               {steps.map((s, idx) => {
//                 const isLeft = idx % 2 === 0;
//                 const n = idx + 1;
//                 const isActive = idx <= activeIndex;

//                 return (
//                   <li
//                     key={s.title}
//                     ref={(node) => (stepRefs.current[idx] = node)}
//                     className="relative"
//                   >
//                     <div className="grid grid-cols-[40px_1fr] gap-5 lg:grid-cols-[1fr_80px_1fr] ">
//                       {/* LEFT side (desktop) */}
//                       <div className="hidden lg:block">
//                         {isLeft ? (
//                           <div
//                             className={[
//                               "ml-auto max-w-130 rounded-3xl p-7 shadow-sm transition-colors duration-300",
//                               isActive ? "bg-blue-50" : "bg-white",
//                             ].join(" ")}
//                           >
//                             <div className="flex items-start justify-between gap-6">
//                               <div className="max-w-90">
//                                 <div className="flex gap-3 pb-5">
//                                   {" "}
//                                   <Image
//                                     src="/avatar.webp"
//                                     alt="Логотип"
//                                     width={24}
//                                     height={24}
//                                     className="h-6 w-6 rounded-md object-cover"
//                                     priority
//                                   />
//                                   <h3 className="text-base font-semibold text-gray-900 ">
//                                     {s.title}
//                                   </h3>
//                                 </div>
//                                 <div className="text-gray-500 text-base border-t pt-2 border-gray-300 ">
//                                   <Lines text={s.text} />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ) : (
//                           <div />
//                         )}
//                       </div>

//                       {/* CENTER badge */}
//                       <div className="relative flex justify-center">
//                         <div
//                           ref={(node) => (badgeRefs.current[idx] = node)}
//                           className={[
//                             "mt-2 flex h-10 w-10 items-center justify-center rounded-full shadow-sm ring-4 ring-white transition-colors duration-300",
//                             isActive
//                               ? "bg-[#00a0e3] text-white"
//                               : "bg-white text-[#00a0e3]",
//                           ].join(" ")}
//                           style={
//                             !isActive
//                               ? { boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }
//                               : undefined
//                           }
//                         >
//                           <span className="text-sm font-semibold">{n}</span>
//                         </div>
//                       </div>

//                       {/* RIGHT side + MOBILE card */}
//                       <div>
//                         {/* MOBILE */}
//                         <div
//                           className={[
//                             "lg:hidden max-w-180 rounded-3xl p-6 shadow-sm transition-colors duration-300",
//                             isActive ? "bg-blue-50" : "bg-white",
//                           ].join(" ")}
//                         >
//                           <div className="flex items-start justify-between gap-5">
//                             <div className="max-w-130">
//                               <h3 className="text-base font-semibold text-gray-900">
//                                 {s.title}
//                               </h3>
//                               <div className="mt-3">
//                                 <Lines text={s.text} />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* DESKTOP right */}
//                         <div className="hidden lg:block">
//                           {!isLeft ? (
//                             <div
//                               className={[
//                                 "mr-auto max-w-130 rounded-3xl p-7 shadow-sm transition-colors duration-300",
//                                 isActive ? "bg-blue-50" : "bg-white",
//                               ].join(" ")}
//                             >
//                               <div className="flex items-start justify-between gap-6">
//                                 <div className="max-w-90">
//                                   <div className="flex gap-3 pb-5">
//                                     {" "}
//                                     <Image
//                                       src="/avatar.webp"
//                                       alt="Логотип"
//                                       width={24}
//                                       height={24}
//                                       className="h-6 w-6 rounded-md object-cover"
//                                       priority
//                                     />
//                                     <h3 className="text-base font-semibold text-gray-900 ">
//                                       {s.title}
//                                     </h3>
//                                   </div>
//                                   <div className="text-gray-500 text-base border-t pt-2 border-gray-300 ">
//                                     <Lines text={s.text} />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ) : (
//                             <div />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>

//             <div className="mt-3 flex flex-wrap items-center gap-4">
//               <a
//                 href="#"
//                 className="bg-[#00a0e3] px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#028fcc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3] uppercase w-96 rounded-3xl text-center"
//               >
//                 замовити прорахунок вашого проекту
//               </a>
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

const steps = [
  {
    title: "Консультація та прорахунок",
    text: `Залишаєте заявку на сайті або телефонуєте.
Наш спеціаліст уточнює площу, тип об'єкта (бажано виїзд на місце для заміру площі, уточнення підключення до електромережі та наявність під'їзду) та робить попередній розрахунок вартості утеплення ППУ.`,
  },
  {
    title: "Огляд об'єкта",
    text: `Проводимо огляд на місці або дистанційно (фото/відео).
Визначаємо оптимальну товщину пінополіуретану та фінальну ціну без прихованих доплат.`,
  },
  {
    title: "Договір і підготовка",
    text: `Узгоджуємо терміни, підписуємо договір і готуємо обладнання.
Від клієнта — лише доступ до об'єкта та електроживлення.`,
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

function Lines({ text }: { text: string }) {
  const lines = useMemo(() => text.split("\n").filter(Boolean), [text]);
  return (
    <div className="space-y-2 text-sm leading-relaxed text-gray-600">
      {lines.map((line: string, i: number) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

export default function HowWeWorkPinterest() {
  const wrapRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);

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

      const topPx = firstCenterAbs - tlRect.top;
      const heightPx = Math.max(0, lastCenterAbs - firstCenterAbs);

      setLineTop(topPx);
      setLineHeight(heightPx);

      const mid = vh * 0.55;
      let lastPassed = -1;
      stepRefs.current.forEach((node: HTMLLIElement | null, i: number) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        const center = r.top + r.height / 2;
        if (center < mid) lastPassed = i;
      });
      setActiveIndex(lastPassed);

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
            <div
              className="pointer-events-none absolute left-5 w-px bg-[#00a0e3]/25 lg:left-1/2 lg:-translate-x-1/2"
              style={{ top: lineTop, height: lineHeight }}
            />
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
                    ref={(node) => {
                      stepRefs.current[idx] = node;
                    }}
                    className="relative"
                  >
                    <div className="grid grid-cols-[40px_1fr] gap-5 lg:grid-cols-[1fr_80px_1fr] ">
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

                      <div className="relative flex justify-center">
                        <div
                          ref={(node) => {
                            badgeRefs.current[idx] = node;
                          }}
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

                      <div>
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

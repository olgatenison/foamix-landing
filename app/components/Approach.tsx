import Image from "next/image";

const steps = [
  {
    title: "Індивідуальний підхід до кожного об’єкта",
    bullets: [
      "аналізуємо тип приміщення та конструкції",
      "підбираємо оптимальну товщину ППУ",
      "враховуємо кліматичні умови та тепловтрати",
    ],
  },
  {
    title: "Точний прорахунок без прихованих витрат",
    bullets: [
      "проводимо огляд об’єкта (на місці або дистанційно)",
      "надаємо точну вартість утеплення ППУ",
      "фіксуємо ціну в договорі",
    ],
  },
  {
    title: "Професійне напилення ППУ",
    bullets: [
      "сертифіковані матеріали",
      "професійне обладнання високого тиску",
      "досвідчені бригади",
    ],
  },
  {
    title: "Швидкі терміни виконання",
    bullets: [
      "більшість об’єктів — 1 робочий день",
      "без демонтажу та будівельного сміття",
      "приміщення готове до використання одразу після робіт",
    ],
  },
  {
    title: "Контроль якості та гарантія",
    bullets: [
      "перевіряємо рівномірність шару",
      "дотримуємось технології напилення",
      "надаємо гарантію на роботи",
    ],
  },
  {
    title: "Післясервісна підтримка",
    bullets: [
      "надаємо рекомендації з експлуатації",
      "консультуємо з подальших питань",
      "працюємо на результат і відгуки клієнтів",
    ],
  },
];

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 7L9 18l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="pt-20 ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT COLUMN: title + text + image */}
          <div>
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 max-w-2xl text-balance">
                Наш підхід до роботи
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Ми спеціалізуємося на утепленні пінополіуретаном (ППУ) та
                працюємо за чітким і прозорим алгоритмом. Наш підхід гарантує
                якісний результат, довговічне утеплення та реальну економію для
                клієнта.
              </p>
            </div>

            <div className="relative mt-8">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-black/5">
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src="/polyurethane.jpg"
                    alt="Будинок після утеплення"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 520px, 100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />
              </div>

              {/* floating badge */}
              <div className="pointer-events-none absolute -right-3 top-8 sm:-right-6 sm:top-10">
                <div className="grid h-32 w-32 place-items-center rounded-full bg-sky-500 text-center shadow-lg ring-1 ring-black/10 sm:h-36 sm:w-36">
                  <div className="px-4 text-sm font-semibold leading-tight text-white">
                    Безкоштовна
                    <br />
                    консультація
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: only steps */}
          <div>
            <ol className="space-y-3">
              {steps.map((s, idx) => {
                const number = String(idx + 1).padStart(2, "0");
                return (
                  <li key={s.title} className=" bg-white p-5  ">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00a0e3] text-sm font-semibold text-white">
                        {number}
                      </div>

                      <div className="min-w-0">
                        <div className="text-base font-semibold text-slate-900 pb-3">
                          {s.title}
                        </div>

                        <ul className=" pt-2 space-y-1 border-gray-300 border-t">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                              <span className="text-sm leading-6 text-slate-600">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

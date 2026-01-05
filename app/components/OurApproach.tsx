"use client";

const approach = [
  {
    title: "Індивідуальний підхід до кожного об’єкта",
    desc: "Кожен будинок, дах чи ангар має свої особливості. Ми:",
    bullets: [
      "аналізуємо тип приміщення та конструкції",
      "підбираємо оптимальну товщину ППУ",
      "враховуємо кліматичні умови та тепловтрати",
    ],
  },
  {
    title: "Точний прорахунок без прихованих витрат",
    desc: "Перед початком робіт ми:",
    bullets: [
      "проводимо огляд об’єкта (на місці або дистанційно)",
      "надаємо точну вартість утеплення ППУ",
      "фіксуємо ціну в договорі",
    ],
  },
  {
    title: "Професійне напилення ППУ",
    desc: "Ми використовуємо:",
    bullets: [
      "сертифіковані матеріали",
      "професійне обладнання високого тиску",
      "досвідчені бригади",
    ],
  },
  {
    title: "Швидкі терміни виконання",
    desc: "",
    bullets: [
      "більшість об’єктів — 1 робочий день",
      "без демонтажу та будівельного сміття",
      "приміщення готове до використання одразу після робіт",
    ],
  },
  {
    title: "Контроль якості та гарантія",
    desc: "Ми контролюємо кожен етап утеплення:",
    bullets: [
      "перевіряємо рівномірність шару",
      "дотримуємось технології напилення",
      "надаємо гарантію на роботи",
    ],
  },
  {
    title: "Післясервісна підтримка",
    desc: "Після завершення робіт:",
    bullets: [
      "надаємо рекомендації з експлуатації",
      "консультуємо з подальших питань",
      "працюємо на результат і відгуки клієнтів",
    ],
  },
];

export default function OurApproachDribbbleStyle() {
  return (
    <section className="mx-4 sm:mx-8 my-10">
      <div className="rounded-[48px] bg-[#f5f2ea] px-6 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          {/* title */}
          <h2 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-[0.95]">
            Наш підхід
            <br />
            до роботи
          </h2>

          {/* intro */}
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-black/70 leading-relaxed">
            Ми спеціалізуємося на утепленні пінополіуретаном (ППУ) та працюємо
            за чітким і прозорим алгоритмом. Наш підхід гарантує якісний
            результат, довговічне утеплення та реальну економію для клієнта.
          </p>

          {/* divider */}
          <div className="mt-10 h-px w-full bg-black/15" />

          {/* rows */}
          <div className="divide-y divide-black/15">
            {approach.map((item, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[80px_320px_1fr] md:gap-10"
                >
                  {/* number */}
                  <div className="text-sm font-semibold text-black/70">
                    {num}
                  </div>

                  {/* title */}
                  <div className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-black">
                    {item.title}
                  </div>

                  {/* content */}
                  <div className="max-w-2xl">
                    {item.desc ? (
                      <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                        {item.desc}
                      </p>
                    ) : null}

                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00a0e3]" />
                          <span className="text-sm sm:text-base text-black/70 leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* bottom divider */}
          <div className="h-px w-full bg-black/15" />
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    id: 1,
    value: "Прозора ціна",
    description:
      "Точний прорахунок і фіксація вартості в договорі — без прихованих витрат.",
    // линия нормальная (полная)
    lineTop: "top-2",
    lineBottom: "bottom-3",
    valuePos: "row-start-1 self-start",
    descPos: "row-start-3 self-end", // низ общий
  },
  {
    id: 2,
    value: "Швидке виконання",
    description:
      "Швидко напилюємо ППУ та закриваємо об’єкт у найкоротші терміни (залежно від площі).",
    // убрать линию в пустом верхе (как зачеркнуто) -> старт ниже
    lineTop: "top-24 lg:top-28",
    lineBottom: "bottom-3",
    valuePos: "row-start-2 self-center", // значение в середине
    descPos: "row-start-3 self-end", // НИЗ как у первых трех
  },
  {
    id: 3,
    value: "Довгий ефект",
    description:
      "Безшовний шар тримає тепло, не боїться вологи та служить роками без просідання.",
    lineTop: "top-2",
    lineBottom: "bottom-3",
    valuePos: "row-start-1 self-start",
    descPos: "row-start-3 self-end", // низ общий
  },
  {
    id: 4,
    value: "Економія тепла",
    description:
      "Менше тепловтрат — менші рахунки за опалення та кондиціювання.",
    // линия между 3 и 4 не должна уходить в самый низ (у тебя там зачеркнуто) -> обрезаем снизу
    lineTop: "top-2",
    lineBottom: "bottom-16 lg:bottom-20",
    valuePos: "row-start-1 self-start",
    descPos: "row-start-2 self-center", // описание в середине (как у тебя на скрине)
    showRightLine: false, // убираем правую линию (зачеркнуто справа)
  },
];

export default function Problems() {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 max-w-xl pl-8">
            Чому нам довіряють?
          </h3>
        </div>

        <div className="mt-20">
          <dl className="grid grid-cols-1 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={stat.id} className="relative px-6 lg:px-10">
                {/* левая вертикальная линия (настраиваемая) */}
                <span
                  aria-hidden="true"
                  className={`absolute left-3 w-px bg-gray-300 ${stat.lineTop} ${stat.lineBottom}`}
                />

                {/* правая линия (если нужна) */}
                {idx === stats.length - 1 && stat.showRightLine !== false && (
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-2 bottom-3 w-px bg-gray-300"
                  />
                )}

                {/* ВАЖНО: одинаковая высота блоков + 3 строки */}
                <div className="grid min-h-65  grid-rows-[auto_40px_auto] lg:grid-rows-[auto_20px_auto] gap-y-2">
                  <dd
                    className={`text-3xl font-semibold tracking-tight text-gray-900 leading-none ${stat.valuePos}`}
                  >
                    {stat.value}
                  </dd>

                  <p
                    className={`text-sm leading-6 text-gray-700 max-w-60 ${stat.descPos}`}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

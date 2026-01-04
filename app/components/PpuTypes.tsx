const sprayPpu = [
  {
    type: "Відкритопористий ППУ (м’який)",
    density: "~ 8–15 кг/м³",
    usage: [
      "стіни та перекриття",
      "мансарди та горища",
      "міжповерхові конструкції",
    ],
    benefits: [
      "легкий і еластичний",
      "добре поглинає шум",
      "економічний варіант утеплення",
    ],
    note: "Для внутрішнього утеплення. Не рекомендується для зон з високою вологістю без додаткового захисту.",
  },
  {
    type: "Закритопористий ППУ (жорсткий)",
    density: "~ 30–60 кг/м³",
    usage: [
      "дахи та покрівлі",
      "фасади",
      "підвали",
      "ангари, склади, холодильні камери",
    ],
    benefits: [
      "низька теплопровідність",
      "висока міцність",
      "водонепроникність",
      "додаткова гідроізоляція",
    ],
    note: "Для зовнішнього та технічного утеплення. Це найпопулярніший варіант для професійного напилення ППУ.",
  },
];

const pourPpu = [
  {
    type: "Ливарний (ін’єкційний) ППУ",
    density: "~ 40–80 кг/м³",
    usage: [
      "заповнення порожнин у стінах",
      "утеплення сендвіч-панелей",
      "заливки форм та конструкцій",
    ],
    benefits: [
      "рівномірне заповнення пустот",
      "висока адгезія до поверхонь",
      "відсутність містків холоду",
    ],
    note: "Використовується коли потрібне рівномірне заповнення без містків холоду.",
  },
];

function Bullets({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function PpuTable({ title, description, rows }) {
  return (
    <section className="px-6 mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT: фиксированная ширина, чтобы таблицы начинались одинаково */}
        <div className="w-full lg:w-[320px] lg:shrink-0">
          <h2 className="text-xl uppercase font-semibold text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:flex-1 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow sm:rounded-lg ring-1 ring-black/5">
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  {/* одинаковые ширины колонок для всех таблиц */}
                  <colgroup>
                    <col className="w-[22%]" />
                    <col className="w-[12%]" />
                    <col className="w-[22%]" />
                    <col className="w-[20%]" />
                    <col className="w-[24%]" />
                  </colgroup>

                  <thead className="bg-gray-50/50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Вид
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Щільність
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Застосовується
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Переваги
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Примітка
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    {rows.map((row) => (
                      <tr key={row.type}>
                        <td className="py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 align-top break-words">
                          {row.type}
                        </td>

                        {/* плотность лучше не переносить */}
                        <td className="px-3 py-4 text-sm text-gray-500 align-top whitespace-nowrap">
                          {row.density}
                        </td>

                        <td className="px-3 py-4 text-sm text-gray-500 align-top break-words">
                          <Bullets items={row.usage} />
                        </td>

                        <td className="px-3 py-4 text-sm text-gray-500 align-top break-words">
                          <Bullets items={row.benefits} />
                        </td>

                        <td className="px-3 py-4 text-sm text-gray-500 align-top break-words sm:pr-6">
                          {row.note ? (
                            row.note
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                * Щільність вказана орієнтовно і може відрізнятися залежно від
                системи та умов нанесення.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PpuTypes() {
  return (
    <div className="space-y-14 overflow-hidden bg-blue-50 rounded-t-[90px] py-16 mx-6">
      <div className=" border-b border-gray-200 pb-6 max-w-7xl mx-auto gap-12 px-6">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 text-balance max-w-lg ">
          Види пінополіуретану
        </h2>
        <p className="mt-8  text-balance text-lg font-medium text-gray-500 font-balance w-2xl">
          Пінополіуретан (ППУ) — універсальний тепло- та гідроізоляційний матеріал,
          який застосовується для напилення та заливки.
          <span className="block ">
            <span className="font-bold text-gray-900 ">
              Вибір типу ППУ залежить від щільності, умов експлуатації та типу
              об’єкта.
            </span>
          </span>
        </p>
      </div>

      <PpuTable
        title="ППУ для напилення"
        description="Типи пінополіуретану для внутрішнього та зовнішнього утеплення (підбір залежить від задачі та умов)."
        rows={sprayPpu}
      />

      <PpuTable
        title="ППУ для заливки"
        description="Ін’єкційні/ливарні системи для заповнення порожнин та форм."
        rows={pourPpu}
      />
    </div>
  );
}

//   <section className="px-4 sm:px-6 lg:px-8">
//         <div className="overflow-hidden shadow  outline-1 outline-black/5 sm:rounded-lg bg-white">
//           <div className="p-6 sm:p-8">
//             <h3 className="text-base font-semibold text-gray-900">
//               Як вибрати ППУ для утеплення
//             </h3>
//             <p className="mt-2 text-sm text-gray-700">
//               Вибір типу пінополіуретану залежить від:
//             </p>
//             <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700">
//               <li>умов вологості</li>
//               <li>навантажень на поверхню</li>
//               <li>необхідної теплоізоляції</li>
//               <li>бюджету проєкту</li>
//             </ul>
//             <p className="mt-4 text-sm text-gray-700">
//               Наші спеціалісти допоможуть підібрати оптимальний тип ППУ для
//               вашого об’єкта.
//             </p>
//           </div>
//         </div>
//       </section>

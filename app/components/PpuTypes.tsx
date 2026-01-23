import React from "react";

type PpuRow = {
  type: string;
  density: string;
  usage: string[];
  benefits: string[];
  note?: string;
};

const sprayPpu: PpuRow[] = [
  {
    type: "Відкритопористий пінополіуретан (м’який)",
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
    type: "Закритопористий пінополіуретан (жорсткий)",
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
    note: "Для зовнішнього та технічного утеплення. Найпопулярніший варіант для професійного напилення.",
  },
];

const pourPpu: PpuRow[] = [
  {
    type: "Ливарний (ін’єкційний) пінополіуретан",
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

type BulletsProps = {
  items: string[];
};

function Bullets({ items }: BulletsProps) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function MobileRowCard({ row }: { row: PpuRow }) {
  return (
    <div className="rounded-xl bg-white shadow ring-1 ring-black/5">
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900">
              {row.type}
            </div>
            <div className="mt-1 text-xs text-gray-500">{row.density}</div>
          </div>
          <span className="shrink-0 rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">
            Щільність
          </span>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-700">
              Застосовується
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <Bullets items={row.usage} />
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-700">
              Переваги
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <Bullets items={row.benefits} />
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-700">
              Примітка
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {row.note ? row.note : <span className="text-gray-400">—</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type PpuTableProps<T extends PpuRow> = {
  title: string;
  description: string;
  rows: T[];
};

function PpuTable<T extends PpuRow>({
  title,
  description,
  rows,
}: PpuTableProps<T>) {
  return (
    <section className="px-6 mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT */}
        <div className="w-full lg:w-[320px] lg:shrink-0">
          <h2 className="lg:text-xl uppercase font-semibold text-gray-900  hyphens-auto text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:flex-1">
          {/* Mobile: cards */}
          <div className="lg:hidden space-y-4">
            {rows.map((row) => (
              <MobileRowCard key={row.type} row={row} />
            ))}
            <div className="text-xs text-gray-500">
              * Щільність вказана орієнтовно і може відрізнятися залежно від
              системи та умов нанесення.
            </div>
          </div>

          {/* Desktop: table */}
          <div className="lg:block flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow sm:rounded-lg ring-1 ring-black/5">
                  <table className="min-w-full table-fixed divide-y divide-gray-300">
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
                          <td className="py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 align-top wrap-break-word">
                            {row.type}
                          </td>

                          <td className="px-3 py-4 text-sm text-gray-500 align-top whitespace-nowrap">
                            {row.density}
                          </td>

                          <td className="px-3 py-4 text-sm text-gray-500 align-top wrap-break-word">
                            <Bullets items={row.usage} />
                          </td>

                          <td className="px-3 py-4 text-sm text-gray-500 align-top wrap-break-word">
                            <Bullets items={row.benefits} />
                          </td>

                          <td className="px-3 py-4 text-sm text-gray-500 align-top wrap-break-word sm:pr-6">
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
      </div>
    </section>
  );
}

export default function PpuTypes() {
  return (
    <div className="space-y-14 overflow-hidden bg-blue-50 lg:rounded-t-[90px] py-16 lg:mx-6">
      <div className="border-b border-gray-200 pb-6 max-w-7xl mx-auto gap-12 px-6">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 text-balance max-w-lg">
          Види пінополіуретану
        </h2>
        <p className="mt-8 text-balance text-lg font-medium text-gray-500 font-balance max-w-2xl">
          Пінополіуретан — універсальний тепло- та гідроізоляційний матеріал,
          який застосовується для напилення та заливки.
          <span className="block">
            <span className="font-bold text-gray-900">
              Вибір типу залежить від щільності, умов експлуатації та типу
              об’єкта.
            </span>
          </span>
        </p>
      </div>

      <PpuTable<PpuRow>
        title="Пінополіуретан для напилення"
        description="Типи для внутрішнього та зовнішнього утеплення (підбір залежить від задачі та умов)."
        rows={sprayPpu}
      />

      <PpuTable<PpuRow>
        title="Пінополіуретан для заливки"
        description="Ін’єкційні/ливарні системи для заповнення порожнин та форм."
        rows={pourPpu}
      />
    </div>
  );
}

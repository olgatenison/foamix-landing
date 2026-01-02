import Image from "next/image";
import {
  CurrencyDollarIcon,
  Squares2X2Icon,
  BoltIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  BeakerIcon,
  SpeakerWaveIcon,
  SparklesIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const secondaryFeatures = [
  {
    name: "Економія на опаленні до 50%",
    description:
      "ППУ суттєво зменшує тепловтрати будинку. Завдяки високій теплоізоляції витрати на опалення взимку та охолодження влітку помітно знижуються.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Безшовне утеплення без містків холоду",
    description:
      "Напилення ППУ створює суцільний теплоізоляційний шар без швів, тріщин і зазорів — мінімум втрат тепла.",
    icon: Squares2X2Icon,
  },
  {
    name: "Швидкий монтаж утеплення ППУ",
    description:
      "Терміни залежать від площі та складності об’єкта, але зазвичай роботи займають від 1 дня — без демонтажу та «мокрих» процесів.",
    icon: BoltIcon,
  },
  {
    name: "Підходить для різних типів об’єктів",
    description:
      "Застосовується для будинків і котеджів, дахів та мансард, перекриттів, ангарів і складів, а також промислових і комерційних приміщень.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Довговічність — понад 30 років",
    description:
      "ППУ не просідає, не кришиться та зберігає теплоізоляційні властивості десятиліттями.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Захист від вологи та плісняви",
    description:
      "Жорсткий пінополіуретан майже не вбирає воду, зменшує ризик конденсату та перешкоджає розвитку грибка.",
    icon: BeakerIcon,
  },
  {
    name: "Додаткова звукоізоляція",
    description:
      "Шар ППУ допомагає знизити рівень шуму з вулиці та з сусідніх приміщень.",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Безпечний та екологічний матеріал",
    description:
      "Після застигання ППУ не виділяє шкідливих речовин і підходить для використання в житлових приміщеннях.",
    icon: SparklesIcon,
  },
  {
    name: "Вигідніше за традиційні утеплювачі",
    description:
      "Один шар ППУ може замінити кілька шарів мінеральної вати чи пінопласту — менше витрат і стабільніший результат.",
    icon: ScaleIcon,
  },
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 text-balance text-center max-w-2xl mx-auto">
          Утеплення пінополіуретаном{" "}
          <span className="text-[#00a0e3]">це вигідно</span>
        </h2>

        <div className="mx-auto mt-16 max-w-2xl  lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {secondaryFeatures.map((feature) => (
              <div key={feature.name} className="flex items-start gap-x-4">
                <div className="shrink-0 size-10 rounded-full bg-[#00a0e3] flex items-center justify-center">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 text-white"
                  />
                </div>

                <div>
                  <div className="font-semibold text-gray-900 pb-2">
                    {feature.name}
                  </div>
                  <div className="text-gray-500 text-base border-t pt-2 border-gray-300 ">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

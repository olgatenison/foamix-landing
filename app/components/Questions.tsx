const faqs = [
  {
    question: "Яка оптимальна товщина ППУ для фасаду?",
    answer:
      "Утепление пенопластом  Утепление минватой  Декоративная штукатурка/покраска  Ремонт/подготовка основания (если делаете)  Для кого: частные дома, многоэтажки/ОСББ, коммерция",
  },
  {
    question: "Чи можна напилювати взимку/в дощ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Який фініш краще для захисту від УФ?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Чи “дихає” фасад після ППУ?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Скільки служить ППУ?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Чи можна на дерево/цеглу/бетон/метал?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Questions() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24  lg:px-8 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              FAQ (питання-відповіді)
            </h2>
            <p className="mt-4 text-pretty text-base/7 text-gray-600">
              Утепление пенопластом Утепление минватой Декоративная
              штукатурка/покраска Ремонт/подготовка основания (если делаете) Для
              кого: частные дома, многоэтажки/ОСББ, коммерция
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base/7 font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

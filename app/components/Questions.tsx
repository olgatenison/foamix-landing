const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "Утепление пенопластом  Утепление минватой  Декоративная штукатурка/покраска  Ремонт/подготовка основания (если делаете)  Для кого: частные дома, многоэтажки/ОСББ, коммерция",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
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
              Услуги / что делаетем
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

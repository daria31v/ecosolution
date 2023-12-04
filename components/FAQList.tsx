import Image from "next/image";

const questions = [
  {
    id: 1,
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    icon: "/svg/minus.svg",
  },
  {
    id: 2,
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer: "",
    icon: "/svg/add.svg",
  },
  {
    id: 3,
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer: "",
    icon: "/svg/add.svg",
  },
  {
    id: 4,
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer: "",
    icon: "/svg/add.svg",
  },
  {
    id: 5,
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer: "",
    icon: "/svg/add.svg",
  },
];
interface Question {
  id: number;
  question: string;
  answer?: string;
  icon: string;
}

const FAQList = () => {
  return (
    <>
      <ul className="max-w-[320px] xl:max-w-[342px] 2xl:max-w-[596px]">
        {questions.map((question) => (
          <li key={question.id} className="text-justify">
            <div className="h-[1px] bg-secondary w-full mb-4"></div>
            <div className="grid grid-cols-6">
              <div>
                <Image src={question.icon} alt="icon" width={16} height={16} />
              </div>
              <div className="mb-6 col-span-5">
                <p className="regular-18">{question.question}</p>
                <p className="regular-14">{question.answer}</p>
              </div>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FAQList;

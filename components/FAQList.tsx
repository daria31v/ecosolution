import Image from "next/image";

const questions = [
  {
    id: 1,
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    icon: "/images/svg/minus.svg",
  },
  {
    id: 2,
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer: "",
    icon: "/images/svg/add.svg",
  },
  {
    id: 3,
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer: "",
    icon: "/images/svg/add.svg",
  },
  {
    id: 4,
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer: "",
    icon: "/images/svg/add.svg",
  },
  {
    id: 5,
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer: "",
    icon: "/images/svg/add.svg",
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
      <ul>
        {questions.map((question) => (
            <li key={question.id} className="">
              <div className="h-[1px] bg-secondary w-full mb-4"></div>
            <div className="">
              <Image src={question.icon} alt="icon" width={16} height={16} />
            </div>
            <div>
              <p className="regular-18">{question.question}</p>
              <p className="regular-14">{question.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};


export default FAQList;

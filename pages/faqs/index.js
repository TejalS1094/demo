import Button from "@/components/button";
import CurvedHeader from "@/components/curved-header";
import Footer from "@/components/footer";
import Question from "@/components/question";
import { useEffect, useMemo, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const FaqPage = () => {
  const [questionStates, setQuestionStates] = useState([]);
  // Memoize the faqData array
  const faqData = useMemo(
    () => [
      {
        question: "How does crowdfunding work?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "What happens if a campaign doesn't reach its funding goal?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "How do I know if a campaign is legitimate?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "What happens after a campaign reaches its funding goal?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
      {
        question: "Can I cancel my pledge or request a refund?",
        answer:
          "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
      },
    ],
    []
  );

  useEffect(() => {
    setQuestionStates(faqData.map(() => false));
  }, [faqData]);

  const toggleAnswer = (index) => {
    const newQuestionStates = [...questionStates];
    newQuestionStates[index] = !newQuestionStates[index];
    setQuestionStates(newQuestionStates);
  };

  return (
    <>
      <div>
        <CurvedHeader>
          <div className="text-center mb-7  md:mb-9 lg:mb-12">
            <div className="max-w-[671px] w-full">
              <h1 className="font-nunito font-black text-3xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[75px] mb-5">{`Questions? Look Here.`}</h1>
              <p className="font-nunito text-sm md:text-lg lg:text-xl">{`Whether you’re a first-time backer or a seasoned creator, find answers to common questions about running and backing a campaign.`}</p>
            </div>
          </div>
          <div className="artist-blank-header"></div>
        </CurvedHeader>
      </div>

      <section className="px-5 md:px-0 mt-16 md:mt-32 ">
        <Tabs className="max-w-[720px] w-full  m-auto">
          <div className="flex overflow-x-auto mb-8 md:mb-12">
            <TabList className="flex flex-row gap-5 border-b-2 flex-shrink-0 overflow-x-auto">
              {[
                "Starting a campaign",
                "Supporting a project",
                "Shipping & Handling",
                "Returns & Refunds",
              ].map((item, index) => (
                <Tab
                  key={item}
                  className="font-nunito font-semibold text-sm text-[#404040] focus:border-b-2 focus:border-[#171717] transition-all pb-3"
                >
                  {item}
                </Tab>
              ))}
            </TabList>
          </div>

          {[
            "Starting a campaign",
            "Supporting a project",
            "Shipping & Handling",
            "Returns & Refunds",
          ].map((item, index) => (
            <TabPanel key={index}>
              <div className="flex flex-col">
                <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px]  ">
                  {item}
                </h1>
              </div>
              <div className="mt-7 lg:mt-[30px] max-w-[672px] w-full">
                {faqData.map((item, index) => (
                  <Question
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isAnswerShown={questionStates[index]}
                    toggleAnswer={() => toggleAnswer(index)}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </section>
      <section className="px-5 md:px-0 mt-16 md:mt-32">
        <div className="max-w-[671px] w-full m-auto flex flex-col justify-center items-center">
          <h2 className="font-nunito font-black text-3xl  lg:text-5xl lg:leading-[30px] mb-[18px]">
            Still have questions?
          </h2>

          <p className="font-nunito text-sm md:text-base text-[#171717] text-center max-w-[576px]">
            Exclusive solution for creators to receive donations, recurring
            supports via membership and sell anything to the fans.
          </p>
          <div className="md:max-w-[225px] w-full mt-6 md:mt-12 ">
            <Button bg="yellow">Speak to us directly</Button>
          </div>
        </div>
      </section>
      <section className=" mt-16 md:mt-32">
        <Footer />
      </section>
    </>
  );
};

export default FaqPage;

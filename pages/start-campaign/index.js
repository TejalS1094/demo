/* eslint-disable react/no-unescaped-entities */
import BlankToy from "@/components/blank-toy";
import Button from "@/components/button";
import CurvedHeader from "@/components/curved-header";
import FooterWIthCampaign from "@/components/footer-campaign";
import Question from "@/components/question";
import StartCampaignForm from "@/components/start-camapign-form";
import TopBorderCard from "@/components/top-border-card";
import { useState, useEffect, useMemo } from "react";

const StartCampaignPage = () => {
  const [questionStates, setQuestionStates] = useState([]);
  const data = [
    {
      id: "1",
      title: "Upload & Create",
      description:
        "Select available vinyl platform, download the line drawing and submit artwork.",
      border_color: "border-[#22C55E]",
      bg_color: "bg-[#22C55E]",
      text_color: "text-[#D2F4DF]",
    },
    {
      id: "2",
      title: "Campaign Creation",
      description:
        "Once artwork is approved your campaign will be created by Kick Punch Bite and you will be notified when your campaign will go live.",
      border_color: "border-[#C026D3]",
      bg_color: "bg-[#C026D3]",
      text_color: "text-[#F3D3F6]",
    },
    {
      id: "3",
      title: "Live Campaigns & Fulfillment.",
      description:
        "Your campaign is live.  If funding is met then your collaboration will go into production and be directly delivered to your supporters.",
      border_color: "border-[#0EA5E9]",
      bg_color: "bg-[#0EA5E9]",
      text_color: "text-[#CEEDFB]",
    },
  ];

  const dontionData = [
    {
      id: "1",
      color: "green",
      content:
        "We don't label them as <strong>'customers'</strong>. They are your valued supporters.",
    },
    {
      id: "2",
      color: "pink",
      content:
        "You can <strong>reach out to a real person </strong>, when want advice to get started quickly.",
    },
    {
      id: "3",
      color: "blue",
      content:
        "Rest assured your <strong>supporters</strong> get receive the highest quality product on the market.",
    },
  ];

  const socialMedia = [
    {
      id: "1",
      icon: "/instagram.svg",
      name: "instagram",
    },
    {
      id: "2",
      icon: "/youtube.svg",
      name: "youtube",
    },
    {
      id: "3",
      icon: "/tiktok.svg",
      name: "tiktok",
    },
    {
      id: "4",
      icon: "/twitter.svg",
      name: "x",
    },
  ];

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
    <div>
      <CurvedHeader>
        <div className="text-center mb-14">
          <h1 className="font-nunito font-black text-5xl leading-[60px]  md:text-[56px] md:leading-[65px] lg:text-6xl  lg:leading-[75px] text-[#171717]">
            Earn Money with Your Art!
          </h1>
          <div className="">
            <p className="font-nunito text-lg lg:text-xl text-[#171717] mt-5 text-center max-w-[671px] m-auto">
              Ready to turn your creativity into income? Simply fill out this
              short form, and we’ll help you launch a successful crowdfunding
              campaign.
            </p>
          </div>
        </div>
        <div
          style={{
            height: "165px",
            width: "100%",
          }}
        ></div>
      </CurvedHeader>
      <div className="-mt-[165px] flex justify-center px-5 lg:px-0">
        <div className="bg-container-black rounded-[36px]">
          <StartCampaignForm />
        </div>
      </div>

      <section className=" max-w-[1024px] flex flex-col lg:flex-row gap-[66px] px-6  m-auto mt-32">
        <div className="lg:max-w-[536px] w-full">
          <h1 className="font-nunito font-bold text-3xl  md:text-5xl mb-6">
            Kick Punch Bite provides the support you need every step of the way
          </h1>
          <p className="font-nunito text-base md:text-lg text-[#404040]">
            Earn income by collaborating with a premium vinyl toy platform
            produced by Kick Punch Bite through pre-sales and crowdfunding. You
            don't spend a dime, make money, and your supporters get a limited
            edition toy with your art!
          </p>
        </div>

        <div className="pl-5 lg:pl-0">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative bg-[#FFFCEC] border-l-4 ${item.border_color} mb-7 w-full rounded-[22px]   py-[22px] pl-[42px] pr-[31px]`}
              >
                <div
                  className={`absolute top-3 left-[-26px] w-[47px] h-[45px] font-nunito font-bold rounded-full px-4 py-1.5 ${item.bg_color} text-2xl ${item.text_color}`}
                >
                  {item.id}
                </div>
                <h3 className="font-nunito font-bold text-xl lg:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="font-nunito text-sm lg:text-base text-[#404040]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <BlankToy />

      <section className="px-5 max-w-[1024px] m-auto flex flex-col justify-center items-center md:mt-32">
        <div className="lg:px-10 w-full text-center">
          <h1 className="font-nunito font-bold text-4xl  lg:text-5xl lg:leading-[60px] ">
            Create another way to earn income & give supporters something new.
          </h1>
          <p className="font-nunito text-base lg:text-lg text-[#404040] mt-5 ">
            Kick Punch Bite is here to help make it happen!
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 md:flex-row">
          {dontionData.map((item, index) => {
            return (
              <div key={item.id}>
                <TopBorderCard color={item.color}>{item.content}</TopBorderCard>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-5 lg:px-0 my-32">
        <div className="max-w-[769px] w-full m-auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] mb-5">
              Frequently Asked Questions
            </h1>

            <p className="font-nunito text-base lg:text-lg text-[#404040] max-w-[576px]">
              Exclusive solution for creators to receive donations, recurring
              supports via membership and sell anything to the fans
            </p>
          </div>

          <div className="mt-8 lg:mt-16 max-w-[672px] w-full">
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

          {/* <div className="w-[176px]">
          <Button>View all FAQs</Button>
        </div> */}
        </div>
      </section>

      <FooterWIthCampaign />
    </div>
  );
};

export default StartCampaignPage;

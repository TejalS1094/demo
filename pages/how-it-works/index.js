/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button";
import CurvedHeader from "@/components/curved-header";
import FooterWIthCampaign from "@/components/footer-campaign";
import Question from "@/components/question";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";


const HowItWorksPage = () => {
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
const faqData = useMemo(() => [
    {
      question: "How does crowdfunding work?",
      answer: "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
    },
    {
      question: "What happens if a campaign doesn't reach its funding goal?",
      answer: "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
    },
    {
      question: "How do I know if a campaign is legitimate?",
      answer: "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
    },
    {
      question: "What happens after a campaign reaches its funding goal?",
      answer: "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
    },
    {
      question: "Can I cancel my pledge or request a refund?",
      answer: "Crowdfunding is a collective effort where individuals (backers) contribute funds to support projects initiated by creators.",
    },
  ], []);

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
      <CurvedHeader>
        <div className="text-center ">
          <div className="max-w-[671px] w-full">
            <h1 className="font-nunito font-black text-3xl md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[75px] mb-5">{`How It Works`}</h1>
            <p className="font-nunito text-sm md:text-lg lg:text-xl">{`Exclusive solution for creators to receive donations, recurring supports via membership and sell anything to the fans.`}</p>
          </div>
        </div>
        <div className="artist-blank-header"></div>
      </CurvedHeader>

      {/* section 2 */}
      <section className="px-5 my-16 md:mb-32 md:mt-24">
        <div className="flex flex-col md:flex-row items-center gap-9 md:gap-[84px] max-w-[1024px] m-auto ">
          {/* text container */}
          <div>
            <h2 className="font-nunito font-extrabold text-3xl lg:text-5xl lg:leading-[60px] text-[#171717] capitalize ">
              First Off, What Are Our Campaigns All About?
            </h2>
            <p className="font-nunito text-base lg:text-lg text-[#404040] mt-4 lg:mt-6">
              Are you an artist with a creative project that needs funding? Look
              no further – our platform is here to bring your vision to life.
              <br></br>
              <br></br>
              Crowdfunding offers artists like you the opportunity to showcase
              your work, engage with your community, and secure the resources
              needed to turn your ideas into reality.
            </p>
          </div>
          {/* image container */}
          <div className="lg:max-w-[404px] w-full lg:h-[539px] ">
            <Image src="/how-it-works.png" width={404} height={539} alt="how-it-works-image" className="w-full h-full"/>
          </div>
        </div>
      </section>
      {/* section 3 */}
       <section className="max-w-[1024px] w-full flex flex-col lg:flex-row gap-[66px] px-5 lg:px-0 m-auto">
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
          <div className="mt-10 lg:mt-14 lg:max-w-[160px]">
            <Button bg="yellow">Get started </Button>
          </div>
        </div>

        <div className="pl-5 lg:pl-0">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative bg-[#FFFCEC] border-l-4 ${item.border_color} mb-7 w-full rounded-[22px]   py-[22px] pl-[42px] pr-[31px] last:mb-0`}
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

      {/* section 4 video section */}
        <section className="max-w-[1024px] m-auto flex flex-col justify-center items-center px-5 lg:px-0 mt-14 lg:mt-32">
        <div className="max-w-[769px] text-center">
          <h1 className="font-nunito font-bold  text-xl  md:text-3xl lg:text-5xl mb-5">
            Curious About How We Turn Ideas Into Final Product?
          </h1>
          <p className="font-nunito text-base lg:text-lg  text-[#404040]">
            Watch our visual history video!
          </p>
        </div>

        <div className="mt-11 lg:mt-16 relative flex justify-center items-center">
          <Image src="/video.png" width={1024} height={489} alt="vidoe-img" />
          <div className="absolute w-[40px] h-[40px] lg:w-[92px] lg:h-[92px]">
            <Image
              src="/play-btn-img.svg"
              width={92}
              height={92}
              alt="play-btn-img"
            />
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full mt-8 lg:mt-12 mb-24 lg:mb-32">
          <div className="bg-image rounded-[28px] md:w-1/2 lg:py-10 lg:px-16 p-5 py-7">
            <h3 className="font-inter font-bold text-2xl lg:text-3xl">
              Inspired to create?
            </h3>
            <p className="font-nunito text-base text-[#404040] mt-3.5 mb-8">
              Your idea could be funded next!
            </p>
            <div className="lg:w-[240px]">
              <Button>Start a Campaign</Button>
            </div>
          </div>
          <div className="bg-image rounded-[28px] md:w-1/2 lg:py-10 lg:px-16 p-5 py-7">
            <h3 className="font-inter font-bold text-2xl lg:text-3xl">
              Excited to collect?
            </h3>
            <p className="font-nunito text-base text-[#404040] mt-3.5 mb-8">
              Show your love to creators!
            </p>
            <div className="lg:w-[240px]">
              <Button>Support artists</Button>
            </div>
          </div>
        </div> */}
      </section>

      {/* FAQs section */}


      <section className="px-5 lg:px-0 my-14 lg:my-32">
        <div className="max-w-[769px] m-auto flex flex-col justify-center items-center">

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

        <div className="w-[176px]">
          <Button>View all FAQs</Button>
        </div>
        </div>
      </section>
      
      {/* footer section */}
      <section>
        <FooterWIthCampaign/>
      </section>
    </>
  );
};

export default HowItWorksPage;
